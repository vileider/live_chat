<template>
<div class="chat-container">
  <div class="message-display-container">
    <div v-if="!hasUserJoined" class="name-container">
      <input v-model="currentUser" type="text" class="user-name" />
      <button class="join-button" @click="joinChatAsCurrentUser">Join</button>
    </div>
    <div v-else>
      <div class="list-container">
        <div  v-for="message in messages" :key="message.id" class="messages-container">
          <b>
            {{ message.sender }}
          </b>
          : {{ message.content }}
        </div>
      </div>
    </div>
  </div>
      <div v-if="hasUserJoined" class="text-input-container">
        <textarea v-model="text" class="text-message" @keyup.enter="sendMessageToServer">
        </textarea>
      </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      hasUserJoined: false,
      currentUser: null,
      text: null,
      messages: [],
    };
  },
  mounted() {
    this.socket = this.$nuxtSocket({ })
    /* Listen for events: */
    // this.socket
    // .on('connect', (msg, cb) => {
    //   console.log('connected to the server')
      /* Handle event */
    // })
  },
  methods: {
    joinChatAsCurrentUser() {
      this.hasUserJoined = true;
      this.socket.on(
        "messageReceivedFromServer", (data) => {
          this.messages =  data.reverse();
        });
    },
    sendMessageToServer() {
      const message = {
        id: new Date().getTime(),
        text: this.text,
        user: this.currentUser,
      };
      // this.messages = this.messages.concat(message);
      // this.messages = this.messages.push(message);
      // this.messages = [...this.messages, message];
      this.socket.emit('messageSentFromClient', message);
      this.text = null;
    }
  },
}
</script>

<style scoped>
.messages-container{
font-size: 20px;
}
.chat-container{
  height: 100%;
  width: 100%;
}
.message-display-container {
  width: 100%;
  height: 100%;
  border: 3px solid #374863;  
}
.text-input-container{
  width: 100%;
  height: 100%;
  display: flex;
  border: 3px solid #374863;  
}
  .text-message {
    width: 100%;
    bottom: 0;
  }
  
.name-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.user-name {
  height: 30px;
  width: 20%;
  min-width: 100px;
  font-size: 20px;
  font-weight: bold;
}

.signInButton {
  height: 30px;
  width: 20%;
  min-width: 100px;
  font-weight: bold;
}

</style>