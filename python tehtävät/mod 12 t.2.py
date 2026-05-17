import requests

API_KEY = "OMA_API_AVAIN_TÄHÄN"


def hae_saa(kaupunki):
    url = "https://api.openweathermap.org/data/2.5/weather"

    params = {
        "q": kaupunki,
        "appid": API_KEY
        # halutessa voi käyttää myös: "units": "metric"
    }

    vastaus = requests.get(url, params=params)

    if vastaus.status_code == 200:
        data = vastaus.json()

        kuvaus = data["weather"][0]["description"]
        lampotila_kelvin = data["main"]["temp"]

        lampotila_celsius = lampotila_kelvin - 273.15

        print(f"Sää: {kuvaus}")
        print(f"Lämpötila: {lampotila_celsius:.1f} °C")
    else:
        print("Säätietoja ei saatu. Tarkista kaupunki tai API-avain.")


if __name__ == "__main__":
    kaupunki = input("Anna paikkakunta: ")
    hae_saa(kaupunki)