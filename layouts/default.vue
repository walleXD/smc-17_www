<template lang="pug">
  v-app#default-layout(
    top-toolbar,
    left-fixed-sidebar,
    sidebar-under-toolbar)
    v-toolbar
      v-toolbar-side-icon(@click.native.stop="nav = !nav")
      v-toolbar-logo.hidden-sm-and-down SMC'17
      v-spacer
      v-toolbar-items
        v-toolbar-item What
        v-toolbar-item Why
        v-toolbar-item Where
    main
      v-sidebar(left, fixed, drawer, v-model="nav"): v-list
        v-list
          v-list-item( v-for="i in 3")
            v-list-tile
              v-list-tile-title Shit {{i}}
      v-container(fluid)
        nuxt
    v-footer This is a footer
</template>

<script>
export default {
  data() {
    return {
      "nav": false
    }
  }
}
</script>

<style lang="stylus">
</style>
