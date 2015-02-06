# 多页面公用组件(比如 jquery)解决方案：Seajs 版

## 需求

有两个页面：page-a 和 page-b。都依赖 jquery，且希望 jquery 能共用缓存。

## 方案

- 配置 buildArgs 为：`--sea relative --ignore jquery`
- HTML 页面里引入 seajs 并配置 jquery 的 alias，指定 jquery 版本

  ```javascript
  seajs.config({
      alias: {
        jquery: 'jquery/1.7.2/jquery'
      }
  });
  ```
