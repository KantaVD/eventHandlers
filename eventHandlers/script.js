const alertbutton = document.querySelector("#mybutton");

const butclicked = function () {
    alert("button is clicked");
};
alertbutton.addEventListener("click", butclicked);



const bgc = document.querySelector("#mybutton2");
let body = document.body;

const colorblue = function () {

    body.classList.add("blue-background");
    console.log("blauw");
};

bgc.addEventListener("click", colorblue);

const colorred = function () {

    body.classList.toggle("red-background");
    console.log("rood");
};

bgc.addEventListener("click", colorred);