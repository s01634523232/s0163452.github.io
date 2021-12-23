window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
});

function click1() {
    let f1 = document.getElementsByName("price");
    let f2 = document.getElementsByName("number");
    let r = document.getElementById("result");

    let text = "ok";
    if (Number.isNaN(f1[0].value) || Number.isNaN(f2[0].value)) {
        text = "only numbers can be entered";
    }
    document.getElementById("demo").innerHTML = text;
 
    let ans = parseFloat(f1[0].value) * parseFloat(f2[0].value);
    r.innerHTML = "result: " + ans;
    return false;
}