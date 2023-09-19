//Random szám generálás:
function RandomSzamGenerator(alsoHatar: number, felsoHatar: number): number {
    return Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
}

//Páros-páratlan
function ParosParatlan(vizsgaltSzam: number): void {
    if (vizsgaltSzam % 2 == 0) {
        console.log(`A generált szám ${vizsgaltSzam} páros`);
    }
    else {
        console.log(`A generált szám ${vizsgaltSzam} páratlan`);
    }
}

//Prím-e
function PrimE(vizsgaltSzam: number): void {
    let oszto: number = 0;
    for (let i: number = 1; i <= vizsgaltSzam; i++) {
        if (vizsgaltSzam % i == 0) {
            oszto++;
        }
    }
    if (oszto == 2) {
        console.log(`A generált szám ${vizsgaltSzam} prím`);
    }
    else {
        console.log(`A generált szám ${vizsgaltSzam} NEM prím`);
    }
}

ParosParatlan(RandomSzamGenerator(10,30));
PrimE(RandomSzamGenerator(1,10));

//TeglalapKerulet - visszatérési értékkel
function TeglalapKerulet(aOldal:number, bOldal:number):number{
    return (aOldal+bOldal)*2;
}
//TeglalapTerulet - visszatérési értékkel
function TeglalapTerulet(aOldal:number, bOldal:number):number{
    return aOldal*bOldal;
}
let aOldalMeret=RandomSzamGenerator(1,20);
let bOldalMeret=RandomSzamGenerator(1,20);
console.log("Az a oldal mérete: "+aOldalMeret);
console.log("Az b oldal mérete: "+bOldalMeret);
console.log("A téglalap kerülete: "+TeglalapKerulet(aOldalMeret,bOldalMeret));
console.log("A téglalap területe: "+TeglalapTerulet(aOldalMeret,bOldalMeret));

//Érdemjegy - példás, jó, közepes, elégséges, elégtelen
function Erdemjegy(jegy:number):string{
    if(jegy==5){
        return "példás";
    }
    else if(jegy==4){
        return "jó";
    }
    else if(jegy==3){
        return "közepes";
    }
    else if(jegy==2){
        return "elégséges";
    }
    else if(jegy==1){
        return "elégtelen";
    }
    else{
        return "hibás adat"
    }
}
let erdemJegy=RandomSzamGenerator(1,6);
console.log("A kapott érdemjegy: "+erdemJegy);
console.log("Az érdemjegy szöveges megfelelője: "+Erdemjegy(erdemJegy));

//Legnagyobb közös osztó: LNKO
function LNKO(szamEgy:number, szamKetto:number){
    let lnko=1;
    for(let i:number=2;i<=szamEgy;i++){
        if(szamEgy%i==0 && szamKetto%i==0)
        {
                lnko=i;
        }
    }
    return lnko;
}
let elsoSzam=RandomSzamGenerator(1,100);
let masodikSzam=RandomSzamGenerator(1,100);
console.log("Az első szám: "+elsoSzam);
console.log("Az második szám: "+masodikSzam);
console.log("A két szám legnagyobb közös osztója:"+LNKO(elsoSzam,masodikSzam));


//Tombgenerátor függvény
function UniverzalisTombGenerator(alsoHatar:number, felsoHatar:number, meret:number):number[]{
    let generaltTomb:number[]=[];
    for(let i:number=0;i<meret;i++){
        generaltTomb.push(RandomSzamGenerator(alsoHatar,felsoHatar));
    }
    return generaltTomb;
}
var ujTomb=UniverzalisTombGenerator(1,50,10);
console.log(ujTomb);


//Összegzés tétele eljárás
function OsszegzesTeteleEljaras(vizsgaltTomb:number[]):void{
    let elemekOsszege:number=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        elemekOsszege+=vizsgaltTomb[i];
    }
    console.log("A tömb elemeinek összege: "+elemekOsszege);
}
OsszegzesTeteleEljaras(ujTomb);


//Összegzés tétele függvény
function OsszegzesTeteleFuggveny(vizsgaltTomb:number[]):number{
    let elemekOsszege:number=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        elemekOsszege+=vizsgaltTomb[i];
    }
    return elemekOsszege;
}
console.log("A tömb elemeinek összege: "+OsszegzesTeteleFuggveny(ujTomb))


//TTI feladat
function TestTomegIndexEljaras(testtomeg:number, magassag:number):void{
    let tti:number=testtomeg/(magassag*magassag);
    if(tti<16){
        console.log("Súlyos soványság");
    }
    else if(tti<17){
        console.log("Mérsékelt soványság");
    }
    else if(tti<18.5){
        console.log("Enyhe soványság");
    }
    else if(tti<25){
        console.log("Normális testsúly");
    }
    else if(tti<30){
        console.log("Túlsúlyos");
    }
    else if(tti<35){
        console.log("I.fokú elhízás");
    }
    else if(tti<40){
        console.log("II.fokú elhízás");
    }
    else{
        console.log("III.fokú (súlyos) elhízás");
    }
}
TestTomegIndexEljaras(100,1.95);
function TestTomegIndexFuggveny(testtomeg:number, magassag:number):string{
    let tti:number=testtomeg/(magassag*magassag);
    if(tti<16){
        return "sulyosSovanysag";
    }
    else if(tti<17){
        return "mersekeltSovanysag";
    }
    else if(tti<18.5){
        return "enyheSovanysag";
    }
    else if(tti<25){
        return "normalisTestsuly";
    }
    else if(tti<30){
        return "tulsulyos";
    }
    else if(tti<35){
        return "I.fokuElhizas";
    }
    else if(tti<40){
        return "II.fokuElhizas";
    }
    else{
        return "III.foku(sulyos)Elhizas";
    }
}
console.log("Testtömeg index feladat:"+TestTomegIndexFuggveny(100,1.95));