<template>
  <div>
    <navigation-bar :headTitle="title" :leftIcon="leftIcon" :rightIcon="rightIcon" @leftClick="back"
                    @rightClick="addRow"></navigation-bar>
    <foot :btnList="footBtn" @btnClick="saveList"></foot>
    <div class="content edit">
      <ul>
        <li v-for="(item, index) in choiceList">
          <input type="text" v-model="item.name"/>
          <div class="deleteBtn" @click="deleteItem(index)"><span class="delete"></span></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Foot from "./Foot.vue";
  import NavigationBar from "./NavigationBar.vue";

  export default {
    components: {
      NavigationBar,
      Foot
    },
    name: 'Edit',
    data() {
      return {
        choiceList: [],
        title: '编辑',
        leftIcon: {
          class: 'back',
          event: 'clickBack'
        },
        rightIcon: {
          html: '<span class="add"></span>',
          event: 'addRow'
        },
        footBtn: [{
          class: 'btn-default',
          text: '保存'
        }]
      };
    },
    created: function () {
      this.choiceList = JSON.parse(localStorage.choiceList || '[{"name": ""}]');
    },
    methods: {
      deleteItem(index) {
        this.choiceList.splice(index, 1);
      },
      saveList() {
        localStorage.choiceList = JSON.stringify(this.choiceList.filter(function (item) {
          return item.name != '';
        }));
        this.$emit('changeMode', false);
      },
      back() {
        this.$emit('changeMode', false);
      },
      addRow() {
        this.choiceList.push({name: ""});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  input[type=text] {
    height: 36px;
    border: none;
    border-bottom: 1px solid #c4c4c4;
    border-radius: 2px;
    color: #888;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    outline: none;
    font-size: 18px;
    padding: 0 18px;
    flex: 1 0 auto;
  }

  .deleteBtn {
    flex: 0 1 auto;
    /*width: 36px;*/
    padding: 8px;
  }

  .delete {
    position: relative;
    width: 20px;
    height: 20px;
    border-color: #ff3b46;
    display: block;
  }

  .delete::before, .delete::after {
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

  .delete::before {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .delete::after {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

</style>
