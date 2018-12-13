<template>
  <button class="twitter__btn">
    <span class="twitter__btn-icon">
      <image :src="twitter" style="width:20px;height:20px;"></image>
    </span>
    <span class="twitter__btn-text">Twitterで登録</span>
  </button>
</template>

<script>
export default {
  name: 'registration-twitter',
  data() {
    return {
      twitter: ''
    }
  }
};
</script>

<style>
  .twitter__btn {
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

  .twitter__btn-text {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
  }
</style>