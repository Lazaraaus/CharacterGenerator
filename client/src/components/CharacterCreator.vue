<template>
    <div class="character-creator">
        <h1> Character Creator</h1>
        <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label for="c-name">Character Name: </label>
            <input type="text" id="c-name" v-model="name" placeholder="Enter a name adventurer..." /><br />
        </div>
        <div class="form-control">
            <label for="c-profession">Character Profession: </label>
            <select id="c-profession" v-model="profession">
                <option value="Thief">Thief</option>
                <option value="Warrior">Warrior</option>
                <option value="Mage">Mage</option>
                <option value="Ranger">Ranger</option>
                <option value="Cleric">Cleric</option>
            </select>
        </div>
        <div class="form-control">
            <label for="c-backstory">Character Backstory</label>
            <textarea id="c-backstory" v-model="backstory" rows="4" cols="50" placeholder="Tell us a little about your travels..." /><br />
        </div>
        <input type="submit" value="Save Character" class="btn btn-block">
        </form>
    </div>
</template>

<script>
// Imports

// Component Properties
export default {
    name: 'CharacterCreator',
    data () {
        return {
            name: "",
            profession: "",
            backstory: "",
        }
    },
    methods : {
        onSubmit(e) {
            // Prevent Default Behavior
            e.preventDefault();

            // Light Validation
            if(!this.name || !this.profession || !this.backstory) {
                alert("Please check inputs and try again adventurer. Just your name, trade, and a little about yourself will suffice")
            }

            // Create obj holding JSON
            const newCharacter = {
                name: this.name,
                profession: this.profession,
                backstory: this.backstory
            };

            // Emit the obj and flag for parent component
            this.$emit('add-char', newCharacter);

            // Reset values
            this.name = "";
            this.profession = "";
            this.backstory = "";


        }
    }
}
</script>

<style scoped>  
.character-creator {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        flex-direction: column;
    }
.add-form {
    margin-bottom: 40px;
}

.form-control {
    margin: 20px 0;
}

.form-control label {
    display: block;
}

.form-control input {
    width: 100%;
    height: 40px; 
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
}

.form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between; 
}
.form-control-check label {
    flex: 1;
}

.form-control-check input {
    flex: 2;
    height: 20px; 
}
</style>