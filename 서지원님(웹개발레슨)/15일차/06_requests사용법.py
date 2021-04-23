import requests
from bs4 import BeautifulSoup

# 요청하기 
response = requests.get("https://kin.naver.com/search/list.nhn?query=9%EC%8B%9C%ED%87%B4%EA%B7%BC")

# 응답코드 200: 성공 404 : 페이지 없음 500: 서버다운
print(response.status_code)

# 통신이 정상적으로 이루어 지지 않으면 오류발생
response.raise_for_status()

# html 코드 가져오기
html = response.text

# Beautifulsoup로 번역하기
soup = BeautifulSoup(html, 'html.parser')

# soup 출력하기
titles = soup.select("ul.basic1 > li > dl > dt > a")

for title in titles:
    print(title.get_text())