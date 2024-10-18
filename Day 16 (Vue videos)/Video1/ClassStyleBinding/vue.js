const app = Vue.createApp({
  data() {
    return {
      showColorPurple:false,
      showColorYellow:false,
      showBorder:false,
      bgColor:"",
    };
  },
  computed: {
   boxClases(){
    return {border:this.showBorder, purple:this.showColorPurple, yellow:this.showColorYellow}
   }
    },
  

}).mount("#container");
