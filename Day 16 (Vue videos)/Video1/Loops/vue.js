const app = Vue.createApp({
  data() {
    return {
      li: [],
      inp: null,
      toDoList: [
        { id: 1, text: "todo1", value: false },
        { id: 2, text: "todo2", value: false },
        { id: 3, text: "todo3", value: false },
        { id: 4, text: "todo4", value: false },
        { id: 5, text: "todo5", value: false },
      ],
    };
  },
  methods: {
    add() {
      this.toDoList.push({id:Math.floor(Math.random()*23648723),text:this.inp,value:false});
      this.inp = "";
    },
    clear(todoItem) {
      // console.log("todoItem",todoItem)
      this.toDoList = this.toDoList.filter((t) => t !== todoItem);
      // console.log("this.toDoList",this.toDoList);
    },
  },
  computed: {
    complatedItem() {
      return this.toDoList.filter((t) => t.value).length;
    },
    unComplatedItem() {
      return this.toDoList.filter((t) => !t.value).length;
    },
  },
}).mount("#container");
