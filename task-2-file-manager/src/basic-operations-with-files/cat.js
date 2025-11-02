import { createReadStream } from "fs";
import path from "node:path";

/**
 * Read file and print it's content in console (should be done using Readable stream)
 */
export const cat = (filePath) => {
  const absoluteFilePath = path.resolve(process.cwd(), filePath);
  const stream = createReadStream(absoluteFilePath, { encoding: "utf8" });

  stream.on("error", (err) => {
    console.log("Operation failed");
  });

  stream.pipe(process.stdout);
};
