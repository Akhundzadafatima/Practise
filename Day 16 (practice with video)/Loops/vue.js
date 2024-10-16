const app = Vue.createApp({
  data() {
    return{
      li:[],
      inp:null,
      toDoList:["todo1", "todo2", "todo3", "todo4", "todo5"],
    }
    },
methods:{
  add(){
    this.toDoList.push(this.inp);
    this.inp="";
  }
}
}).mount("#container");
