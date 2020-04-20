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
    vr_box.style.display = "none"; //close de vr box
    thuis_educatie.style.display = "none"; //close thuis educ

    if (text_box.style.display === "none") {
        text_box.style.display = "block"; //Open de textbox
    }
    if (x === 1) { // vr-box text
        vr_box_title.textContent = "VRED-services"
        vr_box_text.innerHTML =
            `
        <p>VRED is gespecialiseerd in VR én cultuur Educatie. <br>
        Directeuren van lagere, middelbare of voortgezet onderwijs kunnen een VRED-abonnement aanschaffen, waardoor leerlingen met VR-headsets elke dag naar alle relevante Nederlandse musea kunnen. Het VR-abonnement geeft toegang tot 6-Oculus Go’s in de VR-box. De ICC-ers krijgt van ons team een training en elke leerling krijgt een login-account.</p>



        <p><b>VRED abonnement voor de hele school</b><br>
        Eén abonnement voor de hele school om onbeperkt alle musea te bezoeken. Naast het abonnement, heeft de school natuurlijk ook de VR-box nodig. Deze VR-box bestaat uit 6-Oculus Go’s. Het abonnement omvat support (uitleg en installatie) op school om de headsets in de VR-box aan te sluiten op het WiFi. De VR-headsets, zijn zo ingericht, dat leerlingen alleen de ‘cultuur educatie applicatie’ kan bezoeken. <br>
        Met het VRED abonnement kun je:</p>

        <ul>
            <li>Login                     : Leerlingen kunnen inloggen. VRED houdt bij waar en in welk museum bent gebleven.</li>
            <li>Rapportage        : ICC-ers kunnen op leerling niveau zien welke groep welke musea hebben bezocht.</li>
            <li>Leerlingbeheer : Docenten kunnen hun eigen klas of groep aanmaken. ICC-ers geven hen dat recht.</li>
        </ul>

        <p><b>VR-box = 6-Pack</b> <br>
        De VR-box bestaat uit 6 Oculus Go’s in een beschermende suit-case. De 6-Headsets kunnen met de geïntegreerde stekker aan de suit-case, gelijktijdig aangesloten worden op stroomnet. <br>
        Handig, 1-stekker laadt 6 VR-headsets in één keer op. </p>
        `

    } else if (x == 2) { // over vred
        vr_box_title.textContent = "Over VRED";
        vr_box_text.innerHTML =
            `<p>Ontwerpen voor andere is leuk, maar ontwerpen voor kinderen is nog leuker. Dagelijks word ik blij, wanneer ik zie dat            kinderen tm 18 jaar met veel plezier over cultuur leren door het te beleven. Uiteraard is het in het écht ervaren het beste, maar de pret van het vooraf beleven maakt een écht bezoek nog intenser.  CONFUCIUS. </p>

        <p>Een VR - team bestaande uit professionele 360° - fotografen, designers, educatoren en ontwikkelaars zorgen ervoor dat hoge kwaliteit foto’ s in één dag een interactieve VR - tour wordt. Multiple - choice vragen over een kunstobject worden voor twee doelgroepen gemaakt tw: Groep 4, 5 en 6 en Groep 7, 8 en MO / VO. <br>
        De fotograaf maakt de foto’ s, de designer maakt elke foto mooier met photoshop en lightroom, om er daarna panorama’ s van te maken.De verzameling panorama’ s vorm een VR - tour.Tot slot wordt de VR - tour interactief gemaakt door educatoren met hotspots die; multiple - choice vragen, video’ s weetjes en high res 2 D - foto’ s aansturen.</p>

        <p><b>Filosofie</b><br>
        VR leent zich perfect voor cultuur Educatie. Wij vinden dat op Nederlandse scholen Nederlandse musea en historische gebouwen door kinderen tm 18 jaar beleefd moeten worden. Kinderen ervaren VR - cultuur educatie als een game (gamification van het onderwijs), dit omdat gelijktijdig horen, zien en voelen geprikkeld worden.</p>
        `;
    } else if (x == 3) { // contact
        vr_box_title.textContent = "Contact";
        vr_box_text.innerHTML =
            `
            <p>Het VRED-team vindt het fijn, om met de school in contact te zijn.  Je kunt ons op kantoor máár ook buiten kantoortijden bellen.
            Wij nemen direct of anders binnen 10-minuten contact met jou op. Wel zo handig!</p>



            <p><b>Service-desk</b></p>

            <p>Bel ons, voor een toelichting op het VRED-abonnement of de VR-box.
            Of gewoon om een VR-demonstratie op school aan te vragen.</p>
            <h3>020-1239875</h3>

            <p><b>Support-desk voor klanten</b></p>
            <p>Bel ons wanneer je een technisch probleem hebt met de VR-headset: 020-123637
            Wij helpen om samen dit probleem op te lossen.</p>
        `
    } else if (x == 4) { // Thuis educatie
        vr_box_title.textContent = "Thuis educatie"
    }

}

function closeTextBox() {
    var text_box = document.getElementsByClassName("vr_box")[0];
    var vr_box = document.getElementsByClassName("vr_bril_open")[0];
    var thuis_educatie = document.getElementById("thuis_educatie");

    vr_box.style.display = "block"; //close de vr box
    thuis_educatie.style.display = "block"; //close thuis educ

    if (text_box.style.display == "block") {
        text_box.style.display = "none"; //Open de textbox
    }
}
