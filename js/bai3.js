/**
 * Input: hoTen, tn, soNguoi
 * 
 * Step: tính thuế cần nộp
 *  + tính thu nhập chịu thuế: tn = tn-(4e+6)-soNguoi*(1.6e+6)
 *  + lập công thức:
 *  tn < 60tr: tn*TN_DUOI_60;
 *  60tr < tn < 120tr: (3e+6) + (tn-(6e+7))*TN_60_120;
 *  120tr < tn < 210tr: (3e+6) + (6e+6) + (tn-(12e+7))*TN_120_210;
 *  210tr < tn < 384tr: (3e+6) + (6e+6) + (135e+5) + (tn-(21e+7))*TN_210_384;
 *  384tr < tn < 624tr: (3e+6) + (6e+6) + (135e+5) + (384e+5) + (tn-(384e+6))*TN_384_624;
 *  624tr < tn < 960tr: (3e+6) + (6e+6) + (135e+5) + (384e+5) + (6e+7) + (tn-(624e+6))*TN_624_960;
 *  960tr < tn: (3e+6) + (6e+6) + (135e+5) + (384e+5) + (6e+7) + (1008e+5) + (tn-(96e+7))*TN_TREN_960;
 *      
 *
 * Output: hoTen, thue
 */

//? Bảng thuế suất
const TN_DUOI_60=0.05;
const TN_60_120=0.1;
const TN_120_210=0.15;
const TN_210_384=0.2;
const TN_384_624=0.25;
const TN_624_960=0.3;
const TN_TREN_960=0.35;


function main(){

    var hoTen=getELE("hoTen-b3").value;
    var tn=getELE("thuNhap-b3").value;
    var soNguoi=getELE("soNguoi-b3").value;
    var thue=CalcThue(tn,soNguoi,TN_DUOI_60,TN_60_120,TN_120_210,TN_210_384,TN_384_624,TN_624_960,TN_TREN_960);

    getELE("result-b3").innerHTML="Họ tên: "+hoTen+"; tiền thuế: "+thue.toLocaleString();
}
getELE("btnCalc-b3").onclick=main;

function getELE(id) {
    return document.getElementById(id);
}

function CalcThue(tn,soNguoi,TN_DUOI_60,TN_60_120,TN_120_210,TN_210_384,TN_384_624,TN_624_960,TN_TREN_960){
    if(soNguoi<0){
        alert("Bạn nhập sai số người phụ thuộc!");
        return 0;
    }
    tn=tn-(4e+6)-soNguoi*(1.6e+6);

    if(tn>0&&tn<6e+7){
        return tn*TN_DUOI_60;
    }else if(tn>6e+7&&tn<12e+7){
        return (3e+6) + (tn-(6e+7))*TN_60_120;
    }else if(tn>12e+7&&tn<21e+7){
        return (3e+6) + (6e+6) + (tn-(12e+7))*TN_120_210;
    }else if(tn>21e+7&&tn<384e+6){
        return (3e+6) + (6e+6) + (135e+5) + (tn-(21e+7))*TN_210_384;
    }else if(tn>384e+6&&tn<624e+6){
        return (3e+6) + (6e+6) + (135e+5) + (384e+5) + (tn-(384e+6))*TN_384_624;
    }else if(tn>624e+6&&tn<96e+7){
        return (3e+6) + (6e+6) + (135e+5) + (384e+5) + (6e+7) + (tn-(624e+6))*TN_624_960;
    }else if(tn>96e+7){
        return (3e+6) + (6e+6) + (135e+5) + (384e+5) + (6e+7) + (1008e+5) + (tn-(96e+7))*TN_TREN_960;
    }else{
        alert("Bạn nhập sai số tiền thu nhập");
        return 0;
    }
}