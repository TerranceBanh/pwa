if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw1.js')
      .then(reg => reg)
      .catch(err => console.log(`Service Worker: Error: ${err}`))
  })
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw2.js')
      .then(reg => reg)
      .catch(err => console.log(`Service Worker: Error: ${err}`))
  })
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw3.js')
      .then(reg => reg)
      .catch(err => console.log(`Service Worker: Error: ${err}`))
  })
}