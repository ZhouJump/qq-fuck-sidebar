// 运行在 Electron 主进程 下的插件入口
const fs = require("fs")
const path = require("path")
const pluginPath = path.dirname(__dirname).replace(/\\/g, "/")
const configFilePath = `${pluginPath}/config.json`
const { BrowserWindow, ipcMain } = require("electron")
let config = JSON.parse(fs.readFileSync(configFilePath, "utf-8"))
// 创建窗口时触发
module.exports.onBrowserWindowCreated = window => {
    // window 为 Electron 的 BrowserWindow 实例
    window.on("ready-to-show", () => {
        console.log("ready-to-show")
    });
}

async function fuckStart(){

}

ipcMain.handle("fuck_sidebar.getConfig", (event, message) => {
    return config
})

ipcMain.handle("fuck_sidebar.getSettingsView", (event, message) => {
    return fs.readFileSync(`${pluginPath}/src/settings.html`, "utf-8")
})

ipcMain.handle("fuck_sidebar.saveConfig", (event, message) => {
    config = message
    fs.writeFileSync(configFilePath, message)
    fuckStart()
    return true
})
