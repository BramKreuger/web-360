var open = false;
var waiting = false;

/* exported openTextBox */
/* exported closeTextBox */
/*eslint-env browser*/
window.onload = function () {
    waiting = false;
    var divToHide = document.getElementsByClassName('vr_box')[0];
    document.onclick = function (e) {
        if (e.target.className !== 'vr_box' &&
            !divToHide.contains(e.target) &&
            e.target.className !== 'ftr_btns' &&
            e.target.id !== 'thuis_educatie' &&
            e.target.id !== 'glow' &&
            e.target.id !== 'vr_bril_open' &&
            e.target.className !== 'vr_bril_img') {
            //element clicked wasn't the div; hide the div
            closeTextBox();
        }
    };
};

function openTextBox(x) {
    var text_box = document.getElementsByClassName("vr_box")[0];
    var vr_box = document.getElementsByClassName("vr_bril_open")[0];
    var thuis_educatie = document.getElementById("thuis_educatie");
    var vr_box_title = document.getElementById("vr_box_title");
    var vr_box_text = document.getElementById("box_text");

    // Pak de 3 links
    var vred_services = document.getElementById("VRED_services");
    var contact = document.getElementById("contact");
    var over_vred = document.getElementById("over_vred");

    vr_box.style.display = "none"; //close de vr box
    thuis_educatie.style.display = "none"; //close thuis educ

    if (open == false) {
        open = true;
        //text_box.style.display = "block"; //Open de textbox
        text_box.style.width = "70%";
        text_box.style.overflowY = "auto";
    }
    "use strict";

    if (x === 1) {
        vred_services.style.textDecoration = "underline";
        contact.style.textDecoration = "none";
        over_vred.style.textDecoration = "none";

        // vr-box text
        vr_box_title.textContent = "VRED-services";
        vr_box_text.innerHTML = "\n        <p>VRED is gespecialiseerd in VR \xE9n cultuur EDucatie. <br>\n        Directeuren van lager, middelbaar of voortgezet onderwijs kunnen een <u>VRED-abonnement aanschaffen</u>, waardoor leerlingen met VR-headsets elke dag naar interessante Nederlandse musea kunnen. Het VR-abonnement geeft toegang tot 6-Oculus Go\u2019s in de VR-box. De ICC-ers krijgt van ons team een training en elke leerling krijgt een login-account. Leerlingen zetten de bril op en zitten midden in hun persoonlijk lesprogramma. <i>Ideaal!</i></p>\n\n        <img id=\"services\" src=\"../images/VRED_services.png\" alt=\"services\">\n\n        <p><b>VRED abonnement voor de hele school</b><br>\n        E\xE9n abonnement voor de hele school om onbeperkt alle musea te bezoeken. Naast het abonnement, heeft de school natuurlijk ook de <u>VR-box</u> nodig. Deze VR-box bestaat uit 6-Oculus GO\u2019s.\n        Het abonnement omvat support (uitleg en installatie) op school om de headsets in de VR-box aan te sluiten op het WiFi. De VR-headsets, zijn zo ingericht, dat een leerling alleen de \u2018cultuureducatie applicatie\u2019 kan bezoeken (en dus verder niet het internet op kan)<br>\n        Met het VRED abonnement kun je:</p>\n\n        <ul>\n            <li>Jaarabonnement : Alle leerlingen hebben toegang tot alle virtual musea van NL. </li>\n            <li>Login          : Leerlingen kunnen inloggen. VRED houdt bij waar en in welk museum bent gebleven.</li>\n            <li>Rapportage     : ICC-ers kunnen op leerling niveau zien welke groep welke musea hebben bezocht.</li>\n            <li>Leerlingbeheer : Docenten kunnen hun eigen klas of groep aanmaken. ICC-ers geven hen dat recht.</li>\n        </ul>\n\n        <p><b>VR-box = 6-Pack</b> <br>\n        De VR-box bestaat uit 6 Oculus GO\u2019s in een beschermende koffer. De 6-Headsets kunnen met de ge\xEFntegreerde stekker aan de koffer, gelijktijdig aangesloten worden op het stroomnet. <br>\n        <i>Handig, 1-stekker laadt 6 VR-headsets in \xE9\xE9n keer op.</i><br>\n        De controllers geven de leerlingen vrijheid om te navigeren en om bijvoorbeeld de juiste antwoorden bij de multiple-choice vragen aan te vinken. <br>\n        Inhoud van de VR-box:</p>\n        <img id=\"vr_koffer\" src=\"../images/VR_koffer.png\" alt=\"vr_koffer\">\n        <ul>\n            <li>6x Oculus GO\u2019s \t: De beste VR-headsets beschikbaar.\n            <li>6x Controllers\t: Belangrijk om in te zoomen, aanvinken,\n                                           rondom je te kijken.</li>\n            <li>1x VR-box\t    : Met ge\xEFntegreerde stroomdraad \xE9n 6x\n                                           USB oplaad-unit.</li>\n            <li>2 jaar garantie\t: Te koop voor 6 maal 229, bij <a href=\"https://www.coolblue.nl/product/813430/oculus-go-32gb.html?clickref=1101l88ByZuL&utm_source=performancehorizon&utm_medium=affiliate&utm_campaign=Email+publisher&utm_content=1101l93&utm_term=1011l7pce&ref=293530&PHGref=1101l88ByZuL&cmt=c_ph%2Capm_Email+publisher_%2Cacid1101l93%2Cacr_1011l7pce%2Caclr_1101l88ByZuL Bijlagen\" target=\"_blank\">CoolBlue</a>.\n                                           Inclusief 2 jaar garantie.</li>\n        </ul>\n        ";
    } else if (x == 2) {
        vred_services.style.textDecoration = "none";
        contact.style.textDecoration = "none";
        over_vred.style.textDecoration = "underline";

        // over vred
        vr_box_title.textContent = "Over VRED";
        vr_box_text.innerHTML = "<img id=\"confucius\" src=\"../images/confucius_2.png\" alt=\"confucius\">\n\n        <p>Ontwerpen is leuk, maar ontwerpen voor kinderen is nog v\xE9\xE9l leuker. Dagelijks wordt ons VR-team blij, wanneer wij merken dat kinderen tm 18 jaar veel meer over cultuur leren door het te beleven. \n        Uiteraard is in het \xE9cht ervaren het beste, maar de pret van het vooraf beleven maakt een \xE9cht bezoek nog intenser.  \n        </p>\n\n        <p><b>Filosofie</b><br>\n        VR leent zich perfect voor cultuureducatie. \n        Wij vinden dat kinderen op school Nederlandse musea en historische gebouwen op elk moment van de dag zouden moeten kunnen bezoeken. VR-cultuureducatie prikkelt gelijktijdig het gehoor en ogen waardoor de inhoud voelt alsof ze er \xE9cht voor staan. \n        </p>\n\n        <p><b>VRED = museum VR-tour</b><br>\n        Elk relevant Nederlands museum wordt door onze 360\xB0-fotografen als een VR-tour vastgelegd.       Op Museum360\xB0 zijn de musea VR-tours eenvoudig te vinden onder de OCW-indeling:<br>\n        <img id=\"ministerie\" src=\"../images/ministerie_2.png\" alt=\"ministerie\">\n        <ol id=musea>\n            <li> <strong>Kunsthistorie</strong> w.o. Rijks, Frans Hals en Van Gogh museum. </li>\n            <li> <strong>Volkenkunde</strong> w.o. Tropen, Archeon en Openlucht museum.</li>\n            <li> <strong>Techniek</strong>, Wetenschap en Bedrijf w.o. Spoorweg, Scheepvaart en Auto museum.</li>\n            <li> <strong>Hedendaagse kunst</strong> w.o. MOCO, FOAM, Stedelijk, Groninger en Bonnefanten museum.</li>\n            <li> <strong>Natuurhistorie</strong> w.o. Ecomare, Corpus, Naturalis en Artis</li>\n        </ol></p>\n        <div>\n            <p><b>VRED = interactief lesprogramma</b><br>\n            De hoofd educatoren van musea laden het interactieve lesprogramma in hun museum VR-tour. Multiple-choice vragen over een kunstobject zijn geschikt voor <strong>Groep 4, 5 en 6 + Groep 7, 8 en MO/VO.</strong>\n            Het lesprogramma omvat vier elementen:</p>\n            <div id=\"logos\">\n                <img src=\"../images/Hotspot_logos.png\" alt=\"Hotspot logos\">\n                <ol>\n                    <li><strong>Video:</strong> Uitleg waarom dit kunstobject bijzonder is.</li>\n                    <li><strong>Vragen:</strong> Zes multiple choice vragen per kunstobject.</li>\n                    <li><strong>Weetje:</strong> Iets specifieks leren over dit kunstobject.</li>\n                    <li><strong>Zoom-in:</strong> Bekijk de kleinste details door in te zoomen.</li>\n                </ol>\n            </div>\n        </div>\n        ";
    } else if (x == 3) {
        vred_services.style.textDecoration = "none";
        contact.style.textDecoration = "underline";
        over_vred.style.textDecoration = "none";

        // contact
        vr_box_title.textContent = "Contact";
        vr_box_text.innerHTML = "\n        <p>Het VRED-team vindt het fijn, om met de school in contact te zijn.  Je kunt ons tijdens, maar ook \n        buiten kantoortijden bellen. Wij nemen direct of anders binnen 10-minuten contact met jou op.\n        <i>Wel zo handig!</i></p>\n        <img id=\"vred\" src=\"../images/VR-mascotte_logo.png\" alt=\"vred_mascotte\">\n        <div>\n            <p><b>Informatie-desk</b><br>\n            Bel, voor een toelichting op de VR-box en/of VRED-abonnement:<br> <strong>020-7724658</strong>\n<br>            Of om een <a href=\"mailto:info@vred360.nl?subject=VRED-Demo%20Aanvragen&body=Beste%20Medewerkers%20van%20VRED%2C%0D%0A%0D%0A.%20.%20.%0D%0A%0D%0A\">\n                    VRED-Demo\n                </a> op school aan te vragen.\n            </p>\n\n            <p><b>Support-desk voor klanten</b><br>\n            Bel ons wanneer je een technisch probleem hebt met de VR-headset:<br> <strong>06-10158503</strong><br>\n            Wij helpen om samen dit probleem op te lossen.</p>\n        </div>\n        ";
    } else if (x == 4) {
        vred_services.style.textDecoration = "none";
        contact.style.textDecoration = "none";
        over_vred.style.textDecoration = "none";

        // Thuis educatie
        vr_box_title.textContent = "Thuis educatie";
        vr_box_text.innerHTML = "\n        <p>De coronacrisis zorgt er voor dat scholen cultuureducatie op afstand inrichten. vanuit hun luie-sofa in te loggen op de website: <a target=\"_blank\" href=\"https://www.museum360.nl\">www.museum360.nl</a> <br>\n        Inloggen kan via de iPad of laptop, maar de \xE9chte beleving, krijg je wanneer je met een Oculus GO het museum binnenstapt. Eenmaal binnen, kan je de uitgestippelde route volgen. Bij relevante kunstobjecten staan hotspots. Klik op de video en beantwoord daarna de multiple-choice vragen. <i>Erg leerzaam.</i>\n        Omdat elke docent voor zijn klas een selectie kan maken uit de OCW-categorie\xEBn, krijgt een groep leerlingen gericht een hoeveelheid cultuureducatie. <i>\u201CDit is gaaf, het lijkt wel een game\u201D</i> (quote, Yo\xEBlle groep 6).</p>\n        <img id=\"sofa\" src=\"../images/Luie_Sofa.png\" alt=\"Luie Sofa\">\n                ";
    }

}

