function PhErtek(vizsgaltErtek:number):string{
    if(vizsgaltErtek==7){
        return "semleges";
    }
    else if(vizsgaltErtek<7){
        return "savas";
    }
    else{
        return "lugos";
    }
}

function PrimekSzama(vizsgaltTomb:number[]):number{
    let primekSzama:number=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        let osztokSzama=0;
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

function MaganHangzokSzama(vizsgaltSzoveg:string):number{
    let maganHangzok: string[] = ["a","e","i","í","o","ó","ö","u","ü","á","é","ő","ú","ű","A","Á","E","É","I","Í","O","Ó","Ö","Ő","U","Ú","Ü","Ű"];
    let maganhangzoMennyiseg:number=0;
    for(let i:number=0;i<vizsgaltSzoveg.length;i++){
        for(let j:number=0;j<maganHangzok.length;j++){
            if(vizsgaltSzoveg[i]==maganHangzok[j]){
                maganhangzoMennyiseg++;
            }
        }
    }
    return maganhangzoMennyiseg;
}