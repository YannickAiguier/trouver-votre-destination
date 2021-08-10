const myHtml = `<section class="flex flex-wrap justify-around"><div class="w-5/12 flex flex-col items-center m-5"><h3 id="titleWeather" class="text-xl font-medium">Quel météo?</h3><span id="descriptionWeather" class="italic"></span><ul><li>Il fait <span id="temperature">surement très chaud!</span></li><li>La température ressentie est <span id="temperatureFeel">encore plus chaude!</span></li><li>L'humidité est de <span id="humidity">100% pour le pastis!</span></li><li>La pression est de <span id="pressure">0 au niveau des tongs.</span></li><li>La température maximum sera de <span id="tempMax">beaucoup.</span></li><li>La température minimum sera de <span id="tempMin">quelques degrés de moins.</span></li></ul></div></section>`;

function createWeather() {
    const result = $.parseHTML(myHtml);
    $('main').append(result);
}

export { createWeather };