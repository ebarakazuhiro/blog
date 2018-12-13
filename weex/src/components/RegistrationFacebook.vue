<template>
  <button class="facebook__btn">
    <span class="facebook__btn-icon">
      <image :src="facebook" style="width:20px;height:20px;"></image>
    </span>
    <span class="facebook__btn-text">Facebookで登録</span>
  </button>
</template>

<script>
export default {
  name: 'registration-facebook',
  data() {
    return {
      facebook: ''
    }
  }
};
</script>

<style>
  .facebook__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 50px;
    border: 1px solid #fff;
    border-radius: 4px;
    background: none;
  }

  .facebook__btn-text {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
  }
</style>