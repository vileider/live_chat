<template>
  <div  class="text-input-container">
        <textarea  v-model="textInput" class="text-message" @keydown="logMeThisOut">
        </textarea>
      </div>
</template>

<script>
// import MessageDisplay from './MessageDisplay.vue'
export default {
props:{
  method:{ type: Function },
},

methods:{
logMeThisOut(){
  this.method();
}
}
}
</script>

<style>
.text-input-container{
  width: 100%;
  height: 100%;
  display: flex;
  border: 3px solid #374863;  
}
</style>