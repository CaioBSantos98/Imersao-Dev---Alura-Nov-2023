var listaFilmes = [];

function showListMovies() {
  var nome = document.getElementById('listaFilmes')
  nome.innerHTML = ''
  for (var i=0; i < listaFilmes.length; i++) {
    nome.innerHTML += '<h3> '+listaFilmes[i].name +'</h3><a = href= "'+ listaFilmes[i].trailer+'" target="_blank"><img src = ' + listaFilmes[i].image + '></a>' 
  }
}

function verifyMovieInList (movie) {
  for (var i=0; i < listaFilmes.length; i++) {
    if (listaFilmes[i].name == movie) {
      return i
    }
  }
  return 'notInList'
}

function addMovie() {
  var movieName = document.getElementById('nameMovie').value;
  var movieImage = document.getElementById('imageMovie').value;
  var movieTrailer = document.getElementById('trailerMovie').value;
  
  var movie = {
    name: movieName,
    image: movieImage,
    trailer: movieTrailer
  };
  
  listaFilmes.push(movie);
  
  showListMovies();
  
  document.getElementById('nameMovie').value = '';
  document.getElementById('imageMovie').value = '';
  document.getElementById('trailerMovie').value = '';
}

function removeMovie () {
  var movieName = document.getElementById('nameMovie').value;
  var iMovie = verifyMovieInList(movieName)
  
  if( iMovie != 'notInList'){
    alert ('Esse filme existe no catálogo, será removido.')
    listaFilmes.splice(iMovie, 1)
    showListMovies()
  } else {
    alert('Esse filme não existe no catálogo, tente novamente.')
  }
  document.getElementById('nameMovie').value = '';
}