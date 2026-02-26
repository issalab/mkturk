// import * as firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/storage';

import { getApp } from 'firebase/app';
import { getFirestore,
  Timestamp,
  doc,
  collection,
  Query,
  query,
  where,
} from 'firebase/firestore';
import {
  FirebaseStorage,
  StorageReference,
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
} from 'firebase/storage';

import JSONEditor from 'jsoneditor';
import cloneDeep from 'lodash.cloneDeep';
import { Utils } from './utils';

type div = HTMLDivElement;
// type Timestamp = firebase.firestore.Timestamp;
// const db = firebase.firestore();
const db = getFirestore(getApp());
// const storage = firebase.storage();
const storage = getStorage(getApp());
const utils = new Utils();

export class Mkcolony {

  public clTableDiv: div;
  public clWtCard: div;
  public clWtPlotDiv: div;
  public clWtDateFilterDiv: div;
  public clFlPlotDiv: div;
  public clFlDateFilterDiv: div;
  
  public agBioCard: div;
  public agBioDiv: div;
  public agWtCard: div;
  public agWtPlotDiv: div;
  public agFlCard: div;
  public agFlPlotDiv: div;
  private agJsonCard: div;
  private agJsonDiv: div;
  private agJson: JSONEditor;

  public cleanData: any;
  public vizData: any[];
  public vizDataDic: any;

  private clTable: Tabulator;

  private previewBtn: HTMLButtonElement;
  private saveBtn: HTMLButtonElement;
  private agSlt: HTMLSelectElement;
  private fldSlt: HTMLSelectElement;
  
  private entryJson: JSONEditor;
  private logbook: Tabulator;
  private logsheet: Tabulator;

  private logsheetAgentSelector: HTMLSelectElement;
  private logsheetMonthSelector: HTMLSelectElement;

  


  constructor() {
    google.charts.load('current', {packages: ['corechart', 'controls']});

    this.clTableDiv = document.querySelector('#colony-table') as div;
    this.clWtCard = document.querySelector('#colony-weight-card') as div;
    this.clWtPlotDiv = document.querySelector('#colony-weight-plot') as div;
    this.clWtDateFilterDiv
      = document.querySelector('#colony-weight-date-filter') as div;
    this.clFlPlotDiv = document.querySelector('#colony-fluid-plot') as div;
    this.clFlDateFilterDiv
      = document.querySelector('#colony-fluid-date-filter') as div;

    this.agBioCard = document.querySelector('#agent-bio-card') as div;
    this.agBioDiv = document.querySelector('#agent-bio') as div;
    this.agWtCard = document.querySelector('#agent-weight-card') as div;

    this.agJsonCard = document.querySelector('#agent-json-card') as div;
    this.agJsonDiv = document.querySelector('#agent-json') as div;

    this.saveBtn = document.querySelector('#save-btn') as HTMLButtonElement;

    this.agSlt 
      = document.querySelector('#agent-selector') as HTMLSelectElement;
    this.fldSlt
      = document.querySelector('#field-selector') as HTMLSelectElement;
    this.cleanData = {};
    this.vizData = [];

    this.logsheetAgentSelector = document.querySelector('#logsheet-agent-selector') as HTMLSelectElement;
    this.logsheetMonthSelector = document.querySelector('#logsheet-month-selector') as HTMLSelectElement;
    
    
    this.saveBtnAction();
    this.selectorAction();
    this.setupEntryCard();
    this.viewBtnAction();

    this.submitLogsheetAction();

  }

  public deleteAll() {
    this.clTable.clearData();
  }

  public viewBtnAction() {
    let logsheetSearchDiv = document.querySelector('#logsheet-search-div') as div;
    // this.logsheetMonthSelector.value = 
    logsheetSearchDiv.addEventListener('change', async (ev: Event) => {
      let logsheetDiv = document.querySelector('#logsheet') as div;
      let agent = this.logsheetAgentSelector.value;
      let month = Number(this.logsheetMonthSelector.value);
      let logsheetData: any = [];
      let agentData = await utils.getDocumentData('mkdailydata', agent);

      let timeOption = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      let dateOption = {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      };

      if (agentData) {
        agentData.date.forEach((item: any, idx: number) => {
          agentData!.date[idx] = item!.toDate();
          if (agentData!.date[idx].getMonth() == month) {
            try {
              agentData!.time_on[idx] = agentData!.time_on[idx].toDate().toLocaleTimeString('en-US', timeOption);
            } catch {

            }

            try {
              agentData!.time_off[idx] = agentData!.time_off[idx].toDate().toLocaleTimeString('en-US', timeOption);
            } catch {

            }

            let tmp = {
              date: agentData!.date[idx],
              timestamp: agentData!.timestamp[idx],
              time_off: agentData!.time_off[idx],
              time_on: agentData!.time_on[idx],
              implant_cleaned: agentData!.implant_cleaned[idx],
              reward: agentData!.reward[idx],
              supplement: agentData!.supplement[idx],
              comments: agentData!.comments[idx],
              initial: agentData!.initials[idx],
              weight: agentData!.weight[idx]
            };
            logsheetData.push(tmp);
          }
        });
      }

      let logsheet = new Tabulator(logsheetDiv, {
        data: await logsheetData,
        index: 'timestamp',
        initialSort: [
          { column: 'timestamp', dir: 'asc' }
        ],
        layout: 'fitColumns',
        columns: [
          {title: 'Date', field: 'date', formatter: timestampFormatter},
          {title: 'Weight', field: 'weight'},
          {title: 'Reward (mL)', field: 'reward'},
          {title: 'Supplement (mL)', field: 'supplement'},
          {title: 'Implant Cleaned', field: 'implant_cleaned'},
          {title: 'Time ON', field: 'time_on'},
          {title: 'Time OFF', field: 'time_off'},
          {title: 'Comments', field: 'comments'},
          {title: 'Initials', field: 'initial'}
        ],
      });

      function timestampFormatter(cell: any) {
        // return cell.getValue().toLocaleDateString([], dateOption);
        return cell.getValue().getDate();
      }
    });  
  }

