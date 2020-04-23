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
            e.target.id !== 'vr_bril_open' &&
            e.target.className !== 'vr_bril_img') {
            //element clicked wasn't the div; hide the div
            closeTextBox();
        }
    };
};

function openTextBox(x) {
    console.log("test");
    var text_box = document.getElementsByClassName("vr_box")[0];
    var vr_box = document.getElementsByClassName("vr_bril_open")[0];
    var thuis_educatie = document.getElementById("thuis_educatie");
    var vr_box_title = document.getElementById("vr_box_title");
    var vr_box_text = document.getElementById("box_text");

    vr_box.style.display = "none"; //close de vr box
    thuis_educatie.style.display = "none"; //close thuis educ

    if (open == false) {
        open = true;
        //text_box.style.display = "block"; //Open de textbox
        text_box.style.width = "70%";
        text_box.style.overflowY = "scroll";
    }
    "use strict";

    if (x === 1) {
        // vr-box text
        vr_box_title.textContent = "VRED-services";
        vr_box_text.innerHTML = "\n        <p>VRED is gespecialiseerd in VR \xE9n cultuur EDucatie. <br>\n        Directeuren van lager, middelbaar of voortgezet onderwijs kunnen een <u>VRED-abonnement aanschaffen</u>, waardoor leerlingen met VR-headsets elke dag naar interessante Nederlandse musea kunnen. Het VR-abonnement geeft toegang tot 6-Oculus Go\u2019s in de VR-box. De ICC-ers krijgt van ons team een training en elke leerling krijgt een login-account. Leerlingen zetten de bril op en zitten midden in hun persoonlijk lesprogramma. <i>Ideaal!</i></p>\n\n        <img id=\"services\" src=\"../images/VRED_services.png\" alt=\"services\">\n\n        <p><b>VRED abonnement voor de hele school</b><br>\n        E\xE9n abonnement voor de hele school om onbeperkt alle musea te bezoeken. Naast het abonnement, heeft de school natuurlijk ook de <u>VR-box</u> nodig. Deze VR-box bestaat uit 6-Oculus GO\u2019s.\n        Het abonnement omvat support (uitleg en installatie) op school om de headsets in de VR-box aan te sluiten op het WiFi. De VR-headsets, zijn zo ingericht, dat een leerling alleen de \u2018cultuureducatie applicatie\u2019 kan bezoeken (en dus verder niet het internet op kan)<br>\n        Met het VRED abonnement kun je:</p>\n\n        <ul>\n            <li>Jaarabonnement : Alle leerlingen hebben toegang tot alle virtual musea van NL. </li>\n            <li>Login          : Leerlingen kunnen inloggen. VRED houdt bij waar en in welk museum bent gebleven.</li>\n            <li>Rapportage     : ICC-ers kunnen op leerling niveau zien welke groep welke musea hebben bezocht.</li>\n            <li>Leerlingbeheer : Docenten kunnen hun eigen klas of groep aanmaken. ICC-ers geven hen dat recht.</li>\n        </ul>\n\n        <p><b>VR-box = 6-Pack</b> <br>\n        De VR-box bestaat uit 6 Oculus GO\u2019s in een beschermende koffer. De 6-Headsets kunnen met de ge\xEFntegreerde stekker aan de koffer, gelijktijdig aangesloten worden op het stroomnet. <br>\n        <i>Handig, 1-stekker laadt 6 VR-headsets in \xE9\xE9n keer op.</i><br>\n        De controllers geven de leerlingen vrijheid om te navigeren en om bijvoorbeeld de juiste antwoorden bij de multiple-choice vragen aan te vinken. <br>\n        Inhoud van de VR-box:</p>\n        <img id=\"vr_koffer\" src=\"../images/VR_koffer.png\" alt=\"vr_koffer\">\n        <ul>\n            <li>6x Oculus GO\u2019s \t: De beste VR-headsets beschikbaar.\n            <li>6x Controllers\t: Belangrijk om in te zoomen, aanvinken,\n                                           rondom je te kijken.</li>\n            <li>1x VR-box\t    : Met ge\xEFntegreerde stroomdraad \xE9n 6x\n                                           USB oplaad-unit.</li>\n            <li>2 jaar garantie\t: Te koop voor Eur 199,-/stuk bij CoolBlue.\n                                           Inclusief 2 jaar garantie.</li>\n        </ul>\n        ";
    } else if (x == 2) {
        // over vred
        vr_box_title.textContent = "Over VRED";
        vr_box_text.innerHTML = "<img id=\"confucius\" src=\"../images/confucius_2.png\" alt=\"confucius\">\n\n        <p>Ontwerpen is leuk, maar ontwerpen voor kinderen is nog v\xE9\xE9l leuker. Dagelijks wordt ons VR-team blij, wanneer wij merken dat kinderen tm 18 jaar veel meer over cultuur leren door het te beleven. \n        Uiteraard is in het \xE9cht ervaren het beste, maar de pret van het vooraf beleven maakt een \xE9cht bezoek nog intenser.  \n        </p>\n\n        <p><b>Filosofie</b><br>\n        VR leent zich perfect voor cultuureducatie. \n        Wij vinden dat kinderen op school Nederlandse musea en historische gebouwen op elk moment van de dag zouden moeten kunnen bezoeken. VR-cultuureducatie prikkelt gelijktijdig het gehoor en ogen waardoor de inhoud voelt alsof ze er \xE9cht voor staan. \n        </p>\n\n        <p><b>VRED = museum VR-tour</b><br>\n        Elk relevant Nederlands museum wordt door onze 360\xB0-fotografen als een VR-tour vastgelegd. <br>\n        Op Museum360\xB0 zijn de musea VR-tours eenvoudig te vinden onder de OCW-indeling:<br>\n        <img id=\"ministerie\" src=\"../images/ministerie_2.png\" alt=\"ministerie\">\n        <ol>\n            <li> <strong>Kunsthistorie</strong> w.o. Rijks, Frans Hals, VanGogh museum en het Mauritshuis. </li>\n            <li> <strong>Volkenkunde</strong> w.o. Tropen, Archeon, Zuiderzee en Openlucht museum.</li>\n            <li> <strong>Techniek</strong>, Wetenschap en Bedrijf w.o. Spoorweg, Scheepvaart en Auto museum.</li>\n            <li> <strong>Hedendaagse kunst</strong> w.o. MOCO, FOAM, Stedelijk, Groninger en Bonnefanten museum.</li>\n            <li> <strong>Natuurhistorie</strong> w.o. Ecomare, Corpus, Naturalis en Artis</li>\n        </ol></p>\n        <div>\n            <p><b>VRED = interactief lesprogramma</b><br>\n            De hoofd educatoren van musea laden het interactieve lesprogramma in hun museum VR-tour. Multiple-choice vragen over een kunstobject zijn geschikt voor <strong>Groep 4, 5 en 6 + Groep 7, 8 en MO/VO.</strong>\n            Het lesprogramma omvat vier elementen:</p>\n            <div id=\"logos\">\n                <img src=\"../images/Hotspot_logos.png\" alt=\"Hotspot logos\">\n                <ol>\n                    <li><strong>Video:</strong> Uitleg waarom deze kunst bijzonder is.</li>\n                    <li><strong>Vragen:</strong> Zes multiple choice vragen per kunstobject.</li>\n                    <li><strong>Weetje:</strong> Iets specifieks leren over een schilderij.</li>\n                    <li><strong>Zoom-in:</strong> Bekijk de kleinste details door in te zoomen.</li>\n                </ol>\n            </div>\n        </div>\n        ";
    } else if (x == 3) {
        // contact
        vr_box_title.textContent = "Contact";
        vr_box_text.innerHTML = "\n        <p>Het VRED-team vindt het fijn, om met de school in contact te zijn.  Je kunt ons tijdens, maar ook \n        buiten kantoortijden bellen. Wij nemen direct of anders binnen 10-minuten contact met jou op.<br>\n\n        <i>Wel zo handig!<h3>020-7724658</h3></i></p>\n        <img id=\"vred\" src=\"../images/VR-mascotte_logo.png\" alt=\"vred_mascotte\">\n        <div>\n            <p><b>Informatie-desk</b><br>\n            Bel, voor een toelichting op de VR-box en/of VRED-abonnement: <strong>06-10158503</strong>\n            Of om een <u>VRED-demo</u> op school aan te vragen.\n            </p>\n\n            <p><b>Support-desk voor klanten</b><br>\n            Bel ons wanneer je een technisch probleem hebt met de VR-headset: <strong>06-87249446</strong>\n            Wij helpen om samen dit probleem op te lossen.</p>\n        </div>\n        ";
    } else if (x == 4) {
        // Thuis educatie
        vr_box_title.textContent = "Thuis educatie";
        vr_box_text.innerHTML = "\n        <p>De coronacrisis zorgt er voor dat scholen cultuureducatie op afstand inrichten. vanuit hun luie-sofa in te loggen op de website: <a href=\"www.museum360.nl\">www.museum360.nl</a> <br>\n        Inloggen kan via de iPad of laptop, maar de \xE9chte beleving, krijg je wanneer je met een Oculus GO het museum binnenstapt. Eenmaal binnen, kan je de uitgestippelde route volgen. Bij relevante kunstobjecten staan hotspots. Klik op de video en beantwoord daarna de multiple-choice vragen. <i>Erg leerzaam.</i>\n        Omdat elke docent voor zijn klas een selectie kan maken uit de OCW-categorie\xEBn, krijgt een groep leerlingen gericht een hoeveelheid cultuureducatie. <i>\u201CDit is gaaf, het lijkt wel een game\u201D</i> (quote, Yo\xEBlle groep 6).</p>\n        <img id=\"sofa\" src=\"../images/Luie_Sofa.png\" alt=\"Luie Sofa\">\n                ";
    }
    /*
    if (x === 1) { // vr-box text
        vr_box_title.textContent = "VRED-services"
        vr_box_text.innerHTML =
            `
        <p>VRED is gespecialiseerd in VR én cultuur EDucatie. <br>
        Directeuren van lager, middelbaar of voortgezet onderwijs kunnen een <u>VRED-abonnement aanschaffen</u>, waardoor leerlingen met VR-headsets elke dag naar interessante Nederlandse musea kunnen. Het VR-abonnement geeft toegang tot 6-Oculus Go’s in de VR-box. De ICC-ers krijgt van ons team een training en elke leerling krijgt een login-account. Leerlingen zetten de bril op en zitten midden in hun persoonlijk lesprogramma. <i>Ideaal!</i></p>

        <img id="services" src="../images/VRED_services.png" alt="services">

        <p><b>VRED abonnement voor de hele school</b><br>
        Eén abonnement voor de hele school om onbeperkt alle musea te bezoeken. Naast het abonnement, heeft de school natuurlijk ook de <u>VR-box</u> nodig. Deze VR-box bestaat uit 6-Oculus GO’s.
        Het abonnement omvat support (uitleg en installatie) op school om de headsets in de VR-box aan te sluiten op het WiFi. De VR-headsets, zijn zo ingericht, dat een leerling alleen de ‘cultuureducatie applicatie’ kan bezoeken (en dus verder niet het internet op kan)<br>
        Met het VRED abonnement kun je:</p>

        <ul>
            <li>Jaarabonnement : Alle leerlingen hebben toegang tot alle virtual musea van NL. </li>
            <li>Login          : Leerlingen kunnen inloggen. VRED houdt bij waar en in welk museum bent gebleven.</li>
            <li>Rapportage     : ICC-ers kunnen op leerling niveau zien welke groep welke musea hebben bezocht.</li>
            <li>Leerlingbeheer : Docenten kunnen hun eigen klas of groep aanmaken. ICC-ers geven hen dat recht.</li>
        </ul>

        <p><b>VR-box = 6-Pack</b> <br>
        De VR-box bestaat uit 6 Oculus GO’s in een beschermende koffer. De 6-Headsets kunnen met de geïntegreerde stekker aan de koffer, gelijktijdig aangesloten worden op het stroomnet. <br>
        <i>Handig, 1-stekker laadt 6 VR-headsets in één keer op.</i><br>
        De controllers geven de leerlingen vrijheid om te navigeren en om bijvoorbeeld de juiste antwoorden bij de multiple-choice vragen aan te vinken. <br>
        Inhoud van de VR-box:</p>
        <img id="vr_koffer" src="../images/VR_koffer.png" alt="vr_koffer">
        <ul>
            <li>6x Oculus GO’s 	: De beste VR-headsets beschikbaar.
            <li>6x Controllers	: Belangrijk om in te zoomen, aanvinken,
                                           rondom je te kijken.</li>
            <li>1x VR-box	    : Met geïntegreerde stroomdraad én 6x
                                           USB oplaad-unit.</li>
            <li>2 jaar garantie	: Te koop voor Eur 199,-/stuk bij CoolBlue.
                                           Inclusief 2 jaar garantie.</li>
        </ul>
        `

    } else if (x == 2) { // over vred
        vr_box_title.textContent = "Over VRED";
        vr_box_text.innerHTML =
            `<img id="confucius" src="../images/confucius_2.png" alt="confucius">

        <p>Ontwerpen is leuk, maar ontwerpen voor kinderen is nog véél leuker. Dagelijks wordt ons VR-team blij, wanneer wij merken dat kinderen tm 18 jaar veel meer over cultuur leren door het te beleven.
        Uiteraard is in het écht ervaren het beste, maar de pret van het vooraf beleven maakt een écht bezoek nog intenser.
        </p>

        <p><b>Filosofie</b><br>
        VR leent zich perfect voor cultuureducatie.
        Wij vinden dat kinderen op school Nederlandse musea en historische gebouwen op elk moment van de dag zouden moeten kunnen bezoeken. VR-cultuureducatie prikkelt gelijktijdig het gehoor en ogen waardoor de inhoud voelt alsof ze er écht voor staan.
        </p>

        <p><b>VRED = museum VR-tour</b><br>
        Elk relevant Nederlands museum wordt door onze 360°-fotografen als een VR-tour vastgelegd. <br>
        Op Museum360° zijn de musea VR-tours eenvoudig te vinden onder de OCW-indeling:<br>
        <img id="ministerie" src="../images/ministerie_2.png" alt="ministerie">
        <ol>
            <li> <strong>Kunsthistorie</strong> w.o. Rijks, Frans Hals, VanGogh museum en het Mauritshuis. </li>
            <li> <strong>Volkenkunde</strong> w.o. Tropen, Archeon, Zuiderzee en Openlucht museum.</li>
            <li> <strong>Techniek</strong>, Wetenschap en Bedrijf w.o. Spoorweg, Scheepvaart en Auto museum.</li>
            <li> <strong>Hedendaagse kunst</strong> w.o. MOCO, FOAM, Stedelijk, Groninger en Bonnefanten museum.</li>
            <li> <strong>Natuurhistorie</strong> w.o. Ecomare, Corpus, Naturalis en Artis</li>
        </ol></p>
        <div>
            <p><b>VRED = interactief lesprogramma</b><br>
            De hoofd educatoren van musea laden het interactieve lesprogramma in hun museum VR-tour. Multiple-choice vragen over een kunstobject zijn geschikt voor <strong>Groep 4, 5 en 6 + Groep 7, 8 en MO/VO.</strong>
            Het lesprogramma omvat vier elementen:</p>
            <div id="logos">
                <img src="../images/Hotspot_logos.png" alt="Hotspot logos">
                <ol>
                    <li><strong>Video:</strong> Uitleg waarom deze kunst bijzonder is.</li>
                    <li><strong>Vragen:</strong> Zes multiple choice vragen per kunstobject.</li>
                    <li><strong>Weetje:</strong> Iets specifieks leren over een schilderij.</li>
                    <li><strong>Zoom-in:</strong> Bekijk de kleinste details door in te zoomen.</li>
                </ol>
            </div>
        </div>
        `;
    } else if (x == 3) { // contact
        vr_box_title.textContent = "Contact";
        vr_box_text.innerHTML =
            `
        <p>Het VRED-team vindt het fijn, om met de school in contact te zijn.  Je kunt ons tijdens, maar ook
        buiten kantoortijden bellen. Wij nemen direct of anders binnen 10-minuten contact met jou op.<br>

        <i>Wel zo handig!<h3>020-7724658</h3></i></p>
        <img id="vred" src="../images/VR-mascotte_logo.png" alt="vred_mascotte">
        <div>
            <p><b>Informatie-desk</b><br>
            Bel, voor een toelichting op de VR-box en/of VRED-abonnement: <strong>06-10158503</strong>
            Of om een <u>VRED-demo</u> op school aan te vragen.
            </p>

            <p><b>Support-desk voor klanten</b><br>
            Bel ons wanneer je een technisch probleem hebt met de VR-headset: <strong>06-87249446</strong>
            Wij helpen om samen dit probleem op te lossen.</p>
        </div>
        `;
    } else if (x == 4) { // Thuis educatie
        vr_box_title.textContent = "Thuis educatie"
        vr_box_text.innerHTML =
            `
        <p>De coronacrisis zorgt er voor dat scholen cultuureducatie op afstand inrichten. vanuit hun luie-sofa in te loggen op de website: <a href="www.museum360.nl">www.museum360.nl</a> <br>
        Inloggen kan via de iPad of laptop, maar de échte beleving, krijg je wanneer je met een Oculus GO het museum binnenstapt. Eenmaal binnen, kan je de uitgestippelde route volgen. Bij relevante kunstobjecten staan hotspots. Klik op de video en beantwoord daarna de multiple-choice vragen. <i>Erg leerzaam.</i>
        Omdat elke docent voor zijn klas een selectie kan maken uit de OCW-categorieën, krijgt een groep leerlingen gericht een hoeveelheid cultuureducatie. <i>“Dit is gaaf, het lijkt wel een game”</i> (quote, Yoëlle groep 6).</p>
        <img id="sofa" src="../images/Luie_Sofa.png" alt="Luie Sofa">
                `
    }*/

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
    console.log(open + " : " + waiting);
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
