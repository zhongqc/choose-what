<template>
  <div>
    <navigation-bar :headTitle="title" :rightIcon="rightIcon" @rightClick="editList"></navigation-bar>
    <foot :btnList="footBtn" @btnClick="selectItem"></foot>
    <div class="content show">
      <ul>
        <li v-for="(item, index) in choiceList" :class="index == random ? 'select-item' : ''">
          <div>{{ item.name }}</div>
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
    name: 'Show',
    data() {
      return {
        choiceList: [],
        random: null,
        title: '随机选择',
        rightIcon: {
          class: 'edit',
          event: 'addLine'
        },
        footBtn: [{
          class: 'btn-default',
          text: '抽取'
        }]
      };
    },
    created() {
      this.choiceList = JSON.parse(localStorage.choiceList);
    },
    methods: {
      editList() {
        console.log('edit');
        this.$emit('changeMode', true);
      },
      selectItem() {
        this.random = parseInt(this.choiceList.length * Math.random());
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    background-color: transparent;
  }
  li > div {
    padding: 0 18px;
  }

  .select-item{
    background-color: #ffba65;
  }

</style>
