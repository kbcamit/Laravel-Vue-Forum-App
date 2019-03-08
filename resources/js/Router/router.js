import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login'
import Logout from '../components/login/Logout'
import Signup from '../components/login/Signup'
import Forum from '../components/forum/Forum'

Vue.use(VueRouter)

const routes = [
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/forum', component: Forum, name: 'forum'},
    {path: '/logout', component: Logout, name: 'logout'}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
