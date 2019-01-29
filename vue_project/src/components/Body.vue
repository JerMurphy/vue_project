<template>
    <div>
       <div>
          <v-ons-list>
            <v-ons-list-header>Playlist</v-ons-list-header>
            <div v-bind:key="song.id" v-for="song in songs">
               <Song v-bind:song="song" />
            </div>
          </v-ons-list>
       </div>
        <v-ons-fab position="bottom right" @click="showModal" :visible="fabVisible" class="add_btn">
          <v-ons-icon icon="md-plus"></v-ons-icon>
        </v-ons-fab>
       <v-ons-modal :visible="modalVisible">
        <div class="modal_div">
          <div class="inner-modal">
            <v-ons-icon @click="hideModal" style="float:right; color:black" icon="fa-times"></v-ons-icon>
            <h4 class="input-text"> Song title</h4>
            <b-form-input v-model="new_song" type="text" placeholder="title.."></b-form-input>
            <h4 class="input-text"> Artist Name</h4>
            <b-form-input v-model="new_artist" type="text" placeholder="artist.."></b-form-input>
            <b-button  class="add_song_btn" variant="outline-danger">Add song</b-button>
          </div>
        </div>
      </v-ons-modal>
    </div>
</template>



<script>
import Song from '../components/Song.vue'
export default {
  name: 'Body',
  components: {
    Song    
  },
  Props: {
    new_artist: String,
    new_song: String
  },
  methods: {
    showModal() {
      this.modalVisible = true;
      
    },
    hideModal(){
      this.modalVisible = false;
    }
  },
  data(){
    return {
      fabVisible: true,
      modalVisible: false,
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
  .overflow{
    overflow-y: auto;
  }
  .add_btn {
    background-color: #FF5252;
  }
  .modal_div{
    background-color: white;
    height: 30%;
    width: 90%;
    margin-left: 5%;
  }
  .input-text{
    color: black;
    float: left;
    margin-top: 5%;
  }
  .inner-modal {
    margin-left: 5%;
    margin-right: 5%;
  }
  .add_song_btn {
    margin-top: 5%;
  }
</style>

