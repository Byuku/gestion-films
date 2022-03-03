<template>
  <div class="hero flex mt-text-center px-14 py-40">
    <div class="container mx-auto">
      <div class="hero__content flex flex-col h-full place-items-startr">
        <div class="hero__title">
          <p class="text-5xl text-white">Bienvenue</p>
          <p class="text-2xl text-white pt-2">
            Retrouver les informations de tout vos films préférés
          </p>
        </div>

        <div class="hero__search">
          <input type="text" name="search" id="" class="w-full rounded-full py-2.5 mt-10 h-12">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchMovie',
  props: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
// Outdoor cinema vector created by upklyak - www.freepik.com
.hero {
  background-image: url('../assets/img/outdoor-cinema.jpg');
  background-size: cover;
  min-height: 300px;
}
</style>