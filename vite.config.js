import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
const path = require('path')

export default {
  server: {
    host: true,
    port: '7005',
    proxy: {
      '/api': {
        target: 'http://192.168.1.110:9900/', // 开发
        ws: true,
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    }
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
};
