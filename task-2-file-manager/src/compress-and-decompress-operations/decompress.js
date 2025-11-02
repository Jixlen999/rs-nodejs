import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream";
import { createBrotliDecompress } from "node:zlib";

/**
 * Decompress file (using Brotli algorithm, should be done using Streams API)
 */
export const decompress = async (pathToFile, pathToDestination) => {
  const absolutePathToFile = path.resolve(process.cwd(), pathToFile);
  const readStream = createReadStream(absolutePathToFile);
  const writeStream = createWriteStream(pathToDestination);

  await pipeline(readStream, createBrotliDecompress(), writeStream);
};
