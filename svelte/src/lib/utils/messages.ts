export function throwErrorMessage(msg: string | null) {
  return {
    err: msg ?? 'Invalid params.'
  };
}
