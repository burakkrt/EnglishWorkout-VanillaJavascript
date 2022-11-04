const gunAyYilKisiZamirleriSorular = [
    {id:0, soru:"Monday",       cevap:"Pazartesi",  soruTurkce:"Man-dey",       cevapTurkce:""},
    {id:1, soru:"Tuesday",      cevap:"Salı",       soruTurkce:"Tuuz-dey",      cevapTurkce:""},
    {id:2, soru:"Wednesday",    cevap:"Çarşamba",   soruTurkce:"Wenz-dey",      cevapTurkce:""},
    {id:3, soru:"Thursday",     cevap:"Perşembe",   soruTurkce:"Törz-dey",      cevapTurkce:""},
    {id:4, soru:"Friday",       cevap:"Cuma",       soruTurkce:"Fıray-dey",     cevapTurkce:""},
    {id:5, soru:"Saturday",     cevap:"Cumartesi",  soruTurkce:"Satır-dey",     cevapTurkce:""},
    {id:6, soru:"Sunday",       cevap:"Pazar",      soruTurkce:"San-dey",       cevapTurkce:""},
    {id:7, soru:"Year",         cevap:"Yıl",        soruTurkce:"Yiır",          cevapTurkce:""},
    {id:8, soru:"Month",        cevap:"Ay",         soruTurkce:"Mant",          cevapTurkce:""},
    {id:9, soru:"Week",         cevap:"Hafta",      soruTurkce:"Wiik",          cevapTurkce:""},
    {id:10, soru:"Weekend",     cevap:"Haftasonu",  soruTurkce:"Wiik-end",      cevapTurkce:""},
    {id:11, soru:"Weekdays",    cevap:"Haftaiçi",   soruTurkce:"Wiik-deys",     cevapTurkce:""},
    {id:12, soru:"Day",         cevap:"Gün",        soruTurkce:"Dey",           cevapTurkce:""},
    {id:13, soru:"January",     cevap:"Ocak",       soruTurkce:"Ce-nu-e-ri",    cevapTurkce:""},
    {id:14, soru:"February",    cevap:"Şubat",      soruTurkce:"Feb-ru-e-ri",   cevapTurkce:""},
    {id:15, soru:"March",       cevap:"Mart",       soruTurkce:"Març",          cevapTurkce:""},
    {id:16, soru:"April",       cevap:"Nisan",      soruTurkce:"Ep-rıl",        cevapTurkce:""},
    {id:17, soru:"May",         cevap:"Mayıs",      soruTurkce:"Mey",           cevapTurkce:""},
    {id:18, soru:"June",        cevap:"Haziran",    soruTurkce:"Cun",           cevapTurkce:""},
    {id:19, soru:"July",        cevap:"Temmuz",     soruTurkce:"Cu-lay",        cevapTurkce:""},
    {id:20, soru:"August",      cevap:"Ağustos",    soruTurkce:"Ou-gıst",       cevapTurkce:""},
    {id:21, soru:"September",   cevap:"Eylül",      soruTurkce:"Sep-tem-bır",   cevapTurkce:""},
    {id:22, soru:"October",     cevap:"Ekim",       soruTurkce:"Ok-to-bır",     cevapTurkce:""},
    {id:23, soru:"November",    cevap:"Kasım",      soruTurkce:"No-vem-bır",    cevapTurkce:""},
    {id:24, soru:"December",    cevap:"Aralık",     soruTurkce:"Di-sem-bır",    cevapTurkce:""},
    
];

const answerCheck4 = "gunAyYilAnswerCheck";

const soruCevapCheckboxID4 = "gun-ay-yil-soru-ve-cevap";   //Checkbox soru ve cevap id
const sadeceSoruCheckboxID4 = "gun-ay-yil-sadece-soru";    //Checkbox sadece soru id

const soruOlusturButtonID4 = "gun-ay-yil-addQuestion";     //Soru oluşturma button id
const soruAdetTextBoxID4 = "gun-ay-yil-soru-adet";     //Soru adet textbox id

// ------------ Checkbox Kontrol -----------
document.getElementById(soruCevapCheckboxID4).addEventListener("click", () =>{
    if(document.getElementById(soruCevapCheckboxID4).checked == true){
        if(document.getElementById(sadeceSoruCheckboxID4).checked == true) document.getElementById(sadeceSoruCheckboxID4).checked = false;
    }
    else if(document.getElementById(sadeceSoruCheckboxID4).checked == false) document.getElementById(sadeceSoruCheckboxID4).checked = true;
});
document.getElementById(sadeceSoruCheckboxID4).addEventListener("click", () =>{
    if(document.getElementById(sadeceSoruCheckboxID4).checked == true){
        if(document.getElementById(soruCevapCheckboxID4).checked == true) document.getElementById(soruCevapCheckboxID4).checked = false; 
    }
    else if(document.getElementById(soruCevapCheckboxID4).checked == false) document.getElementById(soruCevapCheckboxID4).checked = true;
});

