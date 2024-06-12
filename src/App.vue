<script setup>
// import Users from "./components/User.vue";
import GenericEntityComponent from "./components/GenericEntityComponent.vue";
// import Login from "./components/Login.vue";

</script>
<template>

<div>
 <!-- <Users :users="users" /> -->
 <GenericEntityComponent entityName="Product"> </GenericEntityComponent>
 <br/>
 <hr/>
 <br/>
 <GenericEntityComponent entityName="Brand"> </GenericEntityComponent>
 


<!-- <Users :users="users" /> -->
<Login />
</div>
</template>

<script >
// import eventBus from "./Plugins/eventBus";
// import Login from "./components/Login.vue";
export default {
  name : "App",
  components: {
    // Users,
    GenericEntityComponent
  },
  data () {
    return {
      users : [
        {id : 1, name : "erfan" , age:25},
        {id : 2, name : "alireza" , age:23},
        {id : 3, name : "saeed" , age:26},
        {id : 4, name : "amir" , age:27},
      ]
    };
},methods:{
  removeUserById(userId){
    let userIndex = this.users.findIndex(item=> item.id == userId)
     this.users.splice(userIndex,1) 
  }
},
// created(){
//   eventBus.on('RemoveUser', userId => {
//       this.removeUserById(userId);
//     });
// }

};

</script>


<style scoped>
header {
  line-height: 1.5;
}

body {
  background : white;
  color :black;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>