export default Vue.component("like", {
    template:
    `
    <div class="btn">
    <i class="fas fa-heart fa-2x" v-bind:class="currentClass" v-on:click = "like"></i>
    </div>  
    `,

    data(){
        return{
            isLiked : false,
            currentClass : "isNotLiked",
        }
    },

    mounted(){
        if (localStorage.currentClass){
            this.currentClass = localStorage.currentClass;
            }
    },

    methods: {
        like(){
            if (this.isLiked === false){
            this.currentClass = "liked";
            this.isLiked = true;
            localStorage.currentClass = this.currentClass;
            } else if(this.isLiked === true){
                this.currentClass = "isNotLiked";
                this.isLiked = false;
                localStorage.currentClass = this.currentClass;            
            }

        }

    },


})
