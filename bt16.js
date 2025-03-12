// chuyển đổi só sang mãmã nhị phân
let dec = +prompt("Enter a number: ");
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
};
alert(`The binary representation of ${dec} is: ${dec2bin(dec)}`);