const generateBtn = document.querySelector('form button');
const qrcodeBox = document.querySelector('.qr-code');
const qrInput = document.querySelector('form input');
const qrImage = document.querySelector('.qr-code img');


generateBtn.addEventListener('click' , () =>{
    let qrValue = qrInput.value;
    if (!qrValue) {
        return alert('لطفا یک متن یا آدرس وارد بکن');
    }
    generateBtn.innerText = "در حال دریافت Qr Code";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

    qrImage.addEventListener('load' , () =>{
        qrcodeBox.classList.remove("hidden");
        generateBtn.innerText = "تولید Qr Code";
    })
})

qrInput.addEventListener('keyup' , () =>{
    if (!qrInput.value) {
        qrcodeBox.classList.add("hidden");
    }
})
