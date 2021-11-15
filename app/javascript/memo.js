function post (){
  const submit = document.getElementById('submit')
  submit.addEventListener('click', (e) => {
  e.preventDefault();
  const form = document.getElementById('form');
  const formData = new FormData(form);
  const HXR = new XMLHttpRequest();
  HXR.open("POST", "/posts", true);
  HXR.responseType = "json";
  HXR.send(formData);
  });
};

window.addEventListener('load', post);