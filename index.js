Vue.createApp({
    data() {
        return {
            message: null,
            times: null,
            newMessage: null,
            errorMessage: "Must be a non negative number: "
        }
    },
    methods: {
        multiply(){
            if (this.times < 0) {
                this.newMessage = this.errorMessage + this.times;
            }
            this.newMessage = this.message.repeat(this.times);
        },
        clear(){
            this.newMessage = null;
            this.message = null;
            this.times = null;
        }
    }
}).mount("#app")