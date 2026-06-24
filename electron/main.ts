import * as electron from "electron/main";
const { app, BrowserWindow } = electron;
import path from "node:path";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      preload: path.join(process.cwd(), "dist", "electron", "preload.cjs"),
    },
  });

  win.webContents.openDevTools();

  win.loadFile(path.join(process.cwd(), "src", "renderer", "index.html"));
};

app.whenReady().then(createWindow);
