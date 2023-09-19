/*1. feladat - SZEKVENCIA
Készíts egy függvényt, ami egy paraméterként megkapott sebességből és idő értékből megadja az
adott idő alatt megtett utat, az út a sebesség és az idő szorzata
Függvény neve: MegtettUt()
Paraméter(ek): sebesseg (szám típusú), idő (szám típusú)
Visszatérési értéke: szám érték*/
function MegtettUt(sebesseg, ido) {
    var ut = sebesseg * ido;
    return ut;
}
/*2. feladat - SZELEKCIÓ
Készíts egy függvényt, ami paraméterként 3 nap várható átlaghőmérsékletét kapja meg, ebből a 3
értékből el kell döntenie a kiadott hőségriadó szintjét.
• 1. fok(figyelmeztető jelzés): ha a napi középhőmérséklet várhatóan egy napig eléri vagy
meghaladja a 25°C - ot.Visszatérési érték: 1
• 2. fok(riasztás): ha a napi középhőmérséklet várhatóan legalább három egymást követő
napon eléri vagy meghaladja a 25°C - ot.Visszatérési érték: 2
• 3. fok(riadójelzés): ha a napi középhőmérséklet várhatóan legalább három egymást követő
napon eléri vagy meghaladja a 27°C - ot.Visszatérési érték: 3
• 0. fok minden egyéb esetben, NINCS hőségriadó! Visszatérési érték: 0
Függvény neve: HosegriadoSzint()
Paraméter(ek): nap1(szám típusú), nap2(szám típusú), nap3(szám típusú)
Visszatérési értéke: szám érték*/
function HosegriadoSzint(nap1, nap2, nap3) {
    if (nap1 >= 25 && nap2 >= 25 && nap3 >= 25) {
        if (nap1 >= 27 && nap2 >= 27 && nap3 >= 27) {
            return 3;
        }
        return 2;
    }
    else if (nap1 >= 25 || nap2 >= 25 || nap3 >= 25) {
        return 1;
    }
    else {
        return 0;
    }
}
/*3. feladat - ITERÁCIÓ
Készíts egy függvényt, ami egy paraméterként megkapott osztó értékből és egy vizsgált szám típusú
tömbből, megmondja, mennyi azoknak a számoknak a mennyisége, amiket az adott osztó maradék
nélkül eloszt.
Függvény neve: OszthatoSzamok()
Paraméter(ek): oszto(szám típusú), vizsgaltTomb(szám típusú tömb)
Visszatérési értéke: szám érték*/
function OszthatoSzamok(oszto, vizsgaltTomb) {
    var oszthatoSzamok = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % oszto == 0) {
            oszthatoSzamok++;
        }
    }
    return oszthatoSzamok;
}
/*4. feladat - TUPLE
Készíts egy függvényt, TUPLE felhasználásával, érettségi feladat kiértékelésére, az érettségi 5
modulból áll, a modulok eredményeit egy szám típusú tömbben kapja meg a függvény, ebből
meghatározhatja a tanuló által elért pontot.
A szerezhető érdemjegyek ponthatára a következő:
0 - tól 39 - ig 1
40 - től 59 - ig 2
60 - tól 79 - ig 3
80 - tól 119 - ig 4
120 - tól 150 - ig 5
Függvény neve: Erettsegi()
Paraméter(ek): pontok(szám típusú tömb)
Visszatérési értéke: TUPLE: összpontszám(szám érték), jegy(szám érték)*/
function Erettsegi(pontok) {
    var osszpontszam = 0;
    for (var i = 0; i < pontok.length; i++) {
        osszpontszam += pontok[i];
    }
    var jegy = 1;
    if (osszpontszam >= 40 && osszpontszam <= 59) {
        jegy = 2;
    }
    else if (osszpontszam >= 60 && osszpontszam <= 79) {
        jegy = 3;
    }
    else if (osszpontszam >= 80 && osszpontszam <= 119) {
        jegy = 4;
    }
    else if (osszpontszam >= 120 && osszpontszam <= 150) {
        jegy = 5;
    }
    return [osszpontszam, jegy];
}
/*5. feladat - SZÖVEGKEZELÉS
Készíts egy függvényt, ami egy szöveget átalakít, úgy, hogy a benne lévő bizonyos betűket átalakítja
számokká.
A kicserélendő betűk listája a következő
• i és I betű helyett 1 - es
• o és O betű helyett 0 - s
• a és A betű helyett 4 - es
• e és E betű helyett 3 - as
Függvény neve: LeetKod()
Paraméter(ek): vizsgaltSzoveg(szöveg típusú)
Visszatérési értéke: szöveg típusú*/
function LeetKod(vizsgaltSzoveg) {
    var csere = {
        'i': '1',
        'I': '1',
        'o': '0',
        'O': '0',
        'a': '4',
        'A': '4',
        'e': '3',
        'E': '3'
    };
    var kodoltSzoveg = "";
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        var karakter = vizsgaltSzoveg[i];
        kodoltSzoveg += csere[karakter] || karakter;
    }
    return kodoltSzoveg;
}
/*6. feladat – OBJEKTUM feldolgozás
Készíts egy interface - t, ami a mellékelt snookerAdatok.js állományban lévő adatok feldolgozását
segíti.
Majd töltse fel az adatokat egy objektum típusú tömbbe, ehhez készítsen külön függvényt! Objektum
feltöltő néven.A belőle létrehozott objektum: snookerAdatok néven legyen elnevezve.
Végül készítsen egy függvényt, arról, mennyi volt a legnagyobb nyeremény, amit nyertek.
Függvény neve: LegtobbNyeremeny()
Paraméter(ek): vizsgaltObjektum(objektum típusú tömb)
Visszatérési értéke: szám érték*/
var snookerInfo = ["52;Akani Sunny;Thaiföld;118500",
    "7;Allen Mark;Észak-Írország;681000",
    "72;Anda Zhang;Kína;44750",
    "76;Astley John;Anglia;40000",
    "73;Baird Sam;Anglia;44750",
    "13;Bingham Stuart;Anglia;345500",
    "97;Bingyu Chang;Kína;6750",
    "28;Brecel Luca;Belgium;179000",
    "79;Brown Jordan;Észak-Írország;29000",
    "78;Burden Alfred;Anglia;32000",
    "50;Carrington Stuart;Anglia;121750",
    "16;Carter Ali;Anglia;289000",
    "81;Carty Ashley;Anglia;22750",
    "86;Chandler Harvey;Anglia;14475",
    "83;Chuan Leong Thor;Malajzia;16500",
    "84;Clarke Jamie Rhys;Wales;15500",
    "63;Craigie Sam;Anglia;78500",
    "94;Dale Dominic;Wales;8750",
    "41;Davis Mark;Anglia;145725",
    "20;Day Ryan;Wales;244250",
    "18;Ding Junhui;Kína;270250",
    "64;Doherty Ken;Írország;77250",
    "29;Donaldson Scott;Skócia;176750",
    "21;Dott Graeme;Skócia;237750",
    "66;Dunn Mike;Anglia;74750",
    "53;Ebdon Peter;Anglia;111750",
    "88;Feilong Chen;Kína;13500",
    "22;Ford Tom;Anglia;212250",
    "57;Fu Marco;Hong Kong;104250",
    "51;Georgiou Michael;Ciprus;119600",
    "11;Gilbert David;Anglia;412000",
    "33;Gould Martin;Anglia;160250",
    "99;Grace David;Anglia;6750",
    "24;Guodong Xiao;Kína;211600",
    "61;Hamilton Anthony;Anglia;92250",
    "25;Haotian Lyu;Kína;191750",
    "10;Hawkins Barry;Anglia;427250",
    "91;Heathcote Louis;Anglia;10750",
    "6;Higgins John;Skócia;743000",
    "59;Higginson Andrew;Anglia;96250",
    "60;Highfield Liam;Anglia;96000",
    "89;Hirani Kishan;Wales;13350",
    "44;Holt Michael;Anglia;133500",
    "70;Honghao Luo;Kína;65000",
    "95;Jiahui Si;Kína;7500",
    "87;Jiankang Zhang;Kína;13600",
    "71;Jones Jak;Wales;54250",
    "48;Joyce Mark;Anglia;125750",
    "30;King Mark;Anglia;166500",
    "100;Langning Bai;Kína;5000",
    "92;Lee Andy;Anglia;9500",
    "43;Li Hang;Kína;138000",
    "36;Liang Wenbo;Kína;154500",
    "80;Lines Oliver;Anglia;28000",
    "12;Lisowski Jack;Anglia;392250",
    "34;Maflin Kurt;Norvégia;158600",
    "14;Maguire Stephen;Skócia;316000",
    "96;Mann Mitchell;Anglia;7500",
    "32;McGill Anthony;Skócia;160500",
    "54;McManus Alan;Skócia;111250",
    "85;Miah Hammad;Anglia;15475",
    "39;Milkins Robert;Anglia;149600",
    "8;Murphy Shaun;Anglia;506500",
    "62;Ning Lu;Kína;87250",
    "67;O'Brien Fergal;Írország;70600",
    "68;O'Connor Joe;Anglia;69750",
    "42;O'Donnell Martin;Anglia;145250",
    "2;O'Sullivan Ronnie;Anglia;1116000",
    "65;Pengfei Tian;Kína;75750",
    "15;Perry Joe;Anglia;292500",
    "23;Robertson Jimmy;Anglia;211725",
    "5;Robertson Neil;Ausztrália;834500",
    "35;Saengkham Noppon;Thaiföld;157000",
    "4;Selby Mark;Anglia;863000",
    "27;Selt Matthew;Anglia;180350",
    "49;Sijun Yuan;Kína;123000",
    "74;Slessor Elliot;Anglia;43500",
    "75;Steadman Craig;Anglia;40500",
    "90;Stefanow Adam;Lengyelország;12500",
    "46;Stevens Matthew;Wales;129750",
    "1;Trump Judd;Anglia;1270500",
    "37;Un-Nooh Thepchaiya;Thaiföld;151225",
    "98;Ursenbacher Alexander;Svájc;6750",
    "31;Vafaei Hossein;Irán;161500",
    "45;Wakelin Chris;Anglia;129975",
    "26;Walden Ricky;Anglia;182750",
    "77;Walker Lee;Wales;33000",
    "82;Wattana James;Thaiföld;17500",
    "56;Wells Daniel;Wales;104250",
    "58;White Michael;Wales;98250",
    "3;Williams Mark;Wales;1048250",
    "55;Williams Robbie;Anglia;107500",
    "19;Wilson Gary;Anglia;261100",
    "9;Wilson Kyren;Anglia;470500",
    "40;Woollaston Ben;Anglia;146350",
    "47;Xintong Zhao;Kína;125750",
    "69;Xiwen Mei;Kína;68000",
    "17;Yan Bingtao;Kína;285000",
    "93;Zhengyi Fan;Kína;9500",
    "38;Zhou Yuelong;Kína;150250",
];
function ObjektumFeltolto(feltoltendoElem) {
    var snookerAdatok = [];
    for (var i = 0; i < feltoltendoElem.length; i++) {
        var elemDarabok = feltoltendoElem[i].split(";");
        var objektum = {
            helyezes: Number(elemDarabok[0]),
            nev: elemDarabok[1],
            orszag: elemDarabok[2],
            nyeremeny: Number(elemDarabok[3])
        };
        snookerAdatok.push(objektum);
    }
    return snookerAdatok;
}
var snookerAdatok = ObjektumFeltolto(snookerInfo);
function LegtobbNyeremeny(vizsgaltObjektum) {
    var maxNyeremeny = 0;
    for (var i = 0; i < vizsgaltObjektum.length; i++) {
        if (vizsgaltObjektum[i].nyeremeny > maxNyeremeny) {
            maxNyeremeny = vizsgaltObjektum[i].nyeremeny;
        }
    }
    return maxNyeremeny;
}
var maxNyeremenyValue = LegtobbNyeremeny(snookerAdatok);
console.log("Legnagyobb nyeremény: " + maxNyeremenyValue);
