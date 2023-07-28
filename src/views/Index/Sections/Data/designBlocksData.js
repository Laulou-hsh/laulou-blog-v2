import imgFeatures from '@/assets/img/features.png'

export default [
  {
    heading: '技术',
    description: '日常学习和记录的前端笔记',
    items: [
      {
        image: imgFeatures,
        title: '冒泡排序',
        subtitle: '简单介绍冒泡排序',
        route: 'articles-test',
        query: {id: 1},
      },
    ],
  },
  {
    heading: '书单',
    description: '读书笔记和书单',
    items: [
      {
        image: imgFeatures,
        title: 'Articles Test',
        subtitle: '16 Examples',
        route: 'articles-test',
        query: {id: 3},
      },
    ],
  },
]
