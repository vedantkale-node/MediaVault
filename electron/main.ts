import { app, BrowserWindow } from "electron";
import path from "node:path";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
  });

  win.webContents.openDevTools();

  win.loadFile(path.join(process.cwd(), "src", "renderer", "index.html"));
};

app.whenReady().then(createWindow);
