import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login'

Vue.use(VueRouter)

const routes = [
    {path: '/login', component: Login}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
