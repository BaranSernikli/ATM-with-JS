let bakiye = 1000; 

function bakiyeGuncelle() {
    document.getElementById('balance').innerText = bakiye + "₺";
}

function paraYatir() {
    let tutar = parseFloat(document.getElementById('amount').value);
    if (isNaN(tutar) || tutar <= 0) {
        document.getElementById('message').innerText = "Geçerli bir tutar girin!";
    } else {
        bakiye += tutar;
        bakiyeGuncelle();
        document.getElementById('message').innerText = `${tutar}₺ hesabınıza yatırıldı.`;
    }
    document.getElementById('amount').value = ''; 
}

function paraCek() {
    let tutar = parseFloat(document.getElementById('amount').value);
    if (isNaN(tutar) || tutar <= 0) {
        document.getElementById('message').innerText = "Geçerli bir tutar girin!";
    } else if (tutar > bakiye) {
        document.getElementById('message').innerText = "Bakiye yetersiz!";
    } else {
        bakiye -= tutar;
        bakiyeGuncelle();
        document.getElementById('message').innerText = `${tutar}₺ çekildi.`;
    }
    document.getElementById('amount').value = ''; 
}


bakiyeGuncelle();
