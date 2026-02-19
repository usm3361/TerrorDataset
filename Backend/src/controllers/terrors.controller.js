import * as terrorsService from "../services/terrors.service.js";

export const createT = async (req, res) => {
  try {
    const rowsData = await terrorsService.readData();
    if (!rowsData) {
      throw new Error({ msg: "not found data" });
    }
    return res.status(201).json({ headerTable, row });
  } catch (error) {
    console.log(error);
  }
};

export const createTest = async (req, res) => {
  const rowsData = await terrorsService.readData();
  
};
