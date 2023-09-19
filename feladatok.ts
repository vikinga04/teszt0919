//Random szám generálás
var generaltSzam:number=Math.round(Math.random()*100);


//Páros-páratlan
if(generaltSzam%2==0){
    console.log(`A generált szám ${generaltSzam} páros`);
}
else{
    console.log(`A generált szám ${generaltSzam} páratlan`);
}


//Prím-e
let oszto:number=0;
for(let i:number=1;i<=generaltSzam;i++){
    if(generaltSzam%i==0){
        oszto++;
    }
}
if(oszto==2){
    console.log(`A generált szám ${generaltSzam} prím`);
}
else{
    console.log(`A generált szám ${generaltSzam} NEM prím`);
}