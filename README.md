# NodeGit in Electron

[nodegit](https://www.nodegit.org/)

## 开发

```sh
yarn install
yarn rebuild
yarn start
```

有时候 Electron 升级，但是 electron-rebuild 包暂时未跟进，可尝试：

```sh
cd node_modules/nodegit/
HOME=~/.electron-gyp \
node-gyp rebuild \
  --target=8.0.0 \
  --arch=x64 \
  --dist-url=https://electronjs.org/headers
```

生成的 nodegit 二进制包 见 ```./node_modules/nodegit/build/Release/nodegit.node```