const app=Vue.createApp({
  data(){
    return{
      search: "",
      itemList:["Alma", "Armud", "Çiyələk", "Alça", "Banan", "Mandarin"]
    }
  },
  // methods:{
  //    searchList(){
  //   this.list=this.itemList.filter(i=>i.includes(this.inp))
  //   }
  // }, 
  computed:{
    filteredList(){
      return this.itemList.filter((i)=>i.includes(this.search))
    }
  }
}).mount("#container")