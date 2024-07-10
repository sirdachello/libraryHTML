"use strict"


// navigation bar functionality 

const navList = document.querySelector('.header-nav-list');
const prevButton = document.getElementById('nav-prev');
const nextButton = document.getElementById('nav-next');

prevButton.addEventListener('click', () => {
  navList.scrollTo({
    left: navList.scrollLeft - 350,
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  navList.scrollTo({
    left: navList.scrollLeft + 350,
    behavior: 'smooth'
  });
});

let isDown = false;
let startX;
let scrollLeft;

navList.addEventListener('mousedown', (event) => {
    isDown = true;
    startX = event.clientX;
    scrollLeft = navList.scrollLeft;
});

document.addEventListener('mouseup', () => {
    isDown = false;
});

navList.addEventListener('mouseleave', () => {
    isDown = false;
});

navList.addEventListener('mousemove', (event) => {
    if (!isDown) return;
    const x = event.clientX;
    const deltaX = x - startX;
    const newScrollLeft = scrollLeft - deltaX;
    navList.scrollLeft = newScrollLeft;
});




// change active state for navigation

let navLinks = document.querySelectorAll('.header-nav-item');

for (let link of navLinks) {
    link.addEventListener('click', () => {
        for (let link of navLinks) {
            link.classList.remove('active');
        }
        link.classList.add('active');
    });
}



//searching

let inputSearch = document.querySelector('.header-search-input');
let buttonSearch = document.querySelector('.header-search-button');
let output = document.querySelector(`.main-search-results`);

inputSearch.addEventListener(`input`, () => {
    for (let link of navLinks) {
        link.classList.remove('active');
    }
    let query = (inputSearch.value).toLowerCase();
    output.textContent = tagsObject[query]? tagsObject[query] : `Not found, please check the spelling and try again.`;
})

buttonSearch.addEventListener('click', () => {
    let query = (inputSearch.value).toLowerCase();
    output.textContent = tagsObject[query];
})


const basicLink = document.getElementById(`basic`);
const formattingLink = document.getElementById(`formatting`);
const formsLink = document.getElementById(`forms`);
const tablesLink = document.getElementById(`tables`);
const mediaLink = document.getElementById(`media`);
const linksLink = document.getElementById(`links`);
const semanticsLink = document.getElementById(`semantics`);
const miscellaneousLink = document.getElementById(`meta`);
const programmingLink = document.getElementById(`programming`); 

basicLink.addEventListener('click', () => {
    output.innerHTML = ``;
    for (let key in tagsObjectSpecific.basicHTML) {
        let p = document.createElement(`p`);
        p.textContent = `${tagsObjectSpecific.basicHTML[key]}.`
        output.appendChild(p);
    }
});

formattingLink.addEventListener('click', () => {
    output.innerHTML = ``;
    for (let key in tagsObjectSpecific.formatting) {
        let p = document.createElement(`p`);
        p.textContent = `${tagsObjectSpecific.formatting[key]}.`
        output.appendChild(p);
    }
});
formsLink.addEventListener('click', () => {
    output.innerHTML = ``;
    for (let key in tagsObjectSpecific.Forms) {
        let p = document.createElement(`p`);
        p.textContent = `${tagsObjectSpecific.Forms[key]}.`
        output.appendChild(p);
    }
});
tablesLink.addEventListener('click', () => {
    output.innerHTML = ``;
    for (let key in tagsObjectSpecific.Tables) {
        let p = document.createElement(`p`);
        p.textContent = `${tagsObjectSpecific.Tables[key]}.`
        output.appendChild(p);
    }
});
mediaLink.addEventListener('click', () => {
    output.innerHTML = ``;
    for (let key in tagsObjectSpecific.Media) {
        let p = document.createElement(`p`);
        p.textContent = `${tagsObjectSpecific.Media[key]}.`
        output.appendChild(p);
    }
});
linksLink.addEventListener('click', () => {
    output.innerHTML = ``;
    for (let key in tagsObjectSpecific.Links) {
        let p = document.createElement(`p`);
        p.textContent = `${tagsObjectSpecific.Links[key]}.`
        output.appendChild(p);
    }
});
semanticsLink.addEventListener('click', () => {
    output.innerHTML = ``;
    for (let key in tagsObjectSpecific.semantic) {
        let p = document.createElement(`p`);
        p.textContent = `${tagsObjectSpecific.semantic[key]}.`
        output.appendChild(p);
    }
});

programmingLink.addEventListener('click', () => {
    output.innerHTML = ``;
    for (let key in tagsObjectSpecific.Programming) {
        let p = document.createElement(`p`);
        p.textContent = `${tagsObjectSpecific.Programming[key]}.`
        output.appendChild(p);
    }
});

miscellaneousLink.addEventListener('click', () => {
    output.innerHTML = ``;
    for (let key in tagsObjectSpecific.Miscellaneous) {
        let p = document.createElement(`p`);
        p.textContent = `${tagsObjectSpecific.Miscellaneous[key]}.`
        output.appendChild(p);
    }
});


let tagsObjectSpecific = {
    "basicHTML": {
        "DOCTYPE": `Tag <!DOCTYPE> defines the document type`,
        "html": `Tag <html> defines an HTML document`,
        "head": `Tag <head> contains metadata/information for the document`,
        "title": `Tag <title> defines a title for the document`,
        "body": `Tag <body> defines the document's body`,
        "h1": `Tags <h1> to <h6> define HTML headings`,
        "h2": `Tags <h1> to <h6> define HTML headings`,
        "h3": `Tags <h1> to <h6> define HTML headings`,
        "h4": `Tags <h1> to <h6> define HTML headings`,
        "h5": `Tags <h1> to <h6> define HTML headings`,
        "h6": `Tags <h1> to <h6> define HTML headings`,
        "p": `Tag <p> defines a paragraph`,
        "br": `Tag <br> inserts a single line break`,
        "hr": `Tag <hr> defines a thematic change in the content`,
        "comment": `Tag <!--...--> defines a comment`
    },
    "formatting": {
        "acronym": `Tag <acronym> Not supported in HTML5. Use <abbr> instead. Defines an acronym`,
        "abbr": `Tag <abbr> defines an abbreviation or an acronym`,
        "address": `Tag <address> defines contact information for the author/owner of a document/article`,
        "b": `Tag <b> defines bold text`,
        "bdi": `Tag <bdi> isolates a part of text that might be formatted in a different direction from other text outside it`,
        "bdo": `Tag <bdo> overrides the current text direction`,
        "big": `Tag <big> is not supported in HTML5. Use CSS instead. Defines big text`,
        "blockquote": `Tag <blockquote> defines a section that is quoted from another source`,
        "center": `Tag <center> is not supported in HTML5. Use CSS instead. Defines centered text`,
        "cite": `Tag <cite> defines the title of a work`,
        "code": `Tag <code> defines a piece of computer code`,
        "del": `Tag <del> defines text that has been deleted from a document`,
        "dfn": `Tag <dfn> specifies a term that is going to be defined within the content`,
        "em": `Tag <em> defines emphasized text`,
        "font": `Tag <font> is not supported in HTML5. Use CSS instead. Defines font, color, and size for text`,
        "i": `Tag <i> defines a part of text in an alternate voice or mood`,
        "ins": `Tag <ins> defines a text that has been inserted into a document`,
        "kbd": `Tag <kbd> defines keyboard input`,
        "mark": `Tag <mark> defines marked/highlighted text`,
        "meter": `Tag <meter> defines a scalar measurement within a known range (a gauge)`,
        "pre": `Tag <pre> defines preformatted text`,
        "progress": `Tag <progress> represents the progress of a task`,
        "q": `Tag <q> defines a short quotation`,
        "rp": `Tag <rp> defines what to show in browsers that do not support ruby annotations`,
        "rt": `Tag <rt> defines an explanation/pronunciation of characters (for East Asian typography)`,
        "ruby": `Tag <ruby> defines a ruby annotation (for East Asian typography)`,
        "s": `Tag <s> defines text that is no longer correct`,
        "samp": `Tag <samp> defines sample output from a computer program`,
        "small": `Tag <small> defines smaller text`,
        "strike": `Tag <strike> is not supported in HTML5. Use <del> or <s> instead. Defines strikethrough text`,
        "strong": `Tag <strong> defines important text`,
        "sub": `Tag <sub> defines subscripted text`,
        "sup": `Tag <sup> defines superscripted text`,
        "template": `Tag <template> defines a container for content that should be hidden when the page loads`,
        "time": `Tag <time> defines a specific time (or datetime)`,
        "tt": `Tag <tt> is not supported in HTML5. Use CSS instead. Defines teletype text`,
        "u": `Tag <u> defines some text that is unarticulated and styled differently from normal text`,
        "var": `Tag <var> defines a variable`,
        "wbr": `Tag <wbr> defines a possible line-break`
    },
    "semantic": {
        "article": `Tag <article> defines independent, self-contained content`,
        "aside": `Tag <aside> defines content aside from the content it is placed in`,
        "details": `Tag <details> defines additional details that the user can view or hide`,
        "figcaption": `Tag <figcaption> defines a caption for a <figure> element`,
        "figure": `Tag <figure> specifies self-contained content`,
        "footer": `Tag <footer> defines a footer for a document or section`,
        "header": `Tag <header> defines a header for a document or section`,
        "main": `Tag <main> specifies the main content of a document`,
        "mark": `Tag <mark> defines marked/highlighted text`,
        "nav": `Tag <nav> defines navigation links`,
        "section": `Tag <section> defines a section in a document`,
        "summary": `Tag <summary> defines a visible heading for a <details> element`,
        "time": `Tag <time> defines a specific time (or datetime)`
    },
    "Links": {
        "a": `Tag <a> defines a hyperlink`,
        "link": `Tag <link> defines the relationship between a document and an external resource (most used to link to stylesheets)`,
        "nav": `Tag <nav> defines navigation links`
    },
    "Tables": {
        "table": `Tag <table> defines a table`,
        "caption": `Tag <caption> defines a table caption`,
        "th": `Tag <th> defines a header cell in a table`,
        "tr": `Tag <tr> defines a row in a table`,
        "td": `Tag <td> defines a cell in a table`,
        "thead": `Tag <thead> groups the header content in a table`,
        "tbody": `Tag <tbody> groups the body content in a table`,
        "tfoot": `Tag <tfoot> groups the footer content in a table`,
        "col": `Tag <col> specifies column properties for each column within a <colgroup> element`,
        "colgroup": `Tag <colgroup> specifies a group of one or more columns in a table for formatting`
    },
    "Forms": {
        "form": `Tag <form> defines an HTML form for user input`,
        "input": `Tag <input> defines an input control`,
        "textarea": `Tag <textarea> defines a multi-line input control (text area)`,
        "button": `Tag <button> defines a clickable button`,
        "select": `Tag <select> defines a drop-down list`,
        "optgroup": `Tag <optgroup> defines a group of related options in a drop-down list`,
        "option": `Tag <option> defines an option in a drop-down list`,
        "label": `Tag <label> defines a label for an <input> element`,
        "fieldset": `Tag <fieldset> groups related elements in a form`,
        "legend": `Tag <legend> defines a caption for a <fieldset> element`,
        "datalist": `Tag <datalist> specifies a list of pre-defined options for an <input> element`,
        "output": `Tag <output> defines the result of a calculation`
    },
    "Media": {
        "audio": `Tag <audio> defines sound content`,
        "video": `Tag <video> defines a video or movie`,
        "source": `Tag <source> defines multiple media resources for media elements (<video> and <audio>)`,
        "img": `Tag <img> defines an image`,
        "iframe": `Tag <iframe> defines an inline frame`,
        "embed": `Tag <embed> defines a container for an external application or interactive content (a plug-in)`,
        "object": `Tag <object> defines an embedded object`,
        "param": `Tag <param> defines parameters for an <object> element`,
        "picture": `Tag <picture> defines a container for multiple image resources`,
        "track": `Tag <track> defines text tracks for <video> and <audio> elements`
    },
    "Programming": {
        "script": `Tag <script> defines a client-side script`,
        "noscript": `Tag <noscript> defines an alternate content for users that do not support client-side scripts`,
        "template": `Tag <template> defines a container for content that should be hidden when the page loads`,
        "canvas": `Tag <canvas> is used to draw graphics via scripting (usually JavaScript)`
    },
    "Miscellaneous": {
        "area": `Tag <area> defines an area inside an image map`,
        "base": `Tag <base> specifies the base URL/target for all relative URLs in a document`,
        "map": `Tag <map> defines an image map`,
        "meta": `Tag <meta> defines metadata about an HTML document`,
        "style": `Tag <style> defines style information for a document`,
        "title": `Tag <title> defines a title for the document`
    }
};


let tagsObject = {
    "doctype": `Tag <!DOCTYPE> defines the document type`,
    "html": `Tag <html> defines an HTML document`,
    "head": `Tag <head> contains metadata/information for the document`,
    "title": `Tag <title> defines a title for the document`,
    "body": `Tag <body> defines the document's body`,
    "h1": `Tags <h1> to <h6> define HTML headings`,
    "h2": `Tags <h1> to <h6> define HTML headings`,
    "h3": `Tags <h1> to <h6> define HTML headings`,
    "h4": `Tags <h1> to <h6> define HTML headings`,
    "h5": `Tags <h1> to <h6> define HTML headings`,
    "h6": `Tags <h1> to <h6> define HTML headings`,
    "p": `Tag <p> defines a paragraph`,
    "br": `Tag <br> inserts a single line break`,
    "hr": `Tag <hr> defines a thematic change in the content`,
    "comment": `Tag <!--...--> defines a comment`,
    "acronym": `Not supported in HTML5. Use <abbr> instead. Defines an acronym`,
    "abbr": `Tag <abbr> defines an abbreviation or an acronym`,
    "address": `Tag <address> defines contact information for the author/owner of a document/article`,
    "b": `Tag <b> defines bold text`,
    "bdi": `Tag <bdi> isolates a part of text that might be formatted in a different direction from other text outside it`,
    "bdo": `Tag <bdo> overrides the current text direction`,
    "big": `Not supported in HTML5. Use CSS instead. Defines big text`,
    "blockquote": `Tag <blockquote> defines a section that is quoted from another source`,
    "center": `Not supported in HTML5. Use CSS instead. Defines centered text`,
    "cite": `Tag <cite> defines the title of a work`,
    "code": `Tag <code> defines a piece of computer code`,
    "del": `Tag <del> defines text that has been deleted from a document`,
    "dfn": `Tag <dfn> specifies a term that is going to be defined within the content`,
    "em": `Tag <em> defines emphasized text`,
    "font": `Not supported in HTML5. Use CSS instead. Defines font, color, and size for text`,
    "i": `Tag <i> defines a part of text in an alternate voice or mood`,
    "ins": `Tag <ins> defines a text that has been inserted into a document`,
    "kbd": `Tag <kbd> defines keyboard input`,
    "mark": `Tag <mark> defines marked/highlighted text`,
    "meter": `Tag <meter> defines a scalar measurement within a known range (a gauge)`,
    "pre": `Tag <pre> defines preformatted text`,
    "progress": `Tag <progress> represents the progress of a task`,
    "q": `Tag <q> defines a short quotation`,
    "rp": `Tag <rp> defines what to show in browsers that do not support ruby annotations`,
    "rt": `Tag <rt> defines an explanation/pronunciation of characters (for East Asian typography)`,
    "ruby": `Tag <ruby> defines a ruby annotation (for East Asian typography)`,
    "s": `Tag <s> defines text that is no longer correct`,
    "samp": `Tag <samp> defines sample output from a computer program`,
    "small": `Tag <small> defines smaller text`,
    "strike": `Not supported in HTML5. Use <del> or <s> instead. Defines strikethrough text`,
    "strong": `Tag <strong> defines important text`,
    "sub": `Tag <sub> defines subscripted text`,
    "sup": `Tag <sup> defines superscripted text`,
    "template": `Tag <template> defines a container for content that should be hidden when the page loads`,
    "time": `Tag <time> defines a specific time (or datetime)`,
    "tt": `Not supported in HTML5. Use CSS instead. Defines teletype text`,
    "u": `Tag <u> defines some text that is unarticulated and styled differently from normal text`,
    "var": `Tag <var> defines a variable`,
    "wbr": `Tag <wbr> defines a possible line-break`,
    "article": `Tag <article> defines independent, self-contained content`,
    "aside": `Tag <aside> defines content aside from the content it is placed in`,
    "details": `Tag <details> defines additional details that the user can view or hide`,
    "figcaption": `Tag <figcaption> defines a caption for a <figure> element`,
    "figure": `Tag <figure> specifies self-contained content`,
    "footer": `Tag <footer> defines a footer for a document or section`,
    "header": `Tag <header> defines a header for a document or section`,
    "main": `Tag <main> specifies the main content of a document`,
    "nav": `Tag <nav> defines navigation links`,
    "section": `Tag <section> defines a section in a document`,
    "summary": `Tag <summary> defines a visible heading for a <details> element`,
    "a": `Tag <a> defines a hyperlink`,
    "link": `Tag <link> defines the relationship between a document and an external resource (most used to link to stylesheets)`,
    "table": `Tag <table> defines a table`,
    "caption": `Tag <caption> defines a table caption`,
    "th": `Tag <th> defines a header cell in a table`,
    "tr": `Tag <tr> defines a row in a table`,
    "td": `Tag <td> defines a cell in a table`,
    "thead": `Tag <thead> groups the header content in a table`,
    "tbody": `Tag <tbody> groups the body content in a table`,
    "tfoot": `Tag <tfoot> groups the footer content in a table`,
    "col": `Tag <col> specifies column properties for each column within a <colgroup> element`,
    "colgroup": `Tag <colgroup> specifies a group of one or more columns in a table for formatting`,
    "form": `Tag <form> defines an HTML form for user input`,
    "input": `Tag <input> defines an input control`,
    "textarea": `Tag <textarea> defines a multi-line input control (text area)`,
    "button": `Tag <button> defines a clickable button`,
    "select": `Tag <select> defines a drop-down list`,
    "optgroup": `Tag <optgroup> defines a group of related options in a drop-down list`,
    "option": `Tag <option> defines an option in a drop-down list`,
    "label": `Tag <label> defines a label for an <input> element`,
    "fieldset": `Tag <fieldset> groups related elements in a form`,
    "legend": `Tag <legend> defines a caption for a <fieldset> element`,
    "datalist": `Tag <datalist> specifies a list of pre-defined options for an <input> element`,
    "output": `Tag <output> defines the result of a calculation`,
    "audio": `Tag <audio> defines sound content`,
    "video": `Tag <video> defines a video or movie`,
    "source": `Tag <source> defines multiple media resources for media elements (<video> and <audio>)`,
    "img": `Tag <img> defines an image`,
    "iframe": `Tag <iframe> defines an inline frame`,
    "embed": `Tag <embed> defines a container for an external application or interactive content (a plug-in)`,
    "object": `Tag <object> defines an embedded object`,
    "param": `Tag <param> defines parameters for an <object> element`,
    "picture": `Tag <picture> defines a container for multiple image resources`,
    "track": `Tag <track> defines text tracks for <video> and <audio> elements`,
    "script": `Tag <script> defines a client-side script`,
    "noscript": `Tag <noscript> defines an alternate content for users that do not support client-side scripts`,
    "canvas": `Tag <canvas> is used to draw graphics via scripting (usually JavaScript)`,
    "area": `Tag <area> defines an area inside an image map`,
    "base": `Tag <base> specifies the base URL/target for all relative URLs in a document`,
    "map": `Tag <map> defines an image map`,
    "meta": `Tag <meta> defines metadata about an HTML document`,
    "style": `Tag <style> defines style information for a document`
};
