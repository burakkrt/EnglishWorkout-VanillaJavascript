const selamlasmaVedalasmaSorular = [
    {id:0, soru:"Hello", cevap:"Merhaba", soruTurkce:"(Resmi Selamlaşma)", cevapTurkce:""},
    {id:1, soru:"Hi", cevap:"Selam", soruTurkce:"", cevapTurkce:""},
    {id:2, soru:"Hi there", cevap:"Selamlar", soruTurkce:"(Hi deyır)", cevapTurkce:""},
    {id:3, soru:"Hey", cevap:"Selam", soruTurkce:"(Dikkat çekme amaçlı selam)", cevapTurkce:""},
    {id:4, soru:"Hello (Telefon açma)", cevap:"Alo", soruTurkce:"", cevapTurkce:""},
    {id:5, soru:"Good morning", cevap:"Günaydın", soruTurkce:"", cevapTurkce:""},
    {id:6, soru:"Good afnernoon", cevap:"Tünaydın", soruTurkce:"", cevapTurkce:""},
    {id:7, soru:"Good evening", cevap:"İyi akşamlar", soruTurkce:"", cevapTurkce:""},
    {id:8, soru:"Good night", cevap:"İyi geceler", soruTurkce:"", cevapTurkce:""},
    {id:9, soru:"Bye Bye", cevap:"Güle güle", soruTurkce:"", cevapTurkce:""},
    {id:10, soru:"See you", cevap:"Görüşürüz", soruTurkce:"", cevapTurkce:""},
    {id:11, soru:"See you letter", cevap:"Sonra görüşürüz", soruTurkce:"(Si yu leydır", cevapTurkce:""},
    {id:12, soru:"See you tomorrow", cevap:"Yarın görüşürüz", soruTurkce:"", cevapTurkce:""},
    {id:13, soru:"Have a nice day", cevap:"İyi günler", soruTurkce:"Hev a nays dey", cevapTurkce:""},
    {id:14, soru:"Have a nice evening", cevap:"İyi akşamlar", soruTurkce:"Hev a nays ivning", cevapTurkce:""},
    {id:15, soru:"Take care of yourself", cevap:"Kendine iyi bak", soruTurkce:"(Tek keyır of yorself)", cevapTurkce:""},
    {id:16, soru:"You too", cevap:"Sen de", soruTurkce:"", cevapTurkce:""},
    {id:17, soru:"Me too", cevap:"Ben de", soruTurkce:"", cevapTurkce:""},
    {id:18, soru:"Take care", cevap:"Kendine iyi bak", soruTurkce:"Kısaltılmış hali (Tek keyır)", cevapTurkce:""},

];

const answerCheckFunctionName = "selamlasmaVedalasmaAnswerCheck";
// ÖNEMLİ NOT = Yukarıdaki string degeri 143. satırdaki function adına ver.

const soruCevapCheckboxID = "selamlasma-vedalasma-soru-ve-cevap";   //Checkbox soru ve cevap id
const sadeceSoruCheckboxID = "selamlasma-vedalasma-sadece-soru";    //Checkbox sadece soru id

const soruOlusturButtonID = "selamlasma-vedalasma-addQuestion";     //Soru oluşturma button id
const soruAdetTextBoxID = "selamlasma-vedalasma-soru-adet";     //Soru adet textbox id

// ------------ Checkbox Kontrol -----------
document.getElementById(soruCevapCheckboxID).addEventListener("click", () =>{
    if(document.getElementById(soruCevapCheckboxID).checked == true){
        if(document.getElementById(sadeceSoruCheckboxID).checked == true) document.getElementById(sadeceSoruCheckboxID).checked = false;
    }
    else if(document.getElementById(sadeceSoruCheckboxID).checked == false) document.getElementById(sadeceSoruCheckboxID).checked = true;
});
document.getElementById(sadeceSoruCheckboxID).addEventListener("click", () =>{
    if(document.getElementById(sadeceSoruCheckboxID).checked == true){
        if(document.getElementById(soruCevapCheckboxID).checked == true) document.getElementById(soruCevapCheckboxID).checked = false; 
    }
    else if(document.getElementById(soruCevapCheckboxID).checked == false) document.getElementById(soruCevapCheckboxID).checked = true;
});

