const tanismaYerSorular = [
    {id:0, soru:"What is your name ?", cevap:"My name is Burak.", soruTurkce:"Senin adın ne ? (What is)", cevapTurkce:"Benim adım Burak."},
    {id:1, soru:"What's your name ?", cevap:"I am Burak, and you ?", soruTurkce:"Senin adın ne ? (What's)", cevapTurkce:"Ben Burak, ya sen ?"},
    {id:2, soru:"What's your name ?", cevap:"My name is Burak, and you ?", soruTurkce:"Senin adın ne ?", cevapTurkce:"Benim ismim Burak, ya seninki ?"},
    {id:3, soru:"Hi.I am Burak. What's your name ?", cevap:"Hi. My name is Kaira. Nice to meet you.", soruTurkce:"Selam. Ben Burak. Senin adın ne ?", cevapTurkce:"Selam. Benim adım Kaira. Seninle tanışmak güzel."},
    {id:4, soru:"Hey. My name is Kaira, and you ?", cevap:"Hi Kaira. I am Burak. Pleased to meet you.", soruTurkce:"Selam. Benim adım Kaira, ya seninki ?", cevapTurkce:"Selam Kaira. Ben Burak. Tanıştığımıza memnun oldum. (Pilisdt tu mit yu)"},
    {id:5, soru:"My name is Kaira.", cevap:"Glad to meet you.", soruTurkce:"Benim adım Kaira.", cevapTurkce:"Tanıştığımıza sevindim.(Gılad tu mit yu)"},
    {id:6, soru:"I'm Burak.", cevap:"A pleasure to meet you.", soruTurkce:"Ben Burak.", cevapTurkce:"Seninle tanışmak bir zevk.(e pilejır tu mit yu)"},
    {id:7, soru:"I am happy to meet you.", cevap:"Nice to meet you too.", soruTurkce:"Seninle tanıştığıma memnun oldum.", cevapTurkce:"Bende seninle tanıştığıma memnun oldum."},
    {id:8, soru:"Where are you from ?", cevap:"I am from Turkey. Which city ?", soruTurkce:"Nerelisin ?", cevapTurkce:"Türkiyeliyim. Hangi şehir ?"},
    {id:9, soru:"Are you from İstanbul ?", cevap:"Yes, I am", soruTurkce:"İstanbul 'dan mısın ?", cevapTurkce:"Evet öyleyim."},
    {id:10, soru:"I am from Turkey, how about you ?", cevap:"I am from Canada.", soruTurkce:"Türkiyeliyim, sen nerelisin ?", cevapTurkce:"Ben Kanadalıyım."},
    {id:11, soru:"Where do you live ?", cevap:"I live in İstanbul, and you ?", soruTurkce:"Nerede yaşıyorsun ?(veer du yu liv)", cevapTurkce:"İstanbul 'da yaşıyorum, ya sen ?"},
    {id:12, soru:"Are you from England ?", cevap:"No. I am not. And you ?", soruTurkce:"İngiltere 'den misin ?", cevapTurkce:"Hayır, değilim. Ya sen ?"},
    {id:13, soru:"How old are you ?", cevap:"I am 15 years old.", soruTurkce:"Kaç yaşındasın ?", cevapTurkce:"Ben 15 yaşındayım."},
    {id:14, soru:"How old is she ?", cevap:"She is 20 years old.", soruTurkce:"O (kız) kaç yaşında ?", cevapTurkce:"O (kız) 20 yaşında."},
    {id:15, soru:"How old is your father ?", cevap:"My father is 40 years old.", soruTurkce:"Baban kaç yaşında ?", cevapTurkce:"Babam 40 yaşında (veya He/She is)"},
    {id:16, soru:"How old is your mother ?", cevap:"She is 40 years old.", soruTurkce:"Annen kaç yaşında ?", cevapTurkce:"O (kız) 40 yaşında (veya My mother)"},

];

const answerCheck2 = "tanismaMemleketAnswerCheck";

const soruCevapCheckboxID2 = "tanisma-memleket-yer-soru-ve-cevap";   //Checkbox soru ve cevap id
const sadeceSoruCheckboxID2 = "tanisma-memleket-yer-sadece-soru";    //Checkbox sadece soru id

const soruOlusturButtonID2 = "tanisma-memleket-yer-addQuestion";     //Soru oluşturma button id
const soruAdetTextBoxID2 = "tanisma-memleket-yer-soru-adet";     //Soru adet textbox id

