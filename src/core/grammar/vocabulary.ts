import { vocabulary } from "./registry";
import { GrammarType } from "./index";

//-------------------------------------------------------------------------------------------------------------------
// BASE
//-------------------------------------------------------------------------------------------------------------------

vocabulary("eimi", GrammarType.VERB, {
    primary: "to be"
}, false);

vocabulary("ego", GrammarType.PARTICLE, {
    primary: "я"
}, false);

vocabulary("hmeic", GrammarType.PARTICLE, {
    primary: "мы"
}, false);

vocabulary("su", GrammarType.PARTICLE, {
    primary: "ты"
}, false);

vocabulary("umeic", GrammarType.PARTICLE, {
    primary: "вы"
}, false);

vocabulary("autoc", GrammarType.PARTICLE, {
    primary: "он, сам",
    secondary: "в функции личного употребляется в косвенных падежах; сам = арт. + мест., сущ. + мест."
}, false);

vocabulary("auth", GrammarType.PARTICLE, {
    primary: "она, сама",
    secondary: "в функции личного употребляется в косвенных падежах; сама = арт. + мест., сущ. + мест."
}, false);

vocabulary("auto", GrammarType.PARTICLE, {
    primary: "оно, само",
    secondary: "в функции личного употребляется в косвенных падежах; само = арт. + мест., сущ. + мест."
}, false);

vocabulary("autoi", GrammarType.PARTICLE, {
    primary: "они, сами - муж.род",
    secondary: "в функции личного употребляется в косвенных падежах; сами = арт. + мест., сущ. + мест."
}, false);

vocabulary("autai", GrammarType.PARTICLE, {
    primary: "они, сами - жен.род",
    secondary: "в функции личного употребляется в косвенных падежах; сами = арт. + мест., сущ. + мест."
}, false);

vocabulary("auta", GrammarType.PARTICLE, {
    primary: "они, сами - сред.род",
    secondary: "в функции личного употребляется в косвенных падежах; сами = арт. + мест., сущ. + мест."
}, false);

vocabulary("outoc", GrammarType.PARTICLE, {
    primary: "этот",
}, false);

vocabulary("auth", GrammarType.PARTICLE, {
    primary: "эта",
}, false);

vocabulary("touto", GrammarType.PARTICLE, {
    primary: "это",
}, false);

vocabulary("outoi", GrammarType.PARTICLE, {
    primary: "эти - муж.род",
}, false);

vocabulary("autai", GrammarType.PARTICLE, {
    primary: "эти - жен.род",
}, false);

vocabulary("tauta", GrammarType.PARTICLE, {
    primary: "эти - ср.род",
}, false);

vocabulary("ekeivoc", GrammarType.PARTICLE, {
    primary: "тот",
}, false);

vocabulary("ekeivh", GrammarType.PARTICLE, {
    primary: "та",
}, false);

vocabulary("ekeivo", GrammarType.PARTICLE, {
    primary: "то",
}, false);

vocabulary("ekeivoi", GrammarType.PARTICLE, {
    primary: "те - муж.род",
    secondary: "указательное"
}, false);

vocabulary("ekeivai", GrammarType.PARTICLE, {
    primary: "те - жен.род",
    secondary: "указательное"
}, false);

vocabulary("ekeiva", GrammarType.PARTICLE, {
    primary: "те - сред.род",
    secondary: "указательное"
}, false);

//-------------------------------------------------------------------------------------------------------------------
// EXTENDED
//-------------------------------------------------------------------------------------------------------------------

vocabulary("ou", GrammarType.PARTICLE, {
    primary: "не (отрицание)"
}, true);

vocabulary("de", GrammarType.PARTICLE, {
    primary: "же, а, но",
    secondary: "μέν... δέ = выражает неявное противопоставление, «с одной стороны... с другой стороны»"
}, true);

vocabulary("kai", GrammarType.CONJUNCTION, {
    primary: "и; также, даже",
    secondary: "καί... καί... = и... и, как... так и"
}, true);

vocabulary("apo", GrammarType.PREPOSITION, {
    primary: "от; после, вслед за; начиная с",
    secondary: "+ Род. падеж"
}, false);

vocabulary("dia", GrammarType.PREPOSITION, {
    primary: "через, сквозь",
    secondary: "+ Род.падеж"
}, false);

vocabulary("dia", GrammarType.PREPOSITION, {
    primary: "из-за, вследствие",
    secondary: "+ Твор.падеж"
}, false);

