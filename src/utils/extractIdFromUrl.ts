export const extractIdFromUrl = (url: string) => url.match(/people\/(\d+)\//)?.[1] ?? '';
