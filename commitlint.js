const chalk = require('chalk');

const msgPath = process.env.GIT_PARAMS || process.env.HUSKY_GIT_PARAMS;
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim();

const commitRE =
  /^(((\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]) )?(revert: )?(feat|fix|docs|ui|style|test|chore|locale|refactor|perf|wip)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.log();
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`提交日志不符合规范`)}\n\n${chalk.red(
      `  合法的提交日志格式如下(emoji 和 模块可选填)：\n\n`,
    )}    
        ${chalk.green(`[<emoji>] [revert: ?]<type>[(scope)?]: <message>\n`)}
        ${chalk.green(`💥 feat(模块): 添加了个很棒的功能`)}
        ${chalk.green(`🐛 fix(模块): 修复了一些 bug`)}
        ${chalk.green(`📝 docs(模块): 更新了一下文档`)}
        ${chalk.green(`🌷 ui(模块): 修改了一下样式`)}
        ${chalk.green(`📐 style(模块): 仅仅修正了代码格式`)}
        ${chalk.green(`🔬 test(模块): 单元测试`)}
        ${chalk.green(`🏰 chore(模块): 对脚手架做了些更改`)}
        ${chalk.green(`🌐 locale(模块): 为国际化做了微小的贡献`)}
        ${chalk.green(`🎉 refactor(模块): 代码重构，没有新增功能`)}
        ${chalk.green(`🚀 perf(模块): 优化相关，比如提升性能、体验`)}
        ${chalk.green(`🍰 wip(模块): 阶段成品\n`)}
        ${chalk.green(`规则定义在 commitlint 文件中\n`)}
        ${chalk.red(
          `See https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular \n`,
        )}`,
  );
  process.exit(1);
}
