function plugin(angka){
    for(nilai = 1; nilai <= angka; nilai++){
        if(nilai %2 == 0 && nilai %5 == 0){
            console.log("plugin")
        }else if(nilai % 5 == 0){
            console.log("in")
        }else if(nilai % 2 == 0){
            console.log("plug")
        }else{
            console.log(nilai + "")
        }
    }
}
plugin(10)