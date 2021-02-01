const assert = require('assert');  // Node.js 内置的断言库，也可以选其他的

// 构建产物中暴露出来的方法
// 跟 bin/index.js 中使用相同的引用
const cliFunc = require('../out/src/cli/xxx');

describe('这是一个单测', () => {
  describe('这是一个用例', () => {
    beforeEach(async () => {
      // ... 每次跑用例都会执行
    });

    it('不同的场景', async () => {
      const param1 = 1;
      const param2 = 2;
      const command = {
        log: true,
      };  // 手动传入 command
      await cliFunc(param1, param2, command);
      assert(true);
      debugger;
    });

    // 可以测试多个场景
    // ...
  });

  // 可以写多个用例
  // ...
});