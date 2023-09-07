app.component('add-to-list',{
    emits: ['form-submitted'],
    template:
    /*html*/
    `<form class="add-to-list" @submit.prevent= "onSubmit">
    <h3>Add an Item to your to do-list</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="description">Description:</label>      
    <textarea id="description" v-model="description"></textarea>

    <label for="duration">Approximate Duration in hours:</label>
    <select id="duration" v-model.number="duration">
        <option>6</option>
        <option>5.5</option>
        <option>5</option>
        <option>4.5</option>
        <option>4</option>
        <option>3.5</option>
        <option>3</option>
        <option>2.5</option>
        <option>2</option>
        <option>1.5</option>
        <option>1</option>
        <option>0.5</option>
        <option>0.25</option>
    </select>
    <br/>
    <div>
    <label for="complete">Is the Task Complete: </label>
    <input type="checkbox" id="complete" v-model="complete">
    </div>

    <input class="button" type="submit" value="Submit">  
</form>`,
    data(){
        return{
            name: '',
            description: '',
            duration: null,
            complete: false
            }
        },
    methods: {
        onSubmit(){
            if(this.name === '' || this.description === '' || this.duration === null){
                alert("Submition form is incomplete. Please fill out all fields");
                return
            }
            let newItem = {
                name: this.name,
                description: this.description,
                duration: this.duration,
                complete: this.complete
            }
            this.$emit('form-submitted', newItem)
            
            this.name = ''
            this.description = ''
            this.duration = null
            this.complete = false
        }
    }
})