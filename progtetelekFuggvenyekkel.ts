
//Random szám generálás:
function RandomSzamGenerator(alsoHatar: number, felsoHatar: number): number {
    return Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
}

//Tombgenerátor függvény
function UniverzalisTombGenerator(alsoHatar: number, felsoHatar: number, meret: number): number[] {
    let generaltTomb: number[] = [];
    for (let i: number = 0; i < meret; i++) {
        generaltTomb.push(RandomSzamGenerator(alsoHatar, felsoHatar));
    }
    return generaltTomb;
}
var ujTomb: number[] = UniverzalisTombGenerator(1, 50, 10);
console.log(ujTomb);


//Összegzés tétele eljárás
function OsszegzesTeteleEljaras(vizsgaltTomb: number[]): void {
    let elemekOsszege: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        elemekOsszege += vizsgaltTomb[i];
    }
    console.log("A tömb elemeinek összege: " + elemekOsszege);
}
OsszegzesTeteleEljaras(ujTomb);


//Összegzés tétele függvény
function OsszegzesTeteleFuggveny(vizsgaltTomb: number[]): number {
    let elemekOsszege: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        elemekOsszege += vizsgaltTomb[i];
    }
    return elemekOsszege;
}
console.log("A tömb elemeinek összege: " + OsszegzesTeteleFuggveny(ujTomb))


//Átlagszámítás tétele eljárás
function AtlagszamitasTeteleEljaras(vizsgaltTomb: number[]): void {
    let elemekOsszege: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        elemekOsszege += vizsgaltTomb[i];
    }
    console.log("A tömb elemeinek átlaga: " + elemekOsszege / vizsgaltTomb.length);
}
AtlagszamitasTeteleEljaras(ujTomb);

//Átlagszámítás tétele függvény
function AtlagszamitasTeteleFuggveny(vizsgaltTomb: number[]): number {
    let elemekOsszege: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        elemekOsszege += vizsgaltTomb[i];
    }
    return elemekOsszege / vizsgaltTomb.length;
}
console.log("A tömb elemeinek átlaga: " + AtlagszamitasTeteleFuggveny(ujTomb));


//Minimumkeresés tétele eljárás érték alapján
function MinimumKeresesTeteleErtekAlapjanEljaras(vizsgaltTomb:number[]):void{
    let minErtek:number=vizsgaltTomb[0];
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]<minErtek){
            minErtek=vizsgaltTomb[i];
        }
    }
    console.log("A tömbben lévő legkisebb elem értéke:"+minErtek);
}
MinimumKeresesTeteleErtekAlapjanEljaras(ujTomb);

//Minimumkeresés tétele fuggveny érték alapján
function MinimumKeresesTeteleErtekAlapjanFuggveny(vizsgaltTomb:number[]):number{
    let minErtek:number=vizsgaltTomb[0];
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]<minErtek){
            minErtek=vizsgaltTomb[i];
        }
    }
    return minErtek;
}
console.log("A tömbben lévő legkisebb elem értéke:"+MinimumKeresesTeteleErtekAlapjanFuggveny(ujTomb));

//Minimumkeresés tétele eljárás index alapján
function MinimumKeresesTeteleIndexAlapjanEljaras(vizsgaltTomb:number[]):void{
    let minIndex:number=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]<vizsgaltTomb[minIndex]){
            minIndex=i;
        }
    }
    console.log("A tömbben lévő legkisebb elem indexe:"+minIndex);
}
MinimumKeresesTeteleIndexAlapjanEljaras(ujTomb);
//Minimumkeresés tétele fuggveny index alapján
function MinimumKeresesTeteleIndexAlapjanFuggveny(vizsgaltTomb:number[]):number{
    let minIndex:number=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]<vizsgaltTomb[minIndex]){
            minIndex=i;
        }
    }
    return minIndex;
}
console.log("A tömbben lévő legkisebb elem indexe:"+MinimumKeresesTeteleIndexAlapjanFuggveny(ujTomb));


//Maximumkeresés tétele eljárás érték alapján
function MaximumKeresesTeteleErtekAlapjanEljaras(vizsgaltTomb:number[]):void{
    let maxErtek:number=vizsgaltTomb[0];
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]>maxErtek){
            maxErtek=vizsgaltTomb[i];
        }
    }
    console.log("A tömbben lévő legnagyobb elem értéke:"+maxErtek);
}
MaximumKeresesTeteleErtekAlapjanEljaras(ujTomb);


