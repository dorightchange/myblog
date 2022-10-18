module.exports = {
    title: '秦岭散修',
    description: '信息只是大脑里的数据，而知识则是大脑里的函数',
    themeConfig: {
        logo: '/images/cat.png',
        lastUpdated: 'Last Updated',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '基础知识',
                ariaLabel: '基础知识',
                items: [
                    { text: '算法', link: '/language/chinese/' },
                    { text: '计算机网络', link: '/language/japanese/' },
                    { text: '操作系统', link: '/language/japanese/' },
                    { text: '数据库', link: '/language/japanese/' },
                ]
            },
            {
                text: '开发技术',
                ariaLabel: '开发技术',
                items: [
                    { text: '前端', link: '/language/chinese/' },
                    { text: '后端', link: '/language/japanese/' },
                    { text: '版本管理', link: '/language/japanese/' },
                ]
            },
            {
                text: '项目介绍',
                ariaLabel: '项目介绍',
                items: [
                    { text: '项目1', link: '/language/chinese/' },
                    { text: '项目2', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: [
            '/',
            '/introduction.md',
            '/about/author.md',

        ]
    }
}