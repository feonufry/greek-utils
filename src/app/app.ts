import { untransliterate } from "../core/transliteration";
import { tokenize } from "../core/scanning";
import { buildGrammarAnnotationsHtml, buildSearchLinksHtml, buildVocabularyHtml } from "./annotations";
import { annotate } from "../core/grammar/engine";

function handleUntransliterate() {
    const source = $("#sourceText").val() as string;
    const result = untransliterate(source);
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
    <h6 class="mb-1">${token.greek} <small class="text-muted">/ ${token.transliterated}</small></h6>
    <small>${buildSearchLinksHtml(token.greek)}</small>
</div>
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
