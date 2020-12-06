export default Vue.component('comments', {
    template:`
    <div class="containerComment">
        <div class="containerMessage">
            <p v-for="item in arrTable"><span class="timeStyle">{{ item.time }}</span> <span class="pseudoStyle">{{ item.pseudo }}</span> : {{ item.donnee }}</p>
        </div>
        <div class="containerBtnMessage">
            <input type="text" name="pseudo" class="inputPseudoStyle" placeholder="Pseudo" v-model="message.pseudo">
            <input type="text" name="message" class="inputMessageStyle" placeholder="Your message !" v-model="message.donnee">
            <button v-on:click="postMessage" class="btnStyle">Send</button>
        </div>
    </div>
    `,
    data(){
        return{
            arrTable: [],
            message: {
                time: 0,
                pseudo : "",
                donnee : ""
            },
        }
    },
    methods: {
        postMessage: function (){
            let currentDate = new Date();
            this.message.time = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
            this.arrTable.push({...this.message});
            localStorage.setItem("datas", arrTable);
            this.message.pseudo = '';
            this.message.donnee = '';
        },
    },
    mounted() {
        if (localStorage.getItem("datas")){
            const arrTableStorage = localStorage.getItem("datas").split(',');
            this.arrTable = arrTableStorage;
        }
    },
})