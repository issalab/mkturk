import firebase from 'firebase/app';
import { matrix, subtract, filter, dotDivide, dotMultiply, round } from 'mathjs';
import Tabulator from 'tabulator-tables';
import * as d3 from 'd3';
import 'jsoneditor/dist/jsoneditor.min.css';
import JSONEditor, { JSONEditorOptions } from 'jsoneditor';



const db = firebase.firestore();

export class Fireplace {
  public queryStartDateValue: number;
  public queryEndDateValue: number;
  public tLastQuery: number;
  public tQueryInterval: number;
  private tableElem: HTMLDivElement;
  private editorElem: HTMLDivElement;
  private performancePlotElem: HTMLDivElement;
  private table: Tabulator;
  private viewer: JSONEditor;
  private taskDocs: any;

  constructor() {
    this.queryEndDateValue = new Date(new Date().toLocaleDateString()).valueOf() 
      + (24 * 3600 * 1000);
    this.queryStartDateValue = this.queryEndDateValue - (7 * 24 * 3600 * 1000);
    this.tQueryInterval = 20 * 1000;
    this.tLastQuery = 0;
    this.taskDocs = {
      dates: this.getDateArray(this.queryStartDateValue, this.queryEndDateValue)
    };
  }

  public async getAgentList() {
    
    let stuff = await db.collection('marmosets').get().then(snapshot => {
      return snapshot.docs.map(x => x.data());
    });

    return stuff;

  }

  public async queryCallback(snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) {
    if (this.tLastQuery === 0 || Date.now() - this.tLastQuery > this.tQueryInterval) {
      this.processData(snapshot);
    }
  }

  private processData(snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) {
    
    console.log('snapshot', snapshot);
    let data: any[] = [];
    let agentList: string[] = [];
    snapshot.forEach(doc => {
      let d = doc.data();
      let agentIdx = agentList.indexOf(d.Agent);
      let dateString = new Date(d.CurrentDateValue).toLocaleDateString();
      let r: math.Matrix;
      let c: math.Matrix;
      let numCorrect: number;
      let numTrials: number;
      let tLastTrial: number;

      if (Array.isArray(d.Response)) {
        r = matrix(d.Response);
        c = matrix(d.CorrectItem);
        numCorrect = (<math.Matrix>filter(subtract(r, c) as math.Matrix, el => el == 0)).size()[0];
        numTrials = d.Response.length;
        tLastTrial = d.CurrentDateValue + d.StartTime[d.StartTime.length - 1];
      } else {
        return; // skip to next iteration since d.Response is undefined
      }

      if (agentIdx > -1) {
        let dateIdx = data[agentIdx]['dates'].indexOf(dateString);
        if (dateIdx > -1) {
          data[agentIdx]['numTrials'][dateIdx] += numTrials;
          data[agentIdx]['numCorrect'][dateIdx] += numCorrect;
          data[agentIdx]['tLastTrial'] = tLastTrial;
          this.taskDocs[d.Agent][dateString].push(d);
          // console.log('case 1:', d.Agent, dateString);
        } else {
          data[agentIdx]['dates'].push(dateString);
          data[agentIdx]['numTrials'].push(numTrials);
          data[agentIdx]['numCorrect'].push(numCorrect);
          data[agentIdx]['tLastTrial'] = tLastTrial;
          this.taskDocs[d.Agent][dateString] = [d];
          // console.log('case 2:', d.Agent, dateString);
        }
      } else {
        agentList.push(d.Agent);
        data.push({
          agent: d.Agent,
          dates: [dateString],
          numTrials: [numTrials],
          numCorrect: [numCorrect],
          tLastTrial: tLastTrial
        });
        console.log(this.taskDocs);
        this.taskDocs[d.Agent] = {};
        this.taskDocs[d.Agent][dateString] = [d];
        // console.log('case 3:', d.Agent, dateString);
      }
    });

    if (this.tLastQuery == 0) {
      console.log(this.table);
      this.constructTable(data);
      this.tLastQuery = Date.now();
    } else {
      this.updateTable(data);
      this.tLastQuery = Date.now();
    }
    
  }

