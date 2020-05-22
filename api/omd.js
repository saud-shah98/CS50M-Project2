export const fetchMovies = async () => {
    const response = await fetch('http://www.omdbapi.com/')
    const {results} = await response.json()
    return results.map(processMovie)
}

const processMovie = movie => ({
    title: movie.title,
    director: movie.director
})