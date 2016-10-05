function prefixGenerator(gender){
    if (gender == "L") {
        return "Mas";
    } else if (gender == "P") {
        return "Mba";
    }
    
    return "???";
}

var prefix = prefixGenerator("L");

document.write("Halo, " + prefix);
