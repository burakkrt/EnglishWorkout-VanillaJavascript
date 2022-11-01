const sorular0 = [
    {id:0, soru:"How are you ?", cevap:"I am,fine.Thanks", soruTurkce:"Nasılsın ?", cevapTurkce:"İyiyim (fine), teşekkürler."},
    {id:1, soru:"Are you OK ?", cevap:"Not so good.", soruTurkce:"İyi misin ?", cevapTurkce:"Çok iyi değil."},
    {id:2, soru:"How are you ?", cevap:"I feel bad.", soruTurkce:"Nasılsın ?", cevapTurkce:"Kötü hissediyorum."},
    {id:3, soru:"How are you ?", cevap:"I am great.Thanks.", soruTurkce:"Nasılsın ?", cevapTurkce:"Harikayım. Teşekkürler."},
    {id:4, soru:"How are you ?", cevap:"Thanks. I am good. How about you ?", soruTurkce:"Nasılsın ?", cevapTurkce:"Teşekkürler. İyiyim, sen nasılsın ?"},
    {id:5, soru:"What's up ?", cevap:"So So", soruTurkce:"Naber ?", cevapTurkce:"Şöyle Böyle"},
    {id:6, soru:"What's up ?", cevap:"I am great. Thanks. What's up with you ?", soruTurkce:"Naber ?", cevapTurkce:"Harikayim. Teşekkürler. Senden naber ?"},
    {id:7, soru:"How are you doing ?", cevap:"I am doing great, thanks for asking.", soruTurkce:"Nasıl gidiyor ?", cevapTurkce:"Harika gidiyor. Sorduğun için teşekkürler."},
    {id:8, soru:"What's new ?", cevap:"Not much.", soruTurkce:"Hayatında yeni bir şeyler var mı ?", cevapTurkce:"Fazla bir yenilik yok."},
    {id:9, soru:"Is everything alright ?", cevap:"Yes, everything is OK", soruTurkce:"Her şey yolunda mı ?", cevapTurkce:"Evet, her şey yolunda."},
    {id:10, soru:"What’s going on ?", cevap:"Keeping busy", soruTurkce:"Neler yapıyorsun, hayatında neler oluyor ?", cevapTurkce:"Meşgulum, uğraşıp duruyorum.(Keping bizi)"},
    {id:11, soru:"How is business ?", cevap:"Same as usual", soruTurkce:"İşler nasıl ?", cevapTurkce:"Her zamanki gibi. (Seym es yüjıvo"},
    {id:12, soru:"Are you OK?", cevap:"I am OK. Thanks for asking.", soruTurkce:"İyi misin ?", cevapTurkce:"İyiyim. Soruduğun için teşekkürler."},
    {id:13, soru:"How are you feeling ?", cevap:"I'm tired.And you ?", soruTurkce:"Nasıl hissediyorsun ?", cevapTurkce:"Yorgunum (I'm). Sen nasıl hissediyorsun ?(and)"},
    {id:14, soru:"How are you feeling ?", cevap:"I'm cool", soruTurkce:"Nasıl hissediyorsun ?", cevapTurkce:"Ben iyiyim.(I'm)"},
    {id:15, soru:"What’s happening?", cevap:"No complaints.", soruTurkce:"Hayatın nasıl gidiyor ? (vats heappinin)", cevapTurkce:"Şikayetim yok. (No kompileynts)"},
    {id:16, soru:"How are you doing ?", cevap:"Not bad.", soruTurkce:"Nasıl gidiyor ?", cevapTurkce:"Kötü değil, fena değil."},
    {id:17, soru:"Are you OK?", cevap:"I am cool. How about you ?", soruTurkce:"İyi misin ?", cevapTurkce:"Harikayım. Sen nasılsın ?"},

];

const answerCheckFunctionName0 = "halHatirAnswerCheck";
// ÖNEMLİ NOT = Yukarıdaki string degeri 161. satırdaki function adına ver.

const soruCevapCheckboxID0 = "hal-hatir-soru-ve-cevap";   //Checkbox soru ve cevap id
const sadeceSoruCheckboxID0 = "hal-hatir-sadece-soru";    //Checkbox sadece soru id

const soruOlusturButtonID0 = "hal-hatir-addQuestion";     //Soru oluşturma butt
const soruAdetTextBoxID0 = "hal-hatir-soru-adet";     //Soru adet textbox id


