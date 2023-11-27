export const baseurl ='https://api.themoviedb.org/3'
export const apikey ='2c9b2d981d072eb94d4848f5326e93b2'
export const imageurl='https://image.tmdb.org/t/p/original'
export const requests = {
    fetchTrending: `/trending/all/week?api_key=${apikey}&language=en-US`,
  
    // TV
  
    fetchTrendingTV: `/trending/tv/week?api_key=${apikey}&language=en-US`,
    fetchNetflixOriginalsTV: `/discover/tv?api_key=${apikey}&with_networks=213&language=en-US`,
    // fetchLatestTV: `/tv/latest?api_key=${apikey}`,
    fetchAiringTodayTV: `/tv/airing_today?api_key=${apikey}&language=en-US`,
    fetchPopularTV: `/tv/popular?api_key=${apikey}&language=en-US`,
    fetchTopRatedTV: `/tv/top_rated?api_key=${apikey}&language=en-US`,
  
    //  Movies
  
    fetchTrendingMovie: `/trending/movie/week?api_key=${apikey}&language=en-US`,
    fetchNowPlayingMovies: `/movie/now_playing?api_key=${apikey}&language=en-US`,
    //fetchLatestMovies: `/movie/latest?api_key=${apikey}`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${apikey}&language=en-US`,
    fetchPopularMovies: `/movie/popular?api_key=${apikey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${apikey}&with_genres=28&language=en-US`,
    fetchComedyMovies: `/discover/movie?api_key=${apikey}&with_genres=35&language=en-US`,
    fetchHorrorMovies: `/discover/movie?api_key=${apikey}&with_genres=27&language=en-US`,
    fetchRomanceMovies: `/discover/movie?api_key=${apikey}&with_genres=10749&language=en-US`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${apikey}&with_genres=99&language=en-US`,
  
    //Search
  
    fetchSearchResult: `/search/multi?api_key=${apikey}&language=en-US&query=`,
    fetchSearchResultMovies: `/search/movie?api_key=${apikey}&language=en-US&query=`,
    fetchSearchResultSeries: `/search/tv?api_key=${apikey}&language=en-US&query=`,
}