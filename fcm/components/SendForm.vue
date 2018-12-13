<template>
  <div class="send__form">
    <form @submit.prevent="sendMessage">
      <input
        name="text"
      >
      <button class="send__form-submit">send</button>
    </form>
  </div>
</template>

<script>
import firebase from '../plugins/fcm.js'
import axios from 'axios'

export default {
  name: 'SendForm',
  methods: {
    sendMessage() {
      const messaging = firebase.messaging()
      messaging.usePublicVapidKey('')
      messaging
        .requestPermission()
        .then(function() {
          messaging
            .getToken()
            .then(function(currentToken) {
              console.log(currentToken)
              if (currentToken) {
                sendTokenToServer(currentToken)
                updateUIForPushEnabled(currentToken)
              } else {
                // Show permission request.
                console.log('No Instance ID token available. Request permission to generate one.')
                // Show permission UI.
                updateUIForPushPermissionRequired()
                setTokenSentToServer(false)
              }
            })
            .catch(function(err) {
              console.log('not', err)
            })
        })
        .catch(function(err) {
          console.log('Unable to get permission to notify.', err)
        })
    }
  }
}
</script>

<style scoped>
.send__form {
  display: flex;
}
</style>
