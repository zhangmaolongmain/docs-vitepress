import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/docs-vitepress/",
    title: "zhangmaolongmain",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/images/logo.svg",
        nav: [
            // {text: 'Home', link: '/'},
            // {text: 'Examples', link: '/markdown-examples'},
            {text: '开发环境', link: '/docs/env/README'}
        ],

        sidebar: [
            // {
            //     text: 'Examples',
            //     items: [
            //         {text: 'Markdown Examples', link: '/markdown-examples'},
            //         {text: 'Runtime API Examples', link: '/api-examples'}
            //     ]
            // }
        ],

        footer: {
            copyright: "Copyright@ 2024 zhangmaolong"
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
