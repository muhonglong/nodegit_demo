const path = require('path');
const {app, BrowserWindow, ipcMain: ipc} = require('electron');
const git = require('nodegit');

ipc.handle('git', async (e, method, ...args) => {
  switch (method) {
    case 'version':
      return git.version;
    default:
      return `git ${method} ${args.join(' ')}`;
  }
});

app.once('ready', () => {
  const win = new BrowserWindow({
    title: 'NodeGit Demo',
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: true,
      webviewTag: true,
      nodeIntegration: false
    }
  });
  win.setMenuBarVisibility(false);
  win.loadURL(`file://${__dirname}/index.html`);
});