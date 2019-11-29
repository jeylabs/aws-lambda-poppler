# AWS Lambda Poppler

Poppler execution helpers for AWS Lambda Node.js environment.

## Install

```
$ yarn add @jeylabs/aws-lambda-poppler
```

## Available methods

These are the currently supported methods.

- [useInfo](https://linux.die.net/man/1/pdfinfo)
- [useText](https://linux.die.net/man/1/pdftotext)
- [useHTML](https://linux.die.net/man/1/pdftohtml)
- [usePixmap](https://linux.die.net/man/1/pdftoppm)
- [usePostScript](https://linux.die.net/man/1/pdftops)

## How to use

```js
const {usePixmap} = require('@jeylabs/aws-lambda-poppler');

module.exports.handler = () => {
  // assuming there is a document.pdf file inside /tmp dir
  return usePixmap('document.pdf'); // returns [document/page-1.png, document/page-2.png]
};
```

## See Also

- [aws-lambda-poppler-layer](https://github.com/jeylabs/aws-lambda-poppler-layer)

## Thanks

- Inspired by [aws-lambda-libreoffice](https://raw.githubusercontent.com/shelfio/aws-lambda-libreoffice)

## License

MIT © [jeylabs](https://jeylabs.com/)
