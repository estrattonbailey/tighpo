let codes = {
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
  32: ' '
}

export default function tighpo (word, cb) {
  let listener

  let match = word

  function handler ({ keyCode }) {
    const letter = codes[keyCode]

    if (letter !== match.charAt(0)) return

    match = match.slice(1)

    if (!match) {
      cb && cb()
      document.removeEventListener('keydown', handler)
    }
  }

  listener = window.addEventListener('keydown', handler)
}
