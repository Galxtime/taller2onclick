

var clickPicture = document.getElementById('pictureArtist')
var artistName = document.getElementById('name')
var artistAge = document.getElementById('age')
var artistCity = document.getElementById('city')
var artistJob = document.getElementById('job')


  pictureArtist.onclick = function() {
     name=  prompt('Cual es el nombre del Artista');
     artistName.innerText=(name);
     age=  prompt('Cual es la edad del Artista');
     artistAge.innerText=age;
     city=  prompt('De donde es el  Artista');
     artistCity.innerText=city;
     job=  prompt('Cual es la profesión  del Artista');
     artistJob.innerText=Job;
  }