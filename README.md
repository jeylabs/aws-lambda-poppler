# aws-lambda-poppler

Inspired by [aws-lambda-libreoffice](https://raw.githubusercontent.com/shelfio/aws-lambda-libreoffice)

## Install

```
$ yarn add @jeylabs/aws-lambda-poppler
```

```js
const {convert} = require('@jeylabs/aws-lambda-poppler');

module.exports.handler = async () => {
  // assuming there is a document.pdf file inside /tmp dir
  // original file will be deleted afterwards

  return convert('document.pdf'); // returns [/tmp/document/1.png, /tmp/document/2.png]
};
```

## See Also

- [aws-lambda-poppler-layer](https://github.com/jeylabs/aws-lambda-poppler-layer)

## License

MIT © [jeylabs](https://jeylabs.com/)
