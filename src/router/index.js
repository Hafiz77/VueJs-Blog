import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/posts'
import PostDetails from '@/components/details'
import User from '@/components/user'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'posts',
            component: Posts
        },
        {
            path: '/details/:id',
            name: 'details',
            component: PostDetails
        },
        {
            path: '/user/:id',
            name: 'user',
            component: User
        }
    ]
})