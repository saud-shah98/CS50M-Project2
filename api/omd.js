


const processMovie = movie => ({
    title: movie.Title,
    yea: movie.Year
})

export const getMovies = async (params) => {
    const API_URL = `'http://www.omdbapi.com/?t=${params}&apikey=d7ec2628'`
    const response = await fetch(API_URL);
    const {results} = await response.json();
    return results.map(processMovie)
}