import { app, screen, BrowserWindow } from 'electron';

app.on('ready', () => {
  const { width: maxWidth, height: maxHeight } = screen.getPrimaryDisplay().workAreaSize;
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 400,
    maxWidth,
    maxHeight,
    show: false,
    titleBarStyle: 'hidden',
    backgroundColor: '#2980b9',
    webPreferences: {
      nodeIntegration: true
    }
  });

  window.on('ready-to-show', () => {
    window.show();
  });

  window.loadFile('renderer/index.html');
  window.webContents.openDevTools();
});