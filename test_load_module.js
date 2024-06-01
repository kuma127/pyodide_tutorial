const { loadPyodide } = require("pyodide");

async function hello_python() {
  let pyodide = await loadPyodide();
  await pyodide.loadPackage("./dist/sample-0.0.0-py3-none-any.whl");
  await pyodide.loadPackage("micropip");
  const micropip = pyodide.pyimport("micropip");
  await micropip.install('numpy');
  await micropip.install('matplotlib');
  await pyodide.runPython(`
    from sample import test_module
    print(test_module.show_image())
  `);
}
  
hello_python().then(() => {});
