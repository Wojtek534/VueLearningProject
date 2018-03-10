<template>
<div class="col-sm-6 col-xs-12 col-md-4 mx-auto">
  <p>Restfull api requests</p>
  <hr>
  <div class="form-group">
    <label>Username</label>
    <input class="form-control" type="text" v-model="newUser.Username">
  </div>
    <div class="form-group">
    <label>Email</label>
    <input class="form-control" type="text" v-model="newUser.Email">
  </div>
  <button class="btn btn-primary btn-md" @click="submit">Submit</button>
  <hr>
  <button class="btn btn-primary btn-md" @click="fetchData">Get Data</button>
  <app-table :users="users"/>
  </div>
</template>
<script>
import Table from './Table'
export default {
  data() {
    return{
      newUser: {
        Username: '',
        Email: ''
      },
      users: []
    }
  },
  components: {
    appTable: Table
  },
  methods:{
    submit(){
     this.$http.post('data.json', this.newUser)
     .then(response =>{
       console.log(response)
     }, error => {
       console.log(error)
     })
    },
    fetchData(){
      this.$http.get('data.json')
      .then(response =>{
        return response.json()
      },
       error => {
        console.log(error)
      })
      .then(data =>{
        console.log(data)
        const array = []
        for (let key in data){
          array.push(data[key])
        }
        this.users = array

      })
  }
  }

}
</script>
