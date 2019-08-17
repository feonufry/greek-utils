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

vocabulary("proc", GrammarType.PREPOSITION, {
    primary: "подобен"
}, false);

vocabulary("хwric", GrammarType.PREPOSITION, {
    primary: "без",
    secondary: "+ Род.падеж"
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

vocabulary("meхri", GrammarType.PREPOSITION, {
    primary: "(вплоть) до; до конца; до пределов, в пределах, в меру; приблизительно, около; до",
    secondary: "+ Род.падеж"
}, false);


vocabulary("mesov", GrammarType.ADVERB, {
    primary: "посреди, в середине"
}, false);

vocabulary("gar", GrammarType.PARTICLE, {
    primary: "ведь, же, ибо"
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

vocabulary("tessarakosth", GrammarType.NOUN, {
    primary: "четыредесятница",
}, false);

vocabulary("agia", GrammarType.ADJECTIVE, {
    primary: "святая",
}, false);

vocabulary("givomai", GrammarType.VERB, {
    primary: "совершаться, происходить",
    secondary: "напр. ектения"
}, false);

vocabulary("allo", GrammarType.ADJECTIVE, {
    primary: "иной",
}, false);

vocabulary("suvhqhc", GrammarType.ADJECTIVE, {
    primary: "обычный",
}, false);

vocabulary("apolush", GrammarType.NOUN, {
    primary: "Отпуст",
}, false);

vocabulary("avagvwsic", GrammarType.NOUN, {
    primary: "чтение",
}, false);

vocabulary("hхoc", GrammarType.NOUN, {
    primary: "глас",
}, false);

vocabulary("w/dh", GrammarType.NOUN, {
    primary: "песнь (канона)",
}, false);

vocabulary("kaqisma", GrammarType.NOUN, {
    primary: "седален",
}, false);

vocabulary("upakoh", GrammarType.NOUN, {
    primary: "ипакои",
}, false);

vocabulary("kovtakiov", GrammarType.NOUN, {
    primary: "кондак",
}, false);

vocabulary("oikov", GrammarType.NOUN, {
    primary: "икос",
}, false);

vocabulary("exaposteilariov", GrammarType.NOUN, {
    primary: "Эксапостиларий",
}, false);

vocabulary("idiomelov", GrammarType.NOUN, {
    primary: "самогласен",
}, false);

vocabulary("prosomoia", GrammarType.NOUN, {
    primary: "подобен",
}, false);

vocabulary("etera", GrammarType.ADJECTIVE, {
    primary: "другой (иначе, по-другому)",
}, false);

vocabulary("eisodoc", GrammarType.NOUN, {
    primary: "вход",
}, false);

vocabulary("ebdomada", GrammarType.NOUN, {
    primary: "неделя (седмица)",
}, false);

vocabulary("proeortia", GrammarType.NOUN, {
    primary: "предпраздество",
}, false);

vocabulary("apodeipvov", GrammarType.NOUN, {
    primary: "повечерие",
}, false);

vocabulary("diakivhsimov", GrammarType.NOUN, {
    primary: "Светлая седмица",
}, false);

vocabulary("prolabousai", GrammarType.PHRASE_INCIPIO, {
    primary: "Предварившия утро",
    secondary: "Ипакои Пасхи - Προλαβοῦσαι τὸν ὄρθρον",
}, false);

vocabulary("avastasiv", GrammarType.PHRASE_INCIPIO, {
    primary: "Воскресение Христово видевше",
    secondary: "̓Ανάστασιν Χριστοῦ θεασάμενοι",
}, false);

vocabulary("фwtizou", GrammarType.PHRASE_INCIPIO, {
    primary: "Светися светися",
    secondary: "Φωτίζου φωτίζου - ирмос 9-й песни канона Пасхи",
}, false);

vocabulary("sarki", GrammarType.PHRASE_INCIPIO, {
    primary: "Плотию уснув яко мертв",
    secondary: "Σαρκὶ ὑπνώσας ὡς θνητός - эксапостиларий Пасхи",
}, false);

vocabulary("dei", GrammarType.PHRASE_INCIPIO, {
    primary: "Ведати же подобает, что",
    secondary: "Δεῖ δὲ γινώσκειν, ὅτι",
}, false);
