import { app } from 'electron';

app.on('before-quit', () => console.log('before quit'));
app.on('will-quit', () => console.log('will quit'));
app.on('quit', () => console.log('quit'));

app.whenReady().then(() => {
  setTimeout(() => {
    app.quit()
  }, 2000);
});