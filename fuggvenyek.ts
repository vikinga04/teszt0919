//export{};

//Visszatérési érték nélkül is meg kell adni a void kulcsszót, mint annak "típusa"
function IloveTypeScript():void{
    console.log("Szeretem a TypeScriptet");
}
//Meghívása a függvénynek ugyanaz!
IloveTypeScript();


//Paraméter használatakor annak típusát MEG KELL ADNI!
function NegyzetKerulet(aOldal:number):void{
    console.log("Az "+aOldal+" oldalú négyzet kerülete"+(aOldal*4));
}
//Meghívásnál ügyelni kell, a meghívott függvény paramétererének típusára
NegyzetKerulet(4);

//Visszatérési érték esetén meg kell adni annak típusát: number, string, boolean, any vagy unknown
//Addig hibát jelez a TS amíg nincs megfelelő visszatérési érték a függvényben!!!
function SzamGenerator():number{
    return Math.round(Math.random()*100);
}
var eredmeny=SzamGenerator();
console.log(eredmeny);

//Visszatérési érték és paraméter esetén mindennek a típusát MEG KELL ADNI!
function NegyzetTerulet(aOldal:number):number{
    return aOldal*aOldal;
}
var eredmeny2=NegyzetTerulet(eredmeny);
console.log(eredmeny2);
