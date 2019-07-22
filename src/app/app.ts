import { untransliterate } from "./untransliterate";

function handleUntransliterate() {
    const source = $("#sourceText").val() as string;
    const result = untransliterate(source);
    $("#resultText").val(result);
}

$(() => {
    $("#sourceText").on("keyup", handleUntransliterate);
});
