const myHtml = `<label for="input-search">Entrer votre destination :</label><input id="input-search" type="text" placeholder="Lyon, Marseille, etc." class="text-center mt-2 h-14 rounded-3xl w-5/6 text-10 bg-gray-50 px-10 border-blue-500 border-2">`;

function createInput() {
    const result = $.parseHTML(myHtml);
    $('#input').append(result);
}

export { createInput };