// ------------ Soru Oluşturma Button -----------
document.getElementById(soruOlusturButtonID).addEventListener("click", () =>{

    // Soru adeti sadece sayılar dan mı oluşuyor kontrol et.
    let stringCheckBoolen = false;
    var allStringChars = ' !"#$%&\'()*+,-./:;<=>?@ABCÇDEFGĞHIİJKLMNOÖPQRSŞTUÜVWXYZ[\\]^_`abcçdefgğhıijklmnoöpqrsştuüvwxyz{|}~';
    for(let inputValue of document.getElementById(soruAdetTextBoxID).value){
        
        for(let stringChar of allStringChars){
            if(inputValue == stringChar){
                stringCheckBoolen = true;
                break;
            }
        }
    }

    // Soru tipini al (Sadece soru ,soru veya cevap)
    let soruTipi = true;
    if(document.getElementById(soruCevapCheckboxID).checked == true) soruTipi = true;
    else soruTipi = false;

    // Soru adetini al
    let soruSayisi = 0;
    if(stringCheckBoolen != true && document.getElementById(soruAdetTextBoxID).value != ""){
        document.getElementById(soruAdetTextBoxID).removeAttribute("style");
        //En fazla 100 soru getir (Hatalı giriş ve çökmeleri önlemek için)
        if(document.getElementById(soruAdetTextBoxID).value <= 100) soruSayisi = document.getElementById(soruAdetTextBoxID).value;
        else document.getElementById(soruAdetTextBoxID).style = "border: 1px solid red!important;";
    }

    // -------------- Soru oluşturma bölümü ----------------
    for(let i = 0; i < soruSayisi ; i++){

    // --Random Numbers--
    let randomQuestionOrAnswer = Math.floor(Math.random() * 2);
    const randomQuestionNumber = Math.floor(Math.random() * selamlasmaVedalasmaSorular.length);
    
    // --Random Question ID and Random Question--
    const randomSoruID = Math.floor(Math.random() * 100000001);
    const question = selamlasmaVedalasmaSorular[randomQuestionNumber];

    // --Sadece soru checkbox checked.Eğer sadece soru sorulup cevap istenecek ise.
    if(soruTipi == false) randomQuestionOrAnswer = 0;

    // ------------- Cevap Bilinmiyor İse ---------------
    if(randomQuestionOrAnswer == 0){
        document.getElementById("allContainer").insertAdjacentHTML("beforeend", 
        `
        <section class="soru-item" id="${randomSoruID}">
            <div class="settings">
                <span class="material-symbols-outlined settings-icon trueOrFalseCheck" onclick="${answerCheckFunctionName}(${question.id},${randomSoruID},true)">check</span>
            </div>
            <div class="soru">
                <span class="material-symbols-outlined soru-icon">quiz</span>
                <div class="soru-content" id="soru-content">
                ${question.soru}
                <span class="turkish">${question.soruTurkce}</span>
                </div>
            </div>
            <div class="cevap">
                <span class="material-symbols-outlined soru-icon">record_voice_over</span>
                <div class="cevap-content" id="cevap-content">
                    <input type="text" onkeypress="keyPressEnter(event)" spellcheck="false"></input>
                    <span class="turkish">${question.cevapTurkce}</span>
                </div>
            </div>
        </section>
        `
        );
    }

    // ------------- Soru Bilinmiyor İse ---------------
    if(randomQuestionOrAnswer == 1){

        document.getElementById("allContainer").insertAdjacentHTML("beforeend", 
        `
        <section class="soru-item" id="${randomSoruID}">
            <div class="settings">
                <span class="material-symbols-outlined settings-icon trueOrFalseCheck" onclick="${answerCheckFunctionName}(${question.id},${randomSoruID},false)">check</span>
            </div>
            <div class="soru">
                <span class="material-symbols-outlined soru-icon">quiz</span>
                <div class="soru-content" id="soru-content">
                <input type="text" onkeypress="keyPressEnter(event)" spellcheck="false"></input>
                <span class="turkish">${question.soruTurkce}</span>
                </div>
            </div>
            <div class="cevap">
                <span class="material-symbols-outlined soru-icon">record_voice_over</span>
                <div class="cevap-content" id="cevap-content">
                ${question.cevap}
                <span class="turkish">${question.cevapTurkce}</span>
                </div>
            </div>
        </section>
        `
        );
    }

    // Soru oluşturulduktan sonra sonuncu sorunun içerisindeki inputa odaklan.
    // document.getElementById(randomSoruID).querySelector("input").focus();

    // İşlem sonunda soru adeti textbox ını temizle.
    document.getElementById(soruAdetTextBoxID).value = "";

    //Yeni soru oluşturulduğunda, doğru yanlış sonuçlarını güncelle yazdır.
    sonuclariHesapla();

    }
    
});

