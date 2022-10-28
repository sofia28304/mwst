function rechne() {

    let NzB = document.getElementById("NzB").checked;
    let BzN = document.getElementById("BzN").checked;

    let sieben = document.getElementById("sieben").checked;
    let neunzehn = document.getElementById("neunzehn").checked;

    let wert = Number(document.getElementById("wert").value);

    let Mwstbetrag = document.getElementById("Mwstbetrag");
    let Endausgabe = document.getElementById("Endausgabe")

    if (NzB === true && sieben === true) {
        Mwstbetrag.innerHTML = (wert * 0.07).toFixed(2) + (" €");
        Endausgabe.innerHTML = "Bruttoendbetrag (Endpreis) " + (wert * 1.07).toFixed(2) + ("€");
    } else if (NzB == true && neunzehn === true) {
        Mwstbetrag.innerHTML = (wert * 0.19).toFixed(2) + (" €");
        Endausgabe.innerHTML = "Bruttoendbetrag (Endpreis) " + (wert * 1.19).toFixed(2) + (" €")
    } else if
        (BzN === true && sieben === true) {
        Mwstbetrag.innerHTML = (wert * 0.7).toFixed(2) + (" €");
        Endausgabe.innerHTML = "Nettobetrag " + (wert * 0.93).toFixed(2) + (" €");
    }
    else if (BzN === true && neunzehn === true) {
        Mwstbetrag.innerHTML = (wert * 0.71).toFixed(2) + (" €");
        Endausgabe.innerHTML = "Nettobetrag " + (wert * 0.81).toFixed(2) + (" €");
    }
}