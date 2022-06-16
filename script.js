let onCovertClick = function() {
    let miles = document.getElementById("miles").value ;
    let result = document.getElementById("result");

    if(isNaN(miles)) {
        result.textContent = "Please enter a number"
    }

    else {
        let kilo = 1.60934 * parseFloat(miles);

        result.textContent = kilo + " km";
    }
};
