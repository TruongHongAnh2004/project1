var KetQua = 0
var A = 0
var B = 0
var PhepTinh = ""
var BieuThuc = ""

function TurnOn() {
    BieuThuc = ""
    HienThi(0)
}

function HienThi(NoiDungCanHienThi) {
    document.getElementById("lcd").textContent = NoiDungCanHienThi
}

document.getElementById("ac").addEventListener("click", TurnOn);
var numbers = document.getElementsByClassName("number")
var daubang = document.getElementById("daubang")

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        BieuThuc += numbers[i].textContent
        HienThi(BieuThuc)
    })
}
//  eval("7+8")    7+8

"5*/8"
"5x8"

daubang.addEventListener("click", function () {
    BieuThuc = BieuThuc.replace("x", "*")


    try {
        HienThi(eval(BieuThuc))
        BieuThuc = eval(BieuThuc)

    } catch (error) {
        HienThi("Syntax Error")
    }
})

