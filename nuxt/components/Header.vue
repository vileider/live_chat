<template>
  <header>
    <div class="left">
      <div>
        <button class="signOut">Sign Out</button>
      </div>
      <div class="userFlex">
        <!-- Placeholder for where an image of where the acitive user will go-->
        <p class="User"></p>
      </div>
    </div>
    
    <div class="middle">
      <div>
        <form class="searchBar">
          <input type="text" placeholder="Search..." />
        </form>
      </div>
      <!-- Placeholder for where an image of where the other users will go-->
      <div class="otherUserFlex">
        <p class="otherUsers"></p>
        <p class="otherUsers"></p>
        <p class="otherUsers"></p>
        <p class="otherUsers"></p>
        <p class="otherUsers"></p>
        <p class="otherUsers"></p>
        <p class="otherUsers"></p>
        <p class="otherUsers"></p>
        <p class="otherUsers"></p>
        <p class="otherUsers"></p>
        <p class="otherUsers"></p>
        <p class="otherUsers"></p>
        <p class="otherUsers"></p>
      </div>
    </div>

    <div class="right">
      <button class="newChat">Start New Chat</button>
      <div class="logo">
        <img src="../../Live_Chat_User_Interface/logo.png" alt="logo" />
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style>
header {
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-shrink: 2;
}
.left {
  width: 15%;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  flex: initial;
}
.middle {
  width:70%;
  align-items: center;
  display: flex;
  flex-direction: column;
  
  flex: auto;
  flex-shrink: 2;
}
.right {
  min-width: 150px;
  width: 15%;
  display: flex;
  flex-direction: column;
  flex: initial;
}

button {
  font-family: 'Montserrat';
  font-size: 12px;
}
button {
  text-align: center;
  color: #233dff;
  font-family: 'Montserrat';
  font-size: 12px;
}
.otherUserFlex {
  width:100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  overflow: scroll;
}
.otherUsers {
  background-color: #5cb6f9;
  height: 50px;
  width: 50px;
  min-width: 50px;
  border-radius: 50%;
  
}
@media only screen and (max-width: 600px) {
  .otherUsers {
    height: 25px;
    width: 25px;
  }
}

form.searchBar input[type='text'] {
  font-size: 12px;
  background: #d8dbe4;
}

.User {
  background-color: #5cb6f9;
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
@media only screen and (max-width: 600px) {
  .User {
    height: 25px;
    width: 25px;
  }
}
img {
  width: 80px;
  height: 80px;
}
</style>
