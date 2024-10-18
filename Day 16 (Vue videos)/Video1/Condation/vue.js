const app = Vue.createApp({
  data() {
    return {
      number:0,
      showContainer:false,
    };
  },
  methods:{
    plus(){
      this.number = this.number + 1;

    },
    minus(){
       this.number = this.number - 1;

     }
  },

}).mount("#container");
