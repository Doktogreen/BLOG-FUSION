<template>
    <form @submit="createTodo()" class="d-flex justify-content-center align-items-center mb-4">
        <div class="form-outline flex-fill mx-3">
        <input type="text" v-model="title" id="form2" class="form-control" />
        <label class="form-label" for="form2">New task...</label>
        </div>
        <div class="form-outline flex-fill">
        <input type="text" v-model="due_on" id="form2" class="form-control" />
        <label class="form-label" for="form2">Due date...</label>
        </div>
        <button type="submit" class="btn btn-info ms-2">Add</button>
    </form>
</template>
<script>
import axios from 'axios'
export default {
    name: "CreateTodoList",
    components:{
        
    },
    props: {
    },
    data(){
        return{
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
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer 2c7c9f912de64d2f20d5f32900d25741f369f06a4f0b7b33657f46f9b928e792`
        }
        axios.post(`https://gorest.co.in/public/v2/users/100/todos`, data, {headers})
            .then((response) => {
                this.$emit("create-todo-done")
                console.log(response.data)
                return this.todos = [...this.todos, response.data]
            })
            
    },
    }
}
</script>
