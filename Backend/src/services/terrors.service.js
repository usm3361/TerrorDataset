import fs from "fs/promises";
import path from "path";
import csv from "async-csv";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const CSV_PATH = path.join(dirname, "..", "data", "terrorData.csv");
const RESULTS_PATH = path.join(dirname, "..", "score.json");



export const readData = async () => {
  try {
    const csvString = await fs.readFile(CSV_PATH, "utf-8");

    const rows = await csv.parse(csvString, { columns: true });
    return rows.slice(0, 50);
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const writeScore = async (score) => {
  try {
    const result = {
      data: new Date().toString(),
      score: score,
    };

    let results = [];

    try {
      const existingData = await fs.readFile(RESULTS_PATH, "utf-8");
      results = JSON.parse(existingData);
    } catch (error) {
      results = [];
    }
    results.push(result);

    await fs.writeFile(RESULTS_PATH, JSON.stringify(results, null, 2), "utf-8");
    return result;
  } catch (error) {
    throw new Error(`Error saving test result: ${error.message}`);
  }
};
