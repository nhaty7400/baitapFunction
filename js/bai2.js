/**
 * công thức:
 * 
 * kw < 50kw : kw*KW_50_DAU;
 * 
 * 50kw < kw < 100: 25000 + (kw-50)*KW_50_100;
 * 
 * 100 < kw < 200: 25000 + 32500 + (kw-100)*KW_100_200;
 * 
 * 200 < kw < 350: 25000 + 32500 + 85000 + (kw-200)*KW_200_350;
 * 
 * 350 < kw: 25000 + 32500 + 85000 + 165000 + (kw-350)*KW_TREN_350;
 */

//? bảng giá tiền điện

const KW_50_DAU = 500;
const KW_50_100 = 650;
const KW_100_200 = 850;
const KW_200_350 = 1100;
const KW_TREN_350 = 1300;

//? hàm chính
function main() {
    var hoTen = getELE("hoTen-b2").value;
    var kw = getELE("soKw-b2").value;
    var total = CalcKw(kw, KW_50_DAU, KW_50_100, KW_100_200, KW_200_350, KW_TREN_350);

    getELE("result-b2").innerHTML = "Họ tên: " + hoTen + "; tiền điện: " + total.toLocaleString();
}
getELE("btnCalc-b2").onclick = main;

function getELE(id) {
    return document.getElementById(id);
}

function CalcKw(kw, KW_50_DAU, KW_50_100, KW_100_200, KW_200_350, KW_TREN_350) {
    if (kw <= 50 && kw > 0) {
        return kw * KW_50_DAU;
    } else if (kw > 50 && kw <= 100) {
        return 25000 + (kw - 50) * KW_50_100;
    } else if (kw > 100 && kw <= 200) {
        return 25000 + 32500 + (kw - 100) * KW_100_200;
    } else if (kw > 200 && kw <= 350) {
        return 25000 + 32500 + 85000 + (kw - 200) * KW_200_350;
    } else if (kw > 350) {
        return 25000 + 32500 + 85000 + 165000 + (kw - 350) * KW_TREN_350;
    } else {
        alert("Bạn nhập sai số kw!");
        return 0;
    }
}

