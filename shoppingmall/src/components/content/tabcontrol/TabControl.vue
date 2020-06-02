<template>
    <div id="tab-control">
      <div v-for="(item, index) in titles" class="tab-control-item" @click="chooseItem(index)">
        <span :class="{active: index === chooseNum}">{{ item }}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "TabControl",
  components: {
  },
  props: {
    titles: {
      type: Array,
      require: true,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      chooseNum: 0
    }
  },
  methods: {
    chooseItem (index) {
      this.chooseNum = index
    }
  }
}
</script>

<style scoped>
  #tab-control {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    margin-top: -3px;
    background-color: #ffff;
  }
  .tab-control-item {
    flex: 1;
    text-align: center;
    margin-top: 10px;
  }
  /*.tab-control-item span {*/
  /*  color: pink;*/
  /*  border-bottom: pink solid 5px;*/
  /*  padding: 5px;*/
  /*}*/
  .active {
    color: pink;
    border-bottom: pink solid 5px;
    padding: 5px;
  }
</style>
