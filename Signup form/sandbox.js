const form = document.querySelector('.sinup-form');
//const username  = document.querySelector('#username');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form)
  console.log(formData.entries())
});