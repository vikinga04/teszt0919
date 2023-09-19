
//1. feladat - Készítsen egy függvényt három paraméterrel[nev:szoveg], [csoport:szam] és [típus:bool]
function DiakInfo(nev:string, csoport:number, tipus:boolean):string{
        if(tipus==true){
            return nev+"[Team"+csoport+"] Junior Frontend";
        }
        return nev+"[Team"+csoport+"] Webprogramozó";        
}

console.log(DiakInfo("Bármi Áron",12, true));


//Random szám generátor - SEGÉDFÜGGVÉNY
function Rn(alsoHatar:number, felsoHatar:number):number{
    return Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
}

//2. feladat - Készíts egy függvényt, ami bemeneti paraméternek vár egy számot[jegy],ami visszatért két értékkel, az adott bemeneti paraméter szöveges értékelésével, 2 PARAMÉTERREL! (Használj Tuple-t)
function SzovegesErtekeles(jegy:number):[string,string]{
    if(jegy==5){
        return ["Példás","Példás"];
    }
    else if(jegy==4){
        return ["Jó","Jó"];
    }
    else if(jegy==3){
        return ["Változó","Változó"];
    }
    else if(jegy==2){
        return ["Hanyag","Rossz"];
    }
    else{
        return ["Hibás Adat","Hibás Adat"];
    }
}
var ertekeles:[string, string]=SzovegesErtekeles(Rn(1,6))
console.log("A tanuló szöveges szorgalom értékelése:"+ertekeles[0]);
console.log("A tanuló szöveges magatartás értékelése:"+ertekeles[1]);


//3. feladat - Készíts egy tömb bemeneti paraméterrel rendelkező függvényt, ami visszaadja a tömbben lévő hárommal osztható számok mennyiségét.

function HarommalOszthatokSzama(vizsgalandoTomb:number[]):number{
    let harommalOszhatokSzama:number=0;
    for(let i:number=0;i<vizsgalandoTomb.length;i++){
        if(vizsgalandoTomb[i]%3==0){
            harommalOszhatokSzama++;
        }
    }
    return harommalOszhatokSzama;
}
console.log("Hárommal osztható elemek száma:"+HarommalOszthatokSzama([10,23,12,24,31,33,42,20]));

//4. feladat - Készítsen egy függvényt háromparaméterrel [mennyiseg], [alsoHatar]és [felsoHatar], oldja meg hogy kigeneráljon adott mennyiségű számot az alsó és a felső határon belül, és azokban, NE LEGYEN ISMÉTLŐDÉS!

function NyeroSzamok(mennyiseg:number, alsoHatar:number, felsoHatar:number):any{
    if(mennyiseg>(felsoHatar-alsoHatar)+1){
        return "Nem megfelelő az elemek mennyisége, és intervallumának értéke."
    }
    else{
        let nyeroSzamok:number[]=[];
        let aktElemAzonosito:number=0;
        while(aktElemAzonosito<mennyiseg){
            let generaltSzam:number=Rn(alsoHatar,felsoHatar);
            let szerepelE:boolean=false;
            for(let j:number=0;j<nyeroSzamok.length;j++){
                if(nyeroSzamok[j]==generaltSzam){
                    szerepelE=true;
                }
            }
            if(szerepelE==false){
                nyeroSzamok.push(generaltSzam);
                aktElemAzonosito++;
            }
        }
        return nyeroSzamok;
    }
    console.log("A generált random számok a következők"+NyeroSzamok(5,1,90));
    console.log("A generált random számok a következők"+NyeroSzamok(5,1,10));
    console.log("A generált random számok a következők"+NyeroSzamok(5,1,3));
    
}