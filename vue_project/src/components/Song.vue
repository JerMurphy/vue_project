<template>
    <div>
        <h1>{{song.song}}</h1>
        <h3> {{song.artist}}</h3>
    </div>
</template>

<script>
export default {
  name: 'Song',
  props: {
      song: Object
  }
}
</script>

<style scoped>

</style>