// ------------ Checkbox Kontrol -----------
document.getElementById(soruCevapCheckboxID2).addEventListener("click", () =>{
    if(document.getElementById(soruCevapCheckboxID2).checked == true){
        if(document.getElementById(sadeceSoruCheckboxID2).checked == true) document.getElementById(sadeceSoruCheckboxID2).checked = false;
    }
    else if(document.getElementById(sadeceSoruCheckboxID2).checked == false) document.getElementById(sadeceSoruCheckboxID2).checked = true;
});
document.getElementById(sadeceSoruCheckboxID2).addEventListener("click", () =>{
    if(document.getElementById(sadeceSoruCheckboxID2).checked == true){
        if(document.getElementById(soruCevapCheckboxID2).checked == true) document.getElementById(soruCevapCheckboxID2).checked = false; 
    }
    else if(document.getElementById(soruCevapCheckboxID2).checked == false) document.getElementById(soruCevapCheckboxID2).checked = true;
});

// ------------ Soru Oluşturma Button -----------
document.getElementById(soruOlusturButtonID2).addEventListener("click", () =>{

    //Soru adeti kontorl
    let soruAdetiCheck = true;
    // Soru adeti sadece sayılar dan mı oluşuyor kontrol et.
    let stringCheckBoolen = false;
    var allStringChars = ' !"#$%&\'()*+,-./:;<=>?@ABCÇDEFGĞHIİJKLMNOÖPQRSŞTUÜVWXYZ[\\]^_`abcçdefgğhıijklmnoöpqrsştuüvwxyz{|}~';
    for(let inputValue of document.getElementById(soruAdetTextBoxID2).value){
        
        for(let stringChar of allStringChars){
            if(inputValue == stringChar){
                stringCheckBoolen = true;
                break;
            }
        }
    }

    // Soru tipini al (Sadece soru ,soru veya cevap)
    let soruTipi = true;
    if(document.getElementById(soruCevapCheckboxID2).checked == true) soruTipi = true;
    else soruTipi = false;

    // Soru adetini al
    let soruSayisi = 0;
    if(stringCheckBoolen != true && document.getElementById(soruAdetTextBoxID2).value != ""){
        document.getElementById(soruAdetTextBoxID2).removeAttribute("style");
        //En fazla 100 soru getir (Hatalı giriş ve çökmeleri önlemek için)
        if(document.getElementById(soruAdetTextBoxID2).value <= 100) soruSayisi = document.getElementById(soruAdetTextBoxID2).value;
        else {
            document.getElementById(soruAdetTextBoxID2).style = "border: 1px solid red!important;";
            message("Tek seferde en fazla 100 soru oluşturabilirsin.");
            soruAdetiCheck = false;
        }
    }

    // -------------- Soru oluşturma bölümü ----------------
    if(soruAdetiCheck){
        for(let i = 0; i < soruSayisi ; i++){

            // --Random Numbers--
            let randomQuestionOrAnswer = Math.floor(Math.random() * 2);
            const randomQuestionNumber = Math.floor(Math.random() * tanismaYerSorular.length);
            
            // --Random Question ID and Random Question--
            const randomSoruID = Math.floor(Math.random() * 100000001);
            const question = tanismaYerSorular[randomQuestionNumber];

            // --Sadece soru checkbox checked.Eğer sadece soru sorulup cevap istenecek ise.
            if(soruTipi == false) randomQuestionOrAnswer = 0;

            // ------------- Cevap Bilinmiyor İse ---------------
            if(randomQuestionOrAnswer == 0){
                document.getElementById("allContainer").insertAdjacentHTML("beforeend", 
                `
                <section class="soru-item" id="${randomSoruID}">
                    <div class="settings">
                        <span class="material-symbols-outlined settings-icon trueOrFalseCheck" onclick="${answerCheck2}(${question.id},${randomSoruID},true)">check</span>
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
                        <span class="material-symbols-outlined settings-icon trueOrFalseCheck" onclick="${answerCheck2}(${question.id},${randomSoruID},false)">check</span>
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

        //Yeni soru oluşturulduğunda, doğru yanlış sonuçlarını güncelle yazdır.
        sonuclariHesapla();

        // İşlem sonunda soru adeti textbox ını temizle.
        document.getElementById(soruAdetTextBoxID2).value = "";
    }
});

// ------------- Cevap Kontrol ---------------
// questType : eğer true ise cevap bilinmiyor, false ise soru bilinmiyor--
function tanismaMemleketAnswerCheck(soruID, elementSoruID, questType){

    const question = tanismaYerSorular[soruID];
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
    }
}

// Soru sayısı textbox press Enter
document.getElementById(soruAdetTextBoxID2).addEventListener("keypress", (event) =>{
    
    if(event.key == "Enter"){
        document.getElementById(soruOlusturButtonID2).click();
    }
})