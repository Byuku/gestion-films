<template>
  <div>
    <SearchMovie />
    <NowPlaying />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
  }

  .custom-scrollbar::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  .custom-scrollbar::-webkit-scrollbar:vertical {
    width: 11px;
  }

  .custom-scrollbar::-webkit-scrollbar:horizontal {
    height: 11px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(8, 13, 68, 0.5);
  }
</style>
