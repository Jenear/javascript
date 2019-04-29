module.exports = {
  hooks: {
    //执行 git commit 命令时会调起 lint-staged（lint-staged会查找lint-staged.config.js中的配置）
    'pre-commit': 'lint-staged',
  },
};
