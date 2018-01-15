<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html, body, div, span, object, iframe,
h1, h2, h3, p, input, a, blockquote, pre, button,
em, img, b, i, dl, dt, dd, ol, ul, li,
form, label, table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, footer, header {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
  list-style: none;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
}

html {
  font-size: 62.5%;
}

body {
  font-family: Noto Sans Japanese, sans-serif;
  font-size: $default;
  color: $font-default-color;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
