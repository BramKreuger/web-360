var open = false;

/* exported openTextBox */
/* exported closeTextBox */
/*eslint-env browser*/
function openTextBox(x) {
    var text_box = document.getElementsByClassName("vr_box")[0];
    var vr_box = document.getElementsByClassName("vr_bril_open")[0];
    var thuis_educatie = document.getElementById("thuis_educatie");
    var vr_box_title = document.getElementById("vr_box_title");
    var vr_box_text = document.getElementById("box_text");

    text_box.style.display = "block"; //Open de textbox
    open = true;
    vr_box.style.display = "none"; //close de vr box
    thuis_educatie.style.display = "none"; //close thuis educ

    if (text_box.style.display === "none") {
        text_box.style.display = "block"; //Open de textbox
    }
    if (x === 1) { // vr-box text
        vr_box_title.textContent = "VRED-services"
        vr_box_text.innerHTML =
            `
        <p>VRED is gespecialiseerd in VR én cultuur EDucatie. <br>
        Directeuren van lager, middelbaar of voortgezet onderwijs kunnen een <u>VRED-abonnement aanschaffen</u>, waardoor leerlingen met VR-headsets elke dag naar alle relevante Nederlandse musea kunnen. Het VR-abonnement geeft toegang tot 6-Oculus Go’s in de VR-box. De ICC-ers krijgt van ons team een training en elke leerling krijgt een login-account. Leerlingen zetten de bril op en zitten midden in hun persoonlijk lesprogramma. <i>Ideaal!</i></p>



        <p><b>VRED abonnement voor de hele school</b><br>
        Eén abonnement voor de hele school om onbeperkt alle musea te bezoeken. Naast het abonnement, heeft de school natuurlijk ook de <u>VR-box</u> nodig. Deze VR-box bestaat uit 6-Oculus GO’s.
        Het abonnement omvat support (uitleg en installatie) op school om de headsets in de VR-box aan te sluiten op het WiFi. De VR-headsets, zijn zo ingericht, dat een leerling alleen de ‘cultuureducatie applicatie’ kan bezoeken.<br>
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

        <p>Ontwerpen is leuk, maar ontwerpen voor kinderen is nog véél leuker.
        Dagelijks wordt ons VR-team blij, wanneer wij merken dat kinderen tm
        18 jaar veel meer over cultuur leren door het te beleven.
        Uiteraard is het, in het écht ervaren het beste, maar de pret van het
        vooraf beleven maakt een écht bezoek nog intenser.</p>

        <p><b>Filosofie</b><br>
        VR leent zich perfect voor cultuureducatie.
        Wij vinden dat op Nederlandse scholen Nederlandse musea en
        historische gebouwen door kinderen, op elk moment van de dag,
        beleefd moeten worden. VR-cultuureducatie prikkelt gelijktijdig het
        gehoor en ogen waardoor de inhoud voelt alsof ze er écht voor staan.</p>

        <img id="ministerie" src="../images/ministerie_2.png" alt="ministerie">
        <p><b>VRED = museum VR-tour</b><br>
        Elk relevant Nederlands museum wordt door onze 360°-fotografen als een VR-tour vastgelegd. <br>
        Op Museum360° zijn de musea VR-tours eenvoudig te vinden onder de OCW-indeling:<br>
        <ol>
            <li> <strong>Kunsthistorie</strong> w.o. Rijks, Frans Hals, VanGogh museum en het Mauritshuis. </li>
            <li> <strong>Volkenkunde</strong> w.o. Tropen, Archeon, Zuiderzee en Openlucht museum.</li>
            <li> <strong>Techniek</strong>, Wetenschap en Bedrijf w.o. Spoorweg, Scheepvaart en Auto museum.</li>
            <li> <strong>Hedendaagse kunst</strong> w.o. MOCO, FOAM, Stedelijk, Groninger en Bonnefanten museum.</li>
            <li> <strong>Natuurhistorie</strong> w.o. Ecomare, Corpus, Naturalis en Artis</li>
        </ol></p>

        <p><b>VRED = interactief lesprogramma</b><br>
        De hoofd educatoren van musea zorgen ervoor dat in hun museum VR-tour
        een interactieve lesprogramma wordt geladen. Multiple-choice vragen over
        een kunstobject worden voor <strong>Groep 4, 5 en 6 + Groep 7, 8 en MO/VO.</strong>
        Het lesprogramma omvat vier elementen:</p>
        `;
    } else if (x == 3) { // contact
        vr_box_title.textContent = "Contact";
        vr_box_text.innerHTML =
            `
        <p>Het VRED-team vindt het fijn, om met de school in contact te zijn.  Je kunt ons tijdens máár ook
        buiten kantoortijden bellen. Wij nemen direct of anders binnen 10-minuten contact met jou op. <br>

        <i>Wel zo handig!<h3>020-1239875</h3></i></p>
        <img id="vred" src="../images/VR-mascotte_logo.png" alt="vred_mascotte">
        <div>
            <p><b>Informatie-desk</b><br>
            Bel, voor een toelichting op de VR-box en/of VRED-abonnement: <strong>06-10158503</strong>
            Of gewoon om een <u>VRED-demo</u> op school aan te vragen.
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
        <p>De coronacrisis zorgt er voor dat scholen cultuureducatie op afstand inrichten. Eenvoudig door leerlingen thuis vanuit hun luie-sofa te laten inloggen op de website:<a href="www.museum360.nl">www.museum360.nl</a> <br>
        Inloggen kan via de iPad of laptop, maar de échte beleving, krijg je wanneer je met een Oculus GO het museum binnenstapt. Eenmaal binnen, kan je de uitgestippelde route volgen. Bij relevante kunstobjecten staan hotspots. Klik op de video en beantwoord daarna de multiple-choice vragen. <i>Erg leerzaam.</i>
        Omdat elke docent voor zijn klas een selectie kan maken uit de OCW-categorieën, krijgt een groep leerlingen gericht een hoeveelheid cultuureducatie. <i>“Dit is gaaf, het lijkt wel een game”</i> (quote, Yoëlle groep 6).</p>
                `
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
// Attaching the event listener function to window's resize event
window.addEventListener("resize", onResize);

// Calling the function for the first time
onResize();

function closeTextBox() {
    var text_box = document.getElementsByClassName("vr_box")[0];
    var thuis_educatie = document.getElementById("thuis_educatie");
    var vr_box = document.getElementsByClassName("vr_bril_open")[0];
    open = false;
    thuis_educatie.style.display = "block"; //open thuis educ

    if (window.innerHeight > 800) {
        console.log(screen.height);
        vr_box.style.display = "block"; //open de vr box
    }

    if (text_box.style.display == "block") {
        text_box.style.display = "none"; //close de textbox
    }
}
