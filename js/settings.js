fetch('./settings.json').then(response => {
  return response.json();
}).then(data => {
  document.write(data);
}).catch(err => {
  console.log("error")
});