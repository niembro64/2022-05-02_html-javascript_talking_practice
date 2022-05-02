// class r{
//     static min = 10;

// }

// var a = new r();
// console.log(a.min)

// r.min = 2
// console.log(a.min)

// var p = ["a","b","c"]

// console.log(p.pop())
// console.log(p.pop())

function deleteElement(ele) {
    var b = document.querySelector("#bodyName");
    b.removeChild(ele.parentNode);
    // console.log("TEST");
}
function changeElement(ele) {
    var a = document.querySelector("#firstName")
    a.innerHTML = "Changed"
}