  public selectorAction() {
    let field = document.querySelector('#field-selector') as HTMLSelectElement;
    let notes = document.querySelector('#field-notes-entry') as HTMLDivElement;
    let fieldValueInput = document.querySelector('#field-value') as HTMLInputElement;
    let entryBox = document.querySelector('#field-value-entry') as HTMLDivElement;

    field.addEventListener('change', (ev: Event) => {
      if (field.value === 'lab_notes' || field.value === 'vet_notes') {
        notes.style.display = 'none';
        // fieldValueInput.pattern = '';
        if (fieldValueInput.hasAttribute('pattern')) {
          fieldValueInput.removeAttribute('pattern');
        }
      }
    });
  }

  public saveBtnAction() {
    this.saveBtn.addEventListener('click', async (ev: Event) => {
      let agent = document.querySelector('#agent-selector') as HTMLSelectElement;
      let field = document.querySelector('#field-selector') as HTMLSelectElement;
      let value = document.querySelector('#field-value') as HTMLInputElement;
      let notes = document.querySelector('#entry-notes') as HTMLInputElement;

      // sanity check
      if (agent.value === 'Agent') {
        alert('Please select an agent');
        return;
      } else if (field.value === 'Field') {
        alert('Please select a field');
        return;
      }

      if (field.value === 'lab_notes') {
        let data = this.cleanData.marmosetDataDic[agent.value];
        data.lab_notes.push(value.value);
        data.lab_notes_dates.push(new Date().toJSON());
        let dataToServer = this.dateToTimestamp(data);
        db.collection('marmosets').doc(data.name).set(dataToServer).then(() => {
          console.log('[Document Updated]: marmoset.' + data.name);
          alert('Document Updated');
          this.entryJson.set(data);
        }).catch(e => {
          alert('Entry Failed');
          console.error('[Document Update Failed]', 'marmoset.' + data.name)
          console.error('[ERROR]:', e);
        });
      } else if (field.value === 'vet_notes') {
        let data = this.cleanData.marmosetDataDic[agent.value];
        data.vet_notes.push(value.value);
        data.vet_notes_dates.push(new Date().toJSON());
        let dataToServer = this.dateToTimestamp(data);
        db.collection('marmosets').doc(data.name).set(dataToServer).then(() => {
          console.log('[Document Updated]: marmoset.' + data.name);
          alert('Document Updated');
          this.entryJson.set(data);
        }).catch(e => {
          alert('Entry Failed');
          console.error('[Document Update Failed]', 'marmoset.' + data.name)
          console.error('[ERROR]:', e);
        });
      }
    });
  }

  public setupEntryCard() {
    let entryJsonDiv = document.querySelector('#entry-json') as div;
    this.entryJson = new JSONEditor(entryJsonDiv, {mode: "tree" ,sortObjectKeys: true});
  }

  public viewAgentBioBtnAction() {
    let btn = document.querySelector('#view-agent-btn') as HTMLButtonElement;
    let name = document.querySelector('#rfid-name-tag')?.textContent;
    btn.addEventListener('click', (ev: Event) => {
      ev.preventDefault();
      
    });
  }

