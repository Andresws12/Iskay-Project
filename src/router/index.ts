import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import PersonalData from '../views/PersonalData.vue';
import PersonalReturns from '../views/PersonalReturns.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Iskaypet - Home',
            metaTags: [
                {
                    name: 'description',
                    content: 'The home page of our Iskaypet app.',
                },
                {
                    property: 'og:description',
                    content: 'The home page of our Iskaypet app.',
                },
            ],
        },
    },
    {
        path: '/',
        name: 'MyData',
        component: PersonalData,
        meta: {
            title: 'Iskaypet - My data',
            metaTags: [
                {
                    name: 'description',
                    content: 'The my data page of our Iskaypet app.',
                },
                {
                    property: 'og:description',
                    content: 'The my data page of our Iskaypet app.',
                },
            ],
        },
    },
    {
        path: '/',
        name: 'MyReturns',
        component: PersonalReturns,
        meta: {
            title: 'Iskaypet - My returns',
            metaTags: [
                {
                    name: 'description',
                    content: 'The my returns page of our Iskaypet app.',
                },
                {
                    property: 'og:description',
                    content: 'The my returns page of our Iskaypet app.',
                },
            ],
        },
    },
    {
        path: '*',
        name: 'fallback',
        redirect: { name: 'Home' },
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.title);

    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.metaTags);

    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(
        el => {
            if (el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }
    );

    if (!nearestWithMeta) return next();

    nearestWithMeta.meta.metaTags
        .map(tagDef => {
            const tag = document.createElement('meta');

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });

            tag.setAttribute('data-vue-router-controlled', '');

            return tag;
        })

        .forEach(tag => document.head.appendChild(tag));

    next();
});

export default router;
