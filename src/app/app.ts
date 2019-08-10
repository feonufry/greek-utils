import { untransliterate } from "../core/transliteration";
import { tokenize } from "../core/scanning";
import {
    buildAliasesHtml,
    buildGrammarAnnotationsHtml, buildNumberHtml,
    buildPrimarySearchLinksHtml,
    buildVocabularyHtml
} from "./annotations";
import { annotate } from "../core/grammar/engine";

function handleUntransliterate() {
    const source = $("#sourceText").val() as string;
    const result = untransliterate(source, true /*ancient*/);
    $("#resultText").val(result);
}

function handleAnalyze() {
    const source = $("#sourceText").val() as string;
    const $tokensList = $("#tokens");
    $tokensList.empty();
    for (const token of tokenize(source)) {
        const annotatedToken = annotate(token);

        const item = `<li class="list-group-item">
<div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1">${token.greekFull} \\ ${token.greekBasic} <small class="text-muted">\\ ${token.transliteratedFull} \\ ${token.transliteratedBasic}</small></h6>
    <small>${buildPrimarySearchLinksHtml(annotatedToken)}</small>
</div>
${buildNumberHtml(annotatedToken.number)}
${buildAliasesHtml(annotatedToken.aliases)}
${buildGrammarAnnotationsHtml(annotatedToken)}
${buildVocabularyHtml(annotatedToken)}
</li>`;
        $tokensList.append(item);
    }
}

$(() => {
    $("#sourceText").on("keyup", handleUntransliterate);
    $("#analyzeButton").on("click", handleAnalyze);
});
