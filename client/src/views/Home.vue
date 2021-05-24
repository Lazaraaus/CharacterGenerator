<template>
   <div>
        <CharacterViewer v-show="bCharViewer" class="c-viewer" />
        <CharacterCreator v-show="bCharCreator" @add-char="addCharacter" class="c-creator"/>
        <div class="controls">
            <Button @btn-click="toggleScreen" class="btn btn-square" text="View all characters" />
            <Button @btn-click="toggleScreen" class="btn btn-square" text="Create a character" />
        </div>
   </div> 
</template>

<script>
import CharacterViewer from '../components/CharacterViewer';
import CharacterCreator from '../components/CharacterCreator';
import Button from '../components/Button';

export default {
    name: 'Home',
    components: {
        CharacterViewer,
        CharacterCreator,
        Button,
    },
    methods: {
        // Function to toggle between CharacterViewer and CharacterCreator components
        toggleScreen() {
            console.log("toggleScreen is firing");
            this.bCharViewer = !this.bCharViewer;
            this.bCharCreator = !this.bCharCreator;
        },
        addCharacter(newCharacter) {
            console.log(`Attempting to add ${newCharacter} to the DB`);
        }
    },
    data () {
        return {
            // String value for toggling component view
            screenToggle: false,
            bCharViewer: true,
            bCharCreator: false,
            characters: [],
        }
    },
}
</script>

<style scoped>
.controls {
  /* Flex Container Properties */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  /* Flex Item Properties */
}
.c-viewer {
  flex-basis: 66%;
}
.c-creator {
  flex-basis: 66%;
}
.btn {
  display: inline-block; 
  background: #000;
  color: #fff; 
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
.btn-square {
  width: 15%;
  height: 15%;
}
</style>