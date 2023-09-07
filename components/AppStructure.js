app.component('app-structure', {

    template: 
    /*html*/
    `<div>

    <add-to-list @form-submitted = "addItem"></add-to-list>
    <br/>
    <h1>TO-DOs</h1>
    <br/>
    <display-list  v-if="items.length" :itemsList="items"></display-list>
    </div>`,
    data() {
      return {
        items: []
      }
    },
    methods: {
        addItem(item){
          this.items.push(item)
        }
    },
  })