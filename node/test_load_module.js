const { loadPyodide } = require("pyodide");

async function hello_python() {
  let pyodide = await loadPyodide();
  // Downloading a single file
  //TODO: test_moduleをパッケージ化する
  pyodide.runPythonAsync(`
      from pyodide.http import pyfetch
      response = await pyfetch("/python_package/test_module.py")
      with open("test_module.py", "wb") as f:
          f.write(await response.bytes())
  `)
  pkg = pyodide.pyimport("test_module");
  return pkg.test_print();
}
  
hello_python().then((result) => {
  console.log("Python says that 1+1 =", result);
});
