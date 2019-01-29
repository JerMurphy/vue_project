<template>
    <div>
       <h1> Songs in the Playlist</h1>
       <div v-bind:key="song.id" v-for="song in songs">
          <Song v-bind:song="song" />
       </div>
    </div>
</template>



<script>
import Song from '../components/Song.vue'
export default {
  name: 'Body',
  components: {
    Song    
  },
  data(){
    return {
      songs: [
        {
          id: 1,
          song: 'La Macarena',
          artist: 'Los Del Rio'
        },
        {
          id: 2,
          song: 'Never gonna give you up',
          artist: 'Rick Astley'
        },
        {
          id: 3,
          song: 'Who let the dogs out',
          artist: 'Baha Men'
        },
        {
          id: 4,
          song: 'Back in Black',
          artist: 'AC/DC'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