vocabulary("epi", GrammarType.PREPOSITION, {
    primary: "на, над, перед лицом, в присутствии, во время",
    secondary: "+ Род.падеж"
}, false);

vocabulary("epi", GrammarType.PREPOSITION, {
    primary: "на, у, на основании",
    secondary: "+ Дат.падеж"
}, false);

vocabulary("epi", GrammarType.PREPOSITION, {
    primary: "на (кого, что), против, у, при, в (где?)",
    secondary: "+ Твор.падеж"
}, false);

vocabulary("upo", GrammarType.PREPOSITION, {
    primary: "действующее лицо (англ. `by`)",
    secondary: "глаг. + ὑπό + Дат. падеж"
}, false);

vocabulary("proc", GrammarType.PREPOSITION, {
    primary: "около, при",
    secondary: "+ Твор.падеж"
}, false);

vocabulary("proc", GrammarType.ADVERB, {
    primary: "а также, к тому же, сверх того",
    secondary: "πρός δὲ, πρός δὲ καὶ, καὶ πρός"
}, false);

vocabulary("proc", GrammarType.PREPOSITION, {
    primary: "к, по направлению к, в, на [движение или положение]",
    secondary: "+ Твор.падеж"
}, false);

vocabulary("htoi", GrammarType.CONJUNCTION, {
    primary: "или"
}, false);

vocabulary("eita", GrammarType.ADVERB, {
    primary: "потом, затем, далее, после"
});

vocabulary("suv", GrammarType.PREPOSITION, {
    primary: "c",
    secondary: "+ Дат.падеж"
}, false);


//-------------------------------------------------------------------------------------------------------------------
// CUSTOM
//-------------------------------------------------------------------------------------------------------------------

vocabulary("wra", GrammarType.NOUN, {
    primary: "час"
}, false);

vocabulary("varqhki", GrammarType.NOUN, {
    primary: "нартекс (притвор)"
}, false);

vocabulary("vaoc", GrammarType.NOUN, {
    primary: "храм"
}, false);

vocabulary("diakovoc", GrammarType.NOUN, {
    primary: "диакон"
}, false);

vocabulary("pavtwv", GrammarType.NOUN, {
    primary: "всем",
    secondary: "Род.п.,мн.ч.,муж.р,ср.р - all, every, each"
}, false);

vocabulary("pavtec", GrammarType.NOUN, {
    primary: "все",
    secondary: "Им.Зват.п.,мн.ч.,муж.р - all, every, each"
}, false);

vocabulary("pasav", GrammarType.NOUN, {
    primary: "всем",
    secondary: "Твор.п.,ед.ч.,жен.р - all, every, each"
}, false);

vocabulary("paswv", GrammarType.NOUN, {
    primary: "всех",
    secondary: "Род.п.,мн.ч.,жен.р - all, every, each"
}, false);

vocabulary("hsuхh/", GrammarType.ADVERB, {
    primary: "тихо, спокойно, неторопливо"
}, true);

vocabulary("ekklhsiarхhc", GrammarType.NOUN, {
    primary: "экклесиарх"
}, false);

vocabulary("akolouqia", GrammarType.NOUN, {
    primary: "последование"
}, false);

vocabulary("suvaxariov", GrammarType.NOUN, {
    primary: "синаксарь"
}, false);

vocabulary("tupikov", GrammarType.NOUN, {
    primary: "типикон"
}, false);

vocabulary("movh", GrammarType.NOUN, {
    primary: "монастырь"
}, false);

vocabulary("uperagia", GrammarType.ADJECTIVE, {
    primary: "Пресвятая"
}, false);

vocabulary("qeotokoc", GrammarType.NOUN, {
    primary: "Богородица"
}, false);

vocabulary("pulai", GrammarType.NOUN, {
    primary: "врата",
}, false);

vocabulary("khroc", GrammarType.NOUN, {
    primary: "воск = восковая свеча?",
}, false);

vocabulary("proestwtoc", GrammarType.NOUN, {
    primary: "предстоятель",
}, false);

vocabulary("iereuc", GrammarType.NOUN, {
    primary: "иерей",
}, false);

vocabulary("qusiasthriov", GrammarType.NOUN, {
    primary: "алтарь",
}, false);

vocabulary("ekklhsiav", GrammarType.NOUN, {
    primary: "церковь",
}, false);
