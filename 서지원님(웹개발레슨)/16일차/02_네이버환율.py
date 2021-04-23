import requests
from bs4 import BeautifulSoup

response = requests.get("https://finance.naver.com/marketindex/")

response.raise_for_status()

html = response.text

soup = BeautifulSoup(html, 'html.parser')

lis = soup.select("ul#exchangeList > li")

for li in lis:
    price = li.select_one("span.value").get_text()
    print(price)