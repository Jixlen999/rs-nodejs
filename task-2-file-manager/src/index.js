import os from "node:os";
import { up } from "./navigation-and-working-directory/up.js";
import { cd } from "./navigation-and-working-directory/cd.js";
import { ls } from "./navigation-and-working-directory/ls.js";
import { cat } from "./basic-operations-with-files/cat.js";
import { add } from "./basic-operations-with-files/add.js";
import { mkdir } from "./basic-operations-with-files/mkdir.js";
import { rn } from "./basic-operations-with-files/rn.js";
import { cp } from "./basic-operations-with-files/cp.js";
import { mv } from "./basic-operations-with-files/mv.js";
import { rm } from "./basic-operations-with-files/rm.js";
import { getOsProperties } from "./operating-system-info/os.js";
import { hash } from "./hash-calculation/hash.js";
import { compress } from "./compress-and-decompress-operations/compress.js";
import { decompress } from "./compress-and-decompress-operations/decompress.js";

const getUserNameArg = () =>
  process.argv.find((arg) => arg.startsWith("--username="))?.split("=")[1];

const printCurrentDir = () => {
  console.log(`You are currently in ${process.cwd()}`);
};

const startFileManager = async () => {
  const userName = getUserNameArg();

  if (!userName) {
    console.log("Invalid input");
    console.log(
      "You haven't passed username arg. Please, try again starting the program using command in fromat 'npm run start -- --username=your_username'"
    );
    return;
  }

  process.chdir(os.homedir());

  console.log(`Welcome to the File Manager, ${userName}!`);
  printCurrentDir();

  process.on("SIGINT", () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit(0);
  });

  process.stdin.setEncoding("utf8");
  process.stdin.on("data", async (chunk) => {
    const trimmedInput = chunk.trim();
    const userCommand = trimmedInput.split(" ")[0];
    const firstArg = trimmedInput.split(" ")[1];
    const secondArg = trimmedInput.split(" ")[2];

    if (trimmedInput === ".exit") {
      console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
      process.exit(0);
    }

    switch (userCommand) {
      case "up":
        up();
        break;
      case "cd":
        if (!firstArg) {
          console.log("Invalid input");
          break;
        }
        cd(firstArg);
        break;
      case "ls":
        ls();
        break;
      case "cat":
        if (!firstArg) {
          console.log("Invalid input");
          break;
        }
        cat(firstArg);
        break;
      case "add":
        if (!firstArg) {
          console.log("Invalid input");
          break;
        }
        add(firstArg);
        break;
      case "mkdir":
        if (!firstArg) {
          console.log("Invalid input");
          break;
        }
        mkdir(firstArg);
        break;
      case "rn":
        if (!firstArg || !secondArg) {
          console.log("Invalid input");
          break;
        }
        rn(firstArg, secondArg);
        break;
      case "cp":
        if (!firstArg || !secondArg) {
          console.log("Invalid input");
          break;
        }
        cp(firstArg, secondArg);
        break;
      case "mv":
        if (!firstArg || !secondArg) {
          console.log("Invalid input");
          break;
        }
        mv(firstArg, secondArg);
        break;
      case "rm":
        if (!firstArg) {
          console.log("Invalid input");
          break;
        }
        rm(firstArg);
        break;
      case "os":
        if (!firstArg) {
          console.log("Invalid input");
          break;
        }
        getOsProperties(firstArg);
        break;
      case "hash":
        if (!firstArg) {
          console.log("Invalid input");
          break;
        }
        hash(firstArg);
        break;
      case "compress":
        if (!firstArg || !secondArg) {
          console.log("Invalid input");
          break;
        }
        compress(firstArg, secondArg);
        break;
      case "decompress":
        if (!firstArg || !secondArg) {
          console.log("Invalid input");
          break;
        }
        decompress(firstArg, secondArg);
        break;
      default:
        console.log("Invalid input");
    }

    printCurrentDir();
  });
};

startFileManager();
