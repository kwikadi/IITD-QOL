
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

## Python3 Proxy Script for IITD logins

This is basically https://github.com/1upon0/iitd-proxy-login except ported to python3. Why do I need this at all, and why did I port this to python3? Well, Ubuntu now ships with python3 only, and if you login through the browser window, networking wont work on the terminal. So yeah, instead of figuring out how to install python2 on my system (which is a ticking time bomb anyway), I figured it was easier to port the script to python3.

### Usage

`python3 login-terminal.py username password proxy_category`

where `username` and `password` are your kerberos creds, and `proxy_category` is probably one of 'btech','mtech', 'dual', or 'phd' for you. (See entire list on line 17 of login-terminal.py)

`Ctrl-C` to logout.