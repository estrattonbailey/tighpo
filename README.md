# tighpo
Monitor keystrokes for a specific string and fire a callback when typed.

**Note:** I'm not sure this could be used maliciously, but obviously do not do
that. This library is inteded for fun things like easter eggs.

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

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
