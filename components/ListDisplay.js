app.component('display-list', {
    props: {
        itemsList:{
            type: Array,
            required: true
        }
    },
    template:
      /*html*/
  `
  <div class="list-container">
  <h3>Your Current List:</h3>
    <ul>
      <li v-for="(item, index) in itemsList" :key="index">
        {{ item.name }} takes {{item.duration}} hours and consits of:
        <br/>
        "{{ item.description }}"
        <br/>
        <p v-if="item.complete">Item Completed</p>
        <p v-else>Item not Completed</p>
        <button v-if="!item.complete" v-on:click="item.complete = true">I completed {{ item.name }}!</button>
        <br/>
        <br/>
        <br/>
      </li>
    </ul>
  </div>`
})