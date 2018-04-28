
function propfind_cb (rstatus, body, headers)
{
	console.log ("propfind_cb: 001");
	console.log (rstatus);
	console.log ("propfind_cb: 002");
	console.log (body);
	console.log ("propfind_cb: 003");
	console.log (headers);

	console.log ("propfind_cb: OUT");
	return 1;
}

function tryit () {
    console.log ("Step 001");

    var webdav_config = {
	'host': config_url,
	'username': config_username,
    'password': config_password,
    };

    console.log ("Step 002");

    var webdav = new nl.sara.webdav.Client (webdav_config, 1, 8008);

    console.log ("Step 003");

    webdav.propfind ('/Pictures', propfind_cb, 1);

    console.log ("Done");
}

document.addEventListener('DOMContentLoaded', tryit, false);

