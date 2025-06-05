export declare const convertFile: (file: Blob, type?: "base64" | "array_buffer") => Promise<string>;
export declare const downloadFile: (filename: string, text: string, ext: string, mime_type?: string) => void;
export declare const downloadImage: (filename: string, data_url: string, ext: string) => void;
export declare const uploadFile: (args?: {
    max_count?: number;
    accept?: string;
}) => Promise<false | File[]>;
