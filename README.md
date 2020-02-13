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

有时候 electron 的 header 包下载失败，可以通过其他方式下载到一个 headers 目录内，然后启动本地服务器

+ https://electronjs.org/headers/v8.0.0/node-v8.0.0-headers.tar.gz
+ https://electronjs.org/headers/v8.0.0/SHASUMS256.txt

```sh
HOME=~/.electron-gyp \
node-gyp rebuild \
  --target=8.0.0 \
  --arch=x64 \
  --dist-url=http://localhost:8080/headers
```

生成的 nodegit 二进制包 见 ```./node_modules/nodegit/build/Release/nodegit.node```