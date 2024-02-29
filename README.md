# @ctx-core/html

Utility html functions.

## class_

class_ has the same functionality as [clsx](https://github.com/lukeed/clsx/) yet is 101 B, or < 50% the size of clsx. It's also a good way to break up tailwind class usage...which is useful for reordering classes into logical groups.

This example uses relementjs, but any UI library can be used.

```tsx
import { class_ } from '@ctx-core/html'
import { div_ } from 'relementjs/html'
div_({
  class: class_(
    ['foo', ['bar'], 0 && ['will-not-render']],
		{ 'font-bold': is_bold },
    'text-white',
		'bg-black')
}, 'Hello!')
```

This library is implemented in [ctx-core](https://github.com/ctx-core/ctx-core) which has 0 dependencies & has a wide breadth of modules. Importing `class_` in the above example would look like:

```ts
import { class_ } from 'ctx-core/html'
```

More docs to come.
