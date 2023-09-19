function PhErtek(vizsgaltErtek) {
    if (vizsgaltErtek == 7) {
        return "semleges";
    }
    else if (vizsgaltErtek < 7) {
        return "savas";
    }
    else {
        return "lugos";
    }
}
function PrimekSzama(vizsgaltTomb) {
    var primekSzama = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var osztokSzama = 0;
        for (var j = 1; j <= vizsgaltTomb[i]; j++) {
            if (vizsgaltTomb[i] % j == 0) {
                osztokSzama++;
            }
        }
        if (osztokSzama == 2) {
            primekSzama++;
        }
    }
    return primekSzama;
}
function MaganHangzokSzama(vizsgaltSzoveg) {
    var maganHangzok = ["a", "e", "i", "í", "o", "ó", "ö", "u", "ü", "á", "é", "ő", "ú", "ű", "A", "Á", "E", "É", "I", "Í", "O", "Ó", "Ö", "Ő", "U", "Ú", "Ü", "Ű"];
    var maganhangzoMennyiseg = 0;
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        for (var j = 0; j < maganHangzok.length; j++) {
            if (vizsgaltSzoveg[i] == maganHangzok[j]) {
                maganhangzoMennyiseg++;
            }
        }
    }
    return maganhangzoMennyiseg;
}
