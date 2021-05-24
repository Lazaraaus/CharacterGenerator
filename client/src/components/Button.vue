<template>
    <button @click="$emit('btn-click')">
            {{text}}
    </button>
</template>

<script>
export default {
   name : 'Button',
   props: {
       text: String
   } 
}
</script>
<style scoped>

</style>