import numpy as np
import matplotlib.pyplot as plt
# import io
# import requests
# import PIL.Image


def hello_pyodide():
    print('hello pyodide!')


def hello_numpy():
    a = np.array([1, 2, 3])
    b = 2

    c = a * b
    return c


# def get_image():
#     response = requests.get("https://www.python.jp/logo.png")
#     PIL.Image.open(io.BytesIO(response.content))

def show_image():
    x_values = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June']
    y_values = [100, 130, 80, 150, 140, 130]

    plt.bar(x_values, y_values)
    plt.plot()

    plt.show()
