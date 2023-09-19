
function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#backupTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    //Teszt paraméterek megadása és megjelenítése
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`
    if (elvartEredmeny == fuggvenyhivas) {
        visszajelzesMezo.innerHTML = `Success`;
    }
    else {
        visszajelzesMezo.innerHTML = `Fail`;
    }
}

//Hibás referencia érték esetén lefutó függvény
function HibasFuggvenyFuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#backupTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
}

//1. feladat tesztek

function Teszt01() {
    try {
        FuggvenyVisszajelzoSor("Megtett út", "60,2", 120, MegtettUt(60, 2));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Megtett út", "60,2", 120);
    }
}


function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Megtett út", "120,3", 360, MegtettUt(120, 3));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Megtett út", "120,3", 360);
    }
}


function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Megtett út", "45,4", 180, MegtettUt(45, 4));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Megtett út", "45,4", 180);
    }
}

//2. feladat tesztek

function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Hőségriadó", "21,24,23", 0, HosegriadoSzint([21, 24, 23]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Hőségriadó", "21,24,23", 0);
    }
}

function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Hőségriadó", "25,24,23", 1, HosegriadoSzint(25, 24, 23));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Hőségriadó", "25,24,23", 1);
    }
}

function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Hőségriadó", "25,26,26", 2, HosegriadoSzint(25, 26, 26));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Hőségriadó", "25,26,26", 2);
    }
}

function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Hőségriadó", "29,27,30", 3, HosegriadoSzint(29, 27, 30));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Hőségriadó", "29,27,30", 3);
    }
}

//3. feladat tesztek

function Teszt08() {
    try {
        FuggvenyVisszajelzoSor("Oszható számok", "3,[5,6,7,8,9]", 2, OszthatoSzamok(3, [5, 6, 7, 8, 9]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Oszható számok", "3,[5,6,7,8,9]", 2);
    }
}

function Teszt09() {
    try {
        FuggvenyVisszajelzoSor("Oszható számok", "2,[4,6,7,8,10]", 4, OszthatoSzamok(2, [4, 6, 7, 8, 10]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Oszható számok", "2,[4,6,7,8,10]", 4);
    }
}

function Teszt10() {
    try {
        FuggvenyVisszajelzoSor("Oszható számok", "7,[5,6,7,8,9,14,21]", 3, OszthatoSzamok(7, [5, 6, 7, 8, 9, 14, 21]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Oszható számok", "7,[5,6,7,8,9,14,21]", 3);
    }
}

//4. feladat tesztek

function Teszt11() {
    try {
        FuggvenyVisszajelzoSor("Érettségi eredmény", "[15,20,15,30,25]", [105, 4], Erettsegi([15, 20, 15, 30, 25]).toString());
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Érettségi eredmény", "[15,20,15,30,25]", [105, 4]);
    }
}

function Teszt12() {
    try {
        FuggvenyVisszajelzoSor("Érettségi eredmény", "[5,10,5,10,10]", [40, 2], Erettsegi([5, 10, 5, 10, 10]).toString());
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Érettségi eredmény", "[5,10,5,10,10]", [40, 2]);
    }
}

function Teszt13() {
    try {
        FuggvenyVisszajelzoSor("Érettségi eredmény", "[15,30,15,45,30]", [135, 5], Erettsegi([15, 30, 15, 45, 30]).toString());
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Érettségi eredmény", "[15,30,15,45,30]", [105, 4]);
    }
}

function Teszt14() {
    try {
        FuggvenyVisszajelzoSor("Érettségi eredmény", "[1,5,5,2,3]", [16, 1], Erettsegi([1, 5, 5, 2, 3]).toString());
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Érettségi eredmény", "[1,5,5,2,3]", [16, 1]);
    }
}

//5. feladat tesztek

function Teszt15() {
    try {
        FuggvenyVisszajelzoSor("Leet kódolt szöveg", "Almafa", "4lm4f4", LeetKod("Almafa"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Leet kódolt szöveg", "Almafa", "4lm4f4");
    }
}

function Teszt16() {
    try {
        FuggvenyVisszajelzoSor("Leet kódolt szöveg", "Szeretem a programozást", "Sz3r3t3m 4 pr0gr4m0zást", LeetKod("Szeretem a programozást"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Leet kódolt szöveg", "Szeretem a programozást", "Sz3r3t3m 4 pr0gr4m0zást");
    }
}

function Teszt17() {
    try {
        FuggvenyVisszajelzoSor("Leet kódolt szöveg", "Typescript The Best", "Typ3scr1pt Th3 B3st", LeetKod("Typescript The Best"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Leet kódolt szöveg", "Typescript The Best", "Typ3scr1pt Th3 B3st");
    }
}


function Teszt18() {
    try {
        FuggvenyVisszajelzoSor("Legnagyobb Snooker nyeremény", "Objektum", 1270500, LegtobbNyeremeny(snookerAdatok));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Legnagyobb Snooker nyeremény", "Objektum", 1270500);
    }
}
function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt04();
    Teszt05();
    Teszt06();
    Teszt07();
    Teszt08();
    Teszt09();
    Teszt10();
    Teszt11();
    Teszt12();
    Teszt13();
    Teszt14();
    Teszt15();
    Teszt16();
    Teszt17();
    Teszt18();
}
TesztFuttato();