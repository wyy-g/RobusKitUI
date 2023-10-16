# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run docs:build

# 进入待发布的 dist/ 目录
cd docs/.vitepress/dist

# 提交打包静态网站到 github-pages 分支

git init
git add .
git commit -m 'deploy'

# 部署到 https://<username>.github.io/<repo>
git push -f https://github.com/wyy-g/RobusKitUI.git main:github-pages


cd ../../../
git add .
git commitm -m 'docs:deploy pages update'
git push