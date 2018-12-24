<template>
  <div class="send__form">
    <div class="send__form-title">何か送ってみてね</div>
    <form
      class="form__box"
      @submit.prevent="sendMessage"
    >
      <input
        name="text"
        class="form__box-title"
      >
      <input
        name="text"
        class="form__box-text"
      >
      <input
        name="text"
        class="form__box-url"
      >
      <input
        name="image"
        class="form__box-image"
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
              const headers = {
                headers: {
                  'Content-type': 'application/json',
                  Authorization: ''
                }
              }
              let data = {
                to: currentToken,
                notification: {
                  title: 'nana music',
                  body: 'nana musicのwebサイトへようこそ',
                  click_action: ''
                }
              }
              axios.post('https://fcm.googleapis.com/fcm/send', data, headers)
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

<style lang="scss" scoped>
.send__form {
  display: flex;
  flex-direction: column;
  &-title {
    font-size: 2rem;
    margin-bottom: 20px;
  }
}

.form__box {
  display: flex;
  flex-direction: column;
  &-title,
  &-text,
  &-url {
    width: 300px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 0 5px;
  }
}
</style>
