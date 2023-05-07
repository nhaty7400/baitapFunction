/**
 * input: loaiKH, maKH, soKenhCC, soKetNoi
 * 
 * step:
 * + hàm xử lý onchange ẩn hiện form nhập số kết nối
 * + lập công thức: 
 *      nhà dân: ND_XL_HD+ND_DV_CB+ND_KENH_CC*soKenhCC
 *      doanh nghiệp: DN_XL_HD+CalcSoKetNoiDN+DN_KENH_CC*soKenhCC
 *  
 * 
 * output: total
 */

//? Bảng giá phí
// nhà dân
const ND_XL_HD = 4.5;
const ND_DV_CB = 20.5;
const ND_KENH_CC = 7.5;

// doanh nghiệp
const DN_XL_HD = 15;
const DN_DV_CB_10_KN_DAU = 75;
const DN_DV_CB_MOI_KN_TREN_10 = 5;
const DN_KENH_CC = 50;




function main() {
    
    var loaiKH = getELE("loaiKh-b4").value;
    var maKH = getELE("maKH-b4").value;
    var soKenhCC = getELE("soKenhCC-b4").value;
    var total = 0;
    var soKetNoi = getELE("soKetNoi-b4").value;

    switch (loaiKH) {
        case "nhaDan":
            total = ND_XL_HD + ND_DV_CB + ND_KENH_CC * soKenhCC;
            break;
        case "doanhNghiep":
            total = DN_XL_HD + CalcSoKetNoiDN(soKetNoi, DN_DV_CB_10_KN_DAU, DN_DV_CB_MOI_KN_TREN_10) + DN_KENH_CC * soKenhCC;
            break;
    };

    getELE("result-b4").innerHTML = "Mã khách hàng: " + maKH + "; Tiền cáp: " + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
};
getELE("btnCalc-b4").onclick = main;



function getELE(id) {
    return document.getElementById(id);
};

function AnHienSoKetNoi() {
    var loaiKH = getELE("loaiKh-b4").value;
    switch (loaiKH) {
        case "doanhNghiep":
            getELE("soKetNoi-b4").style.display = "block";
            break;
    }
}

function CalcSoKetNoiDN(soKetNoi, DN_DV_CB_10_KN_DAU, DN_DV_CB_MOI_KN_TREN_10) {
    if (soKetNoi <= 10 && soKetNoi > 0) {
        return DN_DV_CB_10_KN_DAU;
    } else if (soKetNoi > 10) {
        return DN_DV_CB_10_KN_DAU + DN_DV_CB_MOI_KN_TREN_10 * (soKetNoi - 10);
    } else {
        alert("Nhập lại số kết nối");
        return 0;
    }
}

