// <⚠️ DONT DELETE THIS ⚠️>

// <⚠️ /DONT DELETE THIS ⚠️>

function selectChangeHandler(event){
	localStorage.setItem('country', event.target.value);
}
function init(){
	const select = document.querySelector('select');
	select.addEventListener('change', selectChangeHandler);
	if(localStorage.getItem('country') != null){
		document.querySelector(`select > option[value = ${localStorage.getItem('country')}]`).setAttribute('selected', null);
	}
}
init();