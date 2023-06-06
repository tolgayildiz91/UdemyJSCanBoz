const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  //  console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    console.log('Başarılı cevap alamadık!');
  }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();
