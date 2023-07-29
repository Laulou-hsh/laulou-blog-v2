import {fileURLToPath, URL} from 'url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import viteImagemin from 'vite-plugin-imagemin'
import {visualizer} from 'rollup-plugin-visualizer'
import importToCDN from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({ open: true }),
    importToCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://cdn.bootcdn.net/ajax/libs/vue/3.3.4/vue.global.prod.min.js',
        },
        {
          name: 'vue-demi',
          var: 'VueDemi',
          path: 'https://cdn.bootcdn.net/ajax/libs/vue-demi/0.14.5/index.iife.min.js',
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'https://cdn.bootcdn.net/ajax/libs/vue-router/4.2.4/vue-router.global.prod.min.js',
        },
      ],
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  build: {
    target: 'es2020',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
      plugins: [
        viteCompression({
          verbose: true, // 是否在控制台中输出压缩结果
          disable: false,
          threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
          algorithm: 'brotliCompress', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
          ext: '.br', // 压缩后缀名
          deleteOriginFile: false, // 源文件压缩后是否删除
        }),
      ],
    },
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
