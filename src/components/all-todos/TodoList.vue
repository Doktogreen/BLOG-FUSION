<template>
    <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card">
          <div class="card-body p-5">
            <creat-todo-list @get-todo="getTodo"/>
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
      this.getTodo();
    },
    methods: {
      getTodo(){
        const headers = {
            Accept:"application/json",
             ContentType: "application/json",
             Authorization: "Bearer 68f97e578f94be80281510d3192602b6387e9faef957d2258a945ce0041be4dd"
        }
        axios.get(`https://gorest.co.in/public/v2/users/100/todos`, {headers})
            .then((response) => {
                console.log(response)
                return this.todos = response.data
            }
          )
      },
     deleteTodo(id){
       const headers = {
            Accept:"application/json",
             ContentType: "application/json",
             Authorization: "Bearer 68f97e578f94be80281510d3192602b6387e9faef957d2258a945ce0041be4dd"
        }
        axios.get(`https://gorest.co.in/public/v2/users/100/todos`,{id}, {headers})
            .then((response) => {
                console.log(response)
                return this.todos = response.data.filter((todo) => todo.id !== id);
            })
        // this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    
},
}
</script>
