// jQuery selectors
function func1() {
    $("#id-site-welcome-image").fadeToggle();
    // $(element name).action()
    // document.getElementByTagName(element name)

    // $("div").css('background-color','orange');
    // $("#div1, #div3").css('font-style','italic');
    // $(".para").css('font-style','italic');
    // $("#div1, #div3").css('background-color', 'green');
    // $("#div1, li").css('background-color', 'purple');

    // $("div > p").fadeToggle();
    // Same as above:
    // $("div   p").fadeToggle();

    // Fade to the first paragraph
    // $("p:first").fadeToggle();
    // Fade to paragraphs in even places
    // $("p:even").fadeToggle();
    // Fade to paragraphs in odd places
    $("p:odd").fadeToggle();
}