  private constructTable(data: any[]) {

    let buildStuff = (d: any) => {
      this.buildPlots(d);
    }

    let returnTaskDocs = () => {
      return this.taskDocs;
    }

    let viewer = this.viewer;

    function numTrialMutator(value: any, data: any, type: any, params: any, component: any) {
      if (params.range == 24) {
        let dateStringToday = new Date().toLocaleDateString();
        let idx = data['dates'].indexOf(dateStringToday);
        if (idx > -1) {
          return data['numTrials'][idx];
        } else {
          return 0;
        }
      } else if (params.range == 48) {
        if (data['numTrials'].slice(1).slice(-2).length < 2) {
          return NaN;
        } else {
          let numTrialsSum = (
            data['numTrials'].slice(1).slice(-2).reduce((a: number, b: number) => a + b, 0)
          );
          return numTrialsSum / 2;
        }
      }
    }

    function pctCorrectMutator(value: any, data: any, type: any, params: any, component: any) {
      if (params.range == 24) {
        let dateStringToday = new Date().toLocaleDateString();
        let idx = data['dates'].indexOf(dateStringToday);
        if (idx > -1) {
          return Math.round(data['numCorrect'][idx] / data['numTrials'][idx] * 100);
        } else {
          return 0;
        }
      } else if (params.range == 48) {
        if (data['numCorrect'].slice(1).slice(-2).length < 2) {
          return NaN;
        } else {
          let numCorrectSum = (
            data['numCorrect'].slice(1).slice(-2).reduce((a: number, b: number) => a + b, 0)
          );
          let numTrialsSum = (
            data['numTrials'].slice(1).slice(-2).reduce((a: number, b: number) => a + b, 0)
          );
          return Math.round(numCorrectSum / numTrialsSum * 100);
        }
      }
    }

    function tSinceLastTrial(value: any, data: any, type: any, params: any, component: any) {
      let dtt = Date.now();
      console.log(dtt);
      return Math.round((dtt - data.tLastTrial) / 1000 / 60);
    }

    function tLastTrialFormat(cell: Tabulator.CellComponent) {
      if (cell.getValue() <= 5) {
        cell.getElement().style.background = '#198754';
        cell.getElement().style.color = 'white';
      } else if (cell.getValue() > 5 && cell.getValue() < 60) {
        cell.getElement().style.background = '#dc3545';
        cell.getElement().style.color = 'white';
      }
      return cell.getValue();
    }

    let viewerElem = document.querySelector('#taskdoc-viewer') as HTMLDivElement;

    this.table = new Tabulator(this.tableElem, {
      data: data,
      cellVertAlign: 'middle',
      layout: 'fitData',
      columns: [
        {
          title: 'Agent',
          field: 'agent'
        },
        {
          title: '% (today)',
          field: 'pctCorrectToday',
          mutator: pctCorrectMutator,
          mutatorParams: { range: 24 },
          hozAlign: 'right'
        },
        {
          title: 'n (today)',
          field: 'numTrialsToday',
          mutator: numTrialMutator,
          mutatorParams: { range: 24 },
          hozAlign: 'right'
        },
        {
          title: '% (-2d)',
          field: 'pctCorrectAvg',
          mutator: pctCorrectMutator,
          mutatorParams: { range: 48 },
          hozAlign: 'right'
        },
        {
          title: 'n (-2d)',
          field: 'numTrialsAvg',
          mutator: numTrialMutator,
          mutatorParams: { range: 48 },
          hozAlign: 'right'
        },
        {
          title: 'tLast',
          field: 'tSinceLastTrial',
          mutator: tSinceLastTrial,
          formatter: tLastTrialFormat,
          hozAlign: 'right'
        }
        
        
      ],
      tooltips: true,
      dataLoaded: function(data) {
        buildStuff(data);
        // let tmp = returnTaskDocs();
        
      },
      rowClick(evt, row) {
        let taskDocs = returnTaskDocs();
        console.log('taskDocs:', taskDocs);
        console.log('row clicked:', taskDocs[row.getData().agent]);

        let taskDocsKeys = Object.keys(taskDocs[row.getData().agent]);
        let mostRecentDate = taskDocsKeys[taskDocsKeys.length - 1];
        console.log(mostRecentDate);
        let recentTaskDocs = taskDocs[row.getData().agent][mostRecentDate];
        console.log(recentTaskDocs);
        

        // Need this try-catch block because JSONEditor.get() throws an error if no data is loaded
        try {
          viewer.get(); 
          viewer.update(recentTaskDocs[recentTaskDocs.length - 1]);
        } catch {
          let options: JSONEditorOptions = {
            modes: ['tree' as 'tree', 'code' as 'code'],
            sortObjectKeys: true
          };
          viewer = new JSONEditor(viewerElem, options, recentTaskDocs[recentTaskDocs.length - 1]);  
        }
        
        

      }
    });
  }

