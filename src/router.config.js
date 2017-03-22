import Tech from './components/Tech.vue'
import Ent from './components/Ent.vue'
import Sport from './components/Sport.vue'
import Mil from './components/Mil.vue'
import Woman from './components/Woman.vue'
import Article from './components/Article.vue'
export default [
        {
            path:"/tech",
            component:Tech
        },
        {
            path:"/ent",
            component:Ent
        },
        {
            path:"/sport",
            component:Sport
        },
        {
            path:"/mil",
            component:Mil
        },

        {
            path:"/lady",
            component:Woman
        },
        {
            path:"/article/:id",
            component:Article
        },
        {
            path:"/",
            redirect:'/tech'
        },
        {
            path:"*",
            redirect:'/tech'
        }
    ] 
