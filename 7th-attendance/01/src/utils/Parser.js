import * as fs from 'fs';
import path from 'path';
import AttendanceManager from '../model/AttendanceManager.js';

export class CSVParser {
  static parseToArr(csvPath) {
    const arr = fs
      .readFileSync(csvPath)
      .toString() // convert Buffer to string
      .split('\n') // split string to lines
      .map((e) => e.trim()) // remove white spaces for each line
      .map((e) => e.split(',').map((e) => e.trim())); // split each line to array

    arr.shift();
    arr.pop();

    return arr;
  }

  static readCSV() {
    const __dirname = path.resolve();
    const csvPath = path.join(__dirname, '.', 'public', 'attendances.csv');
    return csvPath;
  }

  static getAttendanceRecord() {
    const path = CSVParser.readCSV();
    const result = CSVParser.parseToArr(path);

    return result;
  }
}
