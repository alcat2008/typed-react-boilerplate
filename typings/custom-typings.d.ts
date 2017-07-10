
// declare let process: {
//   env: {
//     NODE_ENV: string
//   }
// };

declare const __DEV__: boolean;
declare const __PROD__: boolean;

declare module '*.less' {
  const content: any;
  export default content;
  // const styles: any;
  // export default styles;
}

// for redux devtools extension
declare interface Window {
  devToolsExtension?(): (args?: any) => any;
}
