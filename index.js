
document.querySelector('form').addEventListener('submit', event =>{
  event.preventDefault();
  const input = document.querySelector('#message').value;
  const encrypted = btoa(input)

  const out = document.querySelector('#copy')
  out.value = `${window.location}#${encrypted}`
  out.select();
  out.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy")

})