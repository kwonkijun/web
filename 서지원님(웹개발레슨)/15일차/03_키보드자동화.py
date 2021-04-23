import pyautogui
import pyperclip

pyautogui.moveTo(441,207,1)
pyautogui.click()

# 문자입력
pyautogui.write("i'am a robot!", interval=0.1)

# 키보드 키입력
pyautogui.press('enter')
pyautogui.write("automatic program", interval=0.1)

# 한글입력
# 클립보드에 복사
pyperclip.copy("한글입력해보자")

# 붙여넣기
pyautogui.keyDown("ctrl")
pyautogui.press("v")
pyautogui.keyUp("ctrl")