# Quality of Life improvements in IIT Delhi

Life in IIT Delhi for a student (in general, and CS student in particular) is filled with senseless oddities. This repo's eventual aim is to remove as many of those as possible with code, and make the code simple enough to be used by anyone. Currently, only userscripts are present in the repo, but as I get more time (and more annoyed with things), expect a wider number and variety of things to be added here.

## IITD Moodle Captcha

Moodle is a nice, useful software which helps students, TAs and teachers interface outside of class. Too bad IIT Delhi's instance of moodle (moodle.iitd.ac.in) is an outdated, horrible version, which has one quirk that absolutely INFURIATES me. The captcha there is plain text (which means it can easily be defeated by machines) and involves addition and subtraction of numbers sometimes, which means that not only is it easy for machines, its hard for actual people to solve. The userscript solves this captcha for you, so you never have to, again.


## Roundcube Login

[Roundcube](https://webmail.iitd.ac.in/roundcube/) is the preferred way for IIT Delhi's students to log into their iitd email accounts. The login page for some reason has the login button before the (required) Captcha field, which often causes people to miss it on the first try. This one liner just pushes the login button to appear after the captcha, which makes much more sense, in my opinion.

### Usage

1. Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/), or [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) (depending on which browser you prefer).

2. Create a new script, and copy paste the contents of the userscript you want into it.

3. All done! Enjoy your slightly better life now :)
