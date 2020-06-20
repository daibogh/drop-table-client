declare module '*.svg' {
    const content: any;
    export default content;
}
declare module '*.jpg' {
  const content: any;
  export default content;
}

declare type DT<T> = T extends null | undefined
  ? never
  : T extends object
  ? { [P in keyof T]: DT<T[P]> }
  : NonNullable<T>
