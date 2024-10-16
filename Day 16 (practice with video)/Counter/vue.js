const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    plus() {
      this.number = this.number + 1;
    },
    minus() {
      this.number = this.number - 1;
    },
    test() {
      //   return "salam"

      return this.number > 5 ? "5-dən böyükdür." : "5-dən kiçikdir.";
    },
  },

  watch: {
    number(oldValue, newValue) {
      console.log(oldValue, "=>", newValue);
    },
  },
  // computed:{
  //     test(){
  //         return this.number > 5 ? "5-dən böyükdür." : "5-dən kiçikdir.";
  //     }
  // }
}).mount("#container");
