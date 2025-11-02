import os from "node:os";
import path from "node:path";

/**
 * Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)
 */
export const up = () => {
  try {
    if (process.cwd() !== os.homedir()) {
      const parent = path.dirname(process.cwd());
      process.chdir(parent);
    }
  } catch (error) {
    console.log("Operation failed");
  }
};
