<template>
    <div>
      <v-ons-page>
        <v-ons-toolbar>
            <div class="center">Bangers</div>
            <div class="right">
                <v-ons-toolbar-button icon="ion-navicon, material: md-menu" class="menu"></v-ons-toolbar-button>
            </div>
        </v-ons-toolbar>
        <v-ons-pull-hook :action="reloadSongs" @changestate="state = $event.state">
          <span v-show="state === 'initial'"> Pull to refresh </span>
          <span v-show="state === 'preaction'"> Release </span>
          <span v-show="state === 'action'"> Loading... </span>
        </v-ons-pull-hook>
        <v-ons-list>
          <v-ons-list-header>Playlist</v-ons-list-header>
          <div v-bind:key="song.id" v-for="(song, index) in songs">
            <Song v-bind:song="song" v-bind:index="index" v-on:del-song="$emit('del-song',index)" />
          </div>
           <v-ons-list-item></v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </div>
</template>



<script>
import Song from '../components/Song.vue';
export default {
  name: 'Body',
  components: {
    Song    
  },
  props:["songs"],
  methods: {
    
    reloadSongs(done){
      //this will eventually reload the songs from a database
      setTimeout(() => {
        this.state = 'initial';
        done();
      }, 2000);
    }
  },
  data(){
    return {
      state: 'initial',
      
    }
  }
}
</script>

<style scoped>
  .overflow{
    overflow-y: auto;
  }
  .logo_img {
  height: 50px;
  width: 50px;
}
.menu{
    color: #FF5252;
}
  
</style>

