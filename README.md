# Examples

Project examples for `spm@3.6` .

## Prepare

```bash
$ npm install spm@ninja -g
```

Make sure your spm version is 3.6.x .

## Usage

```bash
# !-- 1. enter directory
$ cd react

# !-- 2. debug
$ spm server
$ open http://127.0.0.1:8000/

# !-- 3. build
$ spm build
$ open dist/index.html
```

## List

**语言类**
- [应用 Coffee](./coffee)
- [应用 Less](./less)
- [应用 ES6](./es6)

**性能**
- [公用文件](./common-file)
- [公用依赖](./common-pkg)
- [按需加载](./load-on-demand)

**框架**
- [应用 React](./react)

**其他**
- [自定义 loader](./custom-loader)
- [通过环境变量区分开发和线上模式](./define)
- [对小于 10K 的图片和字体文件做 base64 转换](./base64)
- [todo](./todo)
- [todo with expresso](./todo-with-expresso)

