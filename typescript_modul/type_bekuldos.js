function EkezetesBetukSzama(vizsgaltSzoveg) {
    var ekezetesBetuk = ['á', 'é', 'í', 'ó', 'ö', 'ő', 'ú', 'ü', 'ű', 'Á', 'É', 'Í', 'Ó', 'Ö', 'Ő', 'Ú', 'Ü', 'Ű'];
    var ekezetesBetukSzama = 0;
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        if (ekezetesBetuk.includes(vizsgaltSzoveg[i])) {
            ekezetesBetukSzama++;
        }
    }
    return ekezetesBetukSzama;
}
/*2. feladat
Készítsen egy függvényt, ami a paraméterként kapott értékig megmondja mennyi az addig lévő
számok szorzata(lásd: faktoriális fogalma).
Függvény neve: ElsoNszamSzorzat
Paraméterek: mennyiseg(szám típusú)
Visszatérési értéke: szám típusú változó*/
function ElsoNszamSzorzat(mennyiseg) {
    var szorzat = 1;
    for (var i = 1; i <= mennyiseg; i++) {
        szorzat *= i;
    }
    return szorzat;
}
/* 3. feladat
Készíts egy függvényt, ami egy paraméterként megkapott tömbről megmondja, mennyi a benne lévő
páros számok összege.
Függvény neve: ParosakOsszege()
     Paraméter(ek): vizsgaltTomb(számokat tartalmazó tömb)
Visszatérési értéke: szám érték*/
function ParosakOsszege(vizsgaltTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 === 0) {
            osszeg += vizsgaltTomb[i];
        }
    }
    return osszeg;
}
