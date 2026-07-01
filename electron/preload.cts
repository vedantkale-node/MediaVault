import { contextBridge } from "electron";
import { ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  version: "1.0.0",
  pickFolder: () => ipcRenderer.invoke("pick-folder"),
  readFolder: (path: string) => ipcRenderer.invoke("read-folder", path),
  getLastFolder: () => ipcRenderer.invoke("get-last-folder"),
  saveLastFolder: (folder: string) =>
    ipcRenderer.invoke("save-last-folder", folder),
  getThumbnail: (file: any) => ipcRenderer.invoke("get-thumbnail", file),
  getLastPlayed: () => ipcRenderer.invoke("get-last-played"),
  saveLastPlayed: (filePath: string) =>
    ipcRenderer.invoke("save-last-played", filePath),
  getVolume: () => ipcRenderer.invoke("get-volume"),
  saveVolume: (volume: number) => ipcRenderer.invoke("save-volume", volume),
});
