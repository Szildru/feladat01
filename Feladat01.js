//faktoriális számítás függvény
function faktorialis(szam){
    fakt = 1
    ki = 1
    while (true){
        ki *= fakt
        if (fakt == szam){
            return ki
        }else{
            fakt++
        }
    }
}

function feladat01(szinek){
    n = szinek.length
    //Ha egy szín van akkor 0 a visszatérési érték.
    if (n == 1){
        return 0
    }
    r = 2
    db = 0
    while (true){
        // n-r = 0, ilyenkor 2 színünk van, ami azt jelenti hogy csak 1 kombinávió lehetséges
        nr = n-r
        if(nr == 0){
            db+=1
        }else{
            faktn=faktorialis(n)
            faktr=faktorialis(r)
            faktnr=faktorialis(nr)            
            db += faktn/(faktr*faktnr)            
        }
        // Annyiszor megy le a végtelen ciklis, amíg nem lesz x alatt x pl.: 5 alatt az 5(5nCr5) vagy 4 alatt a 4 (4nCr4)
        if(r == n){
            return db
        }else{            
            r++            
        }
    }
}

// Függvény tesztelése
szintomb = ["piros", "kék","sárga"]
console.log(feladat01(szintomb));