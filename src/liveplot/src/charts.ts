import _, { last, sample } from 'lodash';
import { FileType, LiveplotDataType } from './types';
import { Utils } from './utils';

const colorMapJet = [
  '#00008F',
  '#00009F',
  '#0000AF',
  '#0000BF',
  '#0000CF',
  '#0000DF',
  '#0000EF',
  '#0000FF',
  '#0010FF',
  '#0020FF',
  '#0030FF',
  '#0040FF',
  '#0050FF',
  '#0060FF',
  '#0070FF',
  '#0080FF',
  '#008FFF',
  '#009FFF',
  '#00AFFF',
  '#00BFFF',
  '#00CFFF',
  '#00DFFF',
  '#00EFFF',
  '#00FFFF',
  '#10FFEF',
  '#20FFDF',
  '#30FFCF',
  '#40FFBF',
  '#50FFAF',
  '#60FF9F',
  '#70FF8F',
  '#80FF80',
  '#8FFF70',
  '#9FFF60',
  '#AFFF50',
  '#BFFF40',
  '#CFFF30',
  '#DFFF20',
  '#EFFF10',
  '#FFFF00',
  '#FFEF00',
  '#FFDF00',
  '#FFCF00',
  '#FFBF00',
  '#FFAF00',
  '#FF9F00',
  '#FF8F00',
  '#FF8000',
  '#FF7000',
  '#FF6000',
  '#FF5000',
  '#FF4000',
  '#FF3000',
  '#FF2000',
  '#FF1000',
  '#FF0000',
  '#EF0000',
  '#DF0000',
  '#CF0000',
  '#BF0000',
  '#AF0000',
  '#9F0000',
  '#8F0000',
  '#800000',
];

const rtColorMap = [
  '#ffe100',
  '#ffc300',
  '#ffa500',
  '#ff6e00',
  '#ff3700',
  '#ff0000',
  '#d5002b',
  '#aa0055',
  '#800080',
  '#5500aa',
  '#2b00d5',
  '#0000ff',
  '#002baa',
  '#005555',
  '#008000',
];

const utils = new Utils();

export class Charts {
  public elemObject: any;
  public perfDataTable: google.visualization.DataTable;
  public cumulDataTable: google.visualization.DataTable;
  public xyPosDataTable: google.visualization.DataTable;
  public rxnTimeDataTable: google.visualization.DataTable;
  public rewardDataTable: google.visualization.DataTable;
  public choiceDataTable: google.visualization.DataTable;
  public objPerfDataTable: google.visualization.DataTable;
  public realtimeDataTable: google.visualization.DataTable;
  public healthDataTable: google.visualization.DataTable;

  public perfDashboard: google.visualization.Dashboard;
  public trialDashboard: google.visualization.Dashboard;
  public healthDashboard: google.visualization.Dashboard;

  public perfPlot: google.visualization.ChartWrapper;
  public perfPlotConfig: google.visualization.ChartSpecs;
  public perfPlotOptions: google.visualization.LineChartOptions;
  public perfFilter: google.visualization.ControlWrapper;
  public perfFilterConfig: google.visualization.ControlWrapperOptions;
  public perfFilterOptions: Object;

  public trialPlot: google.visualization.ChartWrapper;
  public trialPlotConfig: google.visualization.ChartSpecs;
  public trialPlotOptions: google.visualization.AreaChartOptions;
  public trialFilter: google.visualization.ControlWrapper;
  public trialFilterConfig: google.visualization.ControlWrapperOptions;
  public trialFilterOptions: Object;

  public healthPlot: google.visualization.ChartWrapper;
  public healthPlotConfig: google.visualization.ChartSpecs;
  public healthPlotOptions: google.visualization.ScatterChartOptions;
  public healthFilter: google.visualization.ControlWrapper;
  public healthFilterConfig: google.visualization.ControlWrapperOptions;
  public healthFilterOptions: Object;

  public screenPlot: google.visualization.ComboChart;
  public screenPlotOptions: google.visualization.ComboChartOptions;

  public realtimePlot: google.visualization.ChartWrapper;
  public realtimePlotConfig: google.visualization.ChartSpecs;
  public realtimePlotOptions: google.visualization.ComboChartOptions;
  public realtimePlotActive: boolean;
  public realtimeRowDataAdded: boolean;
  public rtData: any;
  public prevCoord: any;
  public prevColorIdx: number;

  public rxnPlot: google.visualization.Histogram;
  public rxnPlotOptions: google.visualization.HistogramOptions;

  public rewardPlot: google.visualization.ColumnChart;
  public rewardPlotOptions: google.visualization.ColumnChartOptions;

  public choicePlot: google.visualization.ColumnChart;
  public choicePlotOptions: google.visualization.ColumnChartOptions;

  public objPerfPlot: google.visualization.ColumnChart;
  public objPerfPlotOptions: google.visualization.ColumnChartOptions;

  private vitals: any;
  private nTrials: number;

  constructor(elemObj: any) {
    this.elemObject = elemObj;
    this.realtimePlotActive = false;
    this.setupCharts();

    this.vitals = {
      subject: null,
      pctCorrect: 0,
      trials: 0,
      time: 0,
      batteryLeft: 0,
      batteryUsed: 0,
      rewardEstimate: 0,
      automator: '',
      automatorStage: 0,
      automatorStageName: '',
      numReward: 0,
      rfidTag: '',
      rfidTime: 0,
      tagCount: {},
    };

    this.prevCoord = { x: 0, y: 0 };
    this.prevColorIdx = 0;
  }

  public setupDataTables() {
    this.perfDataTable = new google.visualization.DataTable();
    this.healthDataTable = new google.visualization.DataTable();
    this.cumulDataTable = new google.visualization.DataTable();
    this.xyPosDataTable = new google.visualization.DataTable();
    this.rxnTimeDataTable = new google.visualization.DataTable();
    this.rewardDataTable = new google.visualization.DataTable();
    this.choiceDataTable = new google.visualization.DataTable();
    this.objPerfDataTable = new google.visualization.DataTable();
    this.realtimeDataTable = new google.visualization.DataTable();
    this.rtData = {};
  }

  public async setupCharts() {
    await google.charts.load('50', { packages: ['corechart', 'controls'] });
    this.setupChartOptions();
    this.setupDataTables();

    this.perfDashboard = new google.visualization.Dashboard(
      this.elemObject.perfDiv
    );
    this.perfPlot = new google.visualization.ChartWrapper(this.perfPlotConfig);
    this.perfFilter = new google.visualization.ControlWrapper(
      this.perfFilterConfig
    );

    this.trialDashboard = new google.visualization.Dashboard(
      this.elemObject.trialDiv
    );
    this.trialPlot = new google.visualization.ChartWrapper(
      this.trialPlotConfig
    );
    this.trialFilter = new google.visualization.ControlWrapper(
      this.trialFilterConfig
    );

    this.healthDashboard = new google.visualization.Dashboard(
      this.elemObject.healthDiv
    );
    this.healthPlot = new google.visualization.ChartWrapper(
      this.healthPlotConfig
    );
    this.healthFilter = new google.visualization.ControlWrapper(
      this.healthFilterConfig
    );

    this.perfDashboard.bind(this.perfFilter, this.perfPlot);
    this.trialDashboard.bind(this.trialFilter, this.trialPlot);
    this.healthDashboard.bind(this.healthFilter, this.healthPlot);

    this.screenPlot = new google.visualization.ComboChart(
      this.elemObject.screenPlot
    );
    // this.realtimePlot = (
    //   new google.visualization.ChartWrapper(this.realtimePlotConfig)
    // );
    this.rxnPlot = new google.visualization.Histogram(this.elemObject.rxnPlot);
    this.rewardPlot = new google.visualization.ColumnChart(
      this.elemObject.rewardPlot
    );
    this.choicePlot = new google.visualization.ColumnChart(
      this.elemObject.choicePlot
    );
    this.objPerfPlot = new google.visualization.ColumnChart(
      this.elemObject.objPerfPlot
    );
  }

