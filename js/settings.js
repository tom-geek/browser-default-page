fetch('https://github.com/tom-geek/browser-default-page/blob/main/js/settings.json').then(response => {
  return response.json();
}).then(data => {
  document.write(data);
}).catch(err => {
  console.log("error")
});
