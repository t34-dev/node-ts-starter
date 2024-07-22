export function parseBoolean(str = ''): boolean {
  return str.trim().toLowerCase() === 'true';
}
