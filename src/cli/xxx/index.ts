import { enableLog, log } from '../../util/log';

/**
 * 用于示例，导入一个 cli 方法
 */
const cliFunc = (param1, param2, command) => {
  // --log 或者 -l 调用时，command.log 为 true
  if (command.log) {
    enableLog();
  }

  log('param1: %s, param2: %s, command: %j', param1, param2, command);
};

/**
 * CLI 方法需要使用 export= 来导出
 */
export = cliFunc;