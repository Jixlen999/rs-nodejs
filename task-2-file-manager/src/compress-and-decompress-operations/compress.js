import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream";
import { createBrotliCompress } from "node:zlib";

/**
 * Compress file (using Brotli algorithm, should be done using Streams API)
 */
export const compress = async (pathToFile, pathToDestination) => {
  try {
    const absolutePathToFile = path.resolve(process.cwd(), pathToFile);
    const absolutePathToDestination = path.resolve(
      process.cwd(),
      pathToDestination
    );

    const readStream = createReadStream(absolutePathToFile);
    const writeStream = createWriteStream(absolutePathToDestination);

    readStream.pipe(createBrotliCompress()).pipe(writeStream);

    readStream.on("error", (error) => console.log("Operation failed"));
    writeStream.on("error", (error) => console.log("Operation failed"));
  } catch (error) {
    console.log("Operation failed");
  }
};
