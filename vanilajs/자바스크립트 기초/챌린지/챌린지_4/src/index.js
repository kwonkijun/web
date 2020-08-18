const select = document.querySelector("js-select"),
 option = select.querySelector("option"),
 country = option.querySelector("value");
const COUNTRY_LS = "currentCountry";
const saveCountry(value) {
    localStorage.setItem(COUNTRY_LS, value);
}
function loadCountry() {
  const currentCountry = localStorage.getItem(COUNTRY_LS);
  const currentValue = option.value;
  if (currentCountry === option[0]) {
    saveCountry(currentValue);
  } else {
    select.innerHTML(`${currentCountry}`);
    saveCountry(currentValue);
  }
}
function init() {
  loadCountry();
}
init();