  public populateTable(data: any[]) {
    let clTableCard 
      = document.querySelector('#colony-table-card') as div;
    let colonyTab 
      = document.querySelector('#colony-tab') as HTMLElement;
    let agentTab
      = document.querySelector('#agent-tab') as HTMLElement;
    let colonyTabBar
      = document.querySelector('#colony-tab-bar') as HTMLElement;
    let agentTabBar
      = document.querySelector('#agent-tab-bar') as HTMLElement;

    let grid
      = document.querySelector('#colony-weight-grid') as div;
    grid.style.minHeight = String(colonyTab.clientHeight / 2) + 'px';

    clTableCard.style.maxHeight = String(colonyTab.clientHeight / 2) + 'px';
    clTableCard.style.minHeight = String(colonyTab.clientHeight / 2) + 'px';

    this.clTable = new Tabulator(this.clTableDiv, {
      data: this.vizData,
      index: 'name',
      layout: 'fitColumns',
      initialSort: [
        { column: 'name', dir: 'asc' }
      ],
      columns: [
        {title: 'Name', field: 'name'},
        {title: 'Age', field: 'ageStr'},
        {title: 'Sex', field: 'sex'},
        {title: 'DOB', field: 'birthdate'},
        {title: 'RFID', field: 'rfid'},
        {title: 'CWA', field: 'cwa'},
        {title: 'Breeding', field: 'breeding'},
        {title: 'Cage Mate', field: 'grouphoused_values'},
        {title: 'Weighed', field: 'last_weight_date', formatter:function(cell: any){
          let weighedDate = new Date(cell.getValue()).getTime();
          let today = new Date().getTime();
          let diff = Math.round((today-weighedDate) / (1000 * 60 * 60 * 24));

          if (cell.getData().cwa == 1) {
            if (diff >= 21) {
              cell.getElement().style.backgroundColor = 'Red';
            } else if (diff >= 7) {
              cell.getElement().style.backgroundColor = 'Yellow';
            } else {
              cell.getElement().style.backgroundColor = '#00FF00';
            }
          } else if (cell.getData().cwa == 0) {
            if (diff >= 21) {
              cell.getElement().style.backgroundColor = 'Red';
            } else if (diff >= 14) {
              cell.getElement().style.backgroundColor = 'Yellow';
            } else {
              cell.getElement().style.backgroundColor = '#00FF00';
            }
          }
          return cell.getValue();
        }},
        {title: 'Weight', field: 'last_weight_value', formatter:function(cell: any){
          try {
            let recentWt = cell.getValue();
            let baselineWt = cell.getData().baseline_weight_values.slice(-1)[0];
            let softBound = baselineWt * 0.95;
            let hardBound = baselineWt * 0.92;

            if (recentWt < hardBound) {
              cell.getElement().style.backgroundColor = 'Red';
            } else if (recentWt < softBound && recentWt >= hardBound) {
              cell.getElement().style.backgroundColor = 'Yellow';
            } else {
              cell.getElement().style.backgroundColor = '#00FF00';
            }
          } catch {
            console.error('[' + cell.getData().name + '] has no baseline weight data');
          }
          return cell.getValue();
        }},
        {title: 'Fluid Date', field: 'last_fluid_date', formatter: function(cell: any){
          try {
            if (cell.getData().cwa) {

              function isSameDay(first: any, second: any) {
                return first.getFullYear() === second.getFullYear() &&
                  first.getMonth() === second.getMonth() &&
                  first.getDate() === second.getDate();
              }

              function isYesterday(date: any) {
                let ref = new Date(new Date().setDate(new Date().getDate() - 1));
                return isSameDay(ref, date);
              }

              let lastFluidDate: any = new Date(cell.getValue() + ' EST');
              let now = new Date();
              if (isSameDay(now, lastFluidDate)) {
                cell.getElement().style.backgroundColor = '#00FF00';
              } else if (isYesterday(lastFluidDate)) {
                cell.getElement().style.backgroundColor = 'Orange';
              } else {
                cell.getElement().style.backgroundColor = 'Red';
              }

              return cell.getValue();
            } else {
              return cell.getValue();
            }
          } catch {
            console.log('[' + cell.getData().name + '] is not CWA monkey');
          }
        }},
        {title: 'Fluid This Week', field: 'last_fluid_value', formatter: function(cell: any){
          try {
            let baselineFl = cell.getData().baseline_fluid_values.slice(-1)[0];
            let hardBound = baselineFl * 0.5;
            
            function countFromMonday(day: number) {
              if (day == 0) {
                return 6;
              } else {
                return day - 1;
              }
            }

            function isSameDay(first: any, second: any) {
              return first.getFullYear() === second.getFullYear() &&
                first.getMonth() === second.getMonth() &&
                first.getDate() === second.getDate();
            }


            let lastFluidDate: any = cell.getData().last_fluid_date + 'T05:00:00.000Z';
            lastFluidDate = new Date(lastFluidDate);
            let today = new Date();
            let fluidThisWeek = 0;
            let daysFromMonday = countFromMonday(today.getDay());
            console.log(cell.getData().name, daysFromMonday);

            if (isSameDay(lastFluidDate, today)) {
              for (let i = 0; i <= daysFromMonday; i++) {
                let targetDate = new Date(new Date().setDate(new Date().getDate() - i));
                let idx = cell.getData().fluid_dates.findIndex((row: any) => {
                  let rowDate = new Date(row + ' EST');
                  return isSameDay(targetDate, rowDate);
                });
                if (idx != -1) {
                  fluidThisWeek += cell.getData().fluid_values[idx];
                }
              }
            } else {
              for (let i = 1; i <= daysFromMonday; i++) {
                let targetDate = new Date(new Date().setDate(new Date().getDate() - i));
                let idx = cell.getData().fluid_dates.findIndex((row: any) => {
                  let rowDate = new Date(row + ' EST');
                  return isSameDay(targetDate, rowDate);
                });
                console.log('agent:', cell.getData().name, 'else idx', idx);
                if (idx != -1) {
                  fluidThisWeek += cell.getData().fluid_values[idx];
                }
              }
            }

            let dailyAverage = fluidThisWeek / (daysFromMonday + 1);
            if (dailyAverage < hardBound) {
              cell.getElement().style.backgroundColor = 'Red';
            } else {
              cell.getElement().style.backgroundColor = '#00FF00';
            }

            // deal with precision
            let fluidBoundToday = String((daysFromMonday + 1) * hardBound);
            fluidBoundToday = parseFloat(fluidBoundToday).toPrecision(4);
            let fluidThisWeekStr = String(fluidThisWeek) + '(' + fluidBoundToday +')'

            return fluidThisWeekStr;

          } catch {
            console.error('[' + cell.getData().name + '] has no baseline fluid data');
            return cell.getValue();
          }
        }},
      ],
      rowDblClick: (ev: Event, row) => {
        ev.stopPropagation();
        agentTab.classList.add('is-active');
        colonyTab.classList.remove('is-active');
        agentTabBar.classList.add('is-active');
        colonyTabBar.classList.remove('is-active');
        this.populateAgentTab(row.getData().name)
      },
      rowDblTap: (ev: Event, row) => {
        ev.stopPropagation();
        agentTab.classList.add('is-active');
        colonyTab.classList.remove('is-active');
        agentTabBar.classList.add('is-active');
        colonyTabBar.classList.remove('is-active');
        this.populateAgentTab(row.getData().name)
      }
    });

    document.addEventListener('RFID', (ev: any) => {
      ev.preventDefault();
      let rfidAgent = document.querySelector('#rfid-name-tag') as HTMLSpanElement;
      let rfidTag = document.querySelector('#rfid-rfid-tag') as HTMLSpanElement;
      let viewAgentBtn = document.querySelector('#view-agent-btn') as HTMLButtonElement;

      this.vizData.forEach(row => {
        if (row.rfid != undefined && row.rfid == ev.detail) {
          let rfidSpanBox = document.querySelector('#rfid-span-box') as div;
          let attr: any[] = [];
          attr.push(row.name);
          attr.push(row.rfid);
          attr.push(row.last_fluid_date + '; ' + String(row.last_fluid_value) + 'mL');
          attr.push(row.ageStr);
          attr.push(row.cwa);
          attr.push(row.last_weight_date + '; ' + String(row.last_weight_value) + 'g');
          attr = attr.reverse();
          console.log(rfidSpanBox.childNodes);
        
          rfidSpanBox.childNodes.forEach((node: any) => {
            try {
              if (node.id.includes('tag')) {
                node.textContent = attr.pop();
              }
            } catch {
            }
         });
          viewAgentBtn.disabled = false;
          return;
        }
      });

      if (rfidAgent.textContent != null && ev.detail) {
        return;
      } else {
        rfidTag.textContent = ev.detail;
        rfidAgent.textContent = 'Not In List'
      }
    });


    let btn = document.querySelector('#view-agent-btn') as HTMLButtonElement;
    btn.addEventListener('click', (ev: Event) => {
      ev.preventDefault();
      let nameSpan = document.querySelector('#rfid-name-tag') as HTMLSpanElement;
      let name = nameSpan.textContent!;
      agentTab.classList.add('is-active');
      colonyTab.classList.remove('is-active');
      agentTabBar.classList.add('is-active');
      colonyTabBar.classList.remove('is-active');
      this.populateAgentTab(name);
    });
  }

