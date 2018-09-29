// ==UserScript==
// @name         IITD Moodle Captcha
// @namespace    iitd-moodle
// @version      0.1
// @description  Automatically handle moodle's retarded captcha
// @author       kwikadi
// @match        https://moodle.iitd.ac.in/login/index.php
// @grant        none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var numberPattern = /\d+/g;
    var a = $('.loginsub').text().split(/\n/)[20];
    var b = a.match(numberPattern);
    var result;
    if (a.includes("add")) {
        result = parseInt(b[0]) + parseInt(b[1]);
    } else if (a.includes("subtract")) {
        result = parseInt(b[0]) - parseInt(b[1]);
    } else if (a.includes("first")) {
        result = b[0];
    } else if (a.includes("second")) {
        result = b[1];
    }
    $('#valuepkg3').val(result);
})();