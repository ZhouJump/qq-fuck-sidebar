// Electron 主进程 与 渲染进程 交互的桥梁
const { contextBridge, ipcRenderer } = require("electron");

// 在window对象下导出只读对象
contextBridge.exposeInMainWorld("fuck_sidebar", {
    getConfig: () => ipcRenderer.invoke(
        "fuck_sidebar.getConfig"
    ),
    saveConfig: (config) => ipcRenderer.invoke(
        "fuck_sidebar.saveConfig", config
    ),
    getSettingsView: () => ipcRenderer.invoke(
        "fuck_sidebar.getSettingsView"
    ),
});
