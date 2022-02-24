<template>
    <form v-on:submit.prevent="createTodo()" class="d-flex justify-content-center align-items-center mb-4">
        <div class="flex-fill mx-3">
        <input type="text" v-model="title" placeholder="Todo name" class="form-control" />
        </div>
        <div class="flex-fill">
        <input type="text" v-model="due_on"  placeholder="Due date" class="form-control" />
        
        </div>
        <button type="submit" class="btn btn-info background ms-2">
            <p v-if="isSubmiting">Adding...</p><p v-if="!isSubmiting">Add</p>
        </button>
    </form>
</template>
<script>
import axios from 'axios'
export default {
    name: "CreateTodoList",
    components:{
        
    },
    props: {
        todo: Object
    },
    data(){
        return{
            isSubmiting: false,
            title: "",
            status: "Completed",
            due_on: "",
            todos: []
        }
    },
    methods: {
        createTodo(){
        let data = {
            title: this.title,
            due_on: this.due_on,
            status: this.status
        }
         const headers = {
            Accept:"application/json",
             ContentType: "application/json",
             Authorization: "Bearer 68f97e578f94be80281510d3192602b6387e9faef957d2258a945ce0041be4dd"
        }
        this.isSubmiting = true;
        setTimeout(() => {
            this.isSubmiting= false;
      }, 3000);
        axios.post(`https://gorest.co.in/public/v2/users/100/todos`, data, {headers})
            .then((response) => {
                console.log(response.data)
                return this.todos = [...this.todos, response.data]
            })
        this.$emit("get-todo");
    },
    }
}
</script>
