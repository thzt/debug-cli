import { enableLog, log } from '../../util/log';

const cliFunc = (param1, param2, command) => {
  // --log 或者 -l 调用时，command.log 为 true
  if (command.log) {
    enableLog();
  }

  log('param1: %s, param2: %s, command: %j', param1, param2, command);
};

export {
  cliFunc,
}