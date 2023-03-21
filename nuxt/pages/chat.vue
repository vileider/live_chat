<template>
<div>
  <div class="flex_container">
    <div class="chat_header"><Header /></div>
    <div class ="main">
      <div class="left_bar"> <LeftBar /></div>
      <div class="chat_area">
        <div class="message_display"><MessageDisplay /></div>
        <!-- <div class="typed_message"><MessageBox :method="logMeThisOut"/></div> -->
      </div>
        <div class="settings"><Settings /></div>
  </div>
</div>
</div>

</template>

<script>
import Header from '~/components/Header.vue' 
import LeftBar from '~/components/LeftBar.vue'
import MessageDisplay from '~/components/MessageDisplay.vue'
// import MessageBox from '~/components/MessageBox.vue'
import Settings from '~/components/Settings.vue'
import '../styles/chat.css'


export default { 
    components: {
    Header,
    LeftBar,
    MessageDisplay,
    // MessageBox,
    Settings
    },
    data(){
return{
joined: false
};
    },
methods:{
    logMeThisOut(value){
        this.joined = !this.joined;
        console.log(this.joined)
    }
}

}
</script>

<style>
/* .flex_container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.main {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 85vh;
}

.left_bar {
    display: flex;
    height: 100% ;
    width: 25%;
    border-right: 5px solid #5CB6F9;
}
.chat_header {
    display: flex;
    height: 15vh;
    border-bottom: 5px solid #5CB6F9;
}
.chat_area {
    display: flex;
    height:100% ;
    width: 50%;
    flex-direction: column;
}
.message_display {
    display: flex;
    height: 70%;
    width: 100%;
    border-bottom: 5px solid #5CB6F9;
    
}
.typed_message {
    display: flex;
      height: 30%;
      width: 100%;
}
.settings {
    display: flex;
    height: 100% ;
    width: 25%;
    border-left: 5px solid #5CB6F9;
} */


</style>