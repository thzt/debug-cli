import * as program from 'commander';

import { version } from '../package.json';
import { cliFunc } from './cli/xxx/index';

program.version(version);

program
    .command('xxx <param1> [param2]')
    .alias('x')
    .option('-l, --log', '输出日志')
    .description('功能介绍')
    .action(cliFunc);

// 使用了未定义的命令
program.on('command:*', () => {
    console.error('命令未定义', program.args.join(' '));
    process.exit(1);
});

program.parse(process.argv);
