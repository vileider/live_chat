<template>
  <body>
    <!-- Register form for user to create an account -->
    <form @submit.prevent="submitForm">
      <div class="container">
        <h1>Register</h1>

        <!-- input for user email -->
        <label for="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Enter Email"
          name="email"
          required
        />

        <!-- input for user password -->
        <label for="password">Password</label>
        <input
          v-model="password"
          onkeydown="keyClicked"
          id="password"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />

        <!-- re-enter field for user password -->
        <label for="password_repeat">Repeat Password</label>
        <input
          @keyup="keyup"
          v-model="passwordVerify"
          id="Repeatpassword"
          type="password"
          placeholder="Please re-enter your password"
          name="RepeatPassword"
          required
        />

        <button type="submit" class="registerbtn">Register</button>

        <p>Already have an account? <a href="\sign_in">Log in</a>.</p>
        {{ password }}
        {{ passwordVerify }}
      </div>
    </form>
  </body>
</template>

<script>
// document.addEventListener('keyup', (event) => {
//   const code = event.code;
//   // Alert the key name and key code on keydown
//    if(code === 'Backspace'){
//   alert(`Key code value: ${code}`);
//    }
// }, );

export default {
  data() {
    return {
      password: null,
      passwordVerify: null,
    }
  },

  methods: {
    submitForm() {
      const passwordRepeat = document.getElementById('Repeatpassword')
      if (this.password !== this.passwordVerify) {
        passwordRepeat.style.border = '2px solid #ff0000'
        alert('Passwords do not match, please try again')
      }
    },
  },

//   keyup() {document.addEventListener(
//   'keyup',
  
//   (e) => {
//     const passwordRepeat = document.getElementById('Repeatpassword')
//     const code = e.code
//     if(code === 'Backspace'){
//     passwordRepeat.style.border = '0'
//     alert(`Key code value: ${code}`)
//     }
//   },
// )},
 }
</script>

<style>
body {
  background-color: #5cb6f9;
  color: #ffffff;
}
.container {
  padding: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -200px;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 5px;
  margin: 5px 0 10px 0;
  border: none;
  background: #ffffff;
}
.registerbtn {
  background-color: #050a30;
  color: #ffffff;
  padding: 16px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
}
h1 {
  font-family: 'Montserrat';
  font-size: 35px;
}
div {
  font-family: 'Montserrat';
  font-size: 12px;
}
</style>
