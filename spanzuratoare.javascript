let stringInput = " ", stringOutput;
function myFunction() {
	let wordIntroduced = document.getElementById("myText").value;
	stringInput  = wordIntroduced;
	stringOutput = stringInput;
	for (let i = 0; i < stringOutput.length; ++i) {
        stringOutput = stringOutput.replace(stringOutput[i],"'");
    }
}

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
}
 
function myFunction2 () {
	let ok = 0;
	let letter = document.getElementById("myText2").value;
	for (let i = 0; i < stringInput.length;++i) {
        if (letter == stringInput[i]) {
            ok = 1;
            stringOutput = stringOutput.replaceAt(i, letter);
        }
    }
    if (ok == 1) {
        if (stringOutput == stringInput)
            document.getElementById("demo").innerHTML ="bravo ai ghicit cuvantul";
        else
            document.getElementById("demo").innerHTML = "Bravo ai ghicit litera";
    } else {
        document.getElementById("demo").innerHTML = "UPS! mai incearca";
    }
     document.getElementById("dea").innerHTML = stringOutput;
}
