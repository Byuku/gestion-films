<template>
  <div class="container mx-auto pt-24">
    <p class="text-lg mb-5">Au cinéma</p>

    <div class="flex flex-rows overflow-x-scroll pb-5 gap-8 custom-scrollbar">
      <div v-for="movie in showMovies" :key="movie.id" class="movies__element w-40 flex-none">
        <img loading="lazy" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" :alt="movie.title" class="h-60"/>

        <div class="movie__details relative pt-5 px-3">
          <div
            class="movie__vote w-8 h-8 absolute -top-5 left-4 flex place-content-center place-items-center rounded-full" :class="rateColor(movie.vote_average)">
            <span class="text-sm text-white">{{ movie.vote_average != 0 ? movie.vote_average : 'NR' }}</span>
          </div>
          <p class="movie__title font-medium">{{ movie.title }}</p>
          <p class="movie__release font-thin">{{ dateFr(movie.release_date) }}</p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NowPlaying',
  data() {
    return {}
  },
  async fetch() {
    console.log('📡 NOW PLAYING : Appel moviesAction')
    await this.$store.dispatch('movies/moviesAction');
  },
  computed: {
    showMovies() {
      return this.$store.getters["movies/getMovies"];
    }
  },
  methods: {
    dateFr(date) {
      const newdate = new Date(date);
      const options = { year : "numeric", month : "short", day : "numeric"};

      return newdate.toLocaleDateString('fr-FR', options);
    },
    rateColor(rate) {
      switch (true) {
        case (rate === 0):
          return "bg-gray-400";
        case (rate >= 1 && rate <= 4): 
          return "bg-red-600";
        case (rate >= 5 && rate < 7): 
          return "bg-yellow-500";
        case (rate >= 7): 
          return "bg-green-600";
        default:
          return "bg-blue-500";
      }
    }
  }
}
</script>

<style lang="scss" scoped>


</style>