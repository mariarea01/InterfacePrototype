
    function validateForm() {
        let x = document.forms["myForm"]["disability"].value;
        if (x == "") {
            alert("If you do not wish to answer, click 'I do not wish to answer'.");
            return false;
        }
        let y = document.forms["myForm"]["felon"].value;
        if (y == "") {
            alert("If you do not wish to answer, click 'I do not wish to answer'.");
            return false;
        }
        let z = document.forms["myForm"]["military"].value;
        if (z == "") {
            alert("If you do not wish to answer, click 'I do not wish to answer'.");
            return false;
        }
    }

