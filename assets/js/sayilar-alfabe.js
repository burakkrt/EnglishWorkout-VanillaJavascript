const sayilarAlfabeSorular = [
    {id:0,  soru:"Zero, Two, Sixteen",           cevap:"0, 2, 16",   soruTurkce:"Zirou, Tu, Sikstiin",       cevapTurkce:"", type:"sayi"},
    {id:1,  soru:"Eighteen, Nine, Fourteen",     cevap:"18, 9, 14",  soruTurkce:"Eytiin, Nayn, Fortiin",     cevapTurkce:"", type:"sayi"},
    {id:2,  soru:"Three, Twelve, Six",           cevap:"3, 12, 6",   soruTurkce:"Tıri, Tvelf, Siks",         cevapTurkce:"", type:"sayi"},
    {id:3,  soru:"Twenty, Three, Seventeen",     cevap:"20, 3, 17",  soruTurkce:"Tıventi, Tıri, Sevıntiin",  cevapTurkce:"", type:"sayi"},
    {id:4,  soru:"Eleven, Fifteen, Ten",         cevap:"11, 15, 10", soruTurkce:"Elevın, Fiftiin, Ten",      cevapTurkce:"", type:"sayi"},
    {id:5,  soru:"Two, Nineteen, Thirteen",      cevap:"2, 19, 13",  soruTurkce:"Tu, Nayntiin, Törtiin",     cevapTurkce:"", type:"sayi"},
    {id:6,  soru:"Twelve, Twenty, Seventeen",    cevap:"12, 20, 17", soruTurkce:"Tvelf, Tıventi, Sevıntiin", cevapTurkce:"", type:"sayi"},
    {id:7,  soru:"Four, Nineteen, Five",         cevap:"4, 19, 5",   soruTurkce:"For, Nayntiin, Fayf",       cevapTurkce:"", type:"sayi"},
    {id:8,  soru:"Zero, Thirteen, Twelve",       cevap:"0, 13, 12",  soruTurkce:"Zirou, Törtiin, Tvelf",     cevapTurkce:"", type:"sayi"},
    {id:9,  soru:"Four, Thirteen, Twelve",       cevap:"4, 13, 12",  soruTurkce:"For, Törtiin, Tvelf",       cevapTurkce:"", type:"sayi"},
    {id:10, soru:"Twenty, Three, Fifteen",       cevap:"20, 3, 15",  soruTurkce:"Tıventi, Tıri, Fiftiin",    cevapTurkce:"", type:"sayi"},
    {id:11, soru:"Thirteen, Eight, Nineteen",    cevap:"13, 8, 19",  soruTurkce:"Törtiin, Eyt, Nayntiin",    cevapTurkce:"", type:"sayi"},
    {id:12, soru:"Eighteen, Sixteen, Eleven",    cevap:"18, 16, 11", soruTurkce:"Eytiin, Sikstiin, Elevın",  cevapTurkce:"", type:"sayi"},
    {id:13, soru:"Seventeen, Two, Twenty",       cevap:"17, 2, 20",  soruTurkce:"Sevıntiin, Tu, Tıventi",    cevapTurkce:"", type:"sayi"},
    {id:14, soru:"Thirteen, Three, Twelve",      cevap:"13, 3, 12",  soruTurkce:"Törtiin, Tıri, Tvelf",      cevapTurkce:"", type:"sayi"},
    {id:15, soru:"Fiat",        cevap:"ef, ay, ey, ti",                         soruTurkce:"Yukarıdaki kelimenin harflerini ingilizce harfler ile yazın.", cevapTurkce:"", type:"alfabe"},
    {id:16, soru:"Mitsubisi",   cevap:"em, ay, ti, es, yu, bi, ay, es, ay",     soruTurkce:"Yukarıdaki kelimenin harflerini ingilizce harfler ile yazın.", cevapTurkce:"", type:"alfabe"},
    {id:17, soru:"Hygrapy",     cevap:"eyc, vay, ci, ar, ey, pi, vay",          soruTurkce:"Yukarıdaki kelimenin harflerini ingilizce harfler ile yazın.", cevapTurkce:"", type:"alfabe"},
    {id:18, soru:"Overview",    cevap:"ou, vi, i, ar, vi, ay, i, dablyu",       soruTurkce:"Yukarıdaki kelimenin harflerini ingilizce harfler ile yazın.", cevapTurkce:"", type:"alfabe"},
    {id:19, soru:"Director",    cevap:"di, ay, ar, i, si, ti, ou, ar",          soruTurkce:"Yukarıdaki kelimenin harflerini ingilizce harfler ile yazın.", cevapTurkce:"", type:"alfabe"},
    {id:20, soru:"Chief",       cevap:"si, eyc, ay, i, ef",                     soruTurkce:"Yukarıdaki kelimenin harflerini ingilizce harfler ile yazın.", cevapTurkce:"", type:"alfabe"},

];

