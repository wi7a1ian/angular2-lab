export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}

/*

Do guard against reimporting of CoreModule and fail fast by adding guard logic.

Why? Guards against reimporting of the CoreModule.

Why? Guards against creating multiple instances of assets intended to be singletons.

*/