// ------------ Checkbox Kontrol -----------
document.getElementById(soruCevapCheckboxID0).addEventListener("click", () =>{
    if(document.getElementById(soruCevapCheckboxID0).checked == true){
        if(document.getElementById(sadeceSoruCheckboxID0).checked == true) document.getElementById(sadeceSoruCheckboxID0).checked = false;
    }
    else if(document.getElementById(sadeceSoruCheckboxID0).checked == false) document.getElementById(sadeceSoruCheckboxID0).checked = true;
});
document.getElementById(sadeceSoruCheckboxID0).addEventListener("click", () =>{
    if(document.getElementById(sadeceSoruCheckboxID0).checked == true){
        if(document.getElementById(soruCevapCheckboxID0).checked == true) document.getElementById(soruCevapCheckboxID0).checked = false; 
    }
    else if(document.getElementById(soruCevapCheckboxID0).checked == false) document.getElementById(soruCevapCheckboxID0).checked = true;
});

// ------------ Soru Oluşturma Button -----------
document.getElementById(soruOlusturButtonID0).addEventListener("click", () =>{

    // Soru adeti sadece sayılar dan mı oluşuyor kontrol et.
    let stringCheckBoolen = false;
    var allStringChars = ' !"#$%&\'()*+,-./:;<=>?@ABCÇDEFGĞHIİJKLMNOÖPQRSŞTUÜVWXYZ[\\]^_`abcçdefgğhıijklmnoöpqrsştuüvwxyz{|}~';
    for(let inputValue of document.getElementById(soruAdetTextBoxID0).value){
        
        for(let stringChar of allStringChars){
            if(inputValue == stringChar){
                stringCheckBoolen = true;
                break;
            }
        }
    }

    // Soru tipini al (Sadece soru ,soru veya cevap)
    let soruTipi = true;
    if(document.getElementById(soruCevapCheckboxID0).checked == true) soruTipi = true;
    else soruTipi = false;

    // Soru adetini al
    let soruSayisi = 0;
    if(stringCheckBoolen != true && document.getElementById(soruAdetTextBoxID0).value != ""){
        document.getElementById(soruAdetTextBoxID0).removeAttribute("style");
        //En fazla 100 soru getir (Hatalı giriş ve çökmeleri önlemek için)
        if(document.getElementById(soruAdetTextBoxID0).value <= 100) soruSayisi = document.getElementById(soruAdetTextBoxID0).value;
        else document.getElementById(soruAdetTextBoxID0).style = "border: 1px solid red!important;";
    }

    // -------------- Soru oluşturma bölümü ----------------

    for(let i = 0; i < soruSayisi ; i++){

    // --Random Numbers--
    let randomQuestionOrAnswer = Math.floor(Math.random() * 2);
    const randomQuestionNumber = Math.floor(Math.random() * sorular0.length);
    
    // --Random Question ID and Random Question--
    const randomSoruID = Math.floor(Math.random() * 100000001);
    const question = sorular0[randomQuestionNumber];

    // --Sadece soru checkbox checked.Eğer sadece soru sorulup cevap istenecek ise.
    if(soruTipi == false) randomQuestionOrAnswer = 0;

    // ------------- Cevap Bilinmiyor İse ---------------
    if(randomQuestionOrAnswer == 0){
        document.getElementById("allContainer").insertAdjacentHTML("beforeend", 
        `
        <section class="soru-item" id="${randomSoruID}">
            <div class="settings">
                <span class="material-symbols-outlined settings-icon trueOrFalseCheck" onclick="${answerCheckFunctionName0}(${question.id},${randomSoruID},true)">check</span>
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
                <span class="material-symbols-outlined settings-icon trueOrFalseCheck" onclick="${answerCheckFunctionName0}(${question.id},${randomSoruID},false)">check</span>
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
    document.getElementById(soruAdetTextBoxID0).value = "";

    //Yeni soru oluşturulduğunda, doğru yanlış sonuçlarını güncelle yazdır.
    sonuclariHesapla();

    }
    
});

// ------------- Cevap Kontrol ---------------
// questType : eğer true ise cevap bilinmiyor, false ise soru bilinmiyor--
function halHatirAnswerCheck(soruID, elementSoruID, questType){

    const question = sorular0[soruID];
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
document.getElementById(soruAdetTextBoxID0).addEventListener("keypress", (event) =>{
    
    if(event.key == "Enter"){
        document.getElementById(soruOlusturButtonID0).click();
    }
})