<template>
  <div class="authentication">
    <div class="authentication__info" v-if="this.userData.name !== ''">
      <div class="image"><img :src="this.userData.image"></div>
      <div class="name">{{this.userData.name}}がログインしました。</div>
    </div>
    <button class="login" @click="loginBtn">ログイン</button>
  </div>
</template>

<script>
import firebase from 'firebase';
import helpers from '../../helper/firebase';

export default {
  name: 'authentication',
  data() {
    return {
      userData: {
        name: '',
        image: '',
      },
    };
  },
  methods: {
    loginBtn() {
      firebase.initializeApp(helpers); // Firebaseアプリケーションインスタンスを作成して初期化
      const provider = new firebase.auth.TwitterAuthProvider(); // Twitterプロバイダオブジェクトのインスタンスを作成。
      firebase.auth().signInWithPopup(provider).then((result) => { // ポップアップウィンドウでのログイン処理
        // 認証結果から取得したtwitterのユーザー名
        this.userData.name = result.additionalUserInfo.profile.name;
        // 認証結果から取得したtwitterユーザーのプロフィール画像
        this.userData.image = result.additionalUserInfo.profile.profile_image_url;
      }).catch((error) => { // ログイン処理がエラーだった場合
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>
.authentication {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.authentication__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.image {
  margin-bottom: 20px;
}

.image img {
  border-radius: 50%;
}

.name {
  font-size: 14px;
}

button {
  appearance: none;
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  outline: none;
}

.login {
  display: flex;
  justify-content: center;
  width: 150px;
  margin: 0px auto;
  padding: 10px 0;
  border: 1px solid #000000;
  transition: 0.3s;
}

.login:hover {
  border: 1px solid #FF0000;
  transition: 0.3;
}
</style>
