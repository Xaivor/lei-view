const shelljs = require('shelljs');

// 文档打包路径
const distPath = 'docs-dist';

// github 地址
const githubUrl = 'https://github.com/Xaivor/lei-view.git';

// 打包
shelljs.exec(`npm run docs:build`)
shelljs.exec(`echo 'Pack is building Success..., is deploying...'`);

// 拷贝自动构建文件
shelljs.mkdir(`${distPath}/.github`)
shelljs.mkdir(`${distPath}/.github/workflows`)
shelljs.cp('bin/static.yml', `${distPath}/.github/workflows`)

// 提交到github
shelljs.exec(`cd ${distPath} && git init && git add -A && git commit -m 'chore:deploy' && git push -f ${githubUrl} master:docs`)
shelljs.exec(`echo 'Deploy Docs Success...'`);

// 删除dist文件夹
shelljs.rm('-rf', distPath);
shelljs.exec(`echo 'Delete dist Success...'`);