import { app, BrowserWindow} from 'electron'
import path from 'path'

// app 控制应用程序的生命周期
// BrowserWindow 创建并管理应用程序窗口


let win: BrowserWindow | null

const createWindow = () => {

    win = new BrowserWindow({
        webPreferences: {
            devTools: true,
            nodeIntegration: true,
            contextIsolation: false
        },
    })

    if (app.isPackaged) {
        win.loadFile(path.join(__dirname, '../index.html'))
    } else {
        win.loadURL(`http://localhost:5173`)
    }
}

app.whenReady().then(() => {
    createWindow()
})