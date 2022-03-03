export const state = () => ({
    movies: []
})

export const getters = {
    getMovies(state) {
        return state.movies;
    },
}

export const mutations = {
    SET_MOVIES(state, {results}) {
        state.movies = results
    }
}

export const actions = {
    async moviesAction({commit}) {
        console.log("moviesAction");

        await this.$axios.$get(
          'https://api.themoviedb.org/3/movie/now_playing?api_key=402c2dec6f7bb2f82b7960667282a6a5&language=fr-FR&page=1&region=FR' 
        )
        .then((response) => {
            commit("SET_MOVIES", response);
        })
        .catch( (error) => {
            console.log("[AXIOS MOVIES ACTION] ERROR DURING REQUEST", error);
        });
    }
}