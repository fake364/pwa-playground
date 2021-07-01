import path from 'path';

export const consolelogInfo = (logObject: any) => console.log(`%c [INFO][${path.parse(__filename).base}]`, 'color: green', logObject);