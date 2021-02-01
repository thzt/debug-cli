import * as debug from 'debug';

/**
 * 用于示例，随便选了一个 debug 分类名
 */
const debugName = 'xxx';

/**
 * 导出 log 方法
 */
export const log = debug(debugName);

/**
 * 动态开启 log
 */
export const enableLog = () => {
  debug.enable(debugName);
};
