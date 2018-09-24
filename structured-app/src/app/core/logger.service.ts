import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  log(msg: string) {
    console.log(msg);
  }

  error(msg: string) {
    console.error(msg);
  }

}

/*

Do limit logic in a component to only that required for the view. All other logic should be delegated to services.

Do move reusable logic to services and keep components simple and focused on their intended purpose.

Why? Logic may be reused by multiple components when placed within a service and exposed via a function.

Why? Logic in a service can more easily be isolated in a unit test, while the calling logic in the component can be easily mocked.

Why? Removes dependencies and hides implementation details from the component.

Why? Keeps the component slim, trim, and focused.

--

Do use services as singletons within the same injector. Use them for sharing data and functionality.

Why? Services are ideal for sharing methods across a feature area or an app.

Why? Services are ideal for sharing stateful in-memory data.

*/