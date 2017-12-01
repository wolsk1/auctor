export {}
declare global {
    function require(arg: string): string;
    const DEBUG__: boolean;
    const SERVER_URL__: string;
    const _appSettings: any;
    interface String {
        capitalize(): string;
    }
    let google: any;
}
