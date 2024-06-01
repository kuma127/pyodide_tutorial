import math
import calendar


def test_sqrt():
    print(math.sqrt(2.0))


def test_calendar():
    calendar.prmonth(2024, 6)


def calc_distance(x1, y1, x2, y2):
    # ２点間の距離を求める
    diff_x = x1 - x2
    diff_y = y1 - y2

    return math.sqrt(diff_x**2 + diff_y**2)
