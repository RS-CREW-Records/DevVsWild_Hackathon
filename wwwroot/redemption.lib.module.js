export function afterStarted(blazor) {
    var customScript = document.createElement('script');
    customScript.setAttribute('src', 'mapload.js');
    document.head.appendChild(customScript);
  }