  public setupChartOptions() {
    this.perfPlotOptions = {
      width: this.elemObject.perfPlot.clientWidth,
      height: this.elemObject.perfPlot.clientHeight,
      hAxis: { title: 'Trial#' },
      vAxis: { title: 'Correct (%)', viewWindow: { min: 0, max: 1.0 } },
      animation: {
        duration: 500,
        easing: 'linear',
        startup: true,
      },
      series: {
        0: { color: '#43459d' },
        1: { color: '#e2431e' },
      },
    };

    this.perfPlotConfig = {
      chartType: 'LineChart',
      containerId: 'performance-plot',
      options: this.perfPlotOptions,
    };
    this.perfFilterOptions = {
      filterColumnLabel: 'currentTrial',
      ui: {
        chartType: 'LineChart',
        chartOptions: {
          smooth: 20,
          hAxis: { baselineColor: 'none', title: 'Trial#' },
          vAxis: { title: '%', viewWindow: { min: 0, max: 1.0 } },
          width: this.elemObject.perfFilter.clientWidth,
          height: this.elemObject.perfFilter.clientHeight,
          animation: { duration: 1000, easing: 'out' },
        },
        chartView: {
          columns: [0, 1],
        },
        minRangeSize: 2,
      },
    };
    this.perfFilterConfig = {
      controlType: 'ChartRangeFilter',
      containerId: 'performance-filter',
      state: { range: { start: 0, end: 100 } },
      options: this.perfFilterOptions,
    };
    this.trialPlotOptions = {
      width: this.elemObject.trialPlot.clientWidth,
      height: this.elemObject.trialPlot.clientHeight,
      areaOpacity: 0.5,
      hAxis: { title: 'Time (h) ' },
      vAxes: {
        0: { title: 'Trial count' },
        1: { title: 'RFID' },
      },
      animation: {
        duration: 500,
        easing: 'linear',
      },
      series: {
        0: { targetAxisIndex: 0 },
        1: { targetAxisIndex: 0 },
        2: { targetAxisIndex: 1 },
      },
    };
    this.trialPlotConfig = {
      chartType: 'AreaChart',
      containerId: 'trial-plot',
      options: this.trialPlotOptions,
    };
    this.trialFilterOptions = {
      filterColumnLabel: 'time',
      ui: {
        chartType: 'LineChart',
        chartOptions: {
          hAxis: { baselineColor: 'none', title: 'Time' },
          vAxis: { title: '#' },
          width: this.elemObject.trialFilter.clientWidth,
          height: this.elemObject.trialFilter.clientHeight,
          animation: { duration: 1000, easing: 'out' },
        },
      },
      chartView: {
        columns: [0, 1],
      },
    };
    this.trialFilterConfig = {
      controlType: 'ChartRangeFilter',
      containerId: 'trial-filter',
      state: { range: { start: 0, end: 100 } },
      options: this.trialFilterOptions,
    };

    this.healthPlotOptions = {
      width: this.elemObject.healthPlot.clientWidth,
      height: this.elemObject.healthPlot.clientHeight,
      hAxis: { title: 'Trial#' },
      vAxis: { title: 'Time (ms)' },
      // animation: {
      //   duration: 500,
      //   easing: 'linear',
      //   startup: true
      // }
    };

    this.healthPlotConfig = {
      chartType: 'ScatterChart',
      containerId: 'health-plot',
      options: this.healthPlotOptions,
    };
    this.healthFilterOptions = {
      filterColumnLabel: 'trial',
      ui: {
        chartType: 'ScatterChart',
        chartOptions: {
          smooth: 20,
          hAxis: { baselineColor: 'none', title: 'Trial#' },
          vAxis: { title: 'ms' },
          width: this.elemObject.healthFilter.clientWidth,
          height: this.elemObject.healthFilter.clientHeight,
          // animation: { duration: 1000, easing: 'linear' }
        },
      },
    };
    this.healthFilterConfig = {
      controlType: 'ChartRangeFilter',
      containerId: 'health-filter',
      state: { range: { start: 0, end: 100 } },
      options: this.healthFilterOptions,
    };

    // this.healthPlotOptions = {
    //   width: this.elemObject.healthPlot.clientWidth,
    //   height: this.elemObject.healthPlot.clientHeight,
    //   hAxis: { title: 'Trial #' },
    //   vAxis: { title: 'Time (ms)' },
    //   animation: {
    //     duration: 500,
    //     easing: 'linear',
    //     startup: true
    //   }
    // };
    // this.healthPlotConfig = {
    //   chartType: 'ScatterChart',
    //   containerId: 'health-plot',
    //   options: this.healthPlotOptions
    // };
    // this.healthFilterOptions = {
    //   filterColumnLabel: 'trial',
    //   ui: {
    //     chartType: 'ScatterChart',
    //     chartOptions: {
    //       hAxis: { baselineColor: 'none', title: 'Trial #' },
    //       vAxis: { title: 'ms' },
    //       width: this.elemObject.healthFilter.clientWidth,
    //       height: this.elemObject.healthFilter.clientHeight,
    //       animation: { duration: 1000, easing: 'out' }
    //     },
    //     minRangeSize: 2
    //   }
    // };
    // this.healthFilterConfig = {
    //   controlType: 'ChartRangeFilter',
    //   containerId: 'health-filter',
    //   state: { range: { start: 0, end: 100 } },
    //   options: this.healthFilterOptions
    // };

    this.screenPlotOptions = {
      seriesType: 'scatter',
      pointSize: 1,
    };
    this.rxnPlotOptions = {
      width: this.elemObject.rxnPlot.clientWidth,
      height: this.elemObject.rxnPlot.clientHeight,
      title: 'Reaction Time (ms)',
      animation: {
        duration: 500,
        easing: 'linear',
        startup: true,
      },
      legend: { position: 'none' },
    };
    this.rewardPlotOptions = {
      width: this.elemObject.rewardPlot.clientWidth,
      height: this.elemObject.rewardPlot.clientHeight,
      title: 'Amount of Reward',
      hAxis: { title: 'reward amount' },
      vAxis: { title: 'counts', minValue: 0, maxValue: 1 },
      legend: { position: 'none' },
    };
    this.choicePlotOptions = {
      width: this.elemObject.choicePlot.clientWidth,
      height: this.elemObject.choicePlot.clientHeight,
      hAxis: { title: 'Choice' },
      vAxis: { title: 'counts', minValue: 0, maxValue: 1 },
      legend: { position: 'none' },
    };
    this.objPerfPlotOptions = {
      width: this.elemObject.objPerfPlot.clientWidth,
      height: this.elemObject.objPerfPlot.clientHeight,
      hAxis: { title: 'Objects' },
      vAxis: { title: 'counts', minValue: 0, maxValue: 1 },
      title: 'Object Performance',
      legend: { position: 'none' },
    };
  }

