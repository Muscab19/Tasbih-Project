let tasbih = document.querySelector("#tasbih");
let increaseButton = document.querySelector("#increaseBtn");
let resetButton = document.querySelector("#resetBtn");
let bgColor = document.querySelector("#background");

let initValue = 0;

increaseButton.addEventListener("click", function() {
    initValue++;
    tasbih.innerHTML = initValue;
    if (initValue == 4) {
        bgColor.style.backgroundColor = "red";
    }
    else if (initValue == 5) {
        bgColor.style.backgroundColor = "black";
    }

    else if (initValue == 6) {
        bgColor.style.backgroundColor = "green";
    }
    else if (initValue == 7) {
        bgColor.style.backgroundColor = "orange";
    }

    else if (initValue == 8) {
        bgColor.style.backgroundColor = "yellow";
    }

    else if (initValue == 9) {
        bgColor.style.backgroundColor = "purple";
    }

    else {
        bgColor.style.backgroundColor = ""; 
    }
});

resetButton.addEventListener("click", function() {
    initValue = 0;
    tasbih.innerHTML = initValue; 
});


