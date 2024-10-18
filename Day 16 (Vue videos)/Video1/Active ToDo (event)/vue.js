const app=Vue.createApp({
    data(){
        return{
            li:[],
            active:null,
        }
    },
    methods:{

update(event){
this.active= event.target.value
},
add(){
    
this.li.push(this.active),
this.active=null;
}

    }
}).mount("#container")