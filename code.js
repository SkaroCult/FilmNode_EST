const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDlhNDcwMWQ0MzdkZjI5MTc4NzA1YWE5YzgwMWVmZSIsInN1YiI6IjY1YjFhZTFlMGYyZmJkMDE4NDY2N2VjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fY9MTf5HlF2rPGT3HDcHSwkoG3IBLmCb7Riym2CHt_A'
    }
  };

function responseMovieGenre(){
    var resposta = fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=bd9a4701d437df29178705aa9c801efe')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    return resposta
}

responseMovieGenre()

function responseMoviePopular(){
    var resposta = fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.log(err))

    return resposta
}

responseMoviePopular()