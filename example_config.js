/*
 * Example: for Nextcloud
 * URL mynextcloud.tld:8008/nextcloud/remote.php/dav/files/julian
 * Username: julian
 * Password: password
 * Port: 8008
 * HTTPS: yes
 */

var config_username = 'XXXXXX';
var config_password = 'YYYYYY';
var config_port = 8008;

// Note: config_base_url is crucial

var config_url = 'mynextcloud.tld:' + config_port;
var config_base_url = '/nextcloud/remote.php/dav/files/' + conifg_username;
var config_https = true;

