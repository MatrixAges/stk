interface Options {
    namespace?: string;
    useSession?: boolean;
    get?: (key: string) => Promise<any>;
    set?: (key: string, value: any) => Promise<any>;
}
type KeyMap = Record<string, string | ((v: any) => any) | Handlers> | string;
interface Handlers {
    fromStorage: (v: any) => any;
    toStorage: (v: any) => any;
}
declare const _default: (keys: Array<KeyMap>, instance: any, options?: Options) => Promise<import("mobx").Lambda>;
export default _default;
