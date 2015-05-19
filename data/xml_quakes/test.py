import requests
import bs4

# root_url = 'http://pyvideo.org'
root_url = 'http://earthquake.usgs.gov/earthquakes/eventpage/'
index_url = root_url + 'us20002ejl#general_summary'

# def get_video_page_urls():
#     response = requests.get(index_url)
#     soup = bs4.BeautifulSoup(response.text)
#     return [a.attrs.get('href') for a in soup.select('div.video-summary-data a[href^=/video]')]

# print(get_video_page_urls())

def get_nearby_cities():
	response = requests.get(index_url)
	soup = bs4.BeautifulSoup(response.text)
	cities = soup.select('ol.nearbyCities li')
	return	cities

print(get_nearby_cities())