  private populateAgentTab(agentName: string) {
    let agentData = this.vizDataDic[agentName];
    console.log(agentData);
    this.populateAgentBio(agentData);
    this.plotAgentWeight(agentData);
    this.plotAgentFluid(agentData);
  }

  private async plotAgentFluid(data: any) {
    const agFlDt = new google.visualization.DataTable();
    let agFlDashboard = new google.visualization.Dashboard(this.agFlCard);
    agFlDt.addColumn('date', 'Date');
    agFlDt.addColumn('number', 'Fluid Intake');

    try {
      let baselineFl = data.baseline_fluid_values.slice(-1)[0];
      let lowerBound = baselineFl * 0.5;
      agFlDt.addColumn('number', 'Baseline Fluid');
      agFlDt.addColumn('number', 'Baseline Fluid -50%');
      for (let i = 0; i < data.fluid_values.length; i++) {
        agFlDt.addRow([
          new Date(data.fluid_dates[i]),
          data.fluid_values[i],
          baselineFl,
          lowerBound
        ]);
      }
    } catch {
      console.log('[' + data.name + '] No Baseline Fluid Data');
      console.log('Plotting without baselines');
      for (let i = 0; i < data.fluid_values.length; i++) {
        agFlDt.addRow([
          new Date(data.fluid_dates[i]),
          data.fluid_values[i]
        ]);
      }
    }

    let dateFormatter = new google.visualization.DateFormat({timeZone: 0});
    dateFormatter.format(agFlDt, 0);
    let plot = document.querySelector('#agent-fluid-plot') as div;
    let filter = document.querySelector('#agent-fluid-filter') as div;

    plot.style.height = '80%';
    filter.style.height = '20%';

    const agFlPlotConfig = {
      'chartType': 'LineChart',
      'containerId': 'agent-fluid-plot',
      'options': {
        interpolateNulls: true,
        title: 'Fluid Plot',
        width: plot.clientWidth,
        height: plot.clientHeight,
        chartArea: {
          width: '80%',
          height: '80%'
        },
        legend: 'none' as 'none',
        pointSize: 5,
        series: {
          1: {
            pointsVisible: false
          },
          2: {
            pointsVisible: false
          }
        },
        vAxis: {
          minValue: 0,
          maxValue: 50
        }
      }
    };

    const agFlFilterOptions = {
      filterColumnLabel: 'Date',
      ui: {
        chartType: 'LineChart',
        chartOptions: {
          interpolateNulls: true
        }
      }
    };

    let endDate = agFlDt.getColumnRange(0).max;
    let startDate = new Date(endDate);
    startDate.setMonth(startDate.getMonth() - 1);

    const agFlFilterConfig = {
      'controlType': 'ChartRangeFilter',
      'containerId': 'agent-fluid-filter',
      'options': agFlFilterOptions,
      'state': {
        'range': {
          'start': startDate,
          'end': endDate
        }
      }
    };

    let agFlPlot = new google.visualization.ChartWrapper(agFlPlotConfig);
    let agFlFilter = new google.visualization.ControlWrapper(agFlFilterConfig);

    agFlDashboard.bind(agFlFilter, agFlPlot);
    agFlDashboard.draw(agFlDt);
  }

  private populateAgentBio(data: any) {

    this.agBioDiv.querySelectorAll('*').forEach(childNode => {
      childNode.remove();
    });

    let nameSpan = document.createElement('span');
    let nameVal = document.createElement('span');

    let dobSpan = document.createElement('span');
    let dobVal = document.createElement('span');

    let ageSpan = document.createElement('span');
    let ageVal = document.createElement('span');

    let sexSpan = document.createElement('span');
    let sexVal = document.createElement('span');

    let fatherSpan = document.createElement('span');
    let fatherVal = document.createElement('span');

    let motherSpan = document.createElement('span');
    let motherVal = document.createElement('span');

    let breedingSpan = document.createElement('span');
    let breedingVal = document.createElement('span');

    let rfidSpan = document.createElement('span');
    let rfidVal = document.createElement('span');

    let albuminSpan = document.createElement('span');
    let albuminVal = document.createElement('span');

    let weightSpan = document.createElement('span');
    let weightVal = document.createElement('span');

    let cwaSpan = document.createElement('span');
    let cwaVal = document.createElement('span');

    nameSpan.textContent = 'Name:';
    nameSpan.style.textAlign = 'center';
    nameVal.textContent = data.name;

    dobSpan.textContent = 'DOB:';
    dobSpan.style.textAlign = 'center';
    dobVal.textContent = data.birthdate;

    ageSpan.textContent = 'Age:';
    ageSpan.style.textAlign = 'center';
    ageVal.textContent = data.ageStr;

    sexSpan.textContent = 'Sex:';
    sexSpan.style.textAlign = 'center';
    sexVal.textContent = data.sex;

    fatherSpan.textContent = 'Father:';
    fatherSpan.style.textAlign = 'center';
    fatherVal.textContent = data.father;

    motherSpan.textContent = 'Mother:';
    motherSpan.style.textAlign = 'center';
    motherVal.textContent = data.mother;

    breedingSpan.textContent = 'Breeding:';
    breedingSpan.style.textAlign = 'center';
    breedingVal.textContent = data.breeding;

    rfidSpan.textContent = 'RFID:';
    rfidSpan.style.textAlign = 'center';
    rfidVal.textContent = data.rfid;
    
    albuminSpan.textContent = 'Recent Albumin';
    albuminSpan.style.textAlign = 'center';
    albuminVal.textContent
      = data.recent_albumin_value + ', ' + data.recent_albumin_date;

    weightSpan.textContent = 'Recent Weight:';
    weightSpan.style.textAlign = 'center';
    weightVal.textContent 
      = data.last_weight_value + ' g, ' + data.last_weight_date;

    cwaSpan.textContent = 'CWA:';
    cwaSpan.style.textAlign = 'center';
    cwaVal.textContent = data.cwa;

    this.agBioDiv.appendChild(nameSpan);
    this.agBioDiv.appendChild(nameVal);
    this.agBioDiv.appendChild(breedingSpan);
    this.agBioDiv.appendChild(breedingVal);
    this.agBioDiv.appendChild(cwaSpan);
    this.agBioDiv.appendChild(cwaVal);
    this.agBioDiv.appendChild(dobSpan);
    this.agBioDiv.appendChild(dobVal);
    this.agBioDiv.appendChild(fatherSpan);
    this.agBioDiv.appendChild(fatherVal);
    this.agBioDiv.appendChild(albuminSpan);
    this.agBioDiv.appendChild(albuminVal);
    this.agBioDiv.appendChild(ageSpan);
    this.agBioDiv.appendChild(ageVal);
    this.agBioDiv.appendChild(motherSpan);
    this.agBioDiv.appendChild(motherVal);
    this.agBioDiv.appendChild(weightSpan);
    this.agBioDiv.appendChild(weightVal);
    this.agBioDiv.appendChild(sexSpan);
    this.agBioDiv.appendChild(sexVal);
    this.agBioDiv.appendChild(rfidSpan);
    this.agBioDiv.appendChild(rfidVal);

    try {
      this.agJson.destroy();
      let options = {
        modes: ['code' as 'code', 'tree' as 'tree']
      }
      this.agJson = new JSONEditor(this.agJsonDiv, options, data);
    } catch {
      let options = {
        modes: ['code' as 'code', 'tree' as 'tree']
      }
      this.agJson = new JSONEditor(this.agJsonDiv, options, data);
    }

  }

