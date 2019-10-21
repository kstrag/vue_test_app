import Vue from 'vue'
import Router from 'vue-router'
import homePage from './components/homePage'
import addTask from './components/addTask'
import taskList from './components/taskList'

Vue.use(Router)



export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: homePage
        },
        {
            path: '/add',
            name: 'Add',
            component: addTask
        },
        {
            path: '/list',
            name: 'List',
            component: taskList,
            propos: true
        }
    ]

})