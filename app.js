const app = Vue.createApp({
  data() {
    return {
      prop: "",
      output: "",
      outputSubmitted: "",
    };
  },
  methods: {
    showAlert(){
        alert("button pressed");
    },
    userInput(event){
        this.output = event.target.value;
    },
    userInputSubmitted(event){
        this.outputSubmitted = event.target.value;
    }
  }
});
app.mount('#assignment');
