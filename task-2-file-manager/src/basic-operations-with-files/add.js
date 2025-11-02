import { promises as fsPromises } from "node:fs";
import path from "node:path";

/**
 * Create empty file in current working directory
 */
export const add = async (newFileName) => {
  const filePath = path.join(process.cwd(), newFileName);

  try {
    await fsPromises.access(filePath);
    console.log("Operation failed");
  } catch {
    await fsPromises.writeFile(filePath, "");
  }
};