const answerCheckFunctionName3 = "sayilarAlfabeAnswerCheck";
// ÖNEMLİ NOT = Yukarıdaki string degeri 161. satırdaki function adına ver.

const soruCevapCheckboxID3 = "sayilar-ve-alfabe-soru-ve-cevap";   //Checkbox soru ve cevap id
const sadeceSoruCheckboxID3 = "sayilar-ve-alfabe-sadece-soru";    //Checkbox sadece soru id

const soruOlusturButtonID3 = "sayilar-ve-alfabe-addQuestion";     //Soru oluşturma button id
const soruAdetTextBoxID3 = "sayilar-ve-alfabe-soru-adet";     //Soru adet textbox id

// ------------ Checkbox Kontrol -----------
document.getElementById(soruCevapCheckboxID3).addEventListener("click", () =>{
    if(document.getElementById(soruCevapCheckboxID3).checked == true){
        if(document.getElementById(sadeceSoruCheckboxID3).checked == true) document.getElementById(sadeceSoruCheckboxID3).checked = false;
    }
    else if(document.getElementById(sadeceSoruCheckboxID3).checked == false) document.getElementById(sadeceSoruCheckboxID3).checked = true;
});
document.getElementById(sadeceSoruCheckboxID3).addEventListener("click", () =>{
    if(document.getElementById(sadeceSoruCheckboxID3).checked == true){
        if(document.getElementById(soruCevapCheckboxID3).checked == true) document.getElementById(soruCevapCheckboxID3).checked = false; 
    }
    else if(document.getElementById(soruCevapCheckboxID3).checked == false) document.getElementById(soruCevapCheckboxID3).checked = true;
});

