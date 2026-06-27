export {};

declare global {
  interface MediaFile {
    name: string;
    path: string;
    ext: string;
  }

  interface Window {
    api: {
      version: string;
      pickFolder: () => Promise<string | null>;
      readFolder: (folder: string) => Promise<MediaFile[]>;
      getLastFolder: () => Promise<string | null>;
      saveLastFolder: (folder: string) => Promise<void>;
    };
  }
}