  public initializeChartData(file: FileType, plotOptions: any) {
    // Remove rows and columns
    // console.log(this.perfDataTable);
    this.perfDataTable.removeRows(0, this.perfDataTable.getNumberOfRows());
    this.perfDataTable.removeColumns(
      0,
      this.perfDataTable.getNumberOfColumns()
    );

    this.cumulDataTable.removeRows(0, this.cumulDataTable.getNumberOfRows());
    this.cumulDataTable.removeColumns(
      0,
      this.cumulDataTable.getNumberOfColumns()
    );

    this.healthDataTable.removeRows(0, this.healthDataTable.getNumberOfRows());
    this.healthDataTable.removeColumns(
      0,
      this.healthDataTable.getNumberOfColumns()
    );

    this.xyPosDataTable.removeRows(0, this.xyPosDataTable.getNumberOfRows());
    this.xyPosDataTable.removeColumns(
      0,
      this.xyPosDataTable.getNumberOfColumns()
    );

    this.realtimeDataTable.removeRows(
      0,
      this.realtimeDataTable.getNumberOfRows()
    );
    this.realtimeDataTable.removeColumns(
      0,
      this.realtimeDataTable.getNumberOfColumns()
    );
    this.realtimePlotActive = false;
    this.realtimeRowDataAdded = false;
    this.rtData['test'] = [];
    this.rtData['choice'] = [];

    this.rxnTimeDataTable.removeRows(
      0,
      this.rxnTimeDataTable.getNumberOfRows()
    );
    this.rxnTimeDataTable.removeColumns(
      0,
      this.rxnTimeDataTable.getNumberOfColumns()
    );

    this.rewardDataTable.removeRows(0, this.rewardDataTable.getNumberOfRows());
    this.rewardDataTable.removeColumns(
      0,
      this.rewardDataTable.getNumberOfColumns()
    );

    this.choiceDataTable.removeRows(0, this.choiceDataTable.getNumberOfRows());
    this.choiceDataTable.removeColumns(
      0,
      this.choiceDataTable.getNumberOfColumns()
    );

    this.objPerfDataTable.removeRows(
      0,
      this.objPerfDataTable.getNumberOfRows()
    );
    this.objPerfDataTable.removeColumns(
      0,
      this.objPerfDataTable.getNumberOfColumns()
    );

    // Add columns
    this.perfDataTable.addColumn('number', 'currentTrial');
    this.perfDataTable.addColumn('number', 'current');
    this.perfDataTable.addColumn('number', '100trialsAvg');

    this.cumulDataTable.addColumn('datetime', 'time');
    this.cumulDataTable.addColumn('number', 'Trials');
    this.cumulDataTable.addColumn('number', 'Performance');
    this.cumulDataTable.addColumn('number', 'RFID');
    // this.cumulDataTable.addColumn('number', 'Weight');

    this.rxnTimeDataTable.addColumn('string', 'success');
    this.rxnTimeDataTable.addColumn('number', 'durationMS');

    /**
     * xyPosDataTable Guide
     * 0: x
     * 1: y fix (box)
     * 2: y sample (box)
     * 3: y test1 (box) | y same (box)
     * 4: y test2 (box) | y different (box)
     * 5: y Fix_reward (dots)
     * 6: y Fix_punish (dots)
     * 7: y Target_reward (dots)
     * 8: y Target_punish (dots)
     */
    this.xyPosDataTable.addColumn('number', 'xpos');
    this.xyPosDataTable.addColumn('number', 'Fixation');
    this.xyPosDataTable.addColumn('number', 'Sample');
    this.realtimeDataTable.addColumn('number', 'globalX');
    this.realtimeDataTable.addColumn('number', 'fixY');
    this.realtimeDataTable.addColumn('number', 'sampleY');

    if (file.data!.SameDifferent <= 0) {
      for (let i = 0; i < file.data!.TestGridIndex.length; i++) {
        this.xyPosDataTable.addColumn('number', `Test${i + 1}`);
        this.realtimeDataTable.addColumn('number', `testY${i + 1}`);
      }
    } else if (file.data!.SameDifferent > 0) {
      this.xyPosDataTable.addColumn('number', 'Same');
      this.xyPosDataTable.addColumn('number', 'Different');
      this.realtimeDataTable.addColumn('number', 'sameY');
      this.realtimeDataTable.addColumn('number', 'differentY');
    }

    this.xyPosDataTable.addColumn('number', 'Fix_Reward');
    this.xyPosDataTable.addColumn('number', 'Fix_Punish');
    this.xyPosDataTable.addColumn('number', 'Target_Reward');
    this.xyPosDataTable.addColumn('number', 'Target_Punish');

    this.realtimeDataTable.addColumn('number', 'curY');
    this.realtimeDataTable.addColumn({ type: 'string', role: 'style' });

    this.rewardDataTable.addColumn('string', 'reward size');
    this.rewardDataTable.addColumn('number', 'nrewards');

    this.choiceDataTable.addColumn('string', 'choice');
    this.choiceDataTable.addColumn('number', '# of responses');

    this.objPerfDataTable.addColumn('string', 'object');
    this.objPerfDataTable.addColumn('number', 'performance');

    this.healthDataTable.addColumn('number', 'trial');
    this.healthDataTable.addColumn('number', 'sample command');
    this.healthDataTable.addColumn('number', 'sample command off');
    this.healthDataTable.addColumn('number', 'tdisplay_last');
    this.healthDataTable.addColumn('number', 'tdisplay_first');
    this.healthDataTable.addColumn('number', 'eye interval');

    this.updatePlots(file, plotOptions);
  }

  public updatePlots(file: FileType, plotOptions: any) {
    let fileData: LiveplotDataType;
    if (!_.isUndefined(file.data)) {
      fileData = file.data;
    } else {
      throw 'file.data is Undefined';
    }
    console.log('plot updated');
    this.loadVitals(file);
    this.loadVitalsText(file);
    // console.log('vitals', this.vitals);
    this.loadPerformanceData(file);
    this.loadHealthData(fileData);
    this.loadObjPerfData(fileData);
    this.loadChoiceData(fileData);
    this.loadRewardData(fileData);
    this.drawPerformancePlot(file);
    this.drawTrialPlot(file);
    this.drawHealthPlot(file);
    this.drawObjPerfPlot();
    this.drawRxnTimePlot();
    this.drawChoicePlot();
    this.drawRewardPlot();
    this.loadTouchSDText();
    let streamActive = plotOptions.streamActive;
    this.drawScreenPlot(fileData, streamActive);
    if (streamActive && !this.realtimePlotActive) {
      console.log('hello');
      this.drawRealtimePlot2(fileData);
      this.realtimePlotActive = true;
    }
  }

  private loadVitals(file: FileType) {
    let data;
    if (!_.isUndefined(file.data)) {
      data = file.data;
    } else {
      throw 'file.data is Undefined';
    }

    this.vitals.subject = data.Subject;
    this.vitals.trials = data.Response.length;

    // Convert milliseconds to minutes
    let startTime = data.StartTime;
    this.vitals.time = _.round(
      _.round(_.toNumber(_.last(startTime)) - startTime[0]) / 60000
    );

    /**
     * RFID Processing
     * Only supports current data format
     * file.data.RFIDTag = {
     *   0: [0, 2020-10-27T19:19:19.999Z, 00782A7E88A4],
     *   1: [],
     *   ...
     * };
     */
    let rfidTag = data.RFIDTag;
    if (!_.isUndefined(rfidTag) && _.size(rfidTag) > 0) {
      this.vitals.rfidTag = rfidTag[_.size(rfidTag) - 1][2];
      this.vitals.rfidTime = new Date(
        rfidTag[_.size(rfidTag) - 1][1]
      ).toLocaleTimeString('en-US');
    } else {
      this.vitals.rfidTag = null;
      this.vitals.rfidTime = null;
    }

    // Automator, AutomatorStage, AutomatorStageName
    if (_.isUndefined(data.Automator)) {
      this.vitals.automator = null;
    } else {
      this.vitals.automator = file.data.Automator;
    }

    if (_.isUndefined(data.CurrentAutomatorStage)) {
      this.vitals.automatorStage = null;
    } else {
      this.vitals.automatorStage = data.CurrentAutomatorStage;
    }

    if (_.isUndefined(data.CurrentAutomatorStageName)) {
      this.vitals.automatorStageName = null;
    } else {
      this.vitals.automatorStageName = data.CurrentAutomatorStageName;
    }

    // Battery, only supports current data format
    let battery = data.Battery;
    if (!_.isUndefined(battery) && _.size(battery) > 0) {
      this.vitals.batteryLeft = _.round(battery[_.size(battery) - 1][2] * 100);
      this.vitals.batteryUsed = _.round(
        battery[0][2] * 100 - this.vitals.batteryLeft
      );
    } else {
      this.vitals.batteryLeft = null;
      this.vitals.batteryUsed = null;
    }

    // Performance
    let numCorrect = 0;
    for (let i = 0; i < _.size(data.CorrectItem); i++) {
      if (data.CorrectItem[i] == data.Response[i]) {
        numCorrect++;
      }
    }

    this.vitals.numCorrect = numCorrect;
    this.vitals.pctCorrect = _.round((100 * numCorrect) / data.Response.length);

    if (!_.isUndefined(data.NReward)) {
      this.vitals.numReward = data.NReward.reduce((a: number, b: number) => {
        return a + b;
      }, 0);
    }

    this.vitals.rewardEstimate = 0;
    if (!_.isUndefined(data.RewardPer1000Trials)) {
      this.vitals.rewardEstimate = _.round(
        (data.RewardPer1000Trials * this.vitals.numReward) / 1000
      );
    }
  }