  private tsToDate(data: any[], precision: string) {
    function helperDate(elem: Timestamp, idx: number, arr: any[]) {
      try {
        // arr[idx] = elem.toDate().toJSON().split('T')[0];
        arr[idx] = elem.toDate().toLocaleString('en-US').split(',')[0];
      } catch {
      }
    }

    function helperTime(elem: Timestamp, idx: number, arr: any[]) {
      try {
        // arr[idx] = elem.toDate().toJSON();
        arr[idx] = elem.toDate().toLocaleString('en-US');
      } catch {

      }
    }

    function isDict(val: any) {
      return val && typeof val === 'object' && val.constructor === Object;
    }

    function isString(val: any) {
      return val && typeof val === 'string' || val.constructor === String;
    }

    function isNumber(val: any) {
      return typeof val === 'number' && isFinite(val);
    }

    data.forEach(row => {
      for (let key of Object.keys(row)) {
        if (Array.isArray(row[key])) {
          if (precision === 'date') {
            row[key].forEach(helperDate);
          } else if (precision === 'time') {
            row[key].forEach(helperTime);
          }
        } else if (isDict(row[key])) {
          try {
            if(precision === 'date') {
              // row[key] = row[key].toDate().toJSON().split('T')[0];
              row[key] = row[key].toDate().toLocaleString('en-US').split(',')[0];
            } else if (precision === 'time') {
              // row[key] = row[key].toDate().toJSON();
              row[key] = row[key].toDate().toLocaleString('en-US');
            }
            continue;
          } catch {
          }

          for (let key2 of Object.keys(row[key])) {
            try {
              if (precision === 'date') {
                // row[key][key2] = row[key][key2].toDate().toJSON().split('T')[0];
                row[key][key2] = row[key][key2].toDate().toLocaleString('en-US').split(',')[0];
              } else if (precision === 'time') {
                // row[key][key2] = row[key][key2].toDate().toJSON();
                row[key][key2] = row[key][key2].toDate().toLocaleString('en-US');
              }
            } catch {

            }
          }
        } else if (!isString(row[key]) && !isNumber(row[key])) {
          try {
            if (precision === 'date') {
              // row[key] = row[key].toDate().toJSON().split('T')[0];
              row[key] = row[key].toDate().toLocaleString('en-US').split(',')[0]
            } else if (precision === 'time') {
              // row[key] = row[key].toDate().toJSON();
              row[key] = row[key].toDate().toLocaleString('en-US');
            }
          } catch {
          }
        }
      }
    });

    return data;
  }

  private plotAgentWeight(data: any) {
    console.log('plotagentweight data', data);
    let agWtDt = new google.visualization.DataTable();
    let agWtDashboard = new google.visualization.Dashboard(this.agWtCard);
    agWtDt.addColumn('date', 'Date');
    agWtDt.addColumn('number', 'Weight');
  
    try {
      let baselineWt = data.baseline_weight_values.slice(-1)[0];
      let baselineWtSoftUpper = baselineWt * 1.05;
      let baselineWtSoftLower = baselineWt * 0.95;
      let baselineWtHardUpper = baselineWt * 1.08;
      let baselineWtHardLower = baselineWt * 0.92;

      agWtDt.addColumn('number', 'Baseline');
      agWtDt.addColumn('number', 'Soft Upper Bound');
      agWtDt.addColumn('number', 'Soft Lower Bound');
      agWtDt.addColumn('number', 'Hard Upper Bound');
      agWtDt.addColumn('number', 'Hard Lower Bound');

      for (let i = 0; i < data.weight_dates.length; i++) {
        agWtDt.addRow([
          new Date(data.weight_dates[i]),
          data.weight_values[i],
          baselineWt,
          baselineWtSoftUpper,
          baselineWtSoftLower,
          baselineWtHardUpper,
          baselineWtHardLower
        ]);
      }
    } catch {
      console.log('[' + data.name + '] No baseline weight data');
      console.log('Plotting weight without baselines');
      for (let i = 0; i < data.weight_dates.length; i++) {
        agWtDt.addRow([
          new Date(data.weight_dates[i]),
          data.weight_values[i],
        ]);
      }
    }

    let plot = document.querySelector('#agent-weight-plot') as div;
    let filter = document.querySelector('#agent-weight-filter') as div;

    plot.style.height = '80%';
    filter.style.height = '20%';

    


    let plotOptions: any = {
      interpolateNulls: true,
      title: 'Weight Plot',
      width: plot.clientWidth,
      height: plot.offsetHeight,
      legend: 'none' as 'none',
      chartArea: {
        width: '80%',
        height: '80%'
      },
      pointSize: 5,
      series: {
        1: {
          pointsVisible: false,
          color: 'black',
          lineDashStyle: [4, 4],
          lineWidth: 3
        },
        2: {
          pointsVisible: false,
          color: 'green',
          lineWidth: 2
        },
        3: {
          pointsVisible: false,
          color: 'green',
          lineWidth: 2
        },
        4: {
          pointsVisible: false,
          color: 'red',
          lineWidth: 1
        },
        5: {
          pointsVisible: false,
          color: 'red',
          lineWidth: 1
        }
      }
    };

    if (data.ageStr.split(' ')[1] == 'mo' && data.ageStr.split(' ')[0] <= 15) {
      plotOptions.vAxis = {
        minValue: 0,
        maxValue: 350
      };

      plotOptions.vAxis.ticks = [
        0, 150, 250, 350
      ];

    } else {
      plotOptions.vAxis = {
        minValue: 250,
        maxValue: 500
      };

      plotOptions.vAxis.ticks = [
        250, 300, 400, 500 
      ];
    }


    const agWtPlotConfig = {
      'chartType': 'LineChart',
      'containerId': 'agent-weight-plot',
      'options': plotOptions
    };

    const agWtFilterOptions = {
      filterColumnLabel: 'Date',
      ui: {
        chartType: 'LineChart',
        chartOptions: {
          interpolateNulls: true,
        }
      },
    };


    let endDate = agWtDt.getColumnRange(0).max;
    let startDate = new Date(endDate);
    startDate.setMonth(startDate.getMonth() - 1);

    const agWtFilterConfig = {
      'controlType': 'ChartRangeFilter',
      'containerId': 'agent-weight-filter',
      'options': agWtFilterOptions,
      'state': {
        'range': {
          'start': startDate,
          'end': endDate
        }
      }
    };

    let agWtPlot = new google.visualization.ChartWrapper(agWtPlotConfig);
    let agWtFilter = new google.visualization.ControlWrapper(agWtFilterConfig);

    agWtDashboard.bind(agWtFilter, agWtPlot);
    agWtDashboard.draw(agWtDt);

  }