function onResize() {
    if (window.innerHeight > 800 && open == false) {
        vr_box = document.getElementsByClassName("vr_bril_open")[0];
        vr_box.style.display = "block";
    } else {
        vr_box = document.getElementsByClassName("vr_bril_open")[0];
        vr_box.style.display = "none";
    }
}
var doit;
window.onresize = function () {
    clearTimeout(doit);
    doit = setTimeout(onResize, 100);
};

function closeTextBox() {
    var vred_services = document.getElementById("VRED_services");
    var contact = document.getElementById("contact");
    var over_vred = document.getElementById("over_vred");

    var text_box = document.getElementsByClassName("vr_box")[0];
    var thuis_educatie = document.getElementById("thuis_educatie");
    var vr_box = document.getElementsByClassName("vr_bril_open")[0];
    if (open == true && waiting == false) {
        waiting = true;
        setTimeout(function () {
            if (open == true && waiting == true) {
                open = false;
                waiting = false;
                thuis_educatie.style.display = "block";
                vred_services.style.textDecoration = "none";
                contact.style.textDecoration = "none";
                over_vred.style.textDecoration = "none";
                if (window.innerHeight > 800) {
                    vr_box.style.display = "block";
                }
            }
        }, 2000); //open thuis educ


        //text_box.style.display = "none"; //close de textbox
        text_box.style.width = "0px";
        text_box.style.overflowY = "hidden";
    }
}
