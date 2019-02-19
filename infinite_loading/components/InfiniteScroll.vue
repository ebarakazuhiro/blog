<template>
  <div class="infinite-scroll">
    <ul class="infinite-scroll-list">
      <li class="infinite-scroll-list-item" v-for="i in this.count" :key="i">scroll {{ i }}</li>
    </ul>
    <infinite-loading 
      ref="infiniteLoading" 
      @infinite="infiniteHandler">
    </infinite-loading>
  </div>
</template>

<script>
export default {
  name: 'InfiniteScroll',
  data() {
    return {
      count: 10
    }
  },
  methods: {
    infiniteHandler() {
      setTimeout(() => {
        if (this.count < 20) {
          this.count += 10
          this.$refs.infiniteLoading.stateChanger.loaded()
        } else {
          this.$refs.infiniteLoading.stateChanger.complete()
        }
      }, 1000)
    }
  }
}
</script>

<style>
.infinite-scroll {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 680px;
  margin: 100px 0;
}

.infinite-scroll-list-item {
  height: 60px;
  margin: 10px 0;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
}
</style>
