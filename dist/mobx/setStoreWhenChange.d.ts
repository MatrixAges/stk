export interface StoreOptions {
    get?: (key: string) => Promise<any>;
    set?: (key: string, value: any) => Promise<any>;
}
interface Options extends StoreOptions {
    namespace?: string;
    useSession?: boolean;
}
type KeyMap = Record<string, string | ((v: any) => any) | Handlers> | string;
interface Handlers {
    local_key?: string;
    fromStorage: (v: any) => any;
    toStorage: (v: any) => any;
}
declare const _default: (keys: Array<KeyMap>, instance: any, options?: Options) => Promise<import("mobx").Lambda>;
export default _default;
