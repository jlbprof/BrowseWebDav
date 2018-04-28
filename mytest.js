
function propfind_cb (rstatus, body, headers)
{
	var url_length = config_base_url.length;
	var names = body.getResponseNames ();
	var i;

	var html = '<ul>\n';

	console.log ("Responses");

	for (i = 0; i < names.length; ++i)
	{
		var response = body.getResponse (names [i]);
		var href = response.href;
		var href_length = href.length;
		var file = href.substr (url_length, href_length - url_length);

		// get last character
		var last_char = file.substr (file.length - 1, 1);

		var this_html = '<li>';
		this_html = this_html.concat (encodeURI (file));

		if (last_char === "/")
		{
			this_html = this_html.concat ('<button onclick="descend(' + '\'' + file + '\');">Descend</button>');
		}

 		this_html = this_html.concat ("</li>\n");
		html = html.concat (this_html);
	}

	html = html.concat ("</ul>\n");

	var output = document.getElementById("output_response");
	output.innerHTML = html;

	console.log ("propfind_cb: OUT");

	return 1;
}

function tryit (url, base_url, username, password, port, isHttps, dir) {
    console.log ("Step 001");

	current_url = base_url;

    var webdav_config = {
		'host': url + base_url,
		'username': username,
		'password': password,
    };

    console.log ("Step 002 :" + url + ":");

    var webdav = new nl.sara.webdav.Client (webdav_config, isHttps, port);

    console.log ("Step 003");

    webdav.propfind (dir, propfind_cb, 1);

    console.log ("Done");
}

function browseit () {
	var url = document.getElementById("url").value;
	var base_url = document.getElementById("base_url").value;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var port = document.getElementById("port").value;
	var https = document.getElementById("https").checked;
	var dir = document.getElementById("dir").value;

	console.log (url);
	console.log (base_url);
	console.log (username);
	console.log (password);
	console.log (port);
	console.log (https);
	console.log (dir);

	tryit (url, base_url, username, password, port, https, dir);

	return;
}

function initialize_it ()
{
	document.getElementById("url").value = config_url;
	document.getElementById("base_url").value = config_base_url;
	document.getElementById("username").value = config_username;
	document.getElementById("password").value = config_password;
	document.getElementById("port").value = config_port;
	document.getElementById("https").checked = config_https;

	return;
}

function descend (mydir)
{
	document.getElementById("dir").value = mydir;
	browseit ();
}

document.addEventListener('DOMContentLoaded', initialize_it, false);

