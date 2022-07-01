mkturk_imagebuffer.js
class ImageBuffer {
  private cache_dict: any;
  private num_elements_in_cache: number;
  private max_buffer_size: number;

  public get_by_name(filename) {}
  public remove_image_from_cache(filename) {} // deprecated
  public clear_cache() {} // deprecated
  public cache_these_images(imagenames) {}
}

mkturk_automator.js
class Automator {
  public automateTask(automator_data, trialhistory) {}
  public stageHash(task) {}
  public readTrialHistoryFromFirebase(filepaths) {}
  private computeRunningHistory(mintrials, current_stage, history_trainingstage, history_corrects)
}

mkturk_bigquery.js
class BigQuery {
  public pingBigQueryEyeTable() {}
  public pingBigQueryDisplayTimesTable() {}
  private saveEyeDatatoBigQuery() {}
  private saveDisplayTimestoBigQuery() {}
}

mkturk_bluetooth.js // may not be necessary for now
class Bluetooth {
  public ble: any; // mkturk_utils.js and index.js needs access

}

mkturk_bluetoothscale.js // may not be necessary for now





