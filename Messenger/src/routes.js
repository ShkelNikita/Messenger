import { MessengerRedux } from "containers/MessengerContainer"
import {AboutPage} from 'pages/AboutPage'

export const routes = [
    {
        path: '/',
        exact: true,
        component : MessengerRedux
    },
    {
        path: '/about',       
        exact: true,
        component: AboutPage,
    },
    {
        path: '/chats/:id',
        exact: true,
        component : MessengerRedux,
    }
]