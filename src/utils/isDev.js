/**
 * Development mode of the app: hints in the console only for the developer.
 * The bundler of the app (Vite, webpack) replaces process.env.NODE_ENV, the library build keeps it.
 * Without a bundler (UMD in the browser) there is no process: no hints.
 *
 * @return {boolean}
 */
export function isDev() {
  try {
    return process.env.NODE_ENV !== "production";
  } catch {
    return false;
  }
}
