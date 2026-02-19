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
    return rows.slice(0, 51);
  } catch (err) {
    console.log(err);
    return [];
  }
};




export const writeScore = async (result) => {
  await fs.writeFile(RESULTS_PATH, JSON.stringify(result));
};

