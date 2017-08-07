<template>
  <div id="app">
    <edit v-if="edit" @changeMode="changeMode"></edit>
    <show v-if="!edit" @changeMode="changeMode">></show>
  </div>
</template>

<script>
  import Edit from './components/Edit'
  import Show from './components/Show'

  export default {
    components: {Edit, Show},
    name: 'app',
    data() {
      return {
        edit: localStorage.choiceList ? false : true,
      }
    },
    computed: {

      btnList: function () {
        return this.edit ? [{
          class: 'btn-default',
          text: '保存'
        }] : [{
          class: 'btn-default',
          text: '抽取'
        }];
      }
    },
    methods: {
      changeMode(editMode) {
        console.log(editMode);
        this.edit = editMode;
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  table, img {
    border: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  li {
    list-style: none;
    display: flex;
    height: 36px;
    line-height: 36px;
  }

  header ~ .content {
    padding-top: 44px;
  }

  footer ~ .content {
    padding-bottom: 49px;
  }

  .add {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-color: #bdbdbd;
  }

  .add::before, .add::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0;
    border-bottom-width: 2px;
    border-color: inherit;
    border-bottom-style: solid;
    top: calc(50% - 1px);
    left: 0;
  }

  .add::after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
</style>