  private loadVitalsText(file: FileType) {
    this.elemObject.perfVitals.innerHTML = `${this.vitals.subject}: ${this.vitals.pctCorrect}% (n = ${this.vitals.numCorrect} out of ${this.vitals.trials}, r=${this.vitals.numReward}=${this.vitals.rewardEstimate}mL, ${this.vitals.time} mins)`;

    // TODO: add this.vitals.tagCount data
    this.elemObject.rfidVitals.innerHTML = `RFID: ${this.vitals.rfidTag} (${this.vitals.rfidTime})`;

    this.elemObject.batteryVitals.innerHTML = `Battery: ${this.vitals.batteryLeft}% (-${this.vitals.batteryUsed}%)`;

    this.elemObject.trialVitals.innerHTML = `Last Trial: ${file.dateSaved!.toLocaleTimeString(
      'en-US'
    )}`;
  }

  private loadTouchSDText() {
    try {
      this.screenPlotOptions.title = `Touch Locations -- standard dev: \n Fixation: ${
        Math.round(this.vitals.stdevFix * 10) / 10
      } pixels`;
      for (let i = 0; i < this.vitals.stdevTest.length; i++) {
        this.screenPlotOptions.title =
          this.screenPlotOptions.title +
          `\n Target ${i}: ${Math.round(this.vitals.stdevTest[i] * 10) / 10}`;
      }
    } catch (err) {
      console.error('Error loading touch SD text', err);
    }
  }

