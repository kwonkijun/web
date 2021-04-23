import requests
from bs4 import BeautifulSoup
import pyautogui

# 메세지박스
keyword = pyautogui.prompt(text="검색어를 입력하세요")

# 요청하기 
response = requests.get(f"https://kin.naver.com/search/list.nhn?query={keyword}")

# 응답코드 200: 성공 404 : 페이지 없음 500: 서버다운
print(response.status_code)

# 통신이 정상적으로 이루어 지지 않으면 오류발생
response.raise_for_status()

# html 코드 가져오기
html = response.text

# Beautifulsoup로 번역하기
soup = BeautifulSoup(html, 'html.parser')

# 지식인 날짜, 제목, 본문 10개 가져와서 출력하기

# 글을 담고 있는 li 태그 스크래핑
lis = soup.select("ul.basic1 > li")

i = 1
# 글 한개씩 접근하기 
for li in lis:
    date = li.select_one("dl > dd.txt_inline").get_text()
    title = li.select_one("dl > dt > a").get_text()
    content = li.select_one("dl > dd:nth-of-type(2)").get_text()
    print(f'{i}. {date}\n제목 :{title}\n본문 :{content}')
    i += 1
