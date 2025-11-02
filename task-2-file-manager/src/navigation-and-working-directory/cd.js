/**
 * Go to dedicated folder from current directory (path_to_directory can be relative or absolute)
 */
export const cd = (path) => {
  try {
    process.chdir(path);
  } catch (error) {
    console.log("Operation failed");
  }
};
