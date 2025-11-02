import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import path from "node:path";

/**
 * Calculates hash for file and prints it into console
 */
export const hash = (pathToFile) => {
  try {
    const hash = createHash("sha256");
    const filePath = path.resolve(process.cwd(), pathToFile);
    const stream = createReadStream(filePath);

    stream.on("data", (chunk) => {
      hash.update(chunk);
    });

    stream.on("end", () => {
      console.log(hash.digest("hex"));
    });

    stream.on("error", (chunk) => {
      console.log("Operation failed");
    });
  } catch (error) {
    console.log("Operation failed");
  }
};