  private loadPerformanceData(file: FileType) {
    // Typechecking file.data
    let data;
    if (!_.isUndefined(file.data)) {
      data = file.data;
    } else {
      throw 'file.data is Undefined';
    }

    this.perfDataTable.removeRows(0, this.perfDataTable.getNumberOfRows());
    this.cumulDataTable.removeRows(0, this.cumulDataTable.getNumberOfRows());
    this.rxnTimeDataTable.removeRows(
      0,
      this.rxnTimeDataTable.getNumberOfRows()
    );
    this.xyPosDataTable.removeRows(0, this.xyPosDataTable.getNumberOfRows());

    // Create Data Table
    let xData = [];
    let yData: number[] = [];
    let yDataSmall = []; // keeps 5 recent
    let yDataLarge = []; // keeps 100 recent
    let numTotal = [];
    let numCorrect: number[] = [];
    let tCurrent = [];
    let numRFID = [];
    let xPos: number;
    let yPos: number;
    let touchevent: number[][] = [];
    let rt = [];

    // performance
    for (let i = 0; i < data.CorrectItem.length; i++) {
      if (data.CorrectItem[i] == data.Response[i]) {
        yData[i] = 1; // correct
      } else {
        yData[i] = 0; // incorrect
      }

      xData[i] = i;

      // Cumulative trials & correct trials
      numTotal[i] = xData.length;
      if (i > 0) {
        numCorrect[i] = numCorrect[i - 1] + yData[i];
      } else if (i == 0) {
        numCorrect[i] = yData[i];
      }
    }

    for (let i = 0; i < data.NReward.length; i++) {
      if (data.RewardStage == 0) {
        rt[i] = data.FixationXYT[2][i] - data.StartTime[i];
        this.rxnTimeDataTable.addRows([
          [file.data.FixationTouchEvent[i], rt[i]],
        ]);
      } else if (data.NRSVP > 0) {
        rt[i] = data.SampleFixationXYT[2][i] - data.SampleStartTime[i];
        this.rxnTimeDataTable.addRows([
          [data.SampleFixationTouchEvent[i], rt[i]],
        ]);
      } else {
        rt[i] = data.ResponseXYT[2][i] - data.SampleStartTime[i];
        if (data.Response[i] == -1) {
          this.rxnTimeDataTable.addRows([['timeout', data.ChoiceTimeOut]]);
        } else if (data.CorrectItem[i] == data.Response[i]) {
          this.rxnTimeDataTable.addRows([['correct', rt[i]]]);
        } else {
          this.rxnTimeDataTable.addRows([['wrong', rt[i]]]);
        }
      }
    }

    // console.log(rt);

    /**
     * Touch XY
     * Store fixation in odd indices and choice in even
     * All touchevents. touchevent has a length that is twice the length
     * of file.data.FixationXYT or file.data.ResponseXYT
     */
    if (
      !_.isUndefined(data.ResponseXYT) &&
      _.size(data.ResponseXYT) > 0 &&
      _.size(file.data.ResponseXYT[0]) > 0
    ) {
      for (let i = 0; i < _.size(data.FixationXYT[0]) * 2; i += 2) {
        touchevent[i] = [];
        touchevent[i + 1] = [];
        touchevent[i][0] = file.data.FixationXYT[0][i / 2];
        touchevent[i + 1][0] = file.data.ResponseXYT[0][i / 2];
        touchevent[i][1] = file.data.FixationXYT[1][i / 2];
        touchevent[i + 1][1] = file.data.ResponseXYT[1][i / 2];
      }
    } else {
      for (let i = 0; i < _.size(data.FixationXYT[0]) * 2; i += 2) {
        touchevent[i] = [];
        touchevent[i + 1] = [];
        touchevent[i][0] = file.data.FixationXYT[0][i / 2];
        touchevent[i + 1][0] = file.data.FixationXYT[0][i / 2];
        touchevent[i][1] = file.data.FixationXYT[1][i / 2];
        touchevent[i + 1][1] = file.data.FixationXYT[1][i / 2];
      }
    }

    // Sample & Test Boxes -- Draw them as a bounding box in the touch plot
    let numColumnXYPos = this.xyPosDataTable.getNumberOfColumns();
    let numColRealtime = this.realtimeDataTable.getNumberOfColumns();
    let sampleWidth = this.getSampleWidth(file.data);
    let sampleHeight = sampleWidth;
    let testWidth = this.getTestWidth(file.data);
    let testHeight = testWidth;

    // Fixation & Choice Boxes
    let fixationWidth = this.getFixationWidth(file.data, sampleWidth);
    let fixationHeight = fixationWidth;
    let choiceWidth = this.getChoiceWidth(file.data);
    let choiceHeight = choiceWidth;

    /**
     * NOTE for positioning elements:
     * grid x, y is offset || fixation & response x, y is not
     */

    // FIXATION
    let numDisplayElems = 1;
    // let xyPosArray = [];
    let fixX: number;
    let fixY: number;
    let maxFixationGridIndex = _.max(file.data.FixationGridIndex);
    if (_.isNumber(maxFixationGridIndex)) {
      fixX = file.data.XGridCenter[maxFixationGridIndex];
      fixY =
        file.data.ViewportPixels[1] -
        (file.data.YGridCenter[maxFixationGridIndex] + file.data.offsettop);
      // console.log('fixY', fixY);
    } else {
      throw 'data.FixationGridIndex is not of type number[]';
    }

    this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
      0: fixX - fixationWidth / 2,
      1: fixY - fixationHeight / 2,
    });
    this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
      0: fixX + fixationWidth / 2,
      1: fixY - fixationHeight / 2,
    });
    this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
      0: fixX + fixationWidth / 2,
      1: fixY + fixationHeight / 2,
    });
    this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
      0: fixX - fixationWidth / 2,
      1: fixY + fixationHeight / 2,
    });
    this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
      0: fixX - fixationWidth / 2,
      1: fixY - fixationHeight / 2,
    });

    if (!this.realtimeRowDataAdded && !this.realtimePlotActive) {
      console.log('realtime not active');
      this.rtData['fixation'] = {
        x: fixX,
        y: fixY,
        width: fixationWidth,
        height: fixationHeight,
      };
    }

    // SAMPLE
    numDisplayElems = 2;
    let sampleX: number;
    let sampleY: number;
    let maxSampleGridIndex = _.max(data.SampleGridIndex);

    if (data.RewardStage > 0) {
      if (_.isNumber(maxSampleGridIndex)) {
        sampleX = data.XGridCenter[maxSampleGridIndex];
        sampleY =
          data.ViewportPixels[1] -
          (data.YGridCenter[maxSampleGridIndex] + data.offsettop);
      } else {
        throw 'data.SampleGridIndex is not of type number[]';
      }
    } else {
      sampleX = fixX;
      sampleY = fixY;
    }

    this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
      0: sampleX - sampleWidth / 2,
      2: sampleY - sampleHeight / 2,
    });
    this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
      0: sampleX + sampleWidth / 2,
      2: sampleY - sampleHeight / 2,
    });
    this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
      0: sampleX + sampleWidth / 2,
      2: sampleY + sampleHeight / 2,
    });
    this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
      0: sampleX - sampleWidth / 2,
      2: sampleY + sampleHeight / 2,
    });
    this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
      0: sampleX - sampleWidth / 2,
      2: sampleY - sampleHeight / 2,
    });

    if (!this.realtimeRowDataAdded && !this.realtimePlotActive) {
      this.rtData['sample'] = {
        x: sampleX,
        y: sampleY,
        width: sampleWidth,
        height: sampleHeight,
      };
    }

    // TEST:
    let testX: number[] = [];
    let testY: number[] = [];

    if (data.RewardStage != 0) {
      for (let i = 0; i < _.size(data.TestGridIndex); i++) {
        // If Same-Different, only show the first test
        if (data.SameDifferent > 0 || data.NRSVP > 0) {
          break;
        }

        numDisplayElems++;
        if (data.NRSVP > 0) {
          testX.push(data.XGridCenter[maxSampleGridIndex as number]);
          testY.push(
            data.ViewportPixels[1] -
              (data.YGridCenter[maxSampleGridIndex as number] + data.offsettop)
          );
        } else {
          testX.push(data.XGridCenter[data.TestGridIndex[i]]);
          testY.push(
            data.ViewportPixels[1] -
              (data.YGridCenter[data.TestGridIndex[i]] + data.offsettop)
          );
        }

        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
          0: testX[i] - testWidth / 2,
          [numDisplayElems]: testY[i] - testHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
          0: testX[i] + testWidth / 2,
          [numDisplayElems]: testY[i] - testHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
          0: testX[i] + testWidth / 2,
          [numDisplayElems]: testY[i] + testHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
          0: testX[i] - testWidth / 2,
          [numDisplayElems]: testY[i] + testHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
          0: testX[i] - testWidth / 2,
          [numDisplayElems]: testY[i] - testHeight / 2,
        });

        if (!this.realtimeRowDataAdded && !this.realtimePlotActive) {
          let tmp = {
            x: testX[i],
            y: testY[i],
            width: testWidth,
            height: testHeight,
          };
          this.rtData['test'].push(tmp);
        }
      }
    }

    // CHOICE:
    let choiceX: number[] = [];
    let choiceY: number[] = [];

    if (data.RewardStage != 0 && data.SameDifferent > 0) {
      for (let i = 0; i < _.size(data.ChoiceGridIndex); i++) {
        numDisplayElems++;
        choiceX.push(data.XGridCenter[data.ChoiceGridIndex[i]]);
        choiceY.push(
          data.ViewportPixels[1] -
            (data.YGridCenter[data.ChoiceGridIndex[i]] + data.offsettop)
        );

        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
          0: choiceX[i] - choiceWidth / 2,
          [numDisplayElems]: choiceY[i] - choiceHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
          0: choiceX[i] + choiceWidth / 2,
          [numDisplayElems]: choiceY[i] - choiceHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
          0: choiceX[i] + choiceWidth / 2,
          [numDisplayElems]: choiceY[i] + choiceHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
          0: choiceX[i] - choiceWidth / 2,
          [numDisplayElems]: choiceY[i] + choiceHeight / 2,
        });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
          0: choiceX[i] - choiceWidth / 2,
          [numDisplayElems]: choiceY[i] - choiceHeight / 2,
        });

        // realtime not active
        if (!this.realtimeRowDataAdded && !this.realtimePlotActive) {
          this.rtData['choice'].push({
            x: choiceX[i],
            y: choiceY[i],
            width: choiceWidth,
            height: choiceHeight,
          });
        }
      }
    }
    this.realtimeRowDataAdded = true;

    let fixXPos: number[] = [];
    let fixYPos: number[] = [];
    let testXPos: number[][] = [];
    let testYPos: number[][] = [];
    let numTarget = [0, 0];

    for (let i = 0; i < touchevent.length; i++) {
      xPos = touchevent[i][0];
      yPos = data.ViewportPixels[1] - touchevent[i][1];

      let yDataIndex: number;
      if (i % 2 == 0) {
        yDataIndex = i / 2;
      } else {
        yDataIndex = (i - 1) / 2;
      }

      if (xPos != -1) {
        let arr = new Array(numColumnXYPos);
        arr[0] = xPos;

        if (i % 2 == 0) {
          fixXPos.push(xPos);
          fixYPos.push(yPos);

          if (yData[yDataIndex] == 1) {
            arr[numDisplayElems + 1] = yPos;
            this.xyPosDataTable.addRows([arr]);
          } else {
            arr[numDisplayElems + 2] = yPos;
            this.xyPosDataTable.addRows([arr]);
          }
        } else {
          let testXPosArr: number[] = [];
          let testYPosArr: number[] = [];

          for (let j = 0; j < _.size(data.TestGridIndex); j++) {
            if (data.Response[yDataIndex] == j) {
              testXPosArr.push(xPos);
              testYPosArr.push(yPos);
              numTarget[j] += 1;
            } else {
              testXPosArr.push(0);
              testYPosArr.push(0);
            }

            testXPos.push(testXPosArr);
            testYPos.push(testYPosArr);
          }

          if (yData[yDataIndex] == 1) {
            arr[numDisplayElems + 3] = yPos;
            this.xyPosDataTable.addRows([arr]);
          } else {
            arr[numDisplayElems + 4] = yPos;
            this.xyPosDataTable.addRows([arr]);
          }
        }
      }

      let meanFixXPos = _.mean(fixXPos);
      let meanFixYPos = _.mean(fixYPos);
      let distFixXPos = fixXPos.map((a: number) => {
        return Math.pow(Math.abs(a - meanFixXPos), 2);
      });
      let distFixYPos = fixYPos.map((a: number) => {
        return Math.pow(Math.abs(a - meanFixYPos), 2);
      });
      let stdevFix =
        distFixXPos
          .map((a: number, idx: number) => {
            return Math.sqrt(a + distFixYPos[idx]);
          })
          .reduce((a: number, b: number) => {
            return a + b;
          }, 0) / _.size(distFixXPos);
      this.vitals.stdevFix = stdevFix;

      let stdevTest: number[] = [];
      for (let j = 0; j < _.size(data.TestGridIndex); j++) {
        let allTestXPos = testXPos
          .map((a: number[]) => {
            return a[j];
          })
          .filter((a: number) => {
            return a != 0;
          });

        let meanTestXPos =
          allTestXPos.reduce((a: number, b: number) => {
            return a + b;
          }, 0) / _.size(allTestXPos);

        let distTestXPos = allTestXPos.map((a: number) => {
          return Math.pow(Math.abs(a - meanTestXPos), 2);
        });

        let allTestYPos = testYPos
          .map((a: number[]) => {
            return a[j];
          })
          .filter((a: number) => {
            return a != 0;
          });

        let meanTestYPos =
          allTestYPos.reduce((a: number, b: number) => {
            return a + b;
          }, 0) / _.size(allTestYPos);

        let distTestYPos = allTestYPos.map((a: number) => {
          return Math.pow(Math.abs(a - meanTestYPos), 2);
        });

        stdevTest.push(
          distTestXPos
            .map((a: number, i: number) => {
              return Math.sqrt(a + distTestYPos[i]);
            })
            .reduce((a: number, b: number) => {
              return a + b;
            }, 0) / _.size(allTestXPos)
        );
      }
      this.vitals.stdevTest = stdevTest;
    }

    yDataSmall = utils.smooth(yData, 5);
    yDataLarge = utils.smooth(yData, 100);

    // Calculate timeEnd
    let timeEnd: number;
    if (
      _.isUndefined(data.ResponseXYT) ||
      _.size(data.ResponseXYT) < 1 ||
      _.isUndefined(data.ResponseXYT[2][_.size(data.ResponseXYT[2]) - 1])
    ) {
      timeEnd = data.FixationXYT[2][_.size(data.FixationXYT[2]) - 1];
    } else {
      timeEnd = data.ResponseXYT[2][_.size(data.ResponseXYT[2]) - 1];
    }

    // RFID
    let numTrials = _.size(yData);
    let numReads = _.size(data.RFIDTag);
    numRFID = _.fill(Array(numTrials), 0);
    this.vitals.tagCount = {};

    for (let i = 0; i < numReads; i++) {
      if (_.isUndefined(this.vitals.tagCount[data.RFIDTag[i][2]])) {
        this.vitals.tagCount[data.RFIDTag[i][2]] = 0;
      }
      this.vitals.tagCount[data.RFIDTag[i][2]] += 1;
      numRFID[data.RFIDTag[i][0]] += 1;
    }

    for (let i = 1; i < _.size(numRFID); i++) {
      numRFID[i] = numRFID[i] + numRFID[i - 1];
    }

    // Adding rest of the data
    for (let i = 0; i < _.size(yData); i++) {
      let timeFix = data.FixationXYT[2][i]; // in milliseconds
      if (timeFix < 0) {
        continue;
      }

      let t = new Date(file.dateSaved!);
      t.setTime(t.getTime() - (timeEnd - timeFix));

      this.perfDataTable.addRows([[xData[i], yDataSmall[i], yDataLarge[i]]]);
      this.cumulDataTable.addRows([
        [t, numTotal[i], numCorrect[i], numRFID[i]],
      ]);
    }
    this.formatDate(this.cumulDataTable, 0);
  }

  private generateAndAddRowData(
    target: google.visualization.DataTable,
    numColumns: number,
    data: Record<number, number | string>
  ) {
    // console.log('data', data);
    let arr = [];
    for (let i = 0; i < numColumns; i++) {
      if (_.has(data, i)) {
        arr.push(data[i]);
      } else {
        arr.push(null);
      }
    }
    // console.log('arr:', arr);
    target.addRows([arr]);
  }

  // TODO: deal with case where SampleScenes[0].OBJECTS[firstKey].sizeInches is an
  // Array of arrays -- i.e. scene movie
  private getSampleWidth(fileData: LiveplotDataType) {
    let sampleWidth = 0;
    if (_.size(fileData.SampleScenes[0].IMAGES.imageidx) > 0) {
      if (_.isArray(fileData.SampleScenes[0].IMAGES.sizeInches)) {
        let maxSizeInches = _.max(fileData.SampleScenes[0].IMAGES.sizeInches);
        if (_.isNumber(maxSizeInches)) {
          sampleWidth = maxSizeInches * fileData.ViewportPPI;
        }
      } else {
        console.error(
          'SampleScenes[0].IMAGES.sizeInches is not an array. Please fix!'
        );
        sampleWidth =
          fileData.SampleScenes[0].IMAGES.sizeInches * fileData.ViewportPPI;
      }
    } else {
      let firstKey = _.findKey(fileData.SampleScenes[0].OBJECTS);
      if (_.isString(firstKey)) {
        let maxSizeInches = _.max(
          fileData.SampleScenes[0].OBJECTS[firstKey].sizeInches
        );
        if (_.isNumber(maxSizeInches)) {
          sampleWidth = maxSizeInches * fileData.ViewportPPI;
        }
      } else {
        console.error(
          'firstKey of SampleScenes[0].OBJECTS is not of type string'
        );
      }
    }
    return sampleWidth;
  }

  private getTestWidth(fileData: LiveplotDataType) {
    let testWidth = 0;

    if (fileData.TestScenes[0].IMAGES.imageidx.length > 0) {
      if (_.isArray(fileData.TestScenes[0].IMAGES.sizeInches)) {
        let maxSizeInches = _.max(fileData.TestScenes[0].IMAGES.sizeInches);
        if (_.isNumber(maxSizeInches)) {
          testWidth = maxSizeInches * fileData.ViewportPPI;
        } else {
          console.error(
            'TestScenes[0].IMAGES.sizeInches is not of type number'
          );
        }
      } else {
        console.error(
          'TestScenes[0].IMAGES.sizeInches is not an array. Please fix!'
        );
        testWidth =
          fileData.TestScenes[0].IMAGES.sizeInches * fileData.ViewportPPI;
      }
    } else {
      let firstKey = _.findKey(fileData.TestScenes[0].OBJECTS);
      if (_.isString(firstKey)) {
        let maxSizeInches = _.max(
          fileData.TestScenes[0].OBJECTS[firstKey].sizeInches
        );
        if (_.isNumber(maxSizeInches)) {
          testWidth = maxSizeInches * fileData.ViewportPPI;
        } else {
          console.error(
            'firstKey of TestScenes[0].OBJECTS is not of type string'
          );
        }
      }
    }

    if (!_.isUndefined(fileData.NRSVP) && fileData.NRSVP > 0) {
      testWidth = fileData.SampleFixationSizeInches * fileData.ViewportPPI;
    }

    return testWidth;
  }

  private getFixationWidth(fileData: LiveplotDataType, sampleWidth: number) {
    let fixationWidth = 0;

    if (fileData.FixationUsesSample <= 0) {
      fixationWidth = fileData.FixationSizeInches * fileData.ViewportPPI;
    } else {
      fixationWidth = sampleWidth;
    }
    return fixationWidth;
  }

  private getChoiceWidth(fileData: LiveplotDataType) {
    let choiceWidth = 0;
    if (!_.isUndefined(fileData.SameDifferent) && fileData.SameDifferent > 0) {
      choiceWidth = fileData.ChoiceSizeInches * fileData.ViewportPPI;
    }
    return choiceWidth;
  }

  private loadObjPerfData(data: LiveplotDataType) {
    this.objPerfDataTable.removeRows(
      0,
      this.objPerfDataTable.getNumberOfRows()
    );

    let lenSampleObj: number;
    if (data.RewardStage == 1) {
      let sampleObj = [];
      if (data.NTrialsPerBagBlock > 5000) {
        sampleObj.push(data.ImageBagsSample[0].split('/')[5]);
        this.objPerfDataTable.addRow([sampleObj[0], 0]);
        lenSampleObj = 1;
      } else {
        for (let i = 0; i < _.size(data.ImageBagsSample); i++) {
          sampleObj.push(data.ImageBagsSample[i].split('/')[5]);
          this.objPerfDataTable.addRow([sampleObj[i], 0]);
        }
        lenSampleObj = _.size(sampleObj);
      }

      let NDiffObjPerf = _.fill(Array(lenSampleObj), 0);
      let NDiffObj = _.fill(Array(lenSampleObj), 0);
      for (let i = 0; i < _.size(data.Sample[0]); i++) {
        // For i trials
        for (let j = 0; j < lenSampleObj; j++) {
          // If sample was that object
          if (data.SampleBagIdx[data.Sample[0][i]] == j) {
            NDiffObj[j] += 1;
            // If correct
            if (data.Response[i] == data.CorrectItem[i]) {
              NDiffObjPerf[j] += 1;
            }
          }
          this.objPerfDataTable.setValue(j, 1, NDiffObjPerf[j] / NDiffObj[j]);
        }
      }
    }
  }

  private loadChoiceData(data: LiveplotDataType) {
    this.choiceDataTable.removeRows(0, this.choiceDataTable.getNumberOfRows());

    if (data.RewardStage != 0) {
      // let possibleResp = _.fill(Array(_.size(data.ObjectGridIndex)), 0);
      let possibleResp = [];

      if (
        _.size(data.ObjectGridIndex) != 0 &&
        (_.isUndefined(data.NTrialsPerBagBlock) ||
          data.NTrialsPerBagBlock < 1000)
      ) {
        let objGridIndex = _.cloneDeep(data.ObjectGridIndex);
        objGridIndex.sort((a: number, b: number) => {
          return a - b;
        });
        let allind = [];
        for (let i = 0; i < _.size(objGridIndex); i++) {
          // allind.push(_.findIndex(data.ObjectGridIndex, objGridIndex[i]));
          allind.push(data.ObjectGridIndex.indexOf(objGridIndex[i]));
          this.choiceDataTable.addRow([
            data.ImageBagsSample[allind[i]].split('/')[5],
            0,
          ]);
          possibleResp.push(i);
        }
      } else {
        for (let i = 0; i < _.size(data.TestGridIndex); i++) {
          this.choiceDataTable.addRow(['choice' + (i + 1), 0]);
          possibleResp.push(i);
        }
      }

      let NDiffChoice = _.fill(Array(_.size(possibleResp)), 0);
      let NAllChoice = 0;

      for (let i = 0; i < _.size(data.Response); i++) {
        if (data.Response[i] != -1) {
          NAllChoice++;
        }

        for (let j = 0; j < _.size(possibleResp); j++) {
          if (data.Response[i] == possibleResp[j] && data.Response[i] != -1) {
            NDiffChoice[j]++;
          }
          this.choiceDataTable.setValue(j, 1, NDiffChoice[j] / NAllChoice);
        }
      }
    } else {
      this.choiceDataTable.addRow(['outside Fix', 0]);
      this.choiceDataTable.addRow(['inside Fix', 0]);

      let NDiffChoice = _.fill(Array(2), 0);
      let NAllChoice = 0;
      let yData = [];

      for (let i = 0; i < _.size(data.CorrectItem); i++) {
        if (data.CorrectItem[i] == data.Response[i]) {
          yData.push(1);
        } else {
          yData.push(0);
        }
      }

      for (let i = 0; i < _.size(yData); i++) {
        NAllChoice++;

        for (let j = 0; j < 2; j++) {
          if (yData[i] == j) {
            NDiffChoice[j] += 1;
          }
          this.choiceDataTable.setValue(j, 1, NDiffChoice[j] / NAllChoice);
        }
      }
    }
  }

  private loadRewardData(data: LiveplotDataType) {
    this.rewardDataTable.removeRows(0, this.rewardDataTable.getNumberOfRows());

    let nrewardArr: number[] = [];

    for (let i = 0; i <= data.NRewardMax; i++) {
      nrewardArr.push(0);
    }

    data.NReward.forEach((elem: number) => {
      nrewardArr[elem]++;
    });

    for (let i = 0; i < nrewardArr.length; i++) {
      this.rewardDataTable.addRow([i.toString(), nrewardArr[i]]);
    }
  }

  private loadHealthData(data: LiveplotDataType) {
    // console.log('[loadHealthData::fileData]', data);
    this.healthDataTable.removeRows(0, this.healthDataTable.getNumberOfRows());

    if (data.RewardStage > 0) {
      const lastIdx = Object.keys(data.TSequenceActualClip).length - 1;

      for (let i = 0; i < data.TSequenceActualClip[lastIdx].length; i++) {
        let dt: any;
        let dt2: any;
        let sampleCmdInterval: any;
        let sampleCmdOffInterval: any;
        let eyeTrackerSampleInterval: any;

        try {
          if (data.TSequenceActualClip[lastIdx][i] < 0) {
            dt = null;
          } else {
            dt =
              data.TSequenceActualClip[lastIdx][i] -
              data.TSequenceDesiredClip[lastIdx][i];
            dt = Math.abs(Math.round(dt));
          }
        } catch {
          dt = null;
        }

        try {
          if (data.TSequenceActualClip[1][i] < 0) {
            dt2 = null;
          } else {
            dt2 =
              data.TSequenceActualClip[1][i] - data.TSequenceDesiredClip[1][i];
            dt2 = Math.abs(Math.round(dt2));
          }
        } catch {
          dt2 = null;
        }

        try {
          if (
            data.SampleCommandReturnTime[i] == null ||
            data.SampleCommandReturnTime[i] < 0 ||
            data.SampleCommandReturnTime[i] === undefined
          ) {
            sampleCmdInterval = null;
          } else {
            sampleCmdInterval =
              data.SampleCommandReturnTime[i] - data.SampleStartTime[i];
          }
        } catch {
          sampleCmdInterval = null;
        }

        try {
          if (
            data.SampleCommandOffReturnTime[i] == null ||
            data.SampleCommandOffReturnTime[i] < 0 ||
            data.SampleCommandOffReturnTime[i] === undefined
          ) {
            sampleCmdOffInterval = null;
          } else {
            sampleCmdOffInterval =
              data.SampleCommandOffReturnTime[i] - data.EndTime[i];
          }
        } catch {
          sampleCmdOffInterval = null;
        }

        try {
          eyeTrackerSampleInterval = data.EyetrackerSampleInterval[i];
        } catch {
          eyeTrackerSampleInterval = null;
        }

        this.healthDataTable.addRows([
          [
            i,
            sampleCmdInterval,
            sampleCmdOffInterval,
            dt,
            dt2,
            eyeTrackerSampleInterval,
          ],
        ]);
      }
    }
  }

  private drawPerformancePlot(file: FileType) {
    let numRows = this.perfDataTable.getNumberOfRows();
    this.nTrials = numRows;
    let perfFilterState: any = this.perfFilter.getState();

    // updating perfFilter
    if (file.dataChanged && !file.fileChanged) {
      if (numRows <= 100) {
        // expand window size automatically up to 100
        perfFilterState.range.start = 0;
        perfFilterState.range.end = numRows;
      } else {
        let dTrials = numRows - _.size(file.data?.FixationGridIndex);
        console.log('dtrials', dTrials);
        perfFilterState.range.start = numRows - 100;
        perfFilterState.range.end = numRows;
      }
    } else if (file.fileChanged) {
      let dSlider = 100;
      perfFilterState.range.start = numRows - dSlider;
      perfFilterState.range.end = numRows;
      if (perfFilterState.range.start < 0) {
        perfFilterState.range.start = 0;
      }
    }

    this.perfPlot.setOptions(this.perfPlotOptions);
    this.perfFilter.setState({
      range: {
        start: perfFilterState.range.start,
        end: perfFilterState.range.end,
      },
    });
    this.perfDashboard.draw(this.perfDataTable);
  }

  private drawHealthPlot(file: FileType) {
    let numRows = this.healthDataTable.getNumberOfRows();
    // console.log('[drawHealthPlot::numRows]:', numRows);
    let healthFilterState: any = this.healthFilter.getState();
    // console.log('[drawHealthPlot::healthFilterState]:', healthFilterState);

    if (file.dataChanged && !file.fileChanged) {
      if (numRows <= 100) {
        healthFilterState.range.start = 0;
        healthFilterState.range.end = numRows;
      } else {
        healthFilterState.range.start = numRows - 100;
        healthFilterState.range.end = numRows;
      }
    } else if (file.fileChanged) {
      let dSlider = 100;
      healthFilterState.range.start = numRows - dSlider;
      healthFilterState.range.end = numRows;
      if (healthFilterState.range.start < 0) {
        healthFilterState.range.start = 0;
      }
    }

    this.healthPlot.setOptions(this.healthPlotOptions);
    this.healthFilter.setState({
      range: {
        start: healthFilterState.range.start,
        end: healthFilterState.range.end,
      },
    });
    this.healthDashboard.draw(this.healthDataTable);
  }

  private drawTrialPlot(file: FileType) {
    let trialFilterState: any = this.trialFilter.getState();
    let tmin = new Date(this.cumulDataTable.getColumnRange(0).min);
    let tmax = new Date(this.cumulDataTable.getColumnRange(0).max);

    if (file.dataChanged || file.fileChanged) {
      trialFilterState.range.start = tmin;
      trialFilterState.range.end = tmax;
    }

    this.trialFilter.setState({
      range: {
        start: trialFilterState.range.start,
        end: trialFilterState.range.end,
      },
    });
    this.trialPlot.setOptions(this.trialPlotOptions);
    this.trialDashboard.draw(this.cumulDataTable);
  }

  private drawObjPerfPlot() {
    this.objPerfPlot.draw(this.objPerfDataTable, this.objPerfPlotOptions);
  }

  private drawRxnTimePlot() {
    this.rxnPlot.draw(this.rxnTimeDataTable, this.rxnPlotOptions);
  }

  private drawChoicePlot() {
    this.choicePlot.draw(this.choiceDataTable, this.choicePlotOptions);
  }

  private drawRewardPlot() {
    this.rewardPlot.draw(this.rewardDataTable, this.rewardPlotOptions);
  }

  // private drawRealtimePlot(data: LiveplotDataType) {
  //   let idx = 0;
  //   this.realtimePlotOptions = {
  //     seriesType: 'scatter',
  //     width: data.workspace[2] * data.CanvasRatio,
  //     height: data.ViewportPixels[1] - data.offsettop,
  //     legend: {
  //       position: 'top',
  //     },
  //     hAxis: {
  //       title: 'X position (px)',
  //       viewWindow: {
  //         min: 0,
  //         max: data.workspace[2] * data.CanvasRatio,
  //       },
  //     },
  //     vAxis: {
  //       title: 'Y position (px)',
  //       viewWindow: {
  //         min: 0,
  //         max: data.ViewportPixels[1] - data.offsettop,
  //       },
  //     },
  //   };
  //   this.realtimePlotOptions.hAxis = {
  //     title: 'X position (px)',
  //     viewWindow: {
  //       min: 0,
  //       max: data.workspace[2] * data.CanvasRatio,
  //     },
  //   };
  //   this.realtimePlotOptions.vAxis = {
  //     title: 'Y position (px)',
  //     viewWindow: {
  //       min: 0,
  //       max: data.ViewportPixels[1] - data.offsettop,
  //     },
  //   };
  //   let numCol = this.realtimeDataTable.getNumberOfColumns();
  //   this.generateAndAddRowData(this.realtimeDataTable, numCol, {
  //     0: 0,
  //     [numCol - 2]: 0,
  //   });
  //   let numRows = this.realtimeDataTable.getNumberOfRows();

  //   this.realtimePlotConfig = {
  //     chartType: 'ComboChart',
  //     containerId: 'realtime-plot',
  //     options: this.realtimePlotOptions,
  //   };
  //   this.realtimePlot = new google.visualization.ChartWrapper(
  //     this.realtimePlotConfig
  //   );
  //   this.realtimePlot.setDataTable(this.realtimeDataTable);
  //   window.addEventListener('data_arrived', (evt: CustomEventInit) => {
  //     if (idx % 2 == 0) {
  //       this.realtimeDataTable.setValue(
  //         numRows - 1,
  //         0,
  //         Math.floor(evt.detail.x)
  //       );
  //       this.realtimeDataTable.setValue(
  //         numRows - 1,
  //         numCol - 2,
  //         Math.floor(evt.detail.y)
  //       );
  //       this.realtimePlot.draw();
  //     }
  //   });
  // }

  private drawStaticElements(
    cvs: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D | null,
    data: LiveplotDataType,
    evt: CustomEventInit
  ) {
    if (ctx) {
      ctx.fillStyle = 'gray';
      ctx.fillRect(
        0,
        0,
        data.workspace[2] * data.CanvasRatio,
        data.ViewportPixels[1] - data.offsettop
      );

      for (let idx in evt.detail.boundingBoxes) {
        let width =
          evt.detail.boundingBoxes[idx]['x_1'] -
          evt.detail.boundingBoxes[idx]['x_0'];
        let height =
          evt.detail.boundingBoxes[idx]['y_1'] -
          evt.detail.boundingBoxes[idx]['y_0'];
        ctx.beginPath();
        ctx.rect(
          _.floor(evt.detail.boundingBoxes[idx]['x_0']),
          _.floor(cvs.height - evt.detail.boundingBoxes[idx]['y_0']),
          width,
          -height
        );
        ctx.stroke();
      }
    }
  }

  private drawRealtimePlot2(data: LiveplotDataType) {
    let cvs = document.querySelector('#realtime-canvas') as HTMLCanvasElement;
    cvs.width = data.workspace[2] * data.CanvasRatio;
    cvs.height = data.ViewportPixels[1] - data.offsettop;
    let ctx = cvs.getContext('2d') as CanvasRenderingContext2D;
    const longerAxis = cvs.width > cvs.height ? cvs.width : cvs.height;

    // const realtimeOnData =
    window.addEventListener('data_arrived', (evt: CustomEventInit) => {
      console.log('LONGER AXIS:', longerAxis);
      if (evt.detail.meta == 2) {
        this.drawStaticElements(cvs, ctx, data, evt);
      }

      if (evt.detail.meta == 1 || evt.detail.meta == 0) {
        const x = _.floor(evt.detail.x);
        const y = _.floor(cvs.height - evt.detail.y);
        console.log('X:', x, 'Y:', y);
        const xQuantity = x - this.prevCoord.x;
        const xSquared = Math.pow(xQuantity, 2);
        const yQuantity = y - this.prevCoord.y;
        const ySquared = Math.pow(yQuantity, 2);
        const dist = Math.sqrt(xSquared + ySquared);
        console.log('DIST:', dist);
        console.log('xQuantity:', xQuantity, 'yQuantity:', yQuantity);
        console.log('xSquared:', xSquared, 'ySquared:', ySquared);
        console.log(
          'prevCoordX:',
          this.prevCoord.x,
          'prevCoordY:',
          this.prevCoord.y
        );

        if (dist > longerAxis * 0.015) {
          if (this.prevColorIdx == 14) {
            this.prevColorIdx = 0;
          } else {
            this.prevColorIdx++;
          }
        }

        ctx.fillStyle = rtColorMap[this.prevColorIdx];
        ctx?.beginPath();
        ctx?.arc(x, y, 2, 0, Math.PI * 2, true);
        ctx?.fill();

        this.prevCoord.x = x;
        this.prevCoord.y = y;
      }
    });
  }

  private drawScreenPlot(data: LiveplotDataType, screenActive: boolean) {
    this.screenPlotOptions.series = [];
    for (let i = 0; i < this.xyPosDataTable.getNumberOfColumns(); i++) {
      if (this.xyPosDataTable.getColumnLabel(i) == 'Fixation') {
        this.screenPlotOptions.series[i - 1] = { type: 'line', color: 'gray' };
      } else if (this.xyPosDataTable.getColumnLabel(i) == 'Sample') {
        this.screenPlotOptions.series[i - 1] = { type: 'line', color: 'black' };
      } else if (this.xyPosDataTable.getColumnLabel(i) == 'Same') {
        this.screenPlotOptions.series[i - 1] = { type: 'line', color: 'green' };
      } else if (this.xyPosDataTable.getColumnLabel(i) == 'Different') {
        this.screenPlotOptions.series[i - 1] = { type: 'line', color: 'red' };
      } else if (this.xyPosDataTable.getColumnLabel(i) == 'Fix_Reward') {
        this.screenPlotOptions.series[i - 1] = { color: 'blue' };
      } else if (this.xyPosDataTable.getColumnLabel(i) == 'Fix_Punish') {
        this.screenPlotOptions.series[i - 1] = { color: 'red' };
      } else if (this.xyPosDataTable.getColumnLabel(i) == 'Target_Reward') {
        this.screenPlotOptions.series[i - 1] = { color: 'green' };
      } else if (this.xyPosDataTable.getColumnLabel(i) == 'Target_Punish') {
        this.screenPlotOptions.series[i - 1] = { color: 'black' };
      } else if (this.xyPosDataTable.getColumnLabel(i).includes('Test')) {
        this.screenPlotOptions.series[i - 1] = { type: 'line', color: 'black' };
      }
    }

    this.screenPlotOptions.height = data.ViewportPixels[1];
    this.screenPlotOptions.width = data.ViewportPixels[0];
    this.screenPlotOptions.hAxis = {
      title: 'X position (px)',
      viewWindow: {
        min: 0,
        max: data.ViewportPixels[0],
      },
    };
    this.screenPlotOptions.vAxis = {
      title: 'Y position (px)',
      viewWindow: {
        min: 0,
        max: data.ViewportPixels[1],
      },
    };
    if (!this.realtimePlotActive) {
      this.screenPlot.draw(this.xyPosDataTable, this.screenPlotOptions);
    }
  }

  private formatDate(
    data: google.visualization.DataTable,
    colIdx: number
  ): void {
    let formatter = new google.visualization.DateFormat({
      pattern: 'h aa',
    });
    formatter.format(data, colIdx);
  }

  private formatNumber(data: google.visualization.DataTable, colIdx: number) {
    let formatter = new google.visualization.NumberFormat({
      fractionDigits: 2,
    });
    formatter.format(data, colIdx);
  }

  private formatColor(data: google.visualization.DataTable, colIdx: number) {
    let formatter = new google.visualization.ColorFormat();
    let dx = 1 / (colorMapJet.length - 1);
    for (let i = 0; i < colorMapJet.length; i++) {
      formatter.addRange(i * dx, (i + 1) * dx, 'gray', colorMapJet[i]);
    }
    formatter.format(data, colIdx);
  }
}
