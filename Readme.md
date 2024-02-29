# @ctx-core/html

Utility html functions.

## class_

class_ has the same functionality as clsx yet is 101 B, or < 50% the size of clsx. It's also a good way to break up tailwind class usage...which is useful for reordering classes into logical groups.

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

More docs.
