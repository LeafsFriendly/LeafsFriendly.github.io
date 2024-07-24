class Player {
    constructor(name, salary, bonus, term, expiry, position, age, handed, clause) {
        this.name = name;
        this.salary = salary;
        this.bonus = bonus;
        this.term = term;
        this.expiry = expiry;
        this.position = position;
        this.age = age;
        this.handed = handed;
        this.clause = clause;
    }

    get_name() {
        return this.name;
    }

    get_salary() {
        return this.salary;
    }

    get_bonus() {
        return this.bonus;
    }

    get_term() {
        return this.term;
    }

    get_expiry() {
        return this.expiry;
    }

    get_position() {
        return this.position;
    }

    get_age() {
        return this.age;
    }

    get_handed() {
        return this.handed;
    }

    get_clause() {
        return this.clause;
    }
}

//-----------------------------------------PLAYER DATA BACKEND------------------------------------------

//Player Age in YYYY-MM-DD Format Only

//Step 1 of 5

var matthews_auston_birthday = '1997-09-17';
var tavares_john_birthday = '1990-09-20';
var nylander_william_birthday = '1996-05-01';
var marner_mitch_birthday = '1997-05-05';
var kampf_david_birthday = '1995-01-12';
var jarnkrok_calle_birthday = '1991-09-25';
var reaves_ryan_birthday = '1987-01-20';
var mcmann_bobby_birthday = '1996-06-15';
var knies_matthew_birthday = '2002-10-17';
var holmberg_pontus_birthday = '1999-03-09';
var cowan_easton_birthday = '2005-05-20';
var minten_fraser_birthday = '2004-07-05';
var grebyonkin_nikita_birthday = '2003-05-02';
var hirvonen_roni_birthday = '2002-01-10';
var quillan_jacob_birthday = '2002-02-02';
var tverberg_ryan_birthday = '2002-01-30';
var kressler_braeden_birthday = '2003-01-05';
var voit_ty_birthday = '2003-06-10';
var abruzzese_nick_birthday = '1999-06-04';
var domi_max_birthday = '1995-05-02';
var pare_cedric_birthday = '1999-01-24';

var rielly_morgan_birthday = '1994-03-09';
var mccabe_jake_birthday = '1993-10-12';
var benoit_simon_birthday = '1998-09-19';
var timmins_conor_birthday = '1998-09-18';
var webber_cade_birthday = '2001-01-05';
var niemela_topi_birthday = '2002-03-25';
var rifai_marshall_birthday = '1998-03-16';
var mattinen_nicolas_birthday = '1998-03-05';
var villeneuve_william_birthday = '2002-03-20';
var kokkonen_mikko_birthday = '2001-01-18';
var chadwick_noah_birthday = '2005-05-10';
var liljegren_timothy_birthday = '1999-04-30';
var ekman_larsson_oliver_birthday = '1991-07-17';
var tanev_christopher_birthday = '1989-12-20';
var hakanpaa_jani_birthday = '1992-03-31';
var mermis_dakota_birthday = '1994-01-05';
var myers_philippe_birthday = '1997-01-25';

var woll_joseph_birthday = '1998-07-12';
var hildeby_dennis_birthday = '2001-08-19';
var akhtiamov_artur_birthday = '2001-10-31';
var peksa_vyacheslav_birthday = '2002-08-27';
var murray_matt_birthday = '1994-05-25';
var stolarz_anthony_birthday = '1994-01-20';

var robertson_nicholas_birthday = '2001-09-11';
var dewar_connor_birthday = '1999-06-26';
var steeves_alex_birthday = '1999-12-10';

var danford_ben_birthday = '2006-02-06';

//---------------------------------------------------------------------------------

function calculateAge(birthday) {

    var birthDate = new Date(birthday);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();

    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function formatMoney(amount) {
    return '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function parseMoneyToString(moneyStr) {
    return moneyStr.replace(/[$,]/g, '');
}

function formatBonus(num) {
    if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + 'M';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + 'k';
    } else {
        return num.toString();
    }
}


function parseBonusToString(str) {

    let numericValue = parseFloat(str);

    if (str.includes('M')) {
        numericValue *= 1e6;
    } else if (str.includes('k')) {
        numericValue *= 1e3;
    }

    return Math.round(numericValue).toString();
}


//-----------------------------------------------------------------------------------

//Step 2 of 5

var matthews_auston_age = calculateAge(matthews_auston_birthday);
var tavares_john_age = calculateAge(tavares_john_birthday);
var nylander_william_age = calculateAge(nylander_william_birthday);
var marner_mitch_age = calculateAge(marner_mitch_birthday);
var kampf_david_age = calculateAge(kampf_david_birthday);
var jarnkrok_calle_age = calculateAge(jarnkrok_calle_birthday);
var reaves_ryan_age = calculateAge(reaves_ryan_birthday);
var mcmann_bobby_age = calculateAge(mcmann_bobby_birthday);
var knies_matthew_age = calculateAge(knies_matthew_birthday);
var holmberg_pontus_age = calculateAge(holmberg_pontus_birthday);
var cowan_easton_age = calculateAge(cowan_easton_birthday);
var minten_fraser_age = calculateAge(minten_fraser_birthday);
var grebyonkin_nikita_age = calculateAge(grebyonkin_nikita_birthday);
var hirvonen_roni_age = calculateAge(hirvonen_roni_birthday);
var quillan_jacob_age = calculateAge(quillan_jacob_birthday);
var tverberg_ryan_age = calculateAge(tverberg_ryan_birthday);
var kressler_braeden_age = calculateAge(kressler_braeden_birthday);
var voit_ty_age = calculateAge(voit_ty_birthday);
var abruzzese_nick_age = calculateAge(abruzzese_nick_birthday);
var domi_max_age = calculateAge(domi_max_birthday);
var pare_cedric_age = calculateAge(pare_cedric_birthday);

var rielly_morgan_age = calculateAge(rielly_morgan_birthday);
var mccabe_jake_age = calculateAge(mccabe_jake_birthday);
var benoit_simon_age = calculateAge(benoit_simon_birthday);
var timmins_conor_age = calculateAge(timmins_conor_birthday);
var webber_cade_age = calculateAge(webber_cade_birthday);
var niemela_topi_age = calculateAge(niemela_topi_birthday);
var rifai_marshall_age = calculateAge(rifai_marshall_birthday);
var mattinen_nicolas_age = calculateAge(mattinen_nicolas_birthday);
var villeneuve_william_age = calculateAge(villeneuve_william_birthday);
var kokkonen_mikko_age = calculateAge(kokkonen_mikko_birthday);
var chadwick_noah_age = calculateAge(chadwick_noah_birthday);
var liljegren_timothy_age = calculateAge(liljegren_timothy_birthday);
var ekman_larsson_oliver_age = calculateAge(ekman_larsson_oliver_birthday);
var tanev_christopher_age = calculateAge(tanev_christopher_birthday);
var hakanpaa_jani_age = calculateAge(hakanpaa_jani_birthday);
var mermis_dakota_age = calculateAge(mermis_dakota_birthday);
var myers_philippe_age = calculateAge(myers_philippe_birthday);

var woll_joseph_age = calculateAge(woll_joseph_birthday);
var hildeby_dennis_age = calculateAge(hildeby_dennis_birthday);
var akhtiamov_artur_age = calculateAge(akhtiamov_artur_birthday);
var peksa_vyacheslav_age = calculateAge(peksa_vyacheslav_birthday);
var murray_matt_age = calculateAge(murray_matt_birthday);
var stolarz_anthony_age = calculateAge(stolarz_anthony_birthday);

var robertson_nicholas_age = calculateAge(robertson_nicholas_birthday);
var dewar_connor_age = calculateAge(dewar_connor_birthday);
var steeves_alex_age = calculateAge(steeves_alex_birthday);

var danford_ben_age = calculateAge(danford_ben_birthday);


//----------------------------------------------------------------------------------

//Step 3 of 5

