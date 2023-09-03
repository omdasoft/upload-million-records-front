import UploadComponent from "./pages/upload.vue"
import HomeComponent from './pages/home.vue'

export default[
    {
        path: '/upload',
        name: 'upload',
        component: UploadComponent
    },
    {
        path: '/home',
        name: 'home',
        component: HomeComponent
    }
]