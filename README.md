Browse WebDav
============

A simple JS app to browse the contents of a WebDav server.

config.js - example-config.js
------------

This first iteration is designed to browse a Nextcloud WebDav point.   I
included an example-config.js that you should edit and name config.js.
This will allow the code to have the url and credentials.

In the long run we can have an html form at the top containing the
information, but this is just to get it to work right now.

Webdavlib.js and unminified
------------

Based on github project sara-nl a mature webdav client.

[Sara-NL](https://github.com/sara-nl/js-webdav-client)

I have included both the minified and unminified version for debug and ease of
use, if there is a better way to do this please tell me how.

Deploy this on the same domain as your WebDav point
------------

Chrome will refuse to honor your requests otherwise.
On Windows you could do: 

"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --user-data-dir="G:/Temp/session" --disable-web-security

