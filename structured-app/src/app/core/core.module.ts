import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerService } from './logger.service';
import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';

import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NavComponent, SpinnerComponent],
  declarations: [NavComponent, SpinnerComponent],
  providers: [LoggerService, SpinnerService]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }

/*

Consider collecting numerous, auxiliary, single-use classes inside a core module to simplify the apparent structure of a feature module.

Consider calling the application-wide core module, CoreModule. 
Importing CoreModule into the root AppModule reduces its complexity and emphasizes its role as orchestrator of the application as a whole.

Do create a feature module named CoreModule in a core folder (e.g. app/core/core.module.ts defines CoreModule).

Do put a singleton service whose instance wil be shared throughout the application in the CoreModule (e.g. ExceptionService and LoggerService).

Do import all modules required by the assets in the CoreModule (e.g. CommonModule and FormsModule).

Why? CoreModule provides one or more singleton services. Angular registers the providers with the app root injector, 
making a singleton instance of each service available to any component that needs them, whether that component is eagerly or lazily loaded.

Why? CoreModule will contain singleton services. When a lazy loaded module imports these, it will get a new instance and not the intended app-wide singleton.

Do gather application-wide, single use components in the CoreModule. 
Import it once (in the AppModule) when the app starts and never import it anywhere else. (e.g. NavComponent and SpinnerComponent).

Why? Real world apps can have several single-use components (e.g., spinners, message toasts, and modal dialogs) that appear only in the AppComponent template. 
They are not imported elsewhere so they're not shared in that sense. Yet they're too big and messy to leave loose in the root folder.

Avoid importing the CoreModule anywhere except in the AppModule.

Why? A lazily loaded feature module that directly imports the CoreModule will make its own copy of services and likely have undesireable results.

Why? An eagerly loaded feature module already has access to the AppModule's injector, and thus the CoreModule's services.

Do export all symbols from the CoreModule that the AppModule will import and make available for other feature modules to use.

Why? CoreModule exists to make commonly used singleton services available for use in the many other modules.

Why? You want the entire app to use the one, singleton instance. You don't want each module to have its own separate instance of singleton services. 
Yet there is a real danger of that happening accidentally if the CoreModule provides a service.

Example:

src
  app
    core
      core.module.ts
      logger.service.ts|spec.ts
      nav
        nav.component.ts|html|css|spec.ts
      spinner
        spinner.component.ts|html|css|spec.ts
        spinner.service.ts|spec.ts
    app.component.ts|html|css|spec.ts
    app.module.ts
    app-routing.module.ts
  main.ts
  index.html

Effect:

AppModule is a little smaller because many app/root classes have moved to other modules.
AppModule is stable because you will add future components and providers to other modules, not this one. 
AppModule delegates to imported modules rather than doing work. AppModule is focused on its main task, orchestrating the app as a whole.

*/