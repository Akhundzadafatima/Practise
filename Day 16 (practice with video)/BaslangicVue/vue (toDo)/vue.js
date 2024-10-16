const app=Vue.createApp({
    data(){
        return{
            input: null,
            li:[], 
        };
    },

   
    methods:{
btn(){
    this.li.push(this.input)
}
    }
}).mount("#app")