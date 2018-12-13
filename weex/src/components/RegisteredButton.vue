<template>
  <button class="registered__button">
    <span class="registered__button-text">nanaに登録済みの方はログイン</span>
  </button>
</template>

<script>
export default {
  name: 'registered-button',
};
</script>

<style>
  .registered__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 50px;
    border-radius: 4px;
    margin-bottom: 60px;
  }

  .registered__button-text {
    font-size: 14px;
    font-weight: 600;
    color: #de2b6e;
  }
</style>