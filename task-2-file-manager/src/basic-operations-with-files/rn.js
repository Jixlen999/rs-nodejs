import { promises as fsPromises } from "node:fs";
import path from "node:path";

/**
 * Rename file (content should remain unchanged)
 */
export const rn = async (pathToFile, newFileName) => {
  const initialFile = path.join(process.cwd(), pathToFile);
  const finalFile = path.join(path.dirname(initialFile), newFileName);

  try {
    await fsPromises.access(initialFile);

    try {
      await fsPromises.access(finalFile);
      console.log("Operation failed");
      return;
    } catch (error) {
      await fsPromises.rename(initialFile, finalFile);
    }
  } catch (error) {
    console.log(error);
    console.log("Operation failed");
  }
};
