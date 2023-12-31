declare namespace NodeJS {
  interface ProcessEnv {
    readonly PORT: number;
    readonly DB_NAME: string;
    readonly DB_USER: string;
    readonly DB_PASSWORD: string;
    readonly DB_HOST: string;
    readonly DB_PORT: number;
  }
}
