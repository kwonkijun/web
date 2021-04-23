import pyautogui

# 마우스이동 (x, y, 초)
pyautogui.moveTo(981,91,1)

# 마우스클릭 
pyautogui.click(clicks=2, interval=1)

pyautogui.moveTo(420,493,1)

# 드래그하기
pyautogui.drag(0, 300, 1, button='left')
pyautogui.drag(300, 0, 1, button='left')
pyautogui.drag(0, -300, 1, button='left')
pyautogui.drag(-300, 0, 1, button='left')