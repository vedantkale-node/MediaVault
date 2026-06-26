export {};

declare global {
  interface Window {
    api: {
      version: string;
      pickFolder: () => Promise<string | null>;
      readFolder: (folder: string) => Promise<any[]>;
      getLastFolder: () => Promise<string | null>;
      saveLastFolder: (folder: string) => Promise<void>;
    };
  }
}
