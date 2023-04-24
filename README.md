# 快速开始

### 编译为一个在 <script> 标签中可用的自运行函数 ('iife')
rollup main.js --file bundle.js --format iife

### 编译为 CommonJS 模块 ('cjs')
rollup main.js --file bundle.js --format cjs

### 需要为 UMD 格式的包指定一个名称
```javascript
rollup main.js --file bundle.js --format umd --name "myBundle"
```

> rollup 更好的兼容es6Module 支持编译CommonJS AMD IIFE等多种格式

# Tree-Shaking