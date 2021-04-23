from bs4 import BeautifulSoup

# HTML 소스코드

html = """
<html>
    <body>
        <h1 class="title">제목1</h1>
        <p class="content">본문1</p>
        <h1 id="title2">제목2</h1>
        <p id="content2">본문2</p>
    </body>
</html>
"""

# BeautfulSoup로 html 번역하기
soup = BeautifulSoup(html, 'html.parser')

# 원하는 html 태그 선택하기
# print(soup.select_one("h1"))
# print(soup.select_one("p"))

# 요소의 텍스트만 출력하기
title = soup.select_one("h1#title2")
print(title.get_text())
