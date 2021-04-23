import pyautogui
import time

# 2초동안 쉬기
time.sleep(2)

# 좌표 객체 얻기
position = pyautogui.position()

# x, y좌표 확인
print(position.x)
print(position.y)