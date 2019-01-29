<template>
    <div>
       <v-ons-list-item>
        <div class="left">
                <img class="list-item__thumbnail" src="../assets/music_placeholder.png">
            </div>
            <div class="center">
                <p class="list-item__title">{{song.song}}</p>
                <p class="list-item__subtitle">{{song.artist}}</p>
            </div>
            <div class="right">
                <p><v-ons-icon icon="fa-chevron-up"></v-ons-icon></p>
                <p class="num_count">{{song.id + 13}}</p>
                <p><v-ons-icon icon="fa-chevron-down"></v-ons-icon></p>
            </div>
       </v-ons-list-item>
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
    .song_title{
        font-size: 30px;
    }
    .song_artist{
        font-size: 15px;
    }
    .num_count{
        margin-left: 5px;
        margin-right: 5px;
        font-size: 20px;
    }
</style>

