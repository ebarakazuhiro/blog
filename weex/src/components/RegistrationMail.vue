<template>
  <button class="mail__btn">
    <span class="mail__btn-icon">
      <image :src="mail" style="width:20px;height:20px;"></image>
    </span>
    <span class="mail__btn-text">メールアドレスで登録</span>
  </button>
</template>

<script>
export default {
  name: 'registration-mail',
  data() {
    return {
      mail: ''
    }
  }
};
</script>

<style>
  .mail__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 50px;
    border: 1px solid #fff;
    border-radius: 4px;
    background: none;
    margin-bottom: 15px;
  }

  .mail__btn-text {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
  }
</style>