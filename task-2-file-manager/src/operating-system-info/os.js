import os from "node:os";

/**
 * - Get EOL (default system End-Of-Line) and print it to console
 * - Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console
 * - Get home directory and print it to console
 * - Get current system user name and print it to console
 * - Get CPU architecture for which Node.js binary has compiled and print it to console
 */
export const getOsProperties = (arg) => {
  const command = arg.slice(2);

  switch (command) {
    case "eol":
      console.log(JSON.stringify(os.EOL));
      break;
    case "cpus":
      console.log("CPUs amount: ", os.cpus().length);
      const cpusInfo = os.cpus().map((cpu) => {
        const speedGHz = (cpu.speed / 1000).toFixed(2);
        return { Model: cpu.model, "Clock Rate (in GHz)": speedGHz };
      });
      console.table(cpusInfo);
      break;
    case "homedir":
      console.log("Home dir: ", os.homedir());
      break;
    case "username":
      console.log("User name: ", os.userInfo().username);
      break;
      "";
    case "architecture":
      console.log("Architecture: ", os.arch());
      break;
    default:
      console.log("Invalid input");
  }
};
