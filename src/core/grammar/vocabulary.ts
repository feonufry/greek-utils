import { vocabulary } from "./registry";
import { GrammarType } from "./index";

//-------------------------------------------------------------------------------------------------------------------
// BASE
//-------------------------------------------------------------------------------------------------------------------

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
    primary: "он",
    secondary: "в функции личного употребляется в косвенных падежах"
}, false);

vocabulary("auth", GrammarType.PARTICLE, {
    primary: "она",
    secondary: "в функции личного употребляется в косвенных падежах"
}, false);

vocabulary("auto", GrammarType.PARTICLE, {
    primary: "оно",
    secondary: "в функции личного употребляется в косвенных падежах"
}, false);

vocabulary("autoi", GrammarType.PARTICLE, {
    primary: "они - муж.род",
    secondary: "в функции личного употребляется в косвенных падежах"
}, false);

vocabulary("autai", GrammarType.PARTICLE, {
    primary: "они - жен.род",
    secondary: "в функции личного употребляется в косвенных падежах"
}, false);

vocabulary("auta", GrammarType.PARTICLE, {
    primary: "они - сред.род",
    secondary: "в функции личного употребляется в косвенных падежах"
}, false);

//-------------------------------------------------------------------------------------------------------------------
// EXTENDED
//-------------------------------------------------------------------------------------------------------------------

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

