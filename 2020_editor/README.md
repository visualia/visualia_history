> **Archived.** Was [`visualia/editor`](https://github.com/visualia/editor) (2020-03 → 2020-04). Microsoft's Monaco code editor (the editor inside VS Code) packaged as a ready-to-import ES module, served from GitHub Pages so Visualia pages could add a live code editor with one script tag.
> Full history and branches are kept in this repo (branches named `2020_editor/…`).

## About

https://github.com/microsoft/monaco-editor packaged as ready-to-use ESM module

## Usage

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://visualia.github.io/editor/dist/editor.min.css"
    />
    <style>
      #app {
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
    <script src="index.js" type="module"></script>
  </body>
</html>
```

**index.js**

```js
import * as monaco from "https://visualia.github.io/editor/dist/editor.js";

window.MonacoEnvironment = {
  getWorkerUrl: function (workerId, label) {
    return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
      importScripts('https://visualia.github.io/editor/dist/editor.worker.js');`)}`;
  },
};

monaco.editor.create(document.getElementById("app"), {
  value: "# Hello",
  language: "markdown",
});
```
