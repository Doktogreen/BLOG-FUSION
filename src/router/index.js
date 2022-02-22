import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Register from '../components/Register.vue';
import AllPost from '../components/all-post/AllHotNewsPost.vue';
import PostContent from '../components/all-post/PostContent.vue';
import BlogFeed from '../components/BlogFeed.vue';
import Profile from '../components/all-profile/Profile.vue';
import TodoList from '../components/all-todos/TodoList.vue';
import Login from '../components/Login.vue';
import UserProfile from '../components/all-profile/UserProfile.vue';

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/todos',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/',
    name: 'BlogFeed',
    component: BlogFeed
  },
  {
    path: '/post-content',
    name: 'PostContent',
    component: PostContent
  },
  {
    path: '/allposts',
    name: 'AllPost',
    component: AllPost
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
