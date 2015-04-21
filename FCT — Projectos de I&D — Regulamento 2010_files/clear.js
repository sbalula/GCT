/* 
 * Substitui cleartext.js; depende de jquery
 */


$(document).ready(function () {
    $('.clearme').one("focus", function() {
        $(this).val("");
    });

});
