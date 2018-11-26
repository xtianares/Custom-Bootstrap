window.onload = function() {
	//FastClick.attach(document.body); // to remove delays on clicked links on touch ebabled devices
	// getPrice("dollars", "cents");
};
// to remove delays on clicked links on touch ebabled devices
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

// custom scripts to load
