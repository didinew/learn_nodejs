import { app, BrowserWindow } from "electron";
import path from "path";
let win;
const createWindow = () => {
  win = new BrowserWindow({
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "../index.html"));
  } else {
    win.loadURL(`http://localhost:5173`);
  }
};
app.whenReady().then(() => {
  createWindow();
});
