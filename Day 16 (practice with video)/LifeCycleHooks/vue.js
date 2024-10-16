const app = Vue.createApp({
  data() {
    return {
      title: "test basligi",
      itemList: [],
    };
  },



  beforeCreate() {
    console.log("beforeCreate isledi");
  },
  created() {
    setTimeout(() => {
      this.itemList = [1, 2, 3, 4, 5, 6, 26];
    }, 2000);

    setTimeout(() => {
      this.title = "Bu yeni basligdir";
    }, 3000);
  },
  beforeUnmount() {
    console.log("beforeMount isledi");
  },
  unmounted() {
    console.log("mounted isledi");
  },
  beforeUpdate() {
    console.log("beforeUpdated isledi");
  },
  updated() {
    console.log("updated isledi");
  },


}).mount("#container");

setTimeout(() => {
  app.unMount();
}, 5000);
