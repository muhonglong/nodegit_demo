const {ipcRenderer: ipc} = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  ipc.invoke('git', 'version').then(ret => {
    document.writeln(`nodegit version ${ret}`);
  });
});