var matthews_auston = new Player("Auston Matthews", formatMoney(13250000), formatBonus(0), 3, "UFA", "C", matthews_auston_age, "LH", "NMC");
var nylander_william = new Player("William Nylander", formatMoney(11500000), formatBonus(0), 7, "UFA", "RW", nylander_william_age, "RH", "NMC");
var kampf_david = new Player("David Kampf", formatMoney(2400000), formatBonus(0), 2, "UFA", "C", kampf_david_age, "LH", "M-NTC");
var jarnkrok_calle = new Player("Calle Jarnkrok", formatMoney(2100000), formatBonus(0), 1, "UFA", "RW", jarnkrok_calle_age, "RH", "M-NTC");
var reaves_ryan = new Player("Ryan Reaves", formatMoney(1350000), formatBonus(0), 1, "UFA", "RW", reaves_ryan_age, "RH", "None");
var mcmann_bobby = new Player("Bobby McMann", formatMoney(1350000), formatBonus(0), 1, "UFA", "LW", mcmann_bobby_age, "LH", "None");
var cowan_easton = new Player("Easton Cowan", formatMoney(904667), formatBonus(0), 2, "RFA", "LW", cowan_easton_age, "LH", "None");
var minten_fraser = new Player("Fraser Minten", formatMoney(816667), formatBonus(0), 2, "RFA", "C", minten_fraser_age, "LH", "None");
var grebyonkin_nikita = new Player("Nikita Grebyonkin", formatMoney(875000), formatBonus(0), 1, "10.2c", "RW", grebyonkin_nikita_age, "LH", "None");
var quillan_jacob = new Player("Jacob Quillan", formatMoney(875000), formatBonus(0), 1, "RFA", "C", quillan_jacob_age, "LH", "None");
var tverberg_ryan = new Player("Ryan Tverberg", formatMoney(851667), formatBonus(0), 1, "RFA", "RW", tverberg_ryan_age, "RH", "None");
var kressler_braeden = new Player("Braeden Kressler", formatMoney(800556), formatBonus(0), 1, "RFA", "C", kressler_braeden_age, "RH", "None");
var voit_ty = new Player("Ty Voit", formatMoney(800556), formatBonus(0), 1, "RFA", "LW", voit_ty_age, "RH", "None");
var domi_max = new Player("Max Domi", formatMoney(3750000), formatBonus(0), 3, "UFA", "C", domi_max_age, "LH", "M-NTC");


var rielly_morgan = new Player("Morgan Rielly", formatMoney(7500000), formatBonus(0), 5, "UFA", "LD", rielly_morgan_age, "LH", "NMC");
var benoit_simon = new Player("Simon Benoit", formatMoney(1350000), formatBonus(0), 2, "UFA", "LD", benoit_simon_age, "LH", "None");
var chadwick_noah = new Player("Noah Chadwick", formatMoney(826111), formatBonus(0), 2, "RFA", "LD", chadwick_noah_age, "LH", "None");
var liljegren_timothy = new Player("Timothy Liljegren", formatMoney(3000000), formatBonus(0), 1, "UFA", "RD", liljegren_timothy_age, "RH", "None");
var ekman_larsson_oliver = new Player("Oliver Ekman-Larsson", formatMoney(3500000), formatBonus(0), 3, "UFA", "LD", ekman_larsson_oliver_age, "LH", "M-NTC");
var tanev_christopher = new Player("Christopher Tanev", formatMoney(4500000), formatBonus(0), 5, "UFA", "RD", tanev_christopher_age, "RH", "NMC");
var hakanpaa_jani = new Player("Jani Hakanpaa", formatMoney(1500000), formatBonus(0), 1, "UFA", "RD", hakanpaa_jani_age, "RH", "None");


var woll_joseph = new Player("Joseph Woll", formatMoney(3666667), formatBonus(0), 3, "UFA", "G", woll_joseph_age, "LH", "None");
var akhtiamov_artur = new Player("Artur Akhtiamov", formatMoney(851667), formatBonus(0), 1, "RFA", "G", akhtiamov_artur_age, "LH", "None");
var peksa_vyacheslav = new Player("Vyacheslav Peksa", formatMoney(851667), formatBonus(0), 1, "RFA", "G", peksa_vyacheslav_age, "LH", "None");
var stolarz_anthony = new Player("Anthony Stolarz", formatMoney(2500000), formatBonus(0), 1, "UFA", "G", stolarz_anthony_age, "LH", "None");


//Step 4 of 5

player_list = [];
player_list.push(matthews_auston);
player_list.push(nylander_william);
player_list.push(kampf_david);
player_list.push(jarnkrok_calle);
player_list.push(reaves_ryan);
player_list.push(mcmann_bobby);
player_list.push(cowan_easton);
player_list.push(minten_fraser);
player_list.push(rielly_morgan);
player_list.push(benoit_simon);
player_list.push(woll_joseph);
player_list.push(grebyonkin_nikita);
player_list.push(quillan_jacob);
player_list.push(tverberg_ryan);
player_list.push(kressler_braeden);
player_list.push(voit_ty);
player_list.push(chadwick_noah);
player_list.push(akhtiamov_artur);
player_list.push(peksa_vyacheslav);
player_list.push(domi_max);
player_list.push(liljegren_timothy);
player_list.push(ekman_larsson_oliver);
player_list.push(tanev_christopher);
player_list.push(hakanpaa_jani);
player_list.push(stolarz_anthony);

//------------------------------- PLAYER SELECT OPTIONS---------------------------------------------

//Step 5 of 5


function populateSelects(selectId) {

    const selectId_modified = selectId.split('_')[0];

    const selectOptions = `
                    <select id="${selectId_modified}">
                    <option value="Select">Select</option>
                    <optgroup label="Forwards">
                        <option value="Auston Matthews">Auston Matthews</option>
                        <option value="William Nylander">William Nylander</option>
                        <option value="Max Domi">Max Domi</option>
                        <option value="David Kampf">David Kampf</option>
                        <option value="Calle Jarnkrok">Calle Jarnkrok</option>
                        <option value="Ryan Reaves">Ryan Reaves</option>
                        <option value="Bobby McMann">Bobby McMann</option>
                        <option value="Easton Cowan">Easton Cowan</option>
                        <option value="Fraser Minten">Fraser Minten</option>
                        <option value="Nikita Grebyonkin">Nikita Grebyonkin</option>
                        <option value="Jacob Quillan">Jacob Quillan</option>
                        <option value="Ryan Tverberg">Ryan Tverberg</option>
                        <option value="Braeden Kressler">Braeden Kressler</option>
                        <option value="Ty Voit">Ty Voit</option>
                    </optgroup>

                    <optgroup label="Defensemen">
                        <option value="Morgan Rielly">Morgan Rielly</option>
                        <option value="Christopher Tanev">Christopher Tanev</option>
                        <option value="Oliver Ekman-Larsson">Oliver Ekman-Larsson</option>
                        <option value="Timothy Liljegren">Timothy Liljegren</option>
                        <option value="Jani Hakanpaa">Jani Hakanpaa</option>
                        <option value="Simon Benoit">Simon Benoit</option>
                        <option value="Noah Chadwick">Noah Chadwick</option>
                    </optgroup>

                    <optgroup label="Goaltenders">
                        <option value="Joseph Woll">Joseph Woll</option>
                        <option value="Anthony Stolarz">Anthony Stolarz</option>
                        <option value="Artur Akhtiamov">Artur Akhtiamov</option>
                        <option value="Vyacheslav Peksa">Vyacheslav Peksa</option>
                    </optgroup>

                    <optgroup label="Created Players"></optgroup>
                </select>`;


    document.getElementById(selectId).innerHTML = selectOptions;

}

populateSelects("lw1_populate");
populateSelects("c1_populate");
populateSelects("rw1_populate");
populateSelects("lw2_populate");
populateSelects("c2_populate");
populateSelects("rw2_populate");
populateSelects("lw3_populate");
populateSelects("c3_populate");
populateSelects("rw3_populate");
populateSelects("lw4_populate");
populateSelects("c4_populate");
populateSelects("rw4_populate");
populateSelects("ld1_populate");
populateSelects("rd1_populate");
populateSelects("g1_populate");
populateSelects("ld2_populate");
populateSelects("rd2_populate");
populateSelects("g2_populate");
populateSelects("ld3_populate");
populateSelects("rd3_populate");
populateSelects("s1_populate");
populateSelects("s2_populate");
populateSelects("s3_populate");

//---------------------------------Has Headshot------------------------------------------------

