const { app, BrowserWindow } = require("electron");
const { dirname } = require("path");
const path = require ("path");
const url = require ("url");

let win ; 
function createWindow() {
    win = new BrowserWindow({ width: 700, height: 700});
    win.loadURL(
        url.format({

            pathname: path.join(--dirname, '/dist/index.html'),
            protocol: "file: ",
            slashes: true
        })
    );
    win.on ("closed", () => {
        win = null;
    });
}

// if you are using MACOS , we have to quit the app manually

app.on("windows-all-closed" , () => {
    if (process.platform !== "darwin") {
        app.quit ();
    }
});