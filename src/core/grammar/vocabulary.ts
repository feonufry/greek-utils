import { vocabulary } from "./registry";
import { GrammarType } from "./index";

vocabulary("eita", GrammarType.ADVERB, {
    primary: "потом, затем, далее, после"
});

vocabulary("wra", GrammarType.NOUN, {
    primary: "час"
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

vocabulary("ekklhsiarхhc", GrammarType.ADVERB, {
    primary: "экклесиарх"
}, true);
