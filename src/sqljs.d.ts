declare module 'sql.js' {
  interface SqlJsStatic {
    Database: any;
    [key: string]: any;
  }

  export default function initSqlJs(config?: {
    locateFile?: (file: string) => string;
  }): Promise<SqlJsStatic>;
}