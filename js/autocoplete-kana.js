// ひとまずひらがなをかたかなに変換できるものを作ってみる

window.addEventListener("DOMContentLoaded", function () {
    const originalInput = document.getElementById("original");
    const kanaInput = document.getElementById("kana");

    /**
     * id=originalの値が変更されたときに発火
     * @param {any} "input"
     * @param {any}
     * @returns {any}
     */
    originalInput.addEventListener("input", function () {
        const convertedValue = convertToKatakana(originalInput.value);
        kanaInput.value = convertedValue;
    });

    /**
     * 入力内容をカナに変換する
     * @param {any} text
     * @returns {any}
     */
    function convertToKatakana(text) {
        return text.replace(/[あ-ん]/g, function (match) {
            const code = match.charCodeAt(0) + 96;
            return String.fromCharCode(code);
        });
    }
});
