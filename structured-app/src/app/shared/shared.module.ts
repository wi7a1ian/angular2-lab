import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { FilterTextComponent } from './filter-text/filter-text.component';
import { FilterTextService }   from './filter-text/filter-text.service';
import { InitCapsPipe }        from './init-caps.pipe';
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    FilterTextComponent,
    InitCapsPipe
  ],
  providers: [FilterTextService],
  exports: [
    CommonModule,
    FormsModule,
    FilterTextComponent,
    InitCapsPipe
  ]
})
export class SharedModule { }

/*

Do create a feature module named SharedModule in a shared folder (e.g. app/shared/shared.module.ts defines SharedModule).

Do declare components, directives, and pipes in a shared module when those items will be re-used and referenced by the components declared in other feature modules.

Consider using the name SharedModule, when the contents of a shared module are referenced across the entire application.

Do not provide services in shared modules. Services are usually singletons that are provided once for the entire application or in a particular feature module.

Do import all modules required by the assets in the SharedModule (e.g. CommonModule and FormsModule).

Why? SharedModule will contain components, directives and pipes that may need features from another common module (e.g. ngFor in CommonModule).

Do declare all components, directives, and pipes in the SharedModule.

Do export all symbols from the SharedModule that other feature modules need to use.

Why? SharedModule exists to make commonly used components, directives and pipes available for use in the templates of components in many other modules.

Avoid specifying app-wide singleton providers in a SharedModule. Intentional singletons are OK. Take care.

Why? A lazy loaded feature module that imports that shared module will make its own copy of the service and likely have undesireable results.

Why? You don't want each module to have its own separate instance of singleton services. Yet there is a real danger of that happening if the SharedModule provides a service.

Example:

src
  app
    shared
      shared.module.ts
      init-caps.pipe.ts|spec.ts
      text-filter.component.ts|spec.ts
      text-filter.service.ts|spec.ts
    app.component.ts|html|css|spec.ts
    app.module.ts
    app-routing.module.ts
  main.ts
  index.html

*/