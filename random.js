const shell = require('shelljs');

const myExpenses = 'org.totschnig.myexpenses';
const habitica = 'com.habitrpg.android.habitica';
const emulatorRoute = 'Users/Ana/AppData/Local/Android/Sdk/platform-tools';
const numberOfIterations = 500;

const startRandomTest = (app, num) => {
    shell.cd('/');
    shell.cd(emulatorRoute);
    shell.exec(`adb shell monkey -p ${app} -v ${num}`);
    shell.exec(`adb logcat >> MonkeyTest_${app}Log.txt`);
}

startRandomTest(habitica,numberOfIterations);