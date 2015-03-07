/**
 * CookieUtil object, as shown in Professional Javascript for Web Developers, Third Edition by Nicholas C. Zakas
 * Copyright 2012 by John Wiley & Sons, Inc., Indianapolis, Indiana
 * My own code begins on line 53 below. (See the next comment after the CookieUtil object)
**/

var CookieUtil = {

	get: function (name){
		var cookieName = encodeURIComponent(name) + "=",
			cookieStart = document.cookie.indexOf(cookieName),
			cookieValue = null,
			cookieEnd;

		if (cookieStart > -1){
			cookieEnd = document.cookie.indexOf(";", cookieStart);
			if (cookieEnd === -1){
				cookieEnd = document.cookie.length;
			}
			cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
		}

		return cookieValue;
	},

	set: function (name, value, expires, path, domain, secure) {
		var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

		if (expires instanceof Date) {
			cookieText += "; expires=" + expires.toGMTString();
		}

		if (path) {
			cookieText += "; path=" + path;
		}

		if (domain) {
			cookieText += "; domain=" + domain;
		}

		if (secure) {
			cookieText += "; secure";
		}

		document.cookie = cookieText;
	},

	unset: function (name, path, domain, secure){
		this.set(name, "", new Date(0), path, domain, secure);
	}
};			//End CookieUtil

var username;		//My own code starts on this line and ends on the last line below

$(function() {

	$('#greeting1, #changeUser').hide();

	if (CookieUtil.get('name')) {
		username = CookieUtil.get('name');
		$('#greeting1').show().html("Welcome " + username);
		$('#changeUser').show();
		$('#submitNameWrap').hide();
	}

	$('#submitName').on('click', function () {
		username = $('input[name="login"]').val() || 'Anonymous User';
		CookieUtil.set('name', username);
		localStorage.setItem('user', username);
		$('#submitNameWrap').hide();
		$('#greeting1').show().html("Welcome " + username);
		$('#changeUser').show();

	});

	$('#changeUser').on('click', function() {
		username = null;
		CookieUtil.unset('name', null);
		location.reload();
	});

});
