<template>
    <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card">
          <div class="card-body p-5">
            <creat-todo-list @create-todo="createTodo" :todos="todos" />
            <div class="tab-content" id="ex1-content">
              <div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                  <div class="d-flex justify-content-between col-12" style="padding: 0vmin 10vmin">
                      <b>Tasks</b>
                      <b>Status</b>
                      <b>Due Date</b>
                  </div>
                <ul :key="todo.id" v-for="todo in todos" class="list-group mb-0">
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 mb-0 rounded" style="background-color: #f4f6f7;">
                    <div>
                    <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                        {{todo.title}}
                    </div>
                    <div class="success">
                       {{todo.status}}
                    </div>
                    <div>
                        {{todo.due_date}}
                        <!-- {{ prettyDate() }} -->
                        <a @click="deleteTodo(todo.id)"  title="Remove item">
                            <i class="fas fa-times text-primary"></i>
                        </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Tabs content -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios'
import CreatTodoList from './CreateTodoList.vue';
export default {
    name: "TodoList",
    components: {
        CreatTodoList
    },
      data() {
      return{
        title: "",
        status: "",
        due_on: "",
        todos: []
      }
    },
    props: {
        todo: Array
    },
    mounted() {
        axios.get(`https://gorest.co.in/public/v2/users/100/todos`)
            .then((response) => {
                console.log(response)
                return this.todos = response.data
            })
    },
    methods: {
    creatTodo(){
        let data = {
            title: this.title,
            due_on: this.body,
            status: this.status
        }
        const Headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer`
        }
        axios.post(`https://gorest.co.in/public/v2/users/100/todos`,{Headers}, data)
            .then((response) => {
                console.log(response.data)
                return this.todos = [...this.todos, response.data]
            })
            this.$emit("create-todo", data)
            
    },
    
     deleteTodo(id){
        this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    
},
}
</script>
