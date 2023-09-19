//KorKerulet :2*r*PI
//Math.PI, kerekíteni 2 tizedesre
function KorKerulet(sugar) {
    return Number((2 * sugar * Math.PI).toFixed(2));
}
//KorTerulet:r*r*PI - Akár Math.pow függvényt is lehet használni vagy** operátor
//Math.PI, kerekíteni 2 tizedesre
function KorTerulet(sugar) {
    return Number((sugar * sugar * Math.PI).toFixed(2));
}
//SzamtaniE(3 számról mondja meg hogy számtani sorozat-e)-LOGIKAIVAL tér vissza
//A két szám közötti különbség mindig egyenlő!!!
//4,6,8
//15,20,25
function SzamtaniE(elsoSzam, masodikSzam, harmadikSzam) {
    if (harmadikSzam - masodikSzam == masodikSzam - elsoSzam) {
        return true;
    }
    else {
        return false;
    }
}
//Okos megoldás lehet: return b - a === c - b;
//MaganhangzoNelkuli - távolítsd el az összes maganhangzot a szövegből
function MaganhangzoNelkuli(vizsgaltSzoveg) {
    var maganhangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű", "A", "Á", "E", "É", "I", "Í", "O", "Ó", "Ö", "Ő", "U", "Ú", "Ü", "Ű"];
    var modositottSzo = "";
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        var cserelniKell = false;
        for (var j = 0; j < maganhangzok.length; j++) {
            if (vizsgaltSzoveg[i] == maganhangzok[j]) {
                cserelniKell = true;
            }
        }
        if (cserelniKell == true) {
            modositottSzo += "";
        }
        else {
            modositottSzo += vizsgaltSzoveg[i];
        }
    }
    return modositottSzo;
}
//FELADAT: A függvények elkészítése után, készítsen hozzá, UNIT teszteket saját tesztesetekkel.
