const shelljs = require('shelljs');

// 打包
shelljs.exec(`npm run docs:build`)
shelljs.exec(`echo 'Pack is building Success..., is deploying...'`);

// 拷贝自动构建文件
shelljs.mkdir('docs-dist/.github')
shelljs.mkdir('docs-dist/.github/workflows')
shelljs.cp('bin/static.yml', 'docs-dist/.github/workflows')

// 提交到github
shelljs.exec(`cd docs-dist && git init && git add -A && git commit -m 'chore:deploy' && git push -f https://github.com/Xaivor/lei-view.git master:docs`)
shelljs.exec(`echo 'Deploy Docs Success...'`);

// 删除dist文件夹
shelljs.rm('-rf', 'docs-dist');
shelljs.exec(`echo 'Delete dist Success...'`);