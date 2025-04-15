import "https://cdn.socket.io/4.7.2/socket.io.min.js";


const socket = io('https://uehs-form-demo.fly.dev', {
    transports: ['websocket'],
});

socket.on('connect', () => {
    console.log("Socket id:", socket.id);
    document.getElementById("userId").value = socket.id;
});

socket.on("uplatnica", (data) => {
    document.getElementById("imePrezime").innerHTML=data.imePrezime; 
    document.getElementById("adresaPlatilac").innerHTML=data.adresa;
    document.getElementById("pozivNaBroj").innerHTML=data.member_ID;
    document.getElementById("uplatnica").classList.remove('displayNone');

    document.getElementById("bigQr").src=data.ipsQrLink;
    document.getElementById("smolQr").src=data.ipsQrLink;

    qrCode(ipsString);
});
/*
function qrCode(ipsString){
    var srcBig = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${ipsString}`;
    var srcSmol = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${ipsString}`;
    document.getElementById("uplatnica").classList.remove('displayNone');
    document.getElementById("bigQr").src=srcBig;
    document.getElementById("smolQr").src=srcSmol;
}*/