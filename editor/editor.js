const htmlEditor = CodeMirror(document.getElementById('html'), {
  value: "<h1>Hello!</h1>",
  mode: "xml",
  lineNumbers: true
});
const cssEditor = CodeMirror(document.getElementById('css'), {
  value: "h1 { color: #007acc; }",
  mode: "css",
  lineNumbers: true
});
const jsEditor = CodeMirror(document.getElementById('js'), {
  value: "console.log('Hello!');",
  mode: "javascript",
  lineNumbers: true
});
const preview = document.getElementById('preview');

function update() {
  const source = `
    <html>
      <head>
        <style>${cssEditor.getValue()}</style>
      </head>
      <body>
        ${htmlEditor.getValue()}
        <script>${jsEditor.getValue()}<\/script>
      </body>
    </html>
  `;
  preview.srcdoc = source;
}

htmlEditor.on('change', update);
cssEditor.on('change', update);
jsEditor.on('change', update);

update();