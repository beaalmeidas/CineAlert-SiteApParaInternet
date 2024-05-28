from bs4 import BeautifulSoup
import requests
import json


scrape_jan2024 = requests.get("https://www.adorocinema.com/filmes/agenda/mes/mes-2024-01/")
soup = BeautifulSoup(scrape_jan2024.content, "html.parser")

# Pegando o título de todos os filmes de janeiro de 2024
titles_jan2024 = soup.find_all(class_="month-movies-link")

list_titles_jan2024 = []

for title in titles_jan2024:
    list_titles_jan2024.append(title.text.strip())

json_titles_jan2024 = json.dumps(list_titles_jan2024, ensure_ascii=False)

print(json_titles_jan2024)
