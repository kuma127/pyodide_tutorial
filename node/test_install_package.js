// test_install_package.js
const { loadPyodide } = require("pyodide");

async function install_package() {
  let pyodide = await loadPyodide();
  await pyodide.loadPackage("micropip");
  const micropip = pyodide.pyimport("micropip");
  await micropip.install('snowballstemmer');
  return pyodide.runPython(`
    import snowballstemmer
    stemmer = snowballstemmer.stemmer('english')
    print(stemmer.stemWords('go goes going gone'.split()))
  `);
}

install_package().then(() => {});
