# aws-lambda-poppler

Inspired by [aws-lambda-libreoffice](https://raw.githubusercontent.com/shelfio/aws-lambda-libreoffice)

## Install

```
$ yarn add @shelf/aws-lambda-libreoffice
```

```js
const {convert} = require('@jeylabs/aws-lambda-poppler');

module.exports.handler = async () => {
  // assuming there is a document.docx file inside /tmp dir
  // original file will be deleted afterwards

  return convert('document.docx'); // returns [/tmp/document/1.png, /tmp/document/2.png]
};
```

## See Also

- [aws-lambda-poppler-layer](https://github.com/jeylabs/aws-lambda-poppler-layer)

## License

MIT © [jeylabs](https://jeylabs.com/)
