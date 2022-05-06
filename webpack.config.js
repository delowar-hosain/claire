// This file is not used by react-app-rewired but it's required for IDE path alias resolution
const path = require('path')

module.exports = {
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src'),
      "@/hooks/*": path.resolve(__dirname, './src/hooks/'),
      "@/components/*": path.resolve(__dirname, './src/components/'),
      "@/pages/*": path.resolve(__dirname, './src/pages/'),
      "@/context/*": path.resolve(__dirname, "./src/context/"),
      "@/config/*": path.resolve(__dirname, "./src/config/"),
      "@/services/*": path.resolve(__dirname, "./src/services/"),
      "@/interface/*": path.resolve(__dirname, "./src/interface/"),
      "@/layouts/*": path.resolve(__dirname, "./src/layouts/")
    }
  }
}
