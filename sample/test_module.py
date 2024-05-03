import numpy as np


def hello_pyodide():
    print('hello pyodide!')


def hello_numpy():
    a = np.array([1, 2, 3])
    b = 2

    c = a * b
    return c
