<template>
<div class="header">
    <div class="header-title-group">
        <h3 class="header-title">
            MEVN Character Generator w/ 3D Models    
        </h3>  
    </div>
    <div class="account-control-group">
        <Button class="btn" text="Log In" />
        <Button class="btn" text="Sign Up" />
    </div>
</div>

    
</template>

<script>
import Button from './Button';
export default {
   name: 'Header',
   components: {
       Button,
   } 
}
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
    }
    .account-control-group {
        flex-basis: 20%;
    }
    .header-title-group {
       flex-basis: 33%; 
    }

</style>