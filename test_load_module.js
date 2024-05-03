const { loadPyodide } = require("pyodide");

async function hello_python() {
  let pyodide = await loadPyodide();
  await pyodide.loadPackage("./dist/sample-0.0.0-py3-none-any.whl");
  await pyodide.loadPackage("numpy");
  await pyodide.runPython(`
    from sample import test_module
    print(test_module.hello_numpy())
  `);
}
  
hello_python().then(() => {});
