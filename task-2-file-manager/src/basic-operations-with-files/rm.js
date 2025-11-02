import { promises as fsPromises } from "node:fs";
import path from "node:path";
/**
 * Delete file
 */
export const rm = async (pathToFile) => {
  try {
    await fsPromises.unlink(path.resolve(process.cwd(), pathToFile));
  } catch (error) {
    console.log("Operation failed");
  }
};
