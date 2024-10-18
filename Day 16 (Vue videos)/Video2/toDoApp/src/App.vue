<template>
  <div class="container">
    <h1>ToDo</h1>
    <div class="inpBtn">
      <addsection/>
    </div>
   <todolistt/>
   <result/>
  </div>
</template>

<script>

import addsection from './components/addsection.vue';
import todolistt from './components/todolistt.vue';
import result from './components/result.vue';

export default {
  components:{
addsection,
todolistt,
result,
  },
  data() {
    return {
      todolist: [
        { id: 1, text: "text 1" },
        { id: 2, text: "text 2" },
        { id: 3, text: "text 3" },
        { id: 4, text: "text 4" },
        { id: 5, text: "text 5" },
        { id: 6, text: "text 6" },
      ],
      inp: null,
      li:[]
    };
  },
  methods: {
    clear(todoitem) {
      console.log(todoitem);

      this.todolist = this.todolist.filter((i) => i !== todoitem);
    },
    add() {
      console.log("fatima");
      
        this.todolist.push({id:Math.floor(Math.random()*23648723),text:this.inp});
       this.inp=''
      },
    }}
</script>
