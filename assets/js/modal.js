document.addEventListener('DOMContentLoaded', function () {

	document.querySelectorAll('[data-modal-open]').forEach(function (trigger) {
		trigger.addEventListener('click', function (e) {
			e.preventDefault();
			var modal = document.getElementById(trigger.getAttribute('data-modal-open'));
			if (modal) {
				modal.classList.add('is-active');
				document.body.classList.add('modal-open');
			}
		});
	});

	document.querySelectorAll('[data-modal-close]').forEach(function (el) {
		el.addEventListener('click', function () {
			var modal = el.closest('.modal');
			if (modal) {
				modal.classList.remove('is-active');
				document.body.classList.remove('modal-open');
			}
		});
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			document.querySelectorAll('.modal.is-active').forEach(function (modal) {
				modal.classList.remove('is-active');
			});
			document.body.classList.remove('modal-open');
		}
	});

});
