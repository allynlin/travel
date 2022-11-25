import Index from "../pages/Index/Index";
import About from "../pages/About/Index";
import List from "../pages/List/List";

const routes = [
    {
        path: '/',
        redirect: '/home',
    }, {
        path: '/',
        element: <Index/>,
        // 根元素使用 element 的方式导入，避免路由导航的时候刷新根元素
        children: [
            {
                path: 'home',
                component: () => import('../pages/Home/Index'),
                meta: {
                    title: '首页',
                }
            }, {
                path: 'about',
                redirect: '/about/basic',
            }, {
                path: 'about',
                element: <About/>,
                children: [
                    {
                        path: 'history',
                        component: () => import('../pages/About/History'),
                        meta: {
                            title: '历史文化',
                        }
                    }, {
                        path: 'custom',
                        component: () => import('../pages/About/Custom'),
                        meta: {
                            title: '地理气候',
                        }
                    }, {
                        path: 'basic',
                        component: () => import('../pages/About/Basic'),
                        meta: {
                            title: '基本信息',
                        }
                    }, {
                        path: 'travel',
                        component: () => import('../pages/About/Travel'),
                        meta: {
                            title: '旅游时机',
                        }
                    }
                ]
            }, {
                path: 'travel',
                component: () => import('../pages/Travel/Index'),
                meta: {
                    title: '景点列表',
                }
            }, {
                path: 'list',
                element: <List/>,
                meta: {
                    title: '实用信息',
                }
            }, {
                path: 'info',
                component: () => import('../pages/Info/Info'),
                meta: {
                    title: '行程信息',
                }
            }, {
                path: '*',
                component: () => import('../pages/Error/NotFound'),
            }
        ]
    }, {
        path: '/Spin',
        component: () => import('../component/RenderLoading'),
    }
]

export default routes
