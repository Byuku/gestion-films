<template>
  <div>
    <header class="header flex place-content-center top-0 z-10 w-full h-full max-h-20 p-2.5 shadow-lg" :class="isScrolled ? 'isScrolled fixed' : ''">
      <div class="header__figure">
        <img class="header__img w-14 h-auto" src="~/assets/img/logo.png" alt="Logo Nel(flix)" >
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      isScrolled: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    
    //background-color: rgba(255, 255, 255, 0.3);
    background-color: #080d44;
    
    img {
      filter: brightness(0) invert(1);
    }

    &.isScrolled {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: rgba(16, 25, 101, 0.3);
    }
  }
</style>
