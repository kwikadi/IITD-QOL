// ==UserScript==
// @name         Roundcube login sanity
// @namespace    iitd-roundcube
// @version      0.1
// @description  Push the login button after the captcha in the roundcube login
// @author       kwikadi
// @match        https://webmail.iitd.ac.in/roundcube/
// @grant        none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    $('.formbuttons').insertAfter('#captcha');
})();
