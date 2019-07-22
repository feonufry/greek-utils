import { untransliterate } from "./untransliterate";
import { tokenize } from "./tokenize";

function handleUntransliterate() {
    const source = $("#sourceText").val() as string;
    const result = untransliterate(source);
    $("#resultText").val(result);
}

function handleAnalyze() {
    const source = $("#sourceText").val() as string;
    let content = "";
    for (const token of tokenize(source)) {
        content += `<li class="list-group-item">
<div class="d-flex w-100 justify-content-between">
      <h6 class="mb-1">${token.greek} <small class="text-muted">/ ${token.translit}</small></h6>
      <a class="btn btn-light btn-small app-search" href="search.html?q=${token.greek}" target="_blank">Search</a>
    </div>
</li>`;
    }
    $("#tokens").html(content);
}

$(() => {
    $("#sourceText").on("keyup", handleUntransliterate);
    $("#analyzeButton").on("click", handleAnalyze);
});