// ------------- Cevap Kontrol ---------------
// questType : eğer true ise cevap bilinmiyor, false ise soru bilinmiyor--
function selamlasmaVedalasmaAnswerCheck(soruID, elementSoruID, questType){

    const question = selamlasmaVedalasmaSorular[soruID];
    const answer = document.getElementById(elementSoruID).querySelector("input").value;

    if(answer){
        // --Cevap bilinmiyor ise--
        if(questType == true){

            if(answer.replace(/[.,!?' ]/g,'').toLowerCase() == question.cevap.replace(/[.,!?' ]/g,'').toLowerCase()){
                document.getElementById(elementSoruID).classList.add("true");
                // --Eğer cevap doğru ise textbox 'ı kaldırıp yerine sorunun diziden cevabını koy.
                const cevapContentHTML = document.getElementById(elementSoruID).querySelector(".cevap .cevap-content");
                cevapContentHTML.querySelector("input").remove();
                let oldInner = cevapContentHTML.innerHTML;
                cevapContentHTML.innerHTML = "";
                cevapContentHTML.innerHTML += `<span>${question.cevap}</span>`;
                cevapContentHTML.innerHTML += oldInner;
            }
            else {
                document.getElementById(elementSoruID).classList.add("false");
                document.getElementById(elementSoruID).querySelector("input").parentElement.style = "color: #9A1663;"
                document.getElementById(elementSoruID).querySelector("input").parentElement.innerHTML = 
                `
                ${answer}
                (<span style="color: green;">${question.cevap}</span>)
                <span class="turkish">${question.cevapTurkce}</span>
                `;
                
            }
        }
        // --Soru bilinmiyor ise--
        else if (questType == false){

            if(answer.replace(/[.,!?' ]/g,'').toLowerCase() == question.soru.replace(/[.,!?' ]/g,'').toLowerCase()){
                document.getElementById(elementSoruID).classList.add("true");
                // --Eğer cevap doğru ise textbox 'ı kaldırıp yerine sorunun diziden cevabını koy.
                const cevapContentHTML = document.getElementById(elementSoruID).querySelector(".soru .soru-content");
                cevapContentHTML.querySelector("input").remove();
                let oldInner = cevapContentHTML.innerHTML;
                cevapContentHTML.innerHTML = "";
                cevapContentHTML.innerHTML += `<span>${question.soru}</span>`;
                cevapContentHTML.innerHTML += oldInner;
            }
            else {
                document.getElementById(elementSoruID).classList.add("false");
                document.getElementById(elementSoruID).querySelector("input").parentElement.style = "color: #9A1663;"
                document.getElementById(elementSoruID).querySelector("input").parentElement.innerHTML = 
                `
                ${answer}
                (<span style="color: green;">${question.soru}</span>)
                <span class="turkish">${question.soruTurkce}</span>
                `;
            }
        }
    }
    else document.getElementById(elementSoruID).querySelector("input").style = "border: 1px solid red;";
    
    //Her cevap girildiğinde, doğru yanlış sonuçlarını güncelle yazdır.
    sonuclariHesapla();
}

// input keypress Enter
function keyPressEnter(event){
    
    if(event.key == "Enter"){

        event.path[3].querySelector(".trueOrFalseCheck").click();
        //Her cevap girildiğinde, doğru yanlış sonuçlarını güncelle yazdır.
        sonuclariHesapla();
    }
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
}

// Soru sayısı textbox press Enter
document.getElementById("selamlasma-vedalasma-soru-adet").addEventListener("keypress", (event) =>{
    
    if(event.key == "Enter"){
        document.querySelector("#selamlasma-vedalasma-addQuestion").click();
    }
})