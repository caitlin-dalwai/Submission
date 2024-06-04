

document.addEventListener("DOMContentLoaded", function () {
    const convert = document.getElementById("calc");
    const clear = document.getElementById("clr");
    const inputs = document.querySelectorAll("input[type='text']");
    const hex1 = document.getElementById("high");


    convert.addEventListener("click", function () {
        const r = parseInt(inputs[0].value);
        const g = parseInt(inputs[1].value);
        const b = parseInt(inputs[2].value);
        if (isValidRGB(r) && isValidRGB(g) && isValidRGB(b)) {
            const hex = `#${eval("r.toString(16).padStart(2, '0')")}${eval("g.toString(16).padStart(2, '0')")}${eval("b.toString(16).padStart(2, '0')")}`;
            hex1.innerText = hex.toUpperCase(); // Convert to uppercase for consistency
        } else {
            hex1.innerText = "Invalid RGB values";
        }
    });
    clear.addEventListener("click", function () {
        inputs.forEach(input => input.value = "");
        hex1.innerText =  "Hex:";
    });
    function isValidRGB(value) {
        return Number.isInteger(value) && value >= 0 && value <= 255;
    }
});














