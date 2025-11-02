import { cp } from "./cp.js";
import { rm } from "./rm.js";
import { promises as fsPromises } from "node:fs";
import path from "node:path";

/**
 * Move file (same as copy but initial file is deleted, copying part should be done using Readable and Writable streams)
 */
export const mv = async (pathToFile, pathToNewDirectory) => {
  const absolutePathToFile = path.resolve(process.cwd(), pathToFile);
  try {
    await fsPromises.access(absolutePathToFile);
    await cp(pathToFile, pathToNewDirectory);
    await rm(pathToFile);
  } catch (error) {
    console.log("Operation failed");
  }
};
