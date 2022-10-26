import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import LogIn from "../../Pages/LogIn/LogIn/LogIn";
import Register from "../../Pages/LogIn/Register/Register";
import PageNotFound from "../../Pages/Others/PageNotFound/PageNotFound";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => {
                    return fetch('https://js-institute-server.vercel.app/categories')
                }
            },
            {
                path: '/courses/:id',
                element: <Course></Course>,
                loader: ({ params }) => {
                    return fetch(`https://js-institute-server.vercel.app/courses/${params.id}`)
                }
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/*',
                element: <PageNotFound></PageNotFound>
            },
        ]
    }
])