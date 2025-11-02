import { promises as fsPromises } from "node:fs";
import path from "node:path";

/**
 * Create new directory in current working directory
 */
export const mkdir = async (newDirectoryName) => {
  const dirPath = path.join(process.cwd(), newDirectoryName);

  try {
    await fsPromises.mkdir(dirPath);
  } catch (error) {
    console.log("Operation failed");
  }
};