has_headshot = ["Matthew Knies", "Auston Matthews", "Mitchell Marner", "Bobby McMann", "John Tavares",
    "William Nylander", "Easton Cowan", "Max Domi", "Calle Jarnkrok", "Pontus Holmberg",
    "David Kampf", "Ryan Reaves", "Nick Abruzzese", "Fraser Minten", "Nicholas Robertson", 
    "Connor Dewar", "Alex Steeves", "Jacob Quillan", "Roni Hirvonen", "Nikita Grebyonkin", 
    "Ryan Tverberg", "Braeden Kressler", "Ty Voit", "Cedric Pare", 
    
    "Morgan Rielly", "Christopher Tanev", "Oliver Ekman-Larsson",
    "Jake McCabe", "Simon Benoit", "Timothy Liljegren", "Jani Hakanpaa", "Conor Timmins", 
    "Topi Niemela", "Marshall Rifai", "Cade Webber", "Dakota Mermis", "Philippe Myers",
    "Nicolas Mattinen", "William Villeneuve", "Mikko Kokkonen", "Noah Chadwick", 
    
    "Joseph Woll", "Anthony Stolarz", "Matt Murray", "Dennis Hildeby", "Artur Akhtiamov",
    "Vyacheslav Peksa"
    ];

//--------------------------------Prefill RFA or Reserve Player----------------------------------

//Step 1/3

var marner_mitchell = new Player("Mitchell Marner", 775000, 0, 1, "UFA", "RW", marner_mitch_age, "RH", "None");
var tavares_john = new Player("John Tavares", 775000, 0, 1, "UFA", "C", tavares_john_age, "LH", "None");
var mccabe_jake = new Player("Jake McCabe", 775000, 0, 1, "UFA", "LD", mccabe_jake_age, "LH", "None");
var mermis_dakota = new Player("Dakota Mermis", 775000, 0, 1, "UFA", "LD", mermis_dakota_age, "LH", "None");
var murray_matt = new Player("Matt Murray", 775000, 0, 1, "UFA", "G", murray_matt_age, "LH", "None");
var myers_philippe = new Player("Philippe Myers", 775000, 0, 1, "UFA", "RD", myers_philippe_age, "RH", "None");
var rifai_marshall = new Player("Marshall Rifai", 775000, 0, 1, "UFA", "LD", rifai_marshall_age, "LH", "None");
var mattinen_nicolas = new Player("Nicolas Mattinen", 775000, 0, 1, "UFA", "RD", mattinen_nicolas_age, "RH", "None");

var holmberg_pontus = new Player("Pontus Holmberg", 775000, 0, 1, "RFA (Arb)", "C", holmberg_pontus_age, "LH", "None");
var knies_matthew = new Player("Matthew Knies", 775000, 0, 1, "RFA", "LW", knies_matthew_age, "LH", "None");
var timmins_conor = new Player("Conor Timmins", 775000, 0, 1, "RFA (Arb)", "RD", timmins_conor_age, "RH", "None");
var robertson_nicholas = new Player("Nicholas Robertson", 775000, 0, 1, "RFA", "LW", robertson_nicholas_age, "LH", "None");
var dewar_connor = new Player("Connor Dewar", 775000, 0, 1, "RFA", "LW", dewar_connor_age, "LH", "None");
var steeves_alex = new Player("Alex Steeves", 775000, 0, 1, "RFA", "LW", steeves_alex_age, "LH", "None");
var webber_cade = new Player("Cade Webber", 775000, 0, 1, "10.2c", "LD", webber_cade_age, "LH", "None");
var hirvonen_roni = new Player("Roni Hirvonen", 775000, 0, 1, "RFA", "LW", hirvonen_roni_age, "LH", "None");
var abruzzese_nick = new Player("Nick Abruzzese", 775000, 0, 1, "RFA(Arb)", "LW", abruzzese_nick_age, "LH", "None");
var pare_cedric = new Player("Cedric Pare", 775000, 0, 1, "RFA", "C", pare_cedric_age, "LH", "None");
var niemela_topi = new Player("Topi Niemela", 775000, 0, 1, "RFA", "RD", niemela_topi_age, "RH", "None");
var kokkonen_mikko = new Player("Mikko Kokkonen", 775000, 0, 1, "RFA", "LD", kokkonen_mikko_age, "LH", "None");
var villeneuve_william = new Player("William Villeneuve", 775000, 0, 1, "RFA", "RD", villeneuve_william_age, "RH", "None");
var hildeby_dennis = new Player("Dennis Hildeby", 775000, 0, 1, "RFA", "G", hildeby_dennis_age, "LH", "None");

var danford_ben = new Player("Ben Danford", 775000, 0, 1, "RFA", "RD", danford_ben_age, "RH", "None");

//Step 2/3

prefill_list = [];
var prefill_list = [];
prefill_list.push(marner_mitchell);
prefill_list.push(tavares_john);
prefill_list.push(mccabe_jake);
prefill_list.push(mermis_dakota);
prefill_list.push(murray_matt);
prefill_list.push(myers_philippe);
prefill_list.push(rifai_marshall);
prefill_list.push(mattinen_nicolas);
prefill_list.push(holmberg_pontus);
prefill_list.push(knies_matthew);
prefill_list.push(timmins_conor);
prefill_list.push(robertson_nicholas);
prefill_list.push(dewar_connor);
prefill_list.push(steeves_alex);
prefill_list.push(webber_cade);
prefill_list.push(hirvonen_roni);
prefill_list.push(abruzzese_nick);
prefill_list.push(pare_cedric);
prefill_list.push(niemela_topi);
prefill_list.push(kokkonen_mikko);
prefill_list.push(villeneuve_william);
prefill_list.push(hildeby_dennis);
prefill_list.push(danford_ben);


//Step 3/3

const prefillOptions = `
<select id="prefill">
<option value="Select">Select</option>
<optgroup label="UFA">
    <option value="Mitchell Marner">Mitchell Marner</option>
    <option value="John Tavares">John Tavares</option>
    <option value="Jake McCabe">Jake McCabe</option>
    <option value="Dakota Mermis">Dakota Mermis</option>
    <option value="Matt Murray">Matt Murray</option>
    <option value="Philippe Myers">Philippe Myers</option>
    <option value="Marshall Rifai">Marshall Rifai</option>
    <option value="Nicolas Mattinen">Nicolas Mattinen</option>
</optgroup>
<optgroup label="RFA">
    <option value="Pontus Holmberg">Pontus Holmberg</option>
    <option value="Matthew Knies">Matthew Knies</option>
    <option value="Conor Timmins">Conor Timmins</option>
    <option value="Nicholas Robertson">Nicholas Robertson</option>
    <option value="Connor Dewar">Connor Dewar</option>
    <option value="Alex Steeves">Alex Steeves</option>
    <option value="Cade Webber">Cade Webber</option>
    <option value="Roni Hirvonen">Roni Hirvonen</option>
    <option value="Nick Abruzzese">Nick Abruzzese</option>
    <option value="Cedric Pare">Cedric Pare</option>
    <option value="Topi Niemela">Topi Niemela</option>
    <option value="Mikko Kokkonen">Mikko Kokkonen</option>
    <option value="William Villeneuve">William Villeneuve</option>
    <option value="Dennis Hildeby">Dennis Hildeby</option>
</optgroup>
<optgroup label="Reserve">
    <option value="Ben Danford">Ben Danford</option>
</optgroup>
</select>`;



document.getElementById("prefill_populate").innerHTML = prefillOptions;


//-----

document.getElementById("prefill");
prefill.addEventListener('change', prefillSelects);


function prefillSelects() {

    var selected_player_key = prefill.value;
    var selected_player;

    for (let i = 0; i < prefill_list.length; i++) {
        if (prefill_list[i].get_name() == selected_player_key) {
            selected_player = prefill_list[i];
        }
    }

    if (selected_player_key == "Select") {
        reset_player();

    } else {

        document.getElementById("create_name").value = selected_player.get_name();
        document.getElementById("create_salary").value = selected_player.get_salary();
        document.getElementById("create_bonus").value = selected_player.get_bonus();
        document.getElementById("create_term").value = selected_player.get_term();
        document.getElementById("create_expiry").value = selected_player.get_expiry();
        document.getElementById("create_position").value = selected_player.get_position();
        document.getElementById("create_age").value = selected_player.get_age();
        document.getElementById("create_handed").value = selected_player.get_handed();
        document.getElementById("create_clause").value = selected_player.get_clause();
    }

}

