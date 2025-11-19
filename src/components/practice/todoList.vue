<template>
  <div class="todo-list flex justify-center items-center min-h-screen">
    <div class="w-full max-w-md">
      <div class="text-3xl font-bold text-green-700 mb-6 text-center">Todo List</div>
      <div class="flex w-full items-center gap-2 mb-8">
        <Input 
          v-model="todo" 
          placeholder="输入新增todo" 
          class="border-green-800" 
          @keyup.enter="addTodo"
        />
        <Button @click="addTodo" class="bg-green-600 hover:bg-green-700 p-3">
          Add
        </Button>
      </div>
      <div>
        <ul>
          <li 
            v-for="(item, index) in todos" 
            :key="index"
            class="bg-white rounded-lg shadow-md w-full text-left m-2 p-4 flex justify-between items-center"
            :class="{ 'line-through text-gray-500': item.completed }"
          >
            <div class="flex items-center">
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleTodo(index)"
                class="mr-3 h-5 w-5 text-green-600 rounded"
              />
              <span>{{ item.text }}</span>
            </div>
            <Button 
              @click="removeTodo(index)" 
              class="bg-red-500 hover:bg-red-600 text-white p-1 h-8 w-8"
            >
              ×
            </Button>
          </li>
        </ul>
        <div v-if="todos.length === 0" class="text-gray-500 mt-4">
          暂无待办事项
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Todo {
  text: string;
  completed: boolean;
}

const todo = ref("");
const todos = ref<Todo[]>([]);

// 从本地存储加载数据
onMounted(() => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    todos.value = JSON.parse(savedTodos);
  }
});

// 保存到本地存储
const saveToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos.value));
};

const addTodo = () => {
  if (!todo.value.trim()) return;
  todos.value.push({
    text: todo.value.trim(),
    completed: false
  });
  todo.value = '';
  saveToLocalStorage();
};

const toggleTodo = (index: number) => {
  todos.value[index].completed = !todos.value[index].completed;
  saveToLocalStorage();
};

const removeTodo = (index: number) => {
  todos.value.splice(index, 1);
  saveToLocalStorage();
};
</script>

<style scoped>
.todo-list {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
</style>