// ------------ Soru Oluşturma Button -----------
document.getElementById(soruOlusturButtonID4).addEventListener("click", () =>{

    //Soru adeti check
    let soruAdetiCheck = true;
    // Soru adeti sadece sayılar dan mı oluşuyor kontrol et.
    let stringCheckBoolen = false;
    var allStringChars = ' !"#$%&\'()*+,-./:;<=>?@ABCÇDEFGĞHIİJKLMNOÖPQRSŞTUÜVWXYZ[\\]^_`abcçdefgğhıijklmnoöpqrsştuüvwxyz{|}~';
    for(let inputValue of document.getElementById(soruAdetTextBoxID4).value){
        
        for(let stringChar of allStringChars){
            if(inputValue == stringChar){
                stringCheckBoolen = true;
                break;
            }
        }
    }

    // Soru tipini al (Sadece soru ,soru veya cevap)
    let soruTipi = true;
    if(document.getElementById(soruCevapCheckboxID4).checked == true) soruTipi = true;
    else soruTipi = false;

    // Soru adetini al
    let soruSayisi = 0;
    if(stringCheckBoolen != true && document.getElementById(soruAdetTextBoxID4).value != ""){
        document.getElementById(soruAdetTextBoxID4).removeAttribute("style");
        //En fazla 100 soru getir (Hatalı giriş ve çökmeleri önlemek için)
        if(document.getElementById(soruAdetTextBoxID4).value <= 100) soruSayisi = document.getElementById(soruAdetTextBoxID4).value;
        else {
            document.getElementById(soruAdetTextBoxID4).style = "border: 1px solid red!important;";
            message("Tek seferde en fazla 100 soru oluşturabilirsin.");
            soruAdetiCheck = false;
        }
    }

    // -------------- Soru oluşturma bölümü ----------------
    if(soruAdetiCheck){
        for(let i = 0; i < soruSayisi ; i++){

        // --Random Numbers--
        let randomQuestionOrAnswer = Math.floor(Math.random() * 2);
        const randomQuestionNumber = Math.floor(Math.random() * gunAyYilKisiZamirleriSorular.length);
        
        // --Random Question ID and Random Question--
        const randomSoruID = Math.floor(Math.random() * 100000001);
        const question = gunAyYilKisiZamirleriSorular[randomQuestionNumber];

        // --Sadece soru checkbox checked.Eğer sadece soru sorulup cevap istenecek ise.
        if(soruTipi == false) randomQuestionOrAnswer = 0;

        // ------------- Cevap Bilinmiyor İse ---------------
        if(randomQuestionOrAnswer == 0){
            document.getElementById("allContainer").insertAdjacentHTML("beforeend", 
            `
            <section class="soru-item" id="${randomSoruID}">
                <div class="settings">
                    <span class="material-symbols-outlined settings-icon trueOrFalseCheck" onclick="${answerCheck4}(${question.id},${randomSoruID},true)">check</span>
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
                    <span class="material-symbols-outlined settings-icon trueOrFalseCheck" onclick="${answerCheck4}(${question.id},${randomSoruID},false)">check</span>
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

    }

        // Oluşturulan soru adetini ekrana yaz.
        message(soruSayisi + " adet soru oluşturuldu.")

        // İşlem sonunda soru adeti textbox ını temizle.
        document.getElementById(soruAdetTextBoxID4).value = "";

        //Yeni soru oluşturulduğunda, doğru yanlış sonuçlarını güncelle yazdır.
        sonuclariHesapla();

    }
});

// ------------- Cevap Kontrol ---------------
// questType : eğer true ise cevap bilinmiyor, false ise soru bilinmiyor--
function gunAyYilAnswerCheck(soruID, elementSoruID, questType){

    const question = gunAyYilKisiZamirleriSorular[soruID];
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



// Soru sayısı textbox press Enter
document.getElementById(soruAdetTextBoxID4).addEventListener("keypress", (event) =>{
    
    if(event.key == "Enter"){
        document.getElementById(soruOlusturButtonID4).click();
    }
})