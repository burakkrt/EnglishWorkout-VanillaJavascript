// ------------- Message Box ---------------
function message(messageValue = String){

    const messageBoxHtmlDocument = document.getElementById("message-box");
    const messageHtmlDocument = document.getElementById("message-content");
    const message = messageValue;
    
    if(messageBoxHtmlDocument.getAttribute("class").includes("passive")){
        messageBoxHtmlDocument.classList.replace("passive","active");
        messageHtmlDocument.textContent = message;
    }
    else {
        messageBoxHtmlDocument.classList.add("active");
        messageHtmlDocument.textContent = message;
    }
    
        
    
    setTimeout(() => {
    
    if(messageBoxHtmlDocument.getAttribute("class").includes("active")){
        messageBoxHtmlDocument.classList.remove("active");
        messageBoxHtmlDocument.classList.add("passive");
    }
    }, 2000);

}

// ------------- Local Stroge ---------------

// gun ay ve yıl şeklinde şuanın tarihini Türkçe obje çeklinde geri döndürür
function suanTarih(){

    let gun = new Date().getDay();
    if(gun == 1) gun = "Pazartesi";
    else if(gun == 2) gun = "Salı";
    else if(gun == 3) gun = "Çarşamba";
    else if(gun == 4) gun = "Perşembe";
    else if(gun == 5) gun = "Cuma";
    else if(gun == 6) gun = "Cumartesi";
    else if(gun == 7) gun = "Pazar";

    let ay = new Date().getMonth();
    if(ay == 1) ay = "Ocak";
    else if(ay == 2) ay = "Şubat";
    else if(ay == 3) ay = "Mart";
    else if(ay == 4) ay = "Nisan";
    else if(ay == 5) ay = "Mayıs";
    else if(ay == 6) ay = "Haziran";
    else if(ay == 7) ay = "Temmuz";
    else if(ay == 8) ay = "Ağustos";
    else if(ay == 9) ay = "Eylül";
    else if(ay == 10) ay = "Ekim";
    else if(ay == 11) ay = "Kasım";
    else if(ay == 12) ay = "Aralık";

    let yil = new Date().getFullYear();
    

    return {gun: gun, ay: ay, yil: yil};
}
// localstorage 'ye değerleri gönderir
function localStorageAddIstatistik(cozulenSoru){

    let istatistik = [];

    if(localStorage.getItem("soruIstatistik") !== null){

        istatistik = JSON.parse(localStorage.getItem("soruIstatistik"));
        istatistik.push( {id: istatistik.length, cozulenSoru: cozulenSoru, tarih: suanTarih()} );
        localStorage.setItem("soruIstatistik", JSON.stringify(istatistik));
    }
    else {
        istatistik.push( {id: istatistik.length, cozulenSoru: cozulenSoru, tarih: suanTarih()} );
        localStorage.setItem("soruIstatistik", JSON.stringify(istatistik));
    }
    istatistikEkranaYazdir()
}

// Toplam soru, Doğru, Yanlış, Boş hesaplama ve yazdırma fonksiyonu
function sonuclariHesapla(){

    document.querySelector("#result").innerHTML = "";

    //Sonuçları yazdır
    document.querySelector("#result").insertAdjacentHTML("beforeend", 
    `
    <h4>Toplam Soru : <span class="toplam-soru">${document.getElementsByClassName("soru-item").length}</span></h4>
    <h4>Doğru : <span class="toplam-dogru">${document.getElementsByClassName("true").length}</span></h4>
    <h4>Yanlış : <span class="toplam-yanlis">${document.getElementsByClassName("false").length}</span></h4>
    <h4>Boş : <span class="toplam-bos">${document.getElementsByClassName("soru-item").length - (document.getElementsByClassName("true").length + document.getElementsByClassName("false").length)}</span></h4>
    `);

    if(document.getElementsByClassName("false").length != 0 || document.getElementsByClassName("true").length != 0){
        localStorageAddIstatistik(1);
    }
    
}

function istatistikEkranaYazdir(){

    let istatistikHtmlDocument = document.getElementById("soru-istatistik");

    if(JSON.parse(localStorage.getItem("soruIstatistik")) !== null){

        const istatistik = JSON.parse(localStorage.getItem("soruIstatistik"));

        // Toplam çözülen soru adetini bul
        let toplamCozulenSoru = 0;
        for(let deger of istatistik){
            toplamCozulenSoru += deger.cozulenSoru;
        }

        // Bugün kaç tane çözdüğünü bul
        const bugunTarih = suanTarih();
        let bugunCozulenSoru = 0;
        for(let deger of istatistik){  
            if(deger.tarih.gun == bugunTarih.gun && deger.tarih.ay == bugunTarih.ay && deger.tarih.yil == bugunTarih.yil){
                bugunCozulenSoru += deger.cozulenSoru;
            }
        }
        
        istatistikHtmlDocument.innerHTML = `
        Bugün sadece ${bugunCozulenSoru} soru çözdün. Şuana kadar toplam ${toplamCozulenSoru} soru çözdüldü.
        `;
        
    }
}
istatistikEkranaYazdir()







