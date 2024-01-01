function detNumBin(){
    var numeroCarte = document.getElementById("numcarte").value;
    var visaPattern = /^4[0-9]{5}/;
    var mastercardPattern = /^(5[1-5]|2[2-7])[0-9]{4}/;
    var amexPattern = /^3[47][0-9]{4}/;
    var discoverPattern = /^(6011|65|64[4-9])[0-9]{2}/;
    if (visaPattern.test(numeroCarte)){
       const img = document.getElementById("imgRandom");
       img.setAttribute("src", "image/visa.png");
    }
    else if (mastercardPattern.test(numeroCarte)){
        const img = document.getElementById("imgRandom");
        img.setAttribute("src", "image/mastacard.png")
    }
    else if (amexPattern.test(numeroCarte)){
        const img = document.getElementById("imgRandom");
        img.setAttribute("src", "image/amexexpress.png")
    }
    else if (discoverPattern.test(numeroCarte)){
        const img = document.getElementById("imgRandom");
        img.setAttribute("src", "image/disc.png")
    }
    else {}
};
