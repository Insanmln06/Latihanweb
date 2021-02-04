function Check(nilai) {
    if (nilai <= 100 && nilai >= 79) {
        console.log("A");
    } else if  (nilai <= 78 && nilai >= 65) {
        console.log("B");
    } else if  (nilai <= 64 && nilai  >= 50 ) {
        console.log("C");
    } else if  (nilai <= 49 && nilai >= 0){
        console.log("D");
    } else {
        console.log("anda Terlalu Cerdas")
    }
    
}

Check(91)
Check(69)
Check(60)
Check(30)
Check(101)