// ------------ Soru Oluşturma Button -----------
document.getElementById(soruOlusturButtonID3).addEventListener("click", () =>{

    // Soru adeti sadece sayılar dan mı oluşuyor kontrol et.
    let stringCheckBoolen = false;
    var allStringChars = ' !"#$%&\'()*+,-./:;<=>?@ABCÇDEFGĞHIİJKLMNOÖPQRSŞTUÜVWXYZ[\\]^_`abcçdefgğhıijklmnoöpqrsştuüvwxyz{|}~';
    for(let inputValue of document.getElementById(soruAdetTextBoxID3).value){
        
        for(let stringChar of allStringChars){
            if(inputValue == stringChar){
                stringCheckBoolen = true;
                break;
            }
        }
    }

    // Soru tipini al (Sadece soru ,soru veya cevap)
    let soruTipi = true;
    if(document.getElementById(soruCevapCheckboxID3).checked == true) soruTipi = true;
    else soruTipi = false;

    // Soru adetini al
    let soruSayisi = 0;
    if(stringCheckBoolen != true && document.getElementById(soruAdetTextBoxID3).value != ""){
        document.getElementById(soruAdetTextBoxID3).removeAttribute("style");
        //En fazla 100 soru getir (Hatalı giriş ve çökmeleri önlemek için)
        if(document.getElementById(soruAdetTextBoxID3).value <= 100) soruSayisi = document.getElementById(soruAdetTextBoxID3).value;
        else document.getElementById(soruAdetTextBoxID3).style = "border: 1px solid red!important;";
    }

    // -------------- Soru oluşturma bölümü ----------------
    for(let i = 0; i < soruSayisi ; i++){

    // --Random Numbers--
    let randomQuestionOrAnswer = Math.floor(Math.random() * 2);
    const randomQuestionNumber = Math.floor(Math.random() * sayilarAlfabeSorular.length);
    
    // --Random Question ID and Random Question--
    const randomSoruID = Math.floor(Math.random() * 100000001);
    const question = sayilarAlfabeSorular[randomQuestionNumber];

    // --Sadece soru checkbox checked.Eğer sadece soru sorulup cevap istenecek ise.
    if(soruTipi == false) randomQuestionOrAnswer = 0;

    // ------ Soru Tipine Göre Soru Oluşturma ------
    if(question.type == "sayi"){

        // -- Soruları ve Türkçe söyleyişlerini harf uzunluğunun katları olarak hesaplayıp width değerine yazdırma. --
        let widthPixel = [];

        const splitSoruArray = sayilarAlfabeSorular[0].soru.replace(" ","").split(",");
        let splitSoruContent = ``;
        
        const turkishSplitSoruArray = sayilarAlfabeSorular[0].soruTurkce.replace(" ","").split(",");
        let turkishSplitSoruContent = ``;

        splitSoruArray.map ( (soru) => { 
            // Eğer Mobil 'de değilse genişlik çarpanlarını daha fazla ver.
            if(window.matchMedia("(min-width: 1360px)").matches){

                if(soru.length <= 13 && soru.length > 7) widthPixel.push((soru.length) * 13);
                else if(soru.length <= 7 && soru.length > 5) widthPixel.push((soru.length) * 27);
                else if(soru.length < 5) widthPixel.push((soru.length) * 40);
                else widthPixel.push((soru.length) * 12);
            }
            else {

                if(soru.length < 10) widthPixel.push((soru.length) * 11);
                else widthPixel.push((soru.length) * 9); 
            }
        });

        for(let i = 0 ; i < splitSoruArray.length ; i ++){
            
            splitSoruContent += `<span style="width: ${widthPixel[i]}px;">${splitSoruArray[i]}</span>`;
            turkishSplitSoruContent += `<span style="width: ${widthPixel[i]}px;">${turkishSplitSoruArray[i]}</span>`;
        }

        // ------------- Cevap Bilinmiyor İse ---------------
        if(randomQuestionOrAnswer == 0){
            document.getElementById("allContainer").insertAdjacentHTML("beforeend", 
            `
            <section class="soru-item" id="${randomSoruID}">
                <div class="settings">
                    <span class="material-symbols-outlined settings-icon trueOrFalseCheck" onclick="${answerCheckFunctionName3}(${question.id},${randomSoruID},true)">check</span>
                </div>
                <div class="soru">
                    <span class="material-symbols-outlined soru-icon">quiz</span>
                    <div class="soru-content" id="soru-content">
                    <span class="space-numbers">${splitSoruContent}</span>
                    <span class="turkish space-numbers-turkish">${turkishSplitSoruContent}</span>
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
                    <span class="material-symbols-outlined settings-icon trueOrFalseCheck" onclick="${answerCheckFunctionName3}(${question.id},${randomSoruID},false)">check</span>
                </div>
                <div class="soru">
                    <span class="material-symbols-outlined soru-icon">quiz</span>
                    <div class="soru-content" id="soru-content">
                    <input type="text" onkeypress="keyPressEnter(event)" spellcheck="false"></input>
                    <span class="turkish"></span>
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
    else if (question.type == "alfabe"){

        // ------------- Cevap Bilinmiyor İse ---------------
        if(randomQuestionOrAnswer == 0){
            document.getElementById("allContainer").insertAdjacentHTML("beforeend", 
            `
            <section class="soru-item" id="${randomSoruID}">
                <div class="settings">
                    <span class="material-symbols-outlined settings-icon trueOrFalseCheck" onclick="${answerCheckFunctionName3}(${question.id},${randomSoruID},true)">check</span>
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
                    <span class="material-symbols-outlined settings-icon trueOrFalseCheck" onclick="${answerCheckFunctionName3}(${question.id},${randomSoruID},false)">check</span>
                </div>
                <div class="soru">
                    <span class="material-symbols-outlined soru-icon">quiz</span>
                    <div class="soru-content" id="soru-content">
                    <input type="text" onkeypress="keyPressEnter(event)" spellcheck="false"></input>
                    <span class="turkish"></span>
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

    // Soru oluşturulduktan sonra sonuncu sorunun içerisindeki inputa odaklan.
    // document.getElementById(randomSoruID).querySelector("input").focus();

    // İşlem sonunda soru adeti textbox ını temizle.
    document.getElementById(soruAdetTextBoxID3).value = "";

    //Yeni soru oluşturulduğunda, doğru yanlış sonuçlarını güncelle yazdır.
    sonuclariHesapla();

    }
    
});

// ------------- Cevap Kontrol ---------------
// questType : eğer true ise cevap bilinmiyor, false ise soru bilinmiyor--
function sayilarAlfabeAnswerCheck(soruID, elementSoruID, questType){

    const question = sayilarAlfabeSorular[soruID];
    const answer = document.getElementById(elementSoruID).querySelector("input").value;
    console.log(answer);

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
document.getElementById(soruAdetTextBoxID3).addEventListener("keypress", (event) =>{
    
    if(event.key == "Enter"){
        document.getElementById(soruOlusturButtonID3).click();
    }
})