
// redirect para HTTPS
var url = window.location.hostname;
if (url.indexOf('localhost') === -1) {
    if (window.location.protocol != "https:")
    {
        window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
    }
}



