function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#testTable");
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
    var table = document.querySelector("#testTable");
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


function Teszt01() {
    try {
        FuggvenyVisszajelzoSor("Köszönő feladat","Feri", "Hello Feri", Koszono("Feri"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Köszönő feladat", "Feri",  "Hello Feri");
    }
}

function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Köszönő feladat","Ráhel", "Hello Ráhel", Koszono("Ráhel"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Köszönő feladat", "Ráhel",  "Hello Ráhel");
    }
}


function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Köszönő feladat","Márk", "Hello Márk", Koszono("Márk"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Köszönő feladat", "Márk",  "Hello Márk");
    }
}


function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Melyik a nagyobb feladat","3,5", 5, MelyikANagyobb(3,5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Melyik a nagyobb ", "3,5",  5);
    }
}

function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Melyik a nagyobb feladat","13,5", 13, MelyikANagyobb(13,5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Melyik a nagyobb ", "13,5",  13);
    }
}

function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Melyik a nagyobb feladat","42,42", 42, MelyikANagyobb(42,42));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Melyik a nagyobb ", "42,42",  42);
    }
}

function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt04();
    Teszt05();
    Teszt06();
}
TesztFuttato();