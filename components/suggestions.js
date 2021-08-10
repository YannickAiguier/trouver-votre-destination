const myHtml = `<section id="suggestions" class="flex flex-row h-16 items-center justify-center mb-5"></section>`;

function createSuggestions() {
    const result = $.parseHTML(myHtml);
    $('main').append(result);
}

export { createSuggestions };