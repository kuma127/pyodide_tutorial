const { loadPyodide } = require("pyodide");

async function hello_python() {
  let pyodide = await loadPyodide();
  await pyodide.loadPackage("./dist/sample-0.0.0-py3-none-any.whl");
  await pyodide.loadPackage("micropip");
  const micropip = pyodide.pyimport("micropip");
  await micropip.install('numpy');
  await pyodide.runPython(`
import random
import math
from sample import test_math
test_math.test_sqrt()

suika_x = random.randrange(0, 5)  # スイカのx座標
suika_y = random.randrange(0, 5)  # スイカのy座標

player_x = random.randrange(0, 5) # プレイヤーのx座標
player_y = random.randrange(0, 5) # プレイヤーのy座標

# スイカとプレイヤーの位置が異なる間、処理を繰り返す
while (suika_x != player_x) or (suika_y != player_y):

    # スイカとプレイヤーの距離を表示する
    distance = test_math.calc_distance(player_x, player_y, suika_x, suika_y)
    print("スイカへの距離:", distance)
    
    # キー入力に応じて、プレイヤーを移動する
    c = input("n:北に移動 s:南に移動 e:東に移動 w:西に移動")
    if c == "n":
        player_y = player_y - 1
    elif c == "s":
        player_y = player_y + 1
    elif c == "w":
        player_x = player_x - 1
    elif c == "e":
        player_x = player_x + 1

print("スイカを割りました！")
  `);
}
  
hello_python().then(() => {});
