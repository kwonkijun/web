import requests
from bs4 import BeautifulSoup

# 요청하기
response = requests.get("https://kin.naver.com/search/list.nhn?query=%ED%8C%8C%EC%9D%B4%EC%8D%AC")


# 응답코드 200: 성공   404: 페이지 없음 500:서버다운
print(response.status_code)

# 통신이 원활하지 않을 때 오류 발생 시켜서 통신상태 출력
response.raise_for_status()

# html 코드 가져오기
html = response.text

# Beautifulsoup로 번역하기

soup = BeautifulSoup(html, "html.parser")
# print(soup.select_a("ul.basic1>li>dl>dt>a"))

dates = soup.select("ul.basic1 > li > dl > dd.txt_inline")
titles = soup.select("ul.basic1 > li > dl > dt > a")
contents = soup.select("ul.basic1 > li > dl > dd:nth-of-type(2)")
print(contents)
title = []
content = []


for i in titles:
    title.append(i.get_text())

for k in contents:
    content.append(k.get_text())

i = 0
k = 0
for date in dates:

    i = i+1
    k = k+1
    title.append(str(titles))
    print(i, ". ", date.get_text(), title[k])
    print()
    print("------------------내   용-----------------")
    print()
    print(content)