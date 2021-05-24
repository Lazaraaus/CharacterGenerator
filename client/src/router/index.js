import {createRouter, createWebHistory} from 'vue-router';

// Views
import About from '../views/About';
import Home from '../views/Home';

// Array of Front-End Routes
const routes = [
    // Each Route is an Object
    {
        // Route path
        path: '/about',
        // Route Name
        name: 'About',
        // Component representing route
        component: About
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];

// Define Router
const router = createRouter(
    {
        history: createWebHistory(process.env.BASE_URL),
        routes,
    }
);


// Export Router for use
export default router;