//--------------------------------INITIALIZE CAP SPACE------------------------------------------

var roster_size_raw = document.getElementById("roster_size");
var cap_ceiling_raw = document.getElementById("cap_ceiling");
var cap_hit_raw = document.getElementById("cap_hit");
var overages_raw = document.getElementById("overages");
var bonuses_raw = document.getElementById("bonuses");
var cap_space_raw = document.getElementById("cap_space");

const roster_size = Number(roster_size_raw.innerHTML);
const cap_ceiling = Number(parseMoneyToString(cap_ceiling_raw.innerHTML));
const cap_hit = Number(parseMoneyToString(cap_ceiling_raw.innerHTML));
const overages = Number(parseMoneyToString(overages_raw.innerHTML));
const cap_space = Number(parseMoneyToString(cap_ceiling_raw.innerHTML));

cap_space_raw.textContent = formatMoney(cap_ceiling - overages);
overages_raw.textContent = formatMoney(overages);


function calculate_cap_space() {
    const cap_hit = document.getElementById("cap_hit").innerHTML;
    const number_cap_hit = Number(parseMoneyToString(cap_hit));

    const cap_ceiling = document.getElementById("cap_ceiling").innerHTML;
    const overages = document.getElementById("overages").innerHTML;

    const number_cap_ceiling = Number(parseMoneyToString(cap_ceiling));
    const number_overages = Number(parseMoneyToString(overages));

    const adjusted_cap_ceiling = number_cap_ceiling - number_overages;

    const new_cap_space = adjusted_cap_ceiling - number_cap_hit;
    document.getElementById("cap_space").textContent = formatMoney(new_cap_space);
}



//------------------------------ LW1 --------------------------------------

document.getElementById("lw1");

lw1.addEventListener('change', update_lw1); //Listens for Changes in Select

lw1_flag = false; //Used to keep track of roster size
lw1_last_player = null; //Used to check what the previous selection was

