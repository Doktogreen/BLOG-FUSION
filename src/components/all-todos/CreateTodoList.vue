<template>
    <form @submit="ceateTodo()" class="d-flex justify-content-center align-items-center mb-4">
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

// Vue.use(VueAxios, axios);
export default {
    name: "CreateTodoList",
    components:{
        
    },
    props: {
        todo: Object
    },
    data(){
        return{
            todos: []
        }
    },
    methods: {
        createTodo(data){
          this.$emit("create-todo");
          this.todos = [...this.todo, data ]
        }
    }
}
</script>
