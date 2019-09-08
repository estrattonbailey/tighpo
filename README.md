# tighpo
Monitor keystrokes for a specific string and fire a callback when typed.

**Note:** I'm not sure this could be used maliciously, but obviously do not do
that. This library is intended for fun things like easter eggs.

## Install 
```bash
npm i tighpo --save
```

# Usage
```javascript
import tipho from 'srraf'

tighpo('say hello', () => {
  alert('hello')
})
```

By default, the above will trigger the callback every time the string is
matched. To trigger it only once, pass `true` as the third argument.

```javascript
import tipho from 'srraf'

tighpo('say hello once', () => {
  alert(`hello, you won't see me again!`)
}, true)
```

The factory also returns a function. Call that to destroy the listener on
command:
```javascript
import tipho from 'srraf'

const destroy = tighpo('...', () => {
  // ...
})

destroy()
```

### Supported `keyCode` Mapping
```javascript
const codes = {
  65: 'a',
  66: 'b', 
  67: 'c',
  68: 'd',
  69: 'e',
  70: 'f',
  71: 'g',
  72: 'h',
  73: 'i',
  74: 'j',
  75: 'k',
  76: 'l',
  77: 'm',
  78: 'n',
  79: 'o',
  80: 'p',
  81: 'q',
  82: 'r',
  83: 's',
  84: 't',
  85: 'u',
  86: 'v',
  87: 'w',
  88: 'x',
  89: 'y',
  90: 'z',
  32: ' ',
  191: '/'
  13: '↩'
}
```

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