//Maximumkeresés tétele fuggveny érték alapján
function MaximumKeresesTeteleErtekAlapjanFuggveny(vizsgaltTomb:number[]):number{
    let maxErtek:number=vizsgaltTomb[0];
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]>maxErtek){
            maxErtek=vizsgaltTomb[i];
        }
    }
    return maxErtek;
}
console.log("A tömbben lévő legnagyobb elem értéke:"+MaximumKeresesTeteleErtekAlapjanFuggveny(ujTomb));
//Maximumkeresés tétele eljárás index alapján
function MaximumKeresesTeteleIndexAlapjanEljaras(vizsgaltTomb:number[]):void{
    let maxIndex:number=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]>vizsgaltTomb[maxIndex]){
            maxIndex=i;
        }
    }
    console.log("A tömbben lévő legnagyobb elem indexe:"+maxIndex);
}
MaximumKeresesTeteleIndexAlapjanEljaras(ujTomb);
//Maximumkeresés tétele fuggveny index alapján
function MaximumKeresesTeteleIndexAlapjanFuggveny(vizsgaltTomb:number[]):number{
    let maxIndex:number=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]>vizsgaltTomb[maxIndex]){
            maxIndex=i;
        }
    }
    return maxIndex;
}
console.log("A tömbben lévő legnagyobb elem indexe:"+MaximumKeresesTeteleIndexAlapjanFuggveny(ujTomb));


//Megszámlálás tétele páros számokra eljárás
function MegszamlalasTeteleParosSzamokraEljaras(vizsgaltTomb:number[]):void{
    let parosakSzama:number=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]%2==0){
            parosakSzama++;
        }
    }
    console.log("A tömbben lévő páros elemek száma:"+parosakSzama);
}
MegszamlalasTeteleParosSzamokraEljaras(ujTomb);
//Megszámlálás tétele páros számokra függvény
function MegszamlalasTeteleParosSzamokraFuggveny(vizsgaltTomb:number[]):number{
    let parosakSzama:number=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]%2==0){
            parosakSzama++;
        }
    }
    return parosakSzama;
}
console.log("A tömbben lévő páros elemek száma:"+MegszamlalasTeteleParosSzamokraFuggveny(ujTomb));
//Kiválogatás tétele páros számokra eljárás
function KivalogatasTeteleParosSzamokraEljaras(vizsgaltTomb:number[]):void{
    let parosElemek:number[]=[];
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]%2==0){
            parosElemek.push(vizsgaltTomb[i]);
        }
    }
    console.log("A tömbben lévő páros elemek az alábbiak:"+parosElemek);
}
KivalogatasTeteleParosSzamokraEljaras(ujTomb);
//Kiválogatás tétele páros számokra függvény
function KivalogatasTeteleParosSzamokraFuggveny(vizsgaltTomb:number[]):number[]{
    let parosElemek:number[]=[];
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]%2==0){
            parosElemek.push(vizsgaltTomb[i]);
        }
    }
    return parosElemek;
}
console.log("A tömbben lévő páros  elemek az alábbiak:"+KivalogatasTeteleParosSzamokraFuggveny(ujTomb));

//Megszámlálás tétele prím számokra eljárás
function MegszamlalasTetelePrimSzamokraEljaras(vizsgaltTomb:number[]):void{
    let primekSzama:number=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        let osztokSzama:number=0;
        for(let j:number=1;j<=vizsgaltTomb[i];j++){
            if(vizsgaltTomb[i]%j==0){
                osztokSzama++;
            }
        }
        if(osztokSzama==2){
            primekSzama++;
        }
    }
    console.log("A tömbben lévő prím elemek száma:"+primekSzama);
}
MegszamlalasTetelePrimSzamokraEljaras(ujTomb);
//Megszámlálás tétele prím számokra függvény
function MegszamlalasTetelePrimSzamokraFuggveny(vizsgaltTomb:number[]):number{
    let primekSzama:number=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        let osztokSzama:number=0;
        for(let j:number=1;j<=vizsgaltTomb[i];j++){
            if(vizsgaltTomb[i]%j==0){
                osztokSzama++;
            }
        }
        if(osztokSzama==2){
            primekSzama++;
        }
    }
    return primekSzama;
}
console.log("A tömbben lévő prím elemek száma:"+MegszamlalasTetelePrimSzamokraFuggveny(ujTomb));
//Kiválogatás tétele prím számokra eljárás
function KivalogatasTetelePrimSzamokraEljaras(vizsgaltTomb:number[]):void{
    let primElemek:number[]=[];
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        let osztokSzama:number=0;
        for(let j:number=1;j<=vizsgaltTomb[i];j++){
            if(vizsgaltTomb[i]%j==0){
                osztokSzama++;
            }
        }
        if(osztokSzama==2){
            primElemek.push(vizsgaltTomb[i]);
        }
    }
    console.log("A tömbben lévő prím elemek az alábbiak:"+primElemek);
}
KivalogatasTetelePrimSzamokraEljaras(ujTomb);
//Kiválogatás tétele prím számokra függvény
function KivalogatasTetelePrimSzamokraFuggveny(vizsgaltTomb:number[]):number[]{
    let primElemek:number[]=[];
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        let osztokSzama:number=0;
        for(let j:number=1;j<=vizsgaltTomb[i];j++){
            if(vizsgaltTomb[i]%j==0){
                osztokSzama++;
            }
        }
        if(osztokSzama==2){
            primElemek.push(vizsgaltTomb[i]);
        }
    }
    return primElemek;
}
console.log("A tömbben lévő prím elemek az alábbiak:"+KivalogatasTetelePrimSzamokraFuggveny(ujTomb));