  private async plotColonyWeight() {
    const clWtDataTable = await this.clWtDataToDataTable(this.vizData);
    let clWtDashboard = new google.visualization.Dashboard(this.clWtCard);

    let plot = document.querySelector('#colony-weight-plot') as div;
    const clWtPlotConfig = {
      'chartType': 'LineChart',
      'containerId': 'colony-weight-plot',
      'options': {
        interpolateNulls: true,
        title: 'Colony Weight Plot',
        width: plot.clientWidth,
        height: plot.offsetHeight,
        chartArea: {
          width: '80%',
          height: '80%'
        },
        vAxis: {
          ridlines: {
            color: 'transparent'
          },
          baselineColor: 'transparent'
        },
        pointSize: 5
      }
    };

    const clWtFilterOptions = {
      filterColumnLabel: 'date',
      ui: {
        chartType: 'LineChart',
        chartOptions: {
          interpolateNulls: true,
        }
      },
      
    };
    
    let endRange = clWtDataTable.getColumnRange(0).max;
    let startRange = new Date(endRange);
    startRange.setMonth(startRange.getMonth() - 1);

    const clWtFilterConfig = {
      'controlType': 'ChartRangeFilter',
      'containerId': 'colony-weight-date-filter',
      'options': clWtFilterOptions,
      'state': {
        'range': {
          'start': startRange,
          'end': endRange
        }
      }
    };

    let clWtPlot = new google.visualization.ChartWrapper(clWtPlotConfig);
    let clWtFilter = new google.visualization.ControlWrapper(clWtFilterConfig);

    clWtDashboard.bind(clWtFilter, clWtPlot);
    clWtDashboard.draw(clWtDataTable);
  }

  private async clWtDataToDataTable(data: any[]) {
    let chartData: any[][] = [];
    let dtArr: google.visualization.DataTable[] = [];
    let i = 0;

    data.forEach(agentRow => {
      if (agentRow.hasOwnProperty('weight_dates')) {
        chartData[i] = [['date', agentRow.name]];
        for (let j = 0; j < agentRow.weight_dates.length; j++) {
          chartData[i].push(
            [new Date(agentRow.weight_dates[j]), agentRow.weight_values[j]]
          );
        }
        i++;
      }
    });

    chartData.forEach(chartCol => {
      // console.log('chartCol', chartCol);
      let temp = google.visualization.arrayToDataTable(chartCol, false);
      dtArr.push(temp);
    });

    let dt = google.visualization.data.join(dtArr[0],dtArr[1], 'full', 
      [[0,0]], [1], [1]);
    for (let i = 2; i < dtArr.length; i++) {
      let colIdx = [...Array(i+1).keys()];
      colIdx.shift();
      // console.log('dt', dt);
      // console.log('dtarrlength', dtArr.length);
      // dt = google.visualization.data.join(dt, dtArr[i], 'full', [[0, 0]],
      //   colIdx, [1]);

      try {
        dt = google.visualization.data.join(dt, dtArr[i], 'full', [[0, 0]],
        colIdx, [1]);
        // console.log('NO JOIN ERROR IDX', i);
        // console.log('NO JOIN ERROR dt', dt);
        // console.log('NO JOIN ERROR dtArr[i]', dtArr[i]);
      } catch (e) {
        // console.error('JOIN ERROR', e);
        // console.error('JOIN ERROR IDX', i);
        // console.error('JOIN ERROR dt', dt);
        // console.error('JOIN ERROR dtArr[i]', dtArr[i])
      }
    }

    return dt;
  }

  public async init() {
    let marmData = await this.getData('marmosets');
    let mkdailydata = await this.getData('mkdailydata');
    let data = await this.processData(marmData, mkdailydata);
    this.populateTable(data);
    this.plotColonyWeight();
    this.setupLogbook();
  }

  public async getStorageData(path: string) {
    console.log('hello');
    let tmp: any = {};
    let mkdailydataRef = storage.ref().child(path);
    await mkdailydataRef.listAll().then(res => {
      console.log('res', res);
      res.items.forEach(async itemRef => {
        console.log('itemRef', itemRef);
        let url = await itemRef.getDownloadURL().catch(e => {
          console.error('Error getting URL', e);
        });
        let response = await fetch(url);
        let file = await response.json();
        tmp[itemRef.name] = file;
      });
    }).catch(e => {
      console.error('error', e);
    });

    return tmp;
  }

  public async processData(data1: any[], data2: any[]) {
    this.cleanData.mkdailydata = new Array();
    this.cleanData.marmosetData = new Array();
    this.cleanData.mkdailydataDic = {};
    this.cleanData.marmosetDataDic = {};

    this.cleanData.mkdailydata = cloneDeep(data2);
    this.cleanData.marmosetData = cloneDeep(data1);
    this.vizData = cloneDeep(data1);
    this.vizDataDic = {};

    data2.forEach(row => {
      let idx = this.vizData.findIndex((doc: any) => {
        return doc.name === row.agent;
      });

      // concatenating marmoset data and mkdailydata
      if (idx >= 0) {
        let fluidTmp = utils.mergeTwoNumberArrays(row.reward, row.supplement);
        let fluidObj = utils.createContinuousArray(fluidTmp, row.date);
        let weightObj = utils.createContinuousArray(row.weight, row.date);
        let vizDataRow: any = {};
        vizDataRow.fluid_dates = fluidObj.target;
        vizDataRow.fluid_values = fluidObj.reference;
        vizDataRow.weight_dates = weightObj.target;
        vizDataRow.weight_values = weightObj.reference;

        this.vizData[idx] = {...this.vizData[idx], ...vizDataRow};
      }
    });

    this.cleanData.marmosetData = this.tsToDate(this.cleanData.marmosetData, 'time');
    this.cleanData.mkdailydata = this.tsToDate(this.cleanData.mkdailydata, 'time');
    this.vizData = this.tsToDate(this.vizData, 'date');

    this.vizData = this.vizData.filter((row: any) => {
      return !('dateofdeath' in row);
    });

    this.cleanData.marmosetData.forEach((row: any) => {
      this.cleanData.marmosetDataDic[row.name] = row;
    });

    this.cleanData.mkdailydata.forEach((row: any) => {
      this.cleanData.mkdailydataDic[row.agent] = row;
    });

    this.vizData.forEach((row: any) => {
      let optA = document.createElement('option');
      let optB = document.createElement('option');
      optA.textContent = row.name;
      optB.textContent = row.name;
      optA.value = row.name;
      optB.value = row.name;
      this.agSlt.appendChild(optA);
      this.logsheetAgentSelector.appendChild(optB);

      for (let key of Object.keys(row)) {
        if (key == 'fluid_dates') {
          row['last_fluid_date'] = row['fluid_dates'].slice(-1)[0]; 
        } else if (key == 'fluid_values') {
          row['last_fluid_value'] = row['fluid_values'].slice(-1)[0];
        } else if (key == 'weight_dates') {
          row['last_weight_date'] = row['weight_dates'].slice(-1)[0];
        } else if (key == 'weight_values') {
          row['last_weight_value'] = row['weight_values'].slice(-1)[0];
        }
      }

      try {

        let today = new Date();
        let dob = new Date(row.birthdate);
        let yearsDiff = today.getFullYear() - dob.getFullYear();

        if (yearsDiff > 2) {
          let ageStr = String(yearsDiff) + ' yo';
          row.age = yearsDiff;
          row.ageStr = ageStr;
        } else {
          let monthsDiff = (yearsDiff * 12) + (today.getMonth() - dob.getMonth());
          let ageStr = String(monthsDiff) + ' mo';
          row.age = monthsDiff;
          row.ageStr = ageStr;
        }

        this.vizDataDic[row.name] = row;

      } catch (e) {

      }
    });

    let thisMonth = new Date().getMonth();
    let monthNames = [
      'January', 'Febuary', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    for (let i = 0; i <= thisMonth; i++) {
      let opt = document.createElement('option');
      opt.value = String(i);
      opt.textContent = monthNames[i];
      if (i == thisMonth) {
        opt.setAttribute('selected', 'selected');
      }
      this.logsheetMonthSelector.appendChild(opt);
    }

    console.log('vizDataDic', this.vizDataDic);
    return this.vizData;
  }

  public async getData(collectionName: string) {
    return db.collection(collectionName).get().then(async snapshot => {
      let promises = snapshot.docs.map(x => x.data());
      return promises;
    });
  }

  private dateToTimestamp(incomingData: any) {
    let data = cloneDeep(incomingData);
    function _dateToTimestamp(element: string, idx: number, arr: any[]) {
      let dt = new Date(element);
      if (!isNaN(Number(dt)) && dt instanceof Date && typeof element === "string") {
        arr[idx] = firebase.firestore.Timestamp.fromDate(dt);
      }
    }

    function isDict(val: any) {
      return val && typeof val === 'object' && val.constructor === Object;
    }

    function isString(val: any) {
      return typeof val === 'string' || val.constructor === String;
    }

    for (let key of Object.keys(data)) {
      if (Array.isArray(data[key]) 
        && (key.toLowerCase().includes('times') || key.toLowerCase().includes('dates'))) {
        console.log("ARRAY " + "data[" + key + "]" + "=" + data[key]);
        data[key].forEach(_dateToTimestamp);
      }

      else if (isDict(data[key])) {
        for (let key2 of Object.keys(data[key])) {
          let dt = new Date(data[key][key2]);
          if (!isNaN(Number(dt)) && dt instanceof Date && isString(data[key][key2])) {
            console.log("Dictionary " + "data[" + key + "]" + "=" + data[key]);
            data[key][key2] = firebase.firestore.Timestamp.fromDate(dt);
          }
        }
      }

      else if (isString(data[key])
        && (key.toLowerCase().includes('date') || key.toLowerCase().includes('time'))) {
        
        let dt = new Date(data[key]);
        if (!isNaN(Number(dt)) && dt instanceof Date) {
          data[key] = firebase.firestore.Timestamp.fromDate(dt);
        }
      }
    }
    return data;
  }

  private async setupLogbook() {
    let logbookTableDiv = document.querySelector('#logbook') as div;
    let logsheetTableDiv = document.querySelector('#logsheet') as div;
    let logbookData = cloneDeep(this.vizData);

    function entryTodayMutator(value: any, data: any, type: any, mutatorParams: any, cell?: Tabulator.CellComponent) {
      //console.log('cell', cell);
      try {
        let today = new Date();
        function isSameDay(first: Date, second: Date) {
          return first.getFullYear() === second.getFullYear() &&
            first.getMonth() === second.getMonth() &&
            first.getDate() === second.getDate();
        }
        let ref = new Date(data.last_fluid_date + ' 12:00 AM');
        if (isSameDay(today, ref)) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error('Entry Today Mutator Error', error);
        return false;
      }
    }

    function targetDateMutator(value: any, data: any, type: any, mutatorParams: any, cell?: Tabulator.CellComponent) {
      try {
        console.log('targetdatemutatorvalue', value);
        let today: Date;
        if (value) {
          today = new Date(value);  
        } else {
          today = new Date();
        }
        return today.toLocaleDateString();
      } catch (err) {
        console.error(`Target Date Mutator Error: ${err}`);
      }
    }

    function entryTodayFmt(cell: any) {
      try {
        if (cell.getValue() == true) {
          cell.getElement().style.backgroundColor = '#00FF00';
        } else {
          cell.getElement().style.backgroundColor = 'red';
        }
        return cell.getValue();
      } catch (error) {
        cell.getElement().style.backgroundColor = 'red';
        return cell.getValue();
      }
    }

    function editCheck(cell: any) {
      try {
        let entryToday = cell.getData().entry_today;
        if (entryToday) {
          return false;
        } else {
          return true;
        }
      } catch (error) {
        console.error('editCheck Error', error);
        return true;
      }
    }

    function implantEditCheck(cell: any) {
      try {
        let implant = cell.getData().implant;
        let entryToday = cell.getData().entry_today;
        if (!entryToday && implant) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error('Implant Edit Check Error', error);
        return false;
      }
    }

    // function entryTodayMutatorParams(value: any, data: any, type: any, component)

    this.logbook = new Tabulator(logbookTableDiv, {
      data: logbookData,
      index: 'name',
      layout: 'fitColumns',
      initialSort: [
        { column: 'name', dir: 'asc' }
      ],
      columns: [
        {title: 'Name', field: 'name'},
        {title: 'Target Date', field: 'date', mutator: targetDateMutator, editor: true, editable: true},
        {title: 'Entry Today?', field: 'entry_today', mutator: entryTodayMutator, formatter: entryTodayFmt},
        {title: 'Weight', field: 'weight', editor: 'number'},
        {title: 'Reward (mL)', field: 'reward', editor: 'number'},
        {title: 'Supplement (mL)', field: 'supplement', editor: 'number'},
        {title: 'Implant Cleaned', field: 'implant_cleaned', hozAlign: 'center', formatter: 'tickCross', editor: 'tickCross', editable: implantEditCheck},
        {title: 'Time ON', field: 'time_on', editor: true},
        {title: 'Time OFF', field: 'time_off', editor: true},
        {title: 'Comments', field: 'comments', editor: true},
        {title: 'Initials', field: 'initials', editor: true}
      ],
      tableBuilt: async function() {
        console.log('logbookdata', logbookData);
      },
      rowDblClick: async function(e, row) {
        console.log('row agent', row.getData().name);
        
      }

    });

   
  }

  private async submitLogsheetAction() {
    let submitBtn = document.querySelector('#logbook-submit-btn') as HTMLButtonElement;
    submitBtn.addEventListener('click', async (ev: Event) => {
      ev.preventDefault();
      let currentSheetData = this.logbook.getData('visible');
      console.log('currentSheetData', currentSheetData);
      let toSubmit: any = {};
      let now = new Date();
      for (let row of currentSheetData) {
        let tmp: any = {};
        tmp.weight = row.weight ? row.weight : '';
        tmp.implant_cleaned = row.implant_cleaned ? row.implant_cleaned : '';
        tmp.reward = row.reward ? row.reward : '';
        tmp.supplement = row.supplement ? row.supplement : '';
        tmp.time_on = row.time_on ? new Date(row.date + ' ' + row.time_on) : '';
        tmp.time_off = row.time_off ? new Date(row.date + ' ' + row.time_off) : '';
        tmp.comments = row.comments ? row.comments : '';
        tmp.initials = row.initials ? row.initials : '';
        if (utils.isNotEmptyObject(tmp)) {
          tmp.timestamp = new Date();
          tmp.date = new Date(row.date);
          if (utils.isSameDay(tmp.timestamp, tmp.date)) {
            tmp.date = tmp.timestamp;
          }
          toSubmit[row.name] = tmp;
        }
      }

      if (Object.keys(toSubmit).length > 0) {
        console.log('toSubmit', toSubmit);
        for (let agent in toSubmit) {
          console.log('agent', agent);
          let path = 'mkturkfiles/mkdailydata/' + agent + '.json';
          let storageFile = await utils.getStorageFile(path);
          let firestoreDoc = await utils.getDocumentData('mkdailydata', agent);
  
          for (let key in toSubmit[agent]) {
            if (firestoreDoc !== undefined) {
              if (key === 'time_on' || key === 'time_off' || key === 'timestamp' || key === 'date') {
                try {
                  storageFile[key].push(toSubmit[agent][key].toJSON());
                  firestoreDoc[key].push(firebase.firestore.Timestamp.fromDate(toSubmit[agent][key]));
                } catch {
                  storageFile[key].push(toSubmit[agent][key]);
                  firestoreDoc[key].push(toSubmit[agent][key]);
                }
              } else {
                storageFile[key].push(toSubmit[agent][key]);
                firestoreDoc[key].push(toSubmit[agent][key]);
              }
            }
          }
          
          await db.collection('mkdailydata').doc(agent).set(firestoreDoc!).then(async () => {
            console.log(agent, 'log uploaded to firestore/mkdailydata');
            storageFile = new Blob(
              [JSON.stringify(storageFile, Object.keys(storageFile).sort(), 1)]
            );
            let fileRef = storage.ref().child(path);
            await fileRef.put(storageFile, {contentType: 'application/json'}).then(() => {
              console.log(agent, 'log uploaded to mkturkfiles/mkdailydata');
              // this.init();
            }).catch(e => {
              console.error('Error:', e);
              alert('Error Uploading file to GCS');
            });
          }).catch(e => {
            console.error('Error:', e);
            alert('Error updating doc to Firestore');
          });
        }
        alert('Logsheet Successfully Uploaded');
      } else {
        alert('Nothing to submit');
      }


    });
  }
}