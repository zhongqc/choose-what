<template>
  <header>
    <span class="left-icon" v-html="leftIcon.html" :class="leftIcon.class" @click="leftClick(leftIcon.event)"></span>
    <span class="title">{{headTitle}}</span>
    <span class="right-icon" v-html="rightIcon.html" :class="rightIcon.class"
          @click="rightClick(rightIcon.event)"></span>
  </header>
</template>

<script>

  export default {
    name: 'NavigationBar',
    data() {
      return {}
    },
    props: {
      headTitle: String,
      leftIcon: {
        type: Object,
        default: function () {
          return {};
        }
      },
      rightIcon: {
        type: Object,
        default: function () {
          return {};
        }
      },
    },
    methods: {
      leftClick(event) {
        this.$emit('leftClick', event);
      },
      rightClick(event) {
        this.$emit('rightClick', event);
      }
    }
  }
</script>

<style scoped>
  header {
    height: 44px;
    width: 100%;
    position: fixed;
    z-index: 100;
    background-color: #000000;
    top: 0;
    line-height: 44px;
    color: #fff;
    font-size: 20px;
    text-align: center;
  }

  header .left-icon {
    position: absolute;
    float: left;
    left: 0px;
    height: 44px;
    width: 44px;
    border-left: 18px solid transparent;
    background-position: left center;
    background-repeat: no-repeat;
    background-size: auto 20px;
  }

  header .right-icon {
    position: absolute;
    float: right;
    right: 0px;
    height: 44px;
    width: 44px;
    border-right: 18px solid transparent;
    background-position: right center;
    background-repeat: no-repeat;
    background-size: auto 20px;
    text-align: right;
  }

  header .title {
    font-size: 20px;
    color: #fff;
  }

  .back {
    background-image: url(../assets/back.png);
  }
  .edit{
    background-image: url(../assets/edit.svg);
  }
</style>
