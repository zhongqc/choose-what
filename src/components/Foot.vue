<template>
  <footer class="btn-group">
    <div v-for="item in btnList" :class="item.class" @click="emitClick(item.event)">{{item.text}}</div>
  </footer>
</template>

<script>

  export default {
    name: 'Foot',
    data() {
      return {}
    },
    props: {
      btnList: Array
    },
    methods: {
      emitClick(event) {
        this.$emit('btnClick', event);
      }
    }
  }
</script>

<style scoped>
  footer {
    position: fixed;
    height: 49px;
    line-height: 49px;
    width: 100%;
    text-align: center;
    bottom: 0px;
    z-index: 100;
  }

  .btn-group {
    width: 100%;
    display: flex;
    padding: 6px 18px;
    height: 48px;
    box-sizing: border-box;
    font-size: 18px;
  }

  .btn-group > * {
    flex: 1;
    border-radius: 5px;
    color: #ffffff;
    text-align: center;
    line-height: 36px;
    margin: 0 6px;
  }

  .btn-group > *:first-child {
    margin: 0 6px 0 0;
  }

  .btn-group > *:last-child {
    margin: 0 0 0 6px;
  }

  .btn-group > *:only-child {
    margin: 0 !important;
  }

  .btn-group > .btn-default {
    background-color: #2da3e6;
  }

  .btn-group > .btn-red {
    background-color: #ff3b46;
  }

  .btn-group > .btn-disabled {
    background-color: #cccccc;
  }
</style>
