const {hash} = window.location;

const message = atob(hash.replace('#',''));
console.log(message);

if (message){
  document.querySelector('#message-show').classList.remove('hide');
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('h1').innerHTML = message;

}

document.querySelector('form').addEventListener('submit', event =>{
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide')
  document.querySelector('#link-form').classList.remove('hide')

  const input = document.querySelector('#message').value;
  const encrypted = btoa(input)


  const out = document.querySelector('#copy')
  out.value = `${window.location}#${encrypted}`
  out.select();
  out.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy")

})