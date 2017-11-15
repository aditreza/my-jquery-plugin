(function ($) {
	$.fn.emailValidator = function (email) {
		let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
		if(!pattern.test(email)){
			return false
		}else{
			return true
		}
	}
})(jQuery)
