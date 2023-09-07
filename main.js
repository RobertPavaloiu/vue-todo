const app = Vue.createApp({
    data() {
        return {
            itemsList : [],
        }
    },
    methods: {
        addItem(item){
          this.itemsList.push(item)
        }
    },
  })
  