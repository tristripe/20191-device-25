var contactsLink = document.querySelector(".contacts-button");
var contactsPopup = document.querySelector(".contacts-popup-wrapper");
var contactsClose = document.querySelector(".contacts-popup-close");
var contactsName = document.querySelector(".contacts-popup-name");
var contactsForm = document.querySelector(".contacts-popup-form");
var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".map-popup-wrapper");
var mapClose = document.querySelector(".map-popup-close");


contactsLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	contactsPopup.classList.add("popup-show");
	contactsName.focus();
});

contactsClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	contactsPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (contactsPopup.classList.contains("popup-show")) {
			contactsPopup.classList.remove("popup-show");
		}
	}
});

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("popup-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (mapPopup.classList.contains("popup-show")) {
			mapPopup.classList.remove("popup-show");
		}
	}
});