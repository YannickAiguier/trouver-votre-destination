const myHtml = `<section><div id="mapid"></div></section>`;

function createMap() {
    const result = $.parseHTML(myHtml);
    $('main').append(result);
}

export { createMap };