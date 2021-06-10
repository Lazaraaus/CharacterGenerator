
<template>
    <div class="character-viewer">
        <h1> Character Viewer</h1>
        <p>{{characters}}</p> 
        <img src='https://card-image-bucket.s3.us-east-2.amazonaws.com/assets/card_clubs_02.png'>
    </div>
</template>

<script>
// Imports

// Component Properties
export default {
    name: 'CharacterViewer',
    data () {
        return {
            characters: null
        }
    },
    methods: {
          getCharacters: async () => {
              console.log("attempting to fetch characters");
              const response = await fetch('http://localhost:8081/characters');
              let data = await response.json();
              console.log(data)
              return data
                
          },
    },
    async mounted() {
        const data = this.getCharacters();
        this.characters = await data;
        console.log(this.characters)
    }

}
</script>

<style scoped>  
    .character-viewer {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

</style>