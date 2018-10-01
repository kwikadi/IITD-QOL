
# Quality of Life improvements in IIT Delhi

Life in IIT Delhi for a student (in general, and CS student in particular) is filled with senseless oddities. This repo's eventual aim is to remove as many of those as possible with code, and make the code simple enough to be used by anyone. Currently, only userscripts are present in the repo, but as I get more time (and more annoyed with things), expect a wider number and variety of things to be added here.

## IITD Moodle Captcha

Moodle is a nice, useful software which helps students, TAs and teachers interface outside of class. Too bad IIT Delhi's instance of moodle (moodle.iitd.ac.in) is an outdated, horrible version, which has one quirk that absolutely INFURIATES me. The captcha there is plain text (which means it can easily be defeated by machines) and involves addition and subtraction of numbers sometimes, which means that not only is it easy for machines, its hard for actual people to solve. The userscript solves this captcha for you, so you never have to, again.


## Roundcube Login

[Roundcube](https://webmail.iitd.ac.in/roundcube/) is the preferred way for IIT Delhi's students to log into their iitd email accounts. The login page for some reason has the login button before the (required) Captcha field, which often causes people to miss it on the first try. This one liner just pushes the login button to appear after the captcha, which makes much more sense, in my opinion.

### Usage

1. Install an extension that can run Userscripts, depending on which browser you prefer:

    * Firefox - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=firefox) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) (recommended).
    * Chrome - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=chrome).
    * Safari - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=safari).
    * Opera - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=opera) or [Violent Monkey](https://addons.opera.com/en/extensions/details/violent-monkey/).

2. Once you have the extension installed, clicking on the direct links below to install the scripts as well:

| Userscript Name |   Direct Install Links   |
|:----------------|:------------------------:|
| Moodle Captcha  |  [install][moodle-raw]   |
| Roundcube Login | [install][roundcube-raw] |

3. All done! Enjoy your slightly better life now :)



[roundcube-raw]: https://raw.githubusercontent.com/kwikadi/IITD-QOL/master/Roundcube%20Login.user.js
[moodle-raw]: https://raw.githubusercontent.com/kwikadi/IITD-QOL/master/IITD%20Moodle%20Captcha.user.js
