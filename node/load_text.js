// hello_python.js
const { loadPyodide } = require("pyodide");

async function hello_python() {
  let pyodide = await loadPyodide();
  pyodide.runPython(`
  with open("/hello.txt", "w") as fh:
      fh.write("hello world!")
  `);
  return pyodide.FS.readFile("/hello.txt", { encoding: "utf8" });
}

hello_python().then((result) => {
  console.log(result);
});
