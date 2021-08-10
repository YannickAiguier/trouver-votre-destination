function testParser() {

    const myHtml = `<label for="input-search2">Entrer votre destination :</label><input id="input-search2" type="text" placeholder="Lyon, Marseille, etc." class="text-center mt-2 h-14 rounded-3xl w-5/6 text-10 bg-gray-50 px-10 border-blue-500 border-2">`;

    const result = $.parseHTML(myHtml);
    console.log(result);
    $('#input').append(result);
}

function createInput() {
    let label = document.createElement("label");
    label.htmlFor = "input-search";
    label.innerHTML = "Entrer votre destination :";
    let input = document.createElement("input");
    input.id = "input-search";
    input.type = "text";
    input.placeholder = "Lyon, Marseille, etc.";
    $('#input').append(label);
    $('#input').append(input);
    $('#input-search').addClass("text-center mt-2 h-14 rounded-3xl w-5/6 text-10 bg-gray-50 px-10 border-blue-500 border-2");
}

export { createInput, testParser };