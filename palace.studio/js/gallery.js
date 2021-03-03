(function(d, w) {
	// remember, arrows don't trigger keypress :(
	d.addEventListener('keydown', lightBoxCheck, false);
	function lightBoxCheck(e) {
		var hash = w.location.hash ? w.location.hash.substr(1) : '';
		if (!hash) return;
		var
			target = d.getElementById(hash),
			method;
		if (
			target &&
			target.parentNode.className == 'gallery'
		) {
			switch(e.keyCode) {
				case 27:
					method = '.close';
					break;
				case 37:
					method = '.prev';
					break;
				case 39:
					method = '.next';
					break;
				default:
					// short circuit out
					return;
			}
			if (target = target.querySelector(method)) {
				target.click();
				e.preventDefault();
			}
		}
	}
})(document, window);