<template>
  <section class="container">
    <div>
      <InfiniteScroll />
    </div>
  </section>
</template>

<script>
import InfiniteScroll from '~/components/InfiniteScroll.vue'

export default {
  components: {
    InfiniteScroll
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
