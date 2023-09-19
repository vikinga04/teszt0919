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
        FuggvenyVisszajelzoSor("Kör kerület feladat",3, 18.85, KorKerulet(3));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kör kerület feladat", 3, 18.85);
    }
}

function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Kör kerület feladat",4, 25.13, KorKerulet(4));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kör kerület feladat", 4, 25.13);
    }
}

function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Kör kerület feladat",5, 31.42, KorKerulet(5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kör kerület feladat", 5, 31.42);
    }
}


function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Kör terület feladat",3, 28.27, KorTerulet(3));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kör terület feladat", 3, 28.27);
    }
}

function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Kör terület feladat",4, 50.27, KorTerulet(4));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kör terület feladat", 4, 50.27);
    }
}

function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Kör terület feladat",5, 78.54, KorTerulet(5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kör terület feladat", 5, 78.54);
    }
}

function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Számtani-e feladat","3,6,9", true, SzamtaniE(3,6,9));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Számtani-e feladat","3,6,9", true);
    }
}


function Teszt08() {
    try {
        FuggvenyVisszajelzoSor("Számtani-e feladat","12,6,9", false, SzamtaniE(12,6,9));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Számtani-e feladat","12,6,9", false);
    }
}

function Teszt09() {
    try {
        FuggvenyVisszajelzoSor("Számtani-e feladat","4,6,8", true, SzamtaniE(4,6,8));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Számtani-e feladat","4,6,8", true);
    }
}


function Teszt10() {
    try {
        FuggvenyVisszajelzoSor("Magánhangzó nélküli feladat","Alma", "lm", MaganhangzoNelkuli("Alma"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Magánhangzó nélküli feladat","Alma", "lm");
    }
}

function Teszt11() {
    try {
        FuggvenyVisszajelzoSor("Magánhangzó nélküli feladat","Szeretem a programozást", "Szrtm  prgrmzst", MaganhangzoNelkuli("Szeretem a programozást"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Magánhangzó nélküli feladat","Szeretem a programozást",  "Szrtm  prgrmzst");
    }
}

function Teszt12() {
    try {
        FuggvenyVisszajelzoSor("Magánhangzó nélküli feladat","Árvíztűrő tükörfúrógép", "rvztr tkrfrgp", MaganhangzoNelkuli("Árvíztűrő tükörfúrógép"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Magánhangzó nélküli feladat","Árvíztűrő tükörfúrógép",  "rvztr tkrfrgp");
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
}
TesztFuttato();