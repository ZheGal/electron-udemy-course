const path = require('path')
const { Application } = require('spectron')

const appPath = () => {
  switch (process.platform) {
    case 'darwin':
      return path.join(__dirname, '..', '.tmp', 'mac', 'ElectronNextSteps.app', 'Contents', 'MacOS', 'ElectronNextSteps')
    case 'linux':
      return path.join(__dirname, '..', '.tmp', 'linux', 'ElectronNextSteps')
    case 'win32':
      return path.join(__dirname, '..', '.tmp', 'win-unpacked', 'ElectronNextSteps.exe')
    default:
      throw Error(`Unsupported platform ${process.platform}`)
  }
}
global.app = new Application({ path: appPath() })
