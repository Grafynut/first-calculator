const text = document.querySelector('.text');
const BTN = document.querySelector('.BTN');
const button = BTN.querySelectorAll('.button');
const calBtn = document.querySelectorAll('.calculationBtn .button');

// console.log(calBtn);

text.value = 0;

let alpha = `abcdefghijklmnopqrstuvwxyz&^$#@!~|_<>,'";:/?`;

//on keyBoard key down
text.onkeydown = function (e) {
    if (text.value < 1) {
        text.value = "";
    }
    let V = e.key;
    console.log(V);
    if (alpha.match(V.toLowerCase())) {
        return false;
    }

    font(text.value.length);

}

//numbers
button.forEach((item) => {
    let n = item.getAttribute('data-value');
    item.addEventListener('click', () => {
        if (text.value < 1) {
            text.value = "";
        }
        text.value += n;
        // font(text.value.length);
        font(text.value.length);


    })
})

//operator
calBtn.forEach((elem) => {
    let n = elem.getAttribute('data-value');
    elem.addEventListener('click', () => {
        if (text.value < 1) {
            text.value = "";
        }
        text.value += n;
        font(text.value.length);
    })
})

const Delete = document.querySelector('.delete');

Delete.onclick = function () {
    text.value = text.value.slice(0, text.value.length - 1);
    if (text.value.length < 1) {
        text.value = 0;
    }
}

// equal 
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    text.value = eval(text.value);
})


//font size change
function font(Text) {
    if (Text > 20) {
        text.style.fontSize = "5rem";
    } else {
        text.style.fontSize = "10rem";
    }
    if (Text > 49) {
        text.value = "Maximume Numbers Enter";
    }
}


const AC = document.querySelector('.AC');

AC.addEventListener('click', () => {
    text.value = "0";
    text.style.fontSize = "10rem";

})








