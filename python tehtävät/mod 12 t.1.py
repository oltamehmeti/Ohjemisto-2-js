import requests


def hae_vitsi():
    url = "https://api.chucknorris.io/jokes/random"
    vastaus = requests.get(url)

    if vastaus.status_code == 200:
        data = vastaus.json()
        print(data["value"])  # itse vitsi
    else:
        print("Vitsin hakeminen epäonnistui.")


if __name__ == "__main__":
    hae_vitsi()