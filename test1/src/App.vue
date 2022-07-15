<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>
<script>
  export default{
    data(){
      return {
        todoName:'',
        todoList:[],
        doneTodos:[]
      }
    },
    methods:{
      addTodo(){
        this.todoList.push(this.todoName)
        this.todoName = ''
      },
      completeTodo(item, index){
        this.todoList.splice(index,1)
        this.doneTodos.push(item)
      },
      removeTodo(index){
        this.todoList.splice(index,1)
      },
      removeDoneTodo(index){
        this.doneTodos.splice(index,1)
      }
    }
  }
</script>
<template>
  <div class = "container">
  <input type = "text" v-model = "todoName"/>
  <button style = "margin-left:30px" @click = "addTodo()">ADD TODO</button> 
  <br>
  <div class = "main">
    <ul style = "width:300px">
      <h1>My Todos</h1>
     
      <li v-for = "(item, index) in todoList">
      {{item}}
      <button @click = "completeTodo(item, index)">Done</button>
      <button @click = "removeTodo(index)">Remove</button>
      </li>
      
      
    </ul>
    <ul>
     
      <h1>Done Todos</h1>
      <li v-for = "(item, index) in doneTodos ">
      {{item}}
      
      <button @click = "removeDoneTodo(index)">Remove</button>
      </li>
      
      </ul>
   
  </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
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
