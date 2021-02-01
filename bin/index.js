#! /usr/bin/env node

const program = require('commander');
const { version } = require('../package.json');

// 引用构建之后的目标产物
const cliFunc = require('../out/src/cli/xxx');

program.version(version);

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

program
  .command('xxx <param1> [param2]')
  .alias('x')
  .option('-l, --log', '输出日志')
  .description('功能介绍')
  .action((...args) => cliFunc(...args));  // 调用 cliFunc

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

// 使用了未定义的命令
program.on('command:*', () => {
  console.error('命令未定义', program.args.join(' '));
  process.exit(1);
});

program.parse(process.argv);
