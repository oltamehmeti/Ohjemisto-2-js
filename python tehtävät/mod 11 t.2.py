class Auto:
    def __init__(self, rekisteritunnus, huippunopeus):
        self.rekisteritunnus = rekisteritunnus
        self.huippunopeus = huippunopeus
        self.nopeus = 0
        self.matkamittari = 0

    def aseta_nopeus(self, nopeus):
        if nopeus <= self.huippunopeus:
            self.nopeus = nopeus
        else:
            self.nopeus = self.huippunopeus

    def aja(self, tunnit):
        self.matkamittari += self.nopeus * tunnit


class Sahkoauto(Auto):
    def __init__(self, rekisteritunnus, huippunopeus, akkukapasiteetti_kwh):
        super().__init__(rekisteritunnus, huippunopeus)
        self.akkukapasiteetti_kwh = akkukapasiteetti_kwh


class Polttomoottoriauto(Auto):
    def __init__(self, rekisteritunnus, huippunopeus, bensatankin_koko_l):
        super().__init__(rekisteritunnus, huippunopeus)
        self.bensatankin_koko_l = bensatankin_koko_l


# Pääohjelma
if __name__ == "__main__":
    sahkoauto = Sahkoauto("ABC-15", 180, 52.5)
    polttomoottoriauto = Polttomoottoriauto("ACD-123", 165, 32.3)

    # Asetetaan halutut nopeudet
    sahkoauto.aseta_nopeus(120)
    polttomoottoriauto.aseta_nopeus(100)

    # Ajetaan 3 tuntia
    sahkoauto.aja(3)
    polttomoottoriauto.aja(3)

    # Tulostetaan matkamittarit
    print(f"Sähköauton matkamittari: {sahkoauto.matkamittari} km")
    print(f"Polttomoottoriauton matkamittari: {polttomoottoriauto.matkamittari} km")