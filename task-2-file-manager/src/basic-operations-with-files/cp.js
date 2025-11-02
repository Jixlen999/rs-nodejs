import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import { promises as fsPromises } from "node:fs";

/**
 * Copy file (should be done using Readable and Writable streams)
 */
export const cp = async (pathToFile, pathToNewDirectory) => {
  const absolutePathToFile = path.resolve(process.cwd(), pathToFile);
  const absolutePathToNewDirectory = path.resolve(
    process.cwd(),
    pathToNewDirectory,
    path.basename(pathToFile)
  );

  try {
    await fsPromises.access(absolutePathToFile);
    const readStream = createReadStream(absolutePathToFile);
    const writeStream = createWriteStream(absolutePathToNewDirectory);

    readStream.on("error", (err) => {
      console.log("Operation failed");
      writeStream.close();
    });

    writeStream.on("error", (err) => console.log("Operation failed"));

    readStream.pipe(writeStream);
  } catch (error) {
    console.log("Operation failed");
  }
};
