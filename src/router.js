import { createRouter, createWebHistory } from "vue-router";

import LoginPage from './components/LoginPage.vue'
import HomePage from './components/HomePage.vue'
import SideBarPage from './components/SideBarPage.vue'
import CustomPage from './components/CustomPage.vue'
import AuditPage from './components/AuditPage.vue'
import AuditRecordFormB from './components/AuditRecordFormB.vue'
import AuditRecordFormA from './components/AuditRecordFormA.vue'


const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: '/HomePage',
        component: HomePage
    },
    {
        path: '/SideBarPage',
        component: SideBarPage
    },
    {
        path: '/CustomPage',
        component: CustomPage
    },
    {
        path: '/AuditPage',
        component: AuditPage
    },
    {
        path: '/AuditRecordFormB',
        component: AuditRecordFormB
    },
    {
        path: '/AuditRecordFormA',
        component: AuditRecordFormA
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router