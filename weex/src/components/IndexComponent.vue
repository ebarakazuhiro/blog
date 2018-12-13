<template>
  <div class="index__component">
    <image
      src=""
      style="width:150px;height:29px;margin-bottom:40px;"
      class="logo"
    ></image>
    <image
      src=""
      style="width:170px;height:18px;margin-bottom:73px;"
      class="logo"
    ></image>
    <registration-list></registration-list>
    <registered-button></registered-button>
    <text class="notes__message">ご登録いただくと、利用規約とプライバシーポリシー
に同意したものとみなします。</text>
  </div>
</template>

<script>
import RegistrationList from './RegistrationList';
import RegisteredButton from './RegisteredButton';

export default {
  name: 'index-component',
  components: {
    RegistrationList,
    RegisteredButton,
  },
};
</script>

<style>
  .index__component {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #D41A68, #F45C5F);
  }

  .notes__message {
    font-size: 11px;
    color: #fff;
    text-align: center;
    word-wrap: break-word;
    line-height: 17px;
  }
</style>