function update_lw1() {
    var selected_player_key = lw1.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("lw1_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("lw1_player_position").textContent = "Position";
        document.getElementById("lw1_player_handedness").textContent = "Handed";
        document.getElementById("lw1_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("lw1_player_term").textContent = "Expiry (Term)";
        document.getElementById("lw1_player_clause").textContent = "Clause";

        if (lw1_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw1_flag = false;
        }

        if (lw1_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(lw1_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(lw1_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            lw1_last_player = null;
        }

        lw1.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("lw1_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("lw1_player_age").textContent = "Age " + age;
        document.getElementById("lw1_player_position").textContent = position;
        document.getElementById("lw1_player_handedness").textContent = handed;
        document.getElementById("lw1_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("lw1_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("lw1_player_clause").textContent = clause;

        //---------------------------------------------------
        if (lw1_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw1_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (lw1_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            lw1_last_player = selected_player;
        }
 
        if (lw1_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(lw1_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(lw1_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            lw1_last_player = selected_player;
        }

        lw1.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("lw1_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("lw1_headshot").src = `../photos/Select.png`;
        }

    }

}

//------------------------------ C1 --------------------------------------

document.getElementById("c1");

c1.addEventListener('change', update_c1); //Listens for Changes in Select

c1_flag = false; //Used to keep track of roster size
c1_last_player = null; //Used to check what the previous selection was

function update_c1() {
    var selected_player_key = c1.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("c1_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("c1_player_position").textContent = "Position";
        document.getElementById("c1_player_handedness").textContent = "Handed";
        document.getElementById("c1_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("c1_player_term").textContent = "Expiry (Term)";
        document.getElementById("c1_player_clause").textContent = "Clause";

        if (c1_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c1_flag = false;
        }

        if (c1_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(c1_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(c1_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            c1_last_player = null;
        }

        c1.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("c1_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("c1_player_age").textContent = "Age " + age;
        document.getElementById("c1_player_position").textContent = position;
        document.getElementById("c1_player_handedness").textContent = handed;
        document.getElementById("c1_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("c1_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("c1_player_clause").textContent = clause;

        //---------------------------------------------------
        if (c1_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c1_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (c1_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            c1_last_player = selected_player;
        }
 
        if (c1_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(c1_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(c1_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            c1_last_player = selected_player;
        }

        c1.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("c1_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("c1_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ RW1 --------------------------------------

document.getElementById("rw1");

rw1.addEventListener('change', update_rw1); //Listens for Changes in Select

rw1_flag = false; //Used to keep track of roster size
rw1_last_player = null; //Used to check what the previous selection was

function update_rw1() {
    var selected_player_key = rw1.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("rw1_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("rw1_player_position").textContent = "Position";
        document.getElementById("rw1_player_handedness").textContent = "Handed";
        document.getElementById("rw1_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("rw1_player_term").textContent = "Expiry (Term)";
        document.getElementById("rw1_player_clause").textContent = "Clause";

        if (rw1_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw1_flag = false;
        }

        if (rw1_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(rw1_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(rw1_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rw1_last_player = null;
        }

        rw1.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("rw1_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("rw1_player_age").textContent = "Age " + age;
        document.getElementById("rw1_player_position").textContent = position;
        document.getElementById("rw1_player_handedness").textContent = handed;
        document.getElementById("rw1_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("rw1_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("rw1_player_clause").textContent = clause;

        //---------------------------------------------------
        if (rw1_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw1_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (rw1_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rw1_last_player = selected_player;
        }
 
        if (rw1_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(rw1_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(rw1_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rw1_last_player = selected_player;
        }

        rw1.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("rw1_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("rw1_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ LW2 --------------------------------------

document.getElementById("lw2");

lw2.addEventListener('change', update_lw2); //Listens for Changes in Select

lw2_flag = false; //Used to keep track of roster size
lw2_last_player = null; //Used to check what the previous selection was

function update_lw2() {
    var selected_player_key = lw2.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("lw2_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("lw2_player_position").textContent = "Position";
        document.getElementById("lw2_player_handedness").textContent = "Handed";
        document.getElementById("lw2_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("lw2_player_term").textContent = "Expiry (Term)";
        document.getElementById("lw2_player_clause").textContent = "Clause";

        if (lw2_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw2_flag = false;
        }

        if (lw2_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(lw2_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(lw2_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            lw2_last_player = null;
        }

        lw2.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("lw2_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("lw2_player_age").textContent = "Age " + age;
        document.getElementById("lw2_player_position").textContent = position;
        document.getElementById("lw2_player_handedness").textContent = handed;
        document.getElementById("lw2_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("lw2_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("lw2_player_clause").textContent = clause;

        //---------------------------------------------------
        if (lw2_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw2_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (lw2_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            lw2_last_player = selected_player;
        }
 
        if (lw2_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(lw2_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(lw2_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            lw2_last_player = selected_player;
        }

        lw2.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("lw2_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("lw2_headshot").src = `../photos/Select.png`;
        }

    }

}



///------------------------------ C2 --------------------------------------

document.getElementById("c2");

c2.addEventListener('change', update_c2); //Listens for Changes in Select

c2_flag = false; //Used to keep track of roster size
c2_last_player = null; //Used to check what the previous selection was

function update_c2() {
    var selected_player_key = c2.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("c2_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("c2_player_position").textContent = "Position";
        document.getElementById("c2_player_handedness").textContent = "Handed";
        document.getElementById("c2_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("c2_player_term").textContent = "Expiry (Term)";
        document.getElementById("c2_player_clause").textContent = "Clause";

        if (c2_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c2_flag = false;
        }

        if (c2_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(c2_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(c2_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            c2_last_player = null;
        }

        c2.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("c2_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("c2_player_age").textContent = "Age " + age;
        document.getElementById("c2_player_position").textContent = position;
        document.getElementById("c2_player_handedness").textContent = handed;
        document.getElementById("c2_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("c2_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("c2_player_clause").textContent = clause;

        //---------------------------------------------------
        if (c2_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c2_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (c2_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            c2_last_player = selected_player;
        }
 
        if (c2_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(c2_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(c2_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            c2_last_player = selected_player;
        }

        c2.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("c2_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("c2_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ RW2 --------------------------------------

document.getElementById("rw2");

rw2.addEventListener('change', update_rw2); //Listens for Changes in Select

rw2_flag = false; //Used to keep track of roster size
rw2_last_player = null; //Used to check what the previous selection was

function update_rw2() {
    var selected_player_key = rw2.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("rw2_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("rw2_player_position").textContent = "Position";
        document.getElementById("rw2_player_handedness").textContent = "Handed";
        document.getElementById("rw2_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("rw2_player_term").textContent = "Expiry (Term)";
        document.getElementById("rw2_player_clause").textContent = "Clause";

        if (rw2_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw2_flag = false;
        }

        if (rw2_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(rw2_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(rw2_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rw2_last_player = null;
        }

        rw2.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("rw2_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("rw2_player_age").textContent = "Age " + age;
        document.getElementById("rw2_player_position").textContent = position;
        document.getElementById("rw2_player_handedness").textContent = handed;
        document.getElementById("rw2_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("rw2_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("rw2_player_clause").textContent = clause;

        //---------------------------------------------------
        if (rw2_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw2_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (rw2_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rw2_last_player = selected_player;
        }
 
        if (rw2_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(rw2_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(rw2_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rw2_last_player = selected_player;
        }

        rw2.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("rw2_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("rw2_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ LW3 --------------------------------------

document.getElementById("lw3");

lw3.addEventListener('change', update_lw3); //Listens for Changes in Select

lw3_flag = false; //Used to keep track of roster size
lw3_last_player = null; //Used to check what the previous selection was

function update_lw3() {
    var selected_player_key = lw3.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("lw3_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("lw3_player_position").textContent = "Position";
        document.getElementById("lw3_player_handedness").textContent = "Handed";
        document.getElementById("lw3_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("lw3_player_term").textContent = "Expiry (Term)";
        document.getElementById("lw3_player_clause").textContent = "Clause";

        if (lw3_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw3_flag = false;
        }

        if (lw3_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(lw3_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(lw3_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            lw3_last_player = null;
        }

        lw3.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("lw3_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("lw3_player_age").textContent = "Age " + age;
        document.getElementById("lw3_player_position").textContent = position;
        document.getElementById("lw3_player_handedness").textContent = handed;
        document.getElementById("lw3_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("lw3_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("lw3_player_clause").textContent = clause;

        //---------------------------------------------------
        if (lw3_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw3_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (lw3_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            lw3_last_player = selected_player;
        }
 
        if (lw3_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(lw3_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(lw3_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            lw3_last_player = selected_player;
        }

        lw3.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("lw3_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("lw3_headshot").src = `../photos/Select.png`;
        }

    }

}


//------------------------------ C3 --------------------------------------

document.getElementById("c3");

c3.addEventListener('change', update_c3); //Listens for Changes in Select

c3_flag = false; //Used to keep track of roster size
c3_last_player = null; //Used to check what the previous selection was

function update_c3() {
    var selected_player_key = c3.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("c3_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("c3_player_position").textContent = "Position";
        document.getElementById("c3_player_handedness").textContent = "Handed";
        document.getElementById("c3_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("c3_player_term").textContent = "Expiry (Term)";
        document.getElementById("c3_player_clause").textContent = "Clause";

        if (c3_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c3_flag = false;
        }

        if (c3_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(c3_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(c3_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            c3_last_player = null;
        }

        c3.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("c3_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("c3_player_age").textContent = "Age " + age;
        document.getElementById("c3_player_position").textContent = position;
        document.getElementById("c3_player_handedness").textContent = handed;
        document.getElementById("c3_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("c3_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("c3_player_clause").textContent = clause;

        //---------------------------------------------------
        if (c3_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c3_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (c3_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            c3_last_player = selected_player;
        }
 
        if (c3_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(c3_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(c3_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            c3_last_player = selected_player;
        }

        c3.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("c3_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("c3_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ RW3 --------------------------------------

document.getElementById("rw3");

rw3.addEventListener('change', update_rw3); //Listens for Changes in Select

rw3_flag = false; //Used to keep track of roster size
rw3_last_player = null; //Used to check what the previous selection was

function update_rw3() {
    var selected_player_key = rw3.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("rw3_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("rw3_player_position").textContent = "Position";
        document.getElementById("rw3_player_handedness").textContent = "Handed";
        document.getElementById("rw3_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("rw3_player_term").textContent = "Expiry (Term)";
        document.getElementById("rw3_player_clause").textContent = "Clause";

        if (rw3_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw3_flag = false;
        }

        if (rw3_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(rw3_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(rw3_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rw3_last_player = null;
        }

        rw3.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("rw3_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("rw3_player_age").textContent = "Age " + age;
        document.getElementById("rw3_player_position").textContent = position;
        document.getElementById("rw3_player_handedness").textContent = handed;
        document.getElementById("rw3_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("rw3_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("rw3_player_clause").textContent = clause;

        //---------------------------------------------------
        if (rw3_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw3_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (rw3_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rw3_last_player = selected_player;
        }
 
        if (rw3_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(rw3_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(rw3_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rw3_last_player = selected_player;
        }

        rw3.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("rw3_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("rw3_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ LW4 --------------------------------------

document.getElementById("lw4");

lw4.addEventListener('change', update_lw4); //Listens for Changes in Select

lw4_flag = false; //Used to keep track of roster size
lw4_last_player = null; //Used to check what the previous selection was

function update_lw4() {
    var selected_player_key = lw4.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("lw4_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("lw4_player_position").textContent = "Position";
        document.getElementById("lw4_player_handedness").textContent = "Handed";
        document.getElementById("lw4_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("lw4_player_term").textContent = "Expiry (Term)";
        document.getElementById("lw4_player_clause").textContent = "Clause";

        if (lw4_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw4_flag = false;
        }

        if (lw4_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(lw4_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(lw4_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            lw4_last_player = null;
        }

        lw4.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("lw4_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("lw4_player_age").textContent = "Age " + age;
        document.getElementById("lw4_player_position").textContent = position;
        document.getElementById("lw4_player_handedness").textContent = handed;
        document.getElementById("lw4_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("lw4_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("lw4_player_clause").textContent = clause;

        //---------------------------------------------------
        if (lw4_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            lw4_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (lw4_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            lw4_last_player = selected_player;
        }
 
        if (lw4_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(lw4_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(lw4_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            lw4_last_player = selected_player;
        }

        lw4.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("lw4_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("lw4_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ C4 --------------------------------------

document.getElementById("c4");

c4.addEventListener('change', update_c4); //Listens for Changes in Select

c4_flag = false; //Used to keep track of roster size
c4_last_player = null; //Used to check what the previous selection was

function update_c4() {
    var selected_player_key = c4.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("c4_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("c4_player_position").textContent = "Position";
        document.getElementById("c4_player_handedness").textContent = "Handed";
        document.getElementById("c4_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("c4_player_term").textContent = "Expiry (Term)";
        document.getElementById("c4_player_clause").textContent = "Clause";

        if (c4_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c4_flag = false;
        }

        if (c4_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(c4_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(c4_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            c4_last_player = null;
        }

        c4.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("c4_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("c4_player_age").textContent = "Age " + age;
        document.getElementById("c4_player_position").textContent = position;
        document.getElementById("c4_player_handedness").textContent = handed;
        document.getElementById("c4_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("c4_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("c4_player_clause").textContent = clause;

        //---------------------------------------------------
        if (c4_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            c4_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (c4_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            c4_last_player = selected_player;
        }
 
        if (c4_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(c4_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(c4_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            c4_last_player = selected_player;
        }

        c4.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("c4_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("c4_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ RW4 --------------------------------------

document.getElementById("rw4");

rw4.addEventListener('change', update_rw4); //Listens for Changes in Select

rw4_flag = false; //Used to keep track of roster size
rw4_last_player = null; //Used to check what the previous selection was

function update_rw4() {
    var selected_player_key = rw4.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("rw4_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("rw4_player_position").textContent = "Position";
        document.getElementById("rw4_player_handedness").textContent = "Handed";
        document.getElementById("rw4_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("rw4_player_term").textContent = "Expiry (Term)";
        document.getElementById("rw4_player_clause").textContent = "Clause";

        if (rw4_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw4_flag = false;
        }

        if (rw4_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(rw4_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(rw4_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rw4_last_player = null;
        }

        rw4.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("rw4_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("rw4_player_age").textContent = "Age " + age;
        document.getElementById("rw4_player_position").textContent = position;
        document.getElementById("rw4_player_handedness").textContent = handed;
        document.getElementById("rw4_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("rw4_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("rw4_player_clause").textContent = clause;

        //---------------------------------------------------
        if (rw4_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rw4_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (rw4_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rw4_last_player = selected_player;
        }
 
        if (rw4_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(rw4_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(rw4_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rw4_last_player = selected_player;
        }

        rw4.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("rw4_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("rw4_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ LD1 --------------------------------------

document.getElementById("ld1");

ld1.addEventListener('change', update_ld1); //Listens for Changes in Select

ld1_flag = false; //Used to keep track of roster size
ld1_last_player = null; //Used to check what the previous selection was

function update_ld1() {
    var selected_player_key = ld1.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("ld1_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("ld1_player_position").textContent = "Position";
        document.getElementById("ld1_player_handedness").textContent = "Handed";
        document.getElementById("ld1_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("ld1_player_term").textContent = "Expiry (Term)";
        document.getElementById("ld1_player_clause").textContent = "Clause";

        if (ld1_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            ld1_flag = false;
        }

        if (ld1_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(ld1_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(ld1_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            ld1_last_player = null;
        }

        ld1.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("ld1_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("ld1_player_age").textContent = "Age " + age;
        document.getElementById("ld1_player_position").textContent = position;
        document.getElementById("ld1_player_handedness").textContent = handed;
        document.getElementById("ld1_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("ld1_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("ld1_player_clause").textContent = clause;

        //---------------------------------------------------
        if (ld1_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            ld1_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (ld1_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            ld1_last_player = selected_player;
        }
 
        if (ld1_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(ld1_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(ld1_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            ld1_last_player = selected_player;
        }

        ld1.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("ld1_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("ld1_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ RD1 --------------------------------------

document.getElementById("rd1");

rd1.addEventListener('change', update_rd1); //Listens for Changes in Select

rd1_flag = false; //Used to keep track of roster size
rd1_last_player = null; //Used to check what the previous selection was

function update_rd1() {
    var selected_player_key = rd1.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("rd1_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("rd1_player_position").textContent = "Position";
        document.getElementById("rd1_player_handedness").textContent = "Handed";
        document.getElementById("rd1_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("rd1_player_term").textContent = "Expiry (Term)";
        document.getElementById("rd1_player_clause").textContent = "Clause";

        if (rd1_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rd1_flag = false;
        }

        if (rd1_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(rd1_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(rd1_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rd1_last_player = null;
        }

        rd1.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("rd1_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("rd1_player_age").textContent = "Age " + age;
        document.getElementById("rd1_player_position").textContent = position;
        document.getElementById("rd1_player_handedness").textContent = handed;
        document.getElementById("rd1_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("rd1_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("rd1_player_clause").textContent = clause;

        //---------------------------------------------------
        if (rd1_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rd1_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (rd1_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rd1_last_player = selected_player;
        }
 
        if (rd1_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(rd1_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(rd1_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rd1_last_player = selected_player;
        }

        rd1.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("rd1_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("rd1_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ LD2 --------------------------------------

document.getElementById("ld2");

ld2.addEventListener('change', update_ld2); //Listens for Changes in Select

ld2_flag = false; //Used to keep track of roster size
ld2_last_player = null; //Used to check what the previous selection was

function update_ld2() {
    var selected_player_key = ld2.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("ld2_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("ld2_player_position").textContent = "Position";
        document.getElementById("ld2_player_handedness").textContent = "Handed";
        document.getElementById("ld2_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("ld2_player_term").textContent = "Expiry (Term)";
        document.getElementById("ld2_player_clause").textContent = "Clause";

        if (ld2_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            ld2_flag = false;
        }

        if (ld2_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(ld2_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(ld2_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            ld2_last_player = null;
        }

        ld2.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("ld2_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("ld2_player_age").textContent = "Age " + age;
        document.getElementById("ld2_player_position").textContent = position;
        document.getElementById("ld2_player_handedness").textContent = handed;
        document.getElementById("ld2_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("ld2_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("ld2_player_clause").textContent = clause;

        //---------------------------------------------------
        if (ld2_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            ld2_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (ld2_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            ld2_last_player = selected_player;
        }
 
        if (ld2_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(ld2_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(ld2_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            ld2_last_player = selected_player;
        }

        ld2.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("ld2_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("ld2_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ RD2 --------------------------------------

document.getElementById("rd2");

rd2.addEventListener('change', update_rd2); //Listens for Changes in Select

rd2_flag = false; //Used to keep track of roster size
rd2_last_player = null; //Used to check what the previous selection was

function update_rd2() {
    var selected_player_key = rd2.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("rd2_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("rd2_player_position").textContent = "Position";
        document.getElementById("rd2_player_handedness").textContent = "Handed";
        document.getElementById("rd2_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("rd2_player_term").textContent = "Expiry (Term)";
        document.getElementById("rd2_player_clause").textContent = "Clause";

        if (rd2_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rd2_flag = false;
        }

        if (rd2_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(rd2_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(rd2_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rd2_last_player = null;
        }

        rd2.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("rd2_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("rd2_player_age").textContent = "Age " + age;
        document.getElementById("rd2_player_position").textContent = position;
        document.getElementById("rd2_player_handedness").textContent = handed;
        document.getElementById("rd2_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("rd2_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("rd2_player_clause").textContent = clause;

        //---------------------------------------------------
        if (rd2_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rd2_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (rd2_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rd2_last_player = selected_player;
        }
 
        if (rd2_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(rd2_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(rd2_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rd2_last_player = selected_player;
        }

        rd2.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("rd2_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("rd2_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ LD3 --------------------------------------

document.getElementById("ld3");

ld3.addEventListener('change', update_ld3); //Listens for Changes in Select

ld3_flag = false; //Used to keep track of roster size
ld3_last_player = null; //Used to check what the previous selection was

function update_ld3() {
    var selected_player_key = ld3.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("ld3_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("ld3_player_position").textContent = "Position";
        document.getElementById("ld3_player_handedness").textContent = "Handed";
        document.getElementById("ld3_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("ld3_player_term").textContent = "Expiry (Term)";
        document.getElementById("ld3_player_clause").textContent = "Clause";

        if (ld3_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            ld3_flag = false;
        }

        if (ld3_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(ld3_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(ld3_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            ld3_last_player = null;
        }

        ld3.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("ld3_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("ld3_player_age").textContent = "Age " + age;
        document.getElementById("ld3_player_position").textContent = position;
        document.getElementById("ld3_player_handedness").textContent = handed;
        document.getElementById("ld3_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("ld3_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("ld3_player_clause").textContent = clause;

        //---------------------------------------------------
        if (ld3_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            ld3_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (ld3_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            ld3_last_player = selected_player;
        }
 
        if (ld3_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(ld3_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(ld3_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            ld3_last_player = selected_player;
        }

        ld3.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("ld3_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("ld3_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ RD3 --------------------------------------

document.getElementById("rd3");

rd3.addEventListener('change', update_rd3); //Listens for Changes in Select

rd3_flag = false; //Used to keep track of roster size
rd3_last_player = null; //Used to check what the previous selection was

function update_rd3() {
    var selected_player_key = rd3.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("rd3_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("rd3_player_position").textContent = "Position";
        document.getElementById("rd3_player_handedness").textContent = "Handed";
        document.getElementById("rd3_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("rd3_player_term").textContent = "Expiry (Term)";
        document.getElementById("rd3_player_clause").textContent = "Clause";

        if (rd3_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rd3_flag = false;
        }

        if (rd3_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(rd3_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(rd3_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rd3_last_player = null;
        }

        rd3.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("rd3_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("rd3_player_age").textContent = "Age " + age;
        document.getElementById("rd3_player_position").textContent = position;
        document.getElementById("rd3_player_handedness").textContent = handed;
        document.getElementById("rd3_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("rd3_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("rd3_player_clause").textContent = clause;

        //---------------------------------------------------
        if (rd3_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            rd3_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (rd3_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rd3_last_player = selected_player;
        }
 
        if (rd3_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(rd3_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(rd3_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            rd3_last_player = selected_player;
        }

        rd3.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("rd3_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("rd3_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ G1 --------------------------------------

document.getElementById("g1");

g1.addEventListener('change', update_g1); //Listens for Changes in Select

g1_flag = false; //Used to keep track of roster size
g1_last_player = null; //Used to check what the previous selection was

function update_g1() {
    var selected_player_key = g1.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("g1_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("g1_player_position").textContent = "Position";
        document.getElementById("g1_player_handedness").textContent = "Handed";
        document.getElementById("g1_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("g1_player_term").textContent = "Expiry (Term)";
        document.getElementById("g1_player_clause").textContent = "Clause";

        if (g1_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            g1_flag = false;
        }

        if (g1_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(g1_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(g1_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            g1_last_player = null;
        }

        g1.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("g1_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("g1_player_age").textContent = "Age " + age;
        document.getElementById("g1_player_position").textContent = position;
        document.getElementById("g1_player_handedness").textContent = handed;
        document.getElementById("g1_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("g1_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("g1_player_clause").textContent = clause;

        //---------------------------------------------------
        if (g1_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            g1_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (g1_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            g1_last_player = selected_player;
        }
 
        if (g1_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(g1_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(g1_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            g1_last_player = selected_player;
        }

        g1.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("g1_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("g1_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ G2 --------------------------------------

document.getElementById("g2");

g2.addEventListener('change', update_g2); //Listens for Changes in Select

g2_flag = false; //Used to keep track of roster size
g2_last_player = null; //Used to check what the previous selection was

function update_g2() {
    var selected_player_key = g2.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("g2_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("g2_player_position").textContent = "Position";
        document.getElementById("g2_player_handedness").textContent = "Handed";
        document.getElementById("g2_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("g2_player_term").textContent = "Expiry (Term)";
        document.getElementById("g2_player_clause").textContent = "Clause";

        if (g2_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            g2_flag = false;
        }

        if (g2_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(g2_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(g2_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            g2_last_player = null;
        }

        g2.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("g2_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("g2_player_age").textContent = "Age " + age;
        document.getElementById("g2_player_position").textContent = position;
        document.getElementById("g2_player_handedness").textContent = handed;
        document.getElementById("g2_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("g2_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("g2_player_clause").textContent = clause;

        //---------------------------------------------------
        if (g2_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            g2_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (g2_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            g2_last_player = selected_player;
        }
 
        if (g2_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(g2_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(g2_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            g2_last_player = selected_player;
        }

        g2.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("g2_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("g2_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ S1 --------------------------------------

document.getElementById("s1");

s1.addEventListener('change', update_s1); //Listens for Changes in Select

s1_flag = false; //Used to keep track of roster size
s1_last_player = null; //Used to check what the previous selection was

function update_s1() {
    var selected_player_key = s1.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("s1_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("s1_player_position").textContent = "Position";
        document.getElementById("s1_player_handedness").textContent = "Handed";
        document.getElementById("s1_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("s1_player_term").textContent = "Expiry (Term)";
        document.getElementById("s1_player_clause").textContent = "Clause";

        if (s1_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            s1_flag = false;
        }

        if (s1_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(s1_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(s1_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            s1_last_player = null;
        }

        s1.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("s1_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("s1_player_age").textContent = "Age " + age;
        document.getElementById("s1_player_position").textContent = position;
        document.getElementById("s1_player_handedness").textContent = handed;
        document.getElementById("s1_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("s1_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("s1_player_clause").textContent = clause;

        //---------------------------------------------------
        if (s1_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            s1_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (s1_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            s1_last_player = selected_player;
        }
 
        if (s1_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(s1_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(s1_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            s1_last_player = selected_player;
        }

        s1.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("s1_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("s1_headshot").src = `../photos/Select.png`;
        }

    }

}



//------------------------------ S2 --------------------------------------

document.getElementById("s2");

s2.addEventListener('change', update_s2); //Listens for Changes in Select

s2_flag = false; //Used to keep track of roster size
s2_last_player = null; //Used to check what the previous selection was

function update_s2() {
    var selected_player_key = s2.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("s2_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("s2_player_position").textContent = "Position";
        document.getElementById("s2_player_handedness").textContent = "Handed";
        document.getElementById("s2_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("s2_player_term").textContent = "Expiry (Term)";
        document.getElementById("s2_player_clause").textContent = "Clause";

        if (s2_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            s2_flag = false;
        }

        if (s2_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(s2_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(s2_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            s2_last_player = null;
        }

        s2.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("s2_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("s2_player_age").textContent = "Age " + age;
        document.getElementById("s2_player_position").textContent = position;
        document.getElementById("s2_player_handedness").textContent = handed;
        document.getElementById("s2_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("s2_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("s2_player_clause").textContent = clause;

        //---------------------------------------------------
        if (s2_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            s2_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (s2_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            s2_last_player = selected_player;
        }
 
        if (s2_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(s2_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(s2_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            s2_last_player = selected_player;
        }

        s2.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("s2_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("s2_headshot").src = `../photos/Select.png`;
        }

    }

}


//------------------------------ S3 --------------------------------------

document.getElementById("s3");

s3.addEventListener('change', update_s3); //Listens for Changes in Select

s3_flag = false; //Used to keep track of roster size
s3_last_player = null; //Used to check what the previous selection was

function update_s3() {
    var selected_player_key = s3.value;
    var selected_player;

    for (let i = 0; i < player_list.length; i++) {      //gets us the selected player object
        if (player_list[i].get_name() == selected_player_key) {
            selected_player = player_list[i];
        }
    }

    if (selected_player_key == "Select") {

        document.getElementById("s3_player_age").textContent = "Age"   //reset info box to default
        document.getElementById("s3_player_position").textContent = "Position";
        document.getElementById("s3_player_handedness").textContent = "Handed";
        document.getElementById("s3_player_salary").textContent = "Salary (Bonus)"
        document.getElementById("s3_player_term").textContent = "Expiry (Term)";
        document.getElementById("s3_player_clause").textContent = "Clause";

        if (s3_flag == true) {     //adjust roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) - 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            s3_flag = false;
        }

        if (s3_last_player != null) {      //if there was a player selected previously subtract

            const cap_hit = document.getElementById("cap_hit").innerHTML; 
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(s3_last_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(s3_last_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            s3_last_player = null;
        }

        s3.style.backgroundColor = '#fbcece';  //make Select option light red

        document.getElementById("s3_headshot").src = `../photos/Select.png`; //add no player headshot

    } else { //if a player was selected, populate the info box with their info
        var salary = selected_player.get_salary();
        var bonus = selected_player.get_bonus();
        var term = selected_player.get_term();
        var expiry = selected_player.get_expiry();
        var position = selected_player.get_position();
        var age = selected_player.get_age();
        var handed = selected_player.get_handed();
        var clause = selected_player.get_clause();

        //---------------------------------------------------

        document.getElementById("s3_player_age").textContent = "Age " + age;
        document.getElementById("s3_player_position").textContent = position;
        document.getElementById("s3_player_handedness").textContent = handed;
        document.getElementById("s3_player_salary").textContent = salary + "\n" + " (" + bonus + ")";
        document.getElementById("s3_player_term").textContent = expiry + " (" + term + ")";
        document.getElementById("s3_player_clause").textContent = clause;

        //---------------------------------------------------
        if (s3_flag == false) { //update roster size if necessary
            const roster_size = document.getElementById("roster_size").innerHTML;
            const new_roster_size = Number(roster_size) + 1;
            document.getElementById("roster_size").textContent = new_roster_size;
            s3_flag = true;
        }

        //------------------------ CHANGE CAP INFO -----------------------------------------

        if (s3_last_player == null) { //update with no previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            s3_last_player = selected_player;
        }
 
        if (s3_last_player != null) { //update with previous player selection
            const cap_hit = document.getElementById("cap_hit").innerHTML;
            const new_cap_hit = Number(parseMoneyToString(cap_hit)) - Number(parseMoneyToString(s3_last_player.get_salary())) + Number(parseMoneyToString(selected_player.get_salary()));
            document.getElementById("cap_hit").textContent = formatMoney(new_cap_hit);

            const bonuses = document.getElementById("bonuses").innerHTML;
            const new_bonuses = Number(parseMoneyToString(bonuses)) - Number(parseBonusToString(s3_last_player.get_bonus())) + Number(parseBonusToString(selected_player.get_bonus()));
            document.getElementById("bonuses").textContent = formatMoney(new_bonuses);

            calculate_cap_space();

            s3_last_player = selected_player;
        }

        s3.style.backgroundColor = '#FFFFFF';  //white background for select

        if (has_headshot.includes(selected_player.get_name())) {  //if the player headshot exists, use it, if not use no player
            document.getElementById("s3_headshot").src = `../photos/${selected_player.get_name()}.png`;
        } else {
            document.getElementById("s3_headshot").src = `../photos/Select.png`;
        }

    }

}








//-------------------- Create Player -------------------------------------

function create_player() {

    // create player instance
    var create_name = document.getElementById("create_name").value;

    if (create_name == "") {
        create_name = "Unnamed Player";
    }

    var create_salary = document.getElementById("create_salary").value;
    var create_bonus = document.getElementById("create_bonus").value;
    var create_term = document.getElementById("create_term").value;
    var create_expiry = document.getElementById("create_expiry").value;
    var create_position = document.getElementById("create_position").value;
    var create_age = document.getElementById("create_age").value;
    var create_handed = document.getElementById("create_handed").value;
    var create_clause = document.getElementById("create_clause").value;



    var new_player = new Player(create_name, formatMoney(create_salary), formatBonus(create_bonus), create_term, create_expiry, create_position, create_age, create_handed, create_clause);

    player_list.push(new_player);

}

function create_player_2() {
    var create_name = document.getElementById("create_name").value;

    if (create_name == "") {
        create_name = "Unnamed Player";
    }

    var new_option_lw1 = document.createElement("option");
    new_option_lw1.text = create_name;
    new_option_lw1.value = create_name;
    document.getElementById("lw1").appendChild(new_option_lw1);

    var new_option_c1 = document.createElement("option");
    new_option_c1.text = create_name;
    new_option_c1.value = create_name;
    document.getElementById("c1").appendChild(new_option_c1);


    var new_option_rw1 = document.createElement("option");
    new_option_rw1.text = create_name;
    new_option_rw1.value = create_name;
    document.getElementById("rw1").appendChild(new_option_rw1);

    var new_option_lw2 = document.createElement("option");
    new_option_lw2.text = create_name;
    new_option_lw2.value = create_name;
    document.getElementById("lw2").appendChild(new_option_lw2);

    var new_option_c2 = document.createElement("option");
    new_option_c2.text = create_name;
    new_option_c2.value = create_name;
    document.getElementById("c2").appendChild(new_option_c2);

    var new_option_rw2 = document.createElement("option");
    new_option_rw2.text = create_name;
    new_option_rw2.value = create_name;
    document.getElementById("rw2").appendChild(new_option_rw2);

    var new_option_lw3 = document.createElement("option");
    new_option_lw3.text = create_name;
    new_option_lw3.value = create_name;
    document.getElementById("lw3").appendChild(new_option_lw3);

    var new_option_c3 = document.createElement("option");
    new_option_c3.text = create_name;
    new_option_c3.value = create_name;
    document.getElementById("c3").appendChild(new_option_c3);

    var new_option_rw3 = document.createElement("option");
    new_option_rw3.text = create_name;
    new_option_rw3.value = create_name;
    document.getElementById("rw3").appendChild(new_option_rw3);

    var new_option_lw4 = document.createElement("option");
    new_option_lw4.text = create_name;
    new_option_lw4.value = create_name;
    document.getElementById("lw4").appendChild(new_option_lw4);

    var new_option_c4 = document.createElement("option");
    new_option_c4.text = create_name;
    new_option_c4.value = create_name;
    document.getElementById("c4").appendChild(new_option_c4);

    var new_option_rw4 = document.createElement("option");
    new_option_rw4.text = create_name;
    new_option_rw4.value = create_name;
    document.getElementById("rw4").appendChild(new_option_rw4);

    var new_option_ld1 = document.createElement("option");
    new_option_ld1.text = create_name;
    new_option_ld1.value = create_name;
    document.getElementById("ld1").appendChild(new_option_ld1);

    var new_option_rd1 = document.createElement("option");
    new_option_rd1.text = create_name;
    new_option_rd1.value = create_name;
    document.getElementById("rd1").appendChild(new_option_rd1);

    var new_option_ld2 = document.createElement("option");
    new_option_ld2.text = create_name;
    new_option_ld2.value = create_name;
    document.getElementById("ld2").appendChild(new_option_ld2);

    var new_option_rd2 = document.createElement("option");
    new_option_rd2.text = create_name;
    new_option_rd2.value = create_name;
    document.getElementById("rd2").appendChild(new_option_rd2);

    var new_option_ld3 = document.createElement("option");
    new_option_ld3.text = create_name;
    new_option_ld3.value = create_name;
    document.getElementById("ld3").appendChild(new_option_ld3);

    var new_option_rd3 = document.createElement("option");
    new_option_rd3.text = create_name;
    new_option_rd3.value = create_name;
    document.getElementById("rd3").appendChild(new_option_rd3);

    var new_option_g1 = document.createElement("option");
    new_option_g1.text = create_name;
    new_option_g1.value = create_name;
    document.getElementById("g1").appendChild(new_option_g1);

    var new_option_g2 = document.createElement("option");
    new_option_g2.text = create_name;
    new_option_g2.value = create_name;
    document.getElementById("g2").appendChild(new_option_g2);

    var new_option_s1 = document.createElement("option");
    new_option_s1.text = create_name;
    new_option_s1.value = create_name;
    document.getElementById("s1").appendChild(new_option_s1);

    var new_option_s2 = document.createElement("option");
    new_option_s2.text = create_name;
    new_option_s2.value = create_name;
    document.getElementById("s2").appendChild(new_option_s2);

    var new_option_s3 = document.createElement("option");
    new_option_s3.text = create_name;
    new_option_s3.value = create_name;
    document.getElementById("s3").appendChild(new_option_s3);

}

function reset_player() {

    document.getElementById("create_name").value = "";
    document.getElementById("create_salary").value = "775000";
    document.getElementById("create_bonus").value = 0;
    document.getElementById("create_term").value = 1;
    document.getElementById("create_expiry").value = "UFA";
    document.getElementById("create_position").value = "LW";
    document.getElementById("create_age").value = "18";
    document.getElementById("create_handed").value = "LH";
    document.getElementById("create_clause").value = "None";

}

//--------------------- SET SELECTED/DEFAULT PLAYERS --------------------------

document.addEventListener('DOMContentLoaded', set_selected);

function set_selected() {
    document.getElementById('lw1').value = "Select";
    update_lw1();
    document.getElementById('c1').value = "Auston Matthews";
    update_c1();
    document.getElementById('rw1').value = "Select";
    update_rw1();
    //
    document.getElementById('lw2').value = "Bobby McMann";
    update_lw2();
    document.getElementById('c2').value = "Select";
    update_c2();
    document.getElementById('rw2').value = "William Nylander";
    update_rw2();
    //
    document.getElementById('lw3').value = "Easton Cowan";
    update_lw3();
    document.getElementById('c3').value = "Max Domi";
    update_c3();
    document.getElementById('rw3').value = "Calle Jarnkrok";
    update_rw3();
    //
    document.getElementById('lw4').value = "Select";
    update_lw4();
    document.getElementById('c4').value = "David Kampf";
    update_c4();
    document.getElementById('rw4').value = "Ryan Reaves";
    update_rw4();
    //
    document.getElementById('ld1').value = "Morgan Rielly";
    update_ld1();
    document.getElementById('rd1').value = "Christopher Tanev";
    update_rd1();
    //
    document.getElementById('ld2').value = "Oliver Ekman-Larsson";
    update_ld2();
    document.getElementById('rd2').value = "Select";
    update_rd2();
    //
    document.getElementById('ld3').value = "Simon Benoit";
    update_ld3();
    document.getElementById('rd3').value = "Timothy Liljegren";
    update_rd3();
    //
    document.getElementById('g1').value = "Joseph Woll";
    update_g1();
    document.getElementById('g2').value = "Anthony Stolarz";
    update_g2();
    //
    document.getElementById('s1').value = "Select";
    update_s1();
    document.getElementById('s2').value = "Select";
    update_s2();
    document.getElementById('s3').value = "Select";
    update_s3();
}