  private updateTable(data: any[]) {
    this.table.replaceData(data);
  }

  public registerDomElement(type: string, elem: HTMLDivElement) {
    if (type === 'table') {
      console.log(elem);
      this.tableElem = elem;
    } else if (type === 'editor') {
      this.editorElem = elem;
    } else if (type === 'perf-plot') {
      this.performancePlotElem = elem;
    }
  }

  private buildPlots(data: any[]) {

    // each row holds one agent's data
    let queryDateRangeArrayStr = this.getDateArray(this.queryStartDateValue, this.queryEndDateValue);
    console.log(queryDateRangeArrayStr);
    data.forEach(row => {
      row['performance'] = (
        round(dotMultiply(100, dotDivide(row['numCorrect'], row['numTrials'])) as math.MathArray)
      );
      row['_performance'] = queryDateRangeArrayStr.map((date: string) => {
        if (row['dates'].includes(date)) {
          return row['performance'].shift();
        } else {
          return 0;
        }
      });
      console.log(row['_performance']);
      row['_numTrials'] = queryDateRangeArrayStr.map((date: string) => {
        if (row['dates'].includes(date)) {
          return row['numTrials'].shift();
        } else {
          return 0;
        }
      });
    });
    
    let queryDateRangeArray = queryDateRangeArrayStr.map(d3.timeParse('%m/%d/%Y'));

    let d3Data = {
      y: 'Number of Trials',
      series: data,
      dates: queryDateRangeArray
    }
    
    let svgNumTrials: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
    let svgPerformance: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
    let width = (<HTMLElement>d3.select('#num-trials-plot').node()).clientWidth;
    let height = (<HTMLElement>d3.select('#num-trials-plot').node()).clientHeight;
    let margin = { top: 20, bottom: 30, right: 150, left: 50, legendOffset: 30 };

    let x = d3.scaleTime()
      .domain(<[Date, Date]>d3.extent(d3Data.dates, function (d) { return d }))
      .range([margin.left, width - margin.right]);

    let yNumTrials = d3.scaleLinear()
      .domain([0, <any>d3.max(d3Data.series, d => d3.max(d['_numTrials']))])
      .range([height - margin.bottom, margin.top]);

    let yPerformance = d3.scaleLinear()
      .domain([0, 100])
      .range([height - margin.bottom, margin.top]);
    
    if (d3.select('svg').size() == 0) {
      svgNumTrials = (
        d3.select('#num-trials-plot')
          .append('svg')
          .attr('id', 'num-trials-svg')
          .attr('style', 'width: 100%; height: 100%')
      );
      svgNumTrials
        .attr('viewBox', `0 0 ${width} ${height}`)
        .style("overflow", "visible");

      svgPerformance = (
        d3.select('#performance-plot')
          .append('svg')
          .attr('id', 'performance-svg')
          .attr('style', 'width: 100%; height: 100%')
          .attr('viewBox', `0 0 ${width} ${height}`)
          .style("overflow", "visible")
      );

      let xAxis = (g: any) => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .style('font-size', '15px')
        .call(d3.axisBottom<Date>(x).ticks(7).tickSizeOuter(0).tickFormat(d3.timeFormat('%a')));

      let yAxisNumTrials = (g: any) => g
        .attr("transform", `translate(${margin.left}, 0)`)
        .style('font-size', 14)
        .call(d3.axisLeft(yNumTrials).tickFormat(d3.format('')).tickSize(-(width - margin.left - margin.right)))
        .call((g: any) => g.select(".domain").remove());
        // .call((g: any) => g.select(".tick:last-of-type text").clone()
        //     .attr("x", 3)
        //     .attr("text-anchor", "start")
        //     .attr("font-weight", "bold")
        //     .text(d3Data.y));

      let yAxisPerformance = (g: any) => g
        .attr('transform', `translate(${margin.left}, 0)`)
        .style('font-size', 14)
        .call(d3.axisLeft(yPerformance).ticks(5).tickFormat(d3.format('')).tickSize(-(width - margin.left - margin.right)))
        .call((g: any) => g.select('.domain').remove());
        // .call((g: any) => g.select(".tick:last-of-type text").clone()
        // .attr("x", 3)
        //     .attr("text-anchor", "start")
        //     .attr("font-weight", "bold")
        //     .text('Performance'));

      svgNumTrials.append('g')
        .call(xAxis);
  
      svgNumTrials.append('g')
        .call(yAxisNumTrials);

      svgPerformance.append('g')
        .call(xAxis);

      svgPerformance.append('g')
        .call(yAxisPerformance);
    } else {
      svgNumTrials = d3.select('#num-trials-svg');
      svgPerformance = d3.select('#performance-svg');
      // d3.selectAll('path.line').remove();
      d3.selectAll('path').remove();
      d3.selectAll('g.dot').remove();
    }

    let linesNumTrials = d3.line<any>()
      .defined(d => !isNaN(d))
      .x((d, i) => x(d3Data.dates[i] as Date))
      .y((d, i) => yNumTrials(d));

    let linesPerformance = d3.line<any>()
      .defined(d => !isNaN(d))
      .x((d, i) => x(d3Data.dates[i] as Date))
      .y((d, i) => yPerformance(d));

    console.log(d3Data);
    

    let color = d3.scaleOrdinal(d3.schemeTableau10);

    let numTrialsPath = (
      svgNumTrials.append('g')
        .attr("fill", "none")
        .attr("stroke-width", 2)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
      .selectAll("path")
      .data(d3Data.series)
      .join('path')
        .style('mix-blend-mode', 'multiply')
        .attr('d', d => linesNumTrials(d['_numTrials']))
        .attr('stroke', (d, i) => color(d.agent))
        .attr('id', (d, i) => d.agent)
    );

    let performancePath = (
      svgPerformance.append('g')
          .attr('fill', 'none')
          .attr('stroke-width', 2)
          .attr('stroke-linejoin', 'round')
          .attr('stroke-linecap', 'round')
        .selectAll('path')
        .data(d3Data.series)
        .join('path')
          // .style('mix-blend-mode', 'multiply')
          .attr('d', d => linesPerformance(d['_performance']))
          .attr('stroke', (d, i) => color(d.agent))
          .attr('id', (d, i) => d.agent)
    );

    d3Data.series.forEach((d: any, i: number) => {

      svgPerformance.append('g')
        .attr('class', 'legend')
        .append('circle')
          .attr('cx', width - margin.right + margin.legendOffset)
          .attr('cy', () => { return margin.top + i * 25})
          .attr('r', 7)
          .style('fill', () => { return color(d.agent); });
      // svgPerformance
      //   .append('circle')
      //     .attr('cx', width - margin.right + margin.legendOffset)
      //     .attr('cy', () => { return margin.top + i * 25})
      //     .attr('r', 7)
      //     .style('fill', () => { return color(d.agent); });
      svgPerformance.select('g.legend')
        .append('text')
          .attr('x', width - margin.right + margin.legendOffset + 20)
          .attr('y', () => { return margin.top + i * 25; })
          .style('fill', () => { return color(d.agent); })
          .text(() => { return d.agent; })
          .attr('text-anchor', 'left')
          .attr('alignment-baseline', 'middle');
      // svgPerformance
      //   .append('text')
      //     .attr('x', width - margin.right + margin.legendOffset + 20)
      //     .attr('y', () => { return margin.top + i * 25; })
      //     .style('fill', () => { return color(d.agent); })
      //     .text(() => { return d.agent; })
      //     .attr('text-anchor', 'left')
      //     .attr('alignment-baseline', 'middle');

      svgNumTrials
        .append('circle')
          .attr('cx', width - margin.right + margin.legendOffset)
          .attr('cy', () => { return margin.top + i * 25})
          .attr('r', 7)
          .style('fill', () => { return color(d.agent); });

      svgNumTrials
        .append('text')
          .attr('x', width - margin.right + margin.legendOffset+ 20)
          .attr('y', () => { return margin.top + i * 25; })
          .style('fill', () => { return color(d.agent); })
          .text(() => { return d.agent; })
          .attr('text-anchor', 'left')
          .attr('alignment-baseline', 'middle');
    });
    
    
    const numTrialsAction = (svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any> , path: d3.Selection<SVGPathElement, any, SVGElement, unknown>) => {
      
      let pathClicked = false;
      let dotClicked = false;
      let clickedDot: any;

      svg
        .on('mousemove', (e) => {
          let target = d3.select(e.target).node();
          if (!pathClicked) {
            if (target.nodeName == 'path') {
              path.attr('stroke-width', d => {
                return d.agent === target.id ? 4 : 2;
              });
            } else {
              path.attr('stroke-width', 2);
            }
          } else {
            if (target.nodeName == 'circle' && dotClicked == true) {     
              if (target != clickedDot) {
                console.log('target:', target, 'clickedDot:', clickedDot);
                d3.select(target)
                .attr('r', 4.5)
                .attr('fill', 'black');
              }
            } else if (target.nodeName == 'circle' && dotClicked == false) {
              d3.select(target)
                .attr('r', 4.5);
              // svg.selectAll('g.dot circle').attr('r', 4.5);
            } else if (target.nodeName != 'circle' && dotClicked == false) {
              d3.selectAll('g.dot circle').attr('r', 2.5);
            } else if (target.nodeName != 'circle' && dotClicked == true) {
              d3.selectAll('g.dot circle').attr('r', 2.5);
              d3.select(clickedDot)
                .attr('r', 4.5)
                .attr('fill', 'red');
            }
          }
        })
        .on('click', (e) => {
          let target = d3.select(e.target).node();
          if (!pathClicked) {
            if (target.nodeName == 'path') {
              path.attr('stroke', d => {
                return d.agent === target.id ? color(d.agent) : '#ddd';
              }).filter(d => d.agent === target.id).raise();
              path.attr('stroke-width', d => {
                return d.agent === target.id ? 4 : 2;
              });

              let row = d3Data.series.map((row: any) => {
                if (row.agent == target.id) {
                  return row;
                }
              }).filter(row => row)[0];

              row['_numTrials'].forEach((numTrials: number, idx: number) => {
                console.log('numTrials:', numTrials, 'idx:', idx);
                let dot = svg.append('g')
                  .attr('display', null)
                  .attr('class', 'dot');

                dot.append('circle')
                    .attr('r', 2.5);

                dot.append('text')
                    .attr('font-family', 'sans-serif')
                    .attr('font-size', 10)
                    .attr('text-anchor', 'middle')
                    .attr('y', -8);
                dot.attr('transform', `translate(${x(d3Data.dates[idx] as Date)}, ${yNumTrials(numTrials)})`);
                dot.select('text').text(`${row['agent']}, ${numTrials}`);


              });
              

              pathClicked = true;
            } 
          } else {
            if (target.nodeName == 'circle' && dotClicked == false) {
              let pointer = d3.pointer(e, svg);
              let dateClicked = x.invert(pointer[0]);
              let agent = path.node()?.parentNode?.lastElementChild?.id as string;
              let agentTaskDocs = this.taskDocs[agent][dateClicked.toLocaleDateString()];
              let lastTaskDoc = agentTaskDocs[agentTaskDocs.length - 1];
              d3.select(target)
                .attr('r', 4.5)
                .attr('fill', 'red');
              dotClicked = true;
              clickedDot = target;

              try {
                this.viewer.get();
                this.viewer.update(lastTaskDoc);
              } catch {
                let options: JSONEditorOptions = {
                  modes: ['tree' as 'tree', 'code' as 'code'],
                  sortObjectKeys: true
                };
                let viewerElem = document.querySelector('#taskdoc-viewer') as HTMLDivElement;
                this.viewer = new JSONEditor(viewerElem, options, lastTaskDoc);
              }
            } else if (target.nodeName == 'circle' && dotClicked == true) {
              if (target == clickedDot) {
                d3.select(target)
                  .attr('r', 2.5)
                  .attr('fill', 'black');
                dotClicked = false;
              } else {
                let pointer = d3.pointer(e, svg);
                let dateClicked = x.invert(pointer[0]);
                let agent = path.node()?.parentNode?.lastElementChild?.id as string;
                let agentTaskDocs = this.taskDocs[agent][dateClicked.toLocaleDateString()];
                let lastTaskDoc = agentTaskDocs[agentTaskDocs.length - 1];
                d3.select(target)
                  .attr('r', 4.5)
                  .attr('fill', 'red');
                d3.select(clickedDot)
                  .attr('r', 2.5)
                  .attr('fill', 'black');
                clickedDot = target;
                this.viewer.update(lastTaskDoc);
              }
            } else {
              path
              .attr('stroke', d => color(d.agent))
              .attr('stroke-width', 2);

              svg.selectAll('g.dot').remove();
              pathClicked = false;
              dotClicked = false;
            }
          }
        });
      
    }

    const performanceAction = (svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any> , path: d3.Selection<SVGPathElement, any, SVGElement, unknown>) => {
      
      let pathClicked = false;
      let dotClicked = false;
      let clickedDot: any;

      svg
        .on('mousemove', (e) => {
          let target = d3.select(e.target).node();
          if (!pathClicked) {
            if (target.nodeName == 'path') {
              path.attr('stroke-width', d => {
                return d.agent === target.id ? 4 : 2;
              });
            } else {
              path.attr('stroke-width', 2);
            }
          } else {
            if (target.nodeName == 'circle' && dotClicked == true) {     
              if (target != clickedDot) {
                console.log('target:', target, 'clickedDot:', clickedDot);
                d3.select(target)
                .attr('r', 4.5)
                .attr('fill', 'black');
              }
            } else if (target.nodeName == 'circle' && dotClicked == false) {
              d3.select(target)
                .attr('r', 4.5);
              // svg.selectAll('g.dot circle').attr('r', 4.5);
            } else if (target.nodeName != 'circle' && dotClicked == false) {
              d3.selectAll('g.dot circle').attr('r', 2.5);
            } else if (target.nodeName != 'circle' && dotClicked == true) {
              d3.selectAll('g.dot circle').attr('r', 2.5);
              d3.select(clickedDot)
                .attr('r', 4.5)
                .attr('fill', 'red');
            }
          }
        })
        .on('click', (e) => {
          let target = d3.select(e.target).node();
          if (!pathClicked) {
            if (target.nodeName == 'path') {
              path.attr('stroke', d => {
                return d.agent === target.id ? color(d.agent) : '#ddd';
              }).filter(d => d.agent === target.id).raise();
              path.attr('stroke-width', d => {
                return d.agent === target.id ? 4 : 2;
              });
              // path.style('mix-blend-mode', d => {
              //   return d.agent === target.id ? 'overlay' : 'multiply'
              // });

              let row = d3Data.series.map((row: any) => {
                if (row.agent == target.id) {
                  return row;
                }
              }).filter(row => row)[0];

              row['_performance'].forEach((performance: number, idx: number) => {
                let dot = svg.append('g')
                  .attr('display', null)
                  .attr('class', 'dot');

                dot.append('circle')
                    .attr('r', 2.5);

                dot.append('text')
                    .attr('font-family', 'sans-serif')
                    .attr('font-size', 10)
                    .attr('text-anchor', 'middle')
                    .attr('y', -8);
                dot.attr('transform', `translate(${x(d3Data.dates[idx] as Date)}, ${yPerformance(performance)})`);
                dot.select('text').text(`${row['agent']}, ${performance}%`);


              });
              

              pathClicked = true;
            } 
            
          } else {
            if (target.nodeName == 'circle' && dotClicked == false) {
              let pointer = d3.pointer(e, svg);
              let dateClicked = x.invert(pointer[0]);
              let agent = path.node()?.parentNode?.lastElementChild?.id as string;
              let agentTaskDocs = this.taskDocs[agent][dateClicked.toLocaleDateString()];
              let lastTaskDoc = agentTaskDocs[agentTaskDocs.length - 1];
              d3.select(target)
                .attr('r', 4.5)
                .attr('fill', 'red');
              dotClicked = true;
              clickedDot = target;

              try {
                this.viewer.get();
                this.viewer.update(lastTaskDoc);
              } catch {
                let options: JSONEditorOptions = {
                  modes: ['tree' as 'tree', 'code' as 'code'],
                  sortObjectKeys: true
                };
                let viewerElem = document.querySelector('#taskdoc-viewer') as HTMLDivElement;
                this.viewer = new JSONEditor(viewerElem, options, lastTaskDoc);
              }
  
            } else if (target.nodeName == 'circle' && dotClicked == true) {
              if (target == clickedDot) {
                d3.select(target)
                  .attr('r', 2.5)
                  .attr('fill', 'black');
                dotClicked = false;
              } else {
                let pointer = d3.pointer(e, svg);
                let dateClicked = x.invert(pointer[0]);
                let agent = path.node()?.parentNode?.lastElementChild?.id as string;
                let agentTaskDocs = this.taskDocs[agent][dateClicked.toLocaleDateString()];
                let lastTaskDoc = agentTaskDocs[agentTaskDocs.length - 1];
                d3.select(target)
                  .attr('r', 4.5)
                  .attr('fill', 'red');
                d3.select(clickedDot)
                  .attr('r', 2.5)
                  .attr('fill', 'black');
                clickedDot = target;
                this.viewer.update(lastTaskDoc);
              }
              
            } else {
              path
              .attr('stroke', d => color(d.agent))
              .attr('stroke-width', 2);
              // .style('mix-blend-mode', 'multiply');

              svg.selectAll('g.dot').remove();
              pathClicked = false;
              dotClicked = false;
            }
          }
        });

      // path
      //   .on('click', pathClick);

      // const dot = svg.append('g')
      //   .attr('display', 'none');

      // dot.append('circle')
      //   .attr('r', 2.5);

      // dot.append("text")
      //   .attr("font-family", "sans-serif")
      //   .attr("font-size", 10)
      //   .attr("text-anchor", "middle")
      //   .attr("y", -8);

      
    }

    // svgNumTrials.call(hover);
    // svgNumTrials.call(hover, svgNumTrials.selectAll('path.line'));
    // if (d3.select('svg').size() == 0) {
    //   svgNumTrials.call(hover, path);
    // }
    svgNumTrials.call(numTrialsAction, numTrialsPath);
    svgPerformance.call(performanceAction, performancePath);
    
    // return svg.node();
    
    // console.log(svg);
  }

  private getDateArray(start: number, end: number) {
    let arr = [];
    let dt = new Date(start);
    while (dt.valueOf() < end) {
      arr.push(dt.toLocaleDateString());
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  }



  
}