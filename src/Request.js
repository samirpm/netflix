export const baseUrl = 'https://api.themoviedb.org/3'
export const API_KEY = '3b2c20ba3274aef55fdf2285eb040cee'
export const imageUrl ='https://image.tmdb.org/t/p/original'


const requests ={
    trending:`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    action:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    originals:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    comedy:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horror:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romance:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
}
export default requests