const basePath = process.env.NODE_ENV === 'production' ? '/shivcctv' : '';

export function assetUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
