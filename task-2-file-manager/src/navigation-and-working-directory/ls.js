import { promises as fsPromises } from "node:fs";
import path from "node:path";

/**
 * Print in console list of all files and folders in current directory. List should contain:
 * - list should contain files and folder names (for files - with extension)
 * - folders and files are sorted in alphabetical order ascending, but list of folders goes first
 * - type of directory content should be marked explicitly (e.g. as a corresponding column value)
 */
export const ls = async () => {
  try {
    const files = await fsPromises.readdir(process.cwd());

    const filesInfo = await Promise.all(
      files.map(async (file) => {
        const type = (
          await fsPromises.stat(path.join(process.cwd(), file))
        ).isDirectory()
          ? "directory"
          : "file";
        return { Name: file, Type: type };
      })
    );

    console.table(
      filesInfo.sort((a, b) => {
        if (a.Type === b.Type) return a.Name.localeCompare(b.Name);
        return a.Type === "directory" ? -1 : 1;
      })
    );
  } catch (error) {
    console.log("Operation failed");
  }
};
