# AWS Lambda Poppler

Poppler execution helpers for AWS Lambda Node.js environment.

## Install

```
$ yarn add @jeylabs/aws-lambda-poppler
```

## Available methods

These are the currently supported methods.

- [x] pdfinfo - `useInfo`
- [x] pdftohtml - `useHTML`
- [x] pdftotext - `useText`
- [x] pdftoppm - `usePixmap`
- [x] pdftops - `usePostScript`

## How to

```js
const {usePixmap} = require('@jeylabs/aws-lambda-poppler');

module.exports.handler = async () => {
  // assuming there is a document.pdf file inside /tmp dir
  // original file will be deleted afterwards

  return usePixmap('document.pdf'); // returns [document/page-1.png, document/page-2.png]
};
```

## See Also

- [aws-lambda-poppler-layer](https://github.com/jeylabs/aws-lambda-poppler-layer)

# Inspired by

- [aws-lambda-libreoffice](https://raw.githubusercontent.com/shelfio/aws-lambda-libreoffice)

## License

MIT © [jeylabs](https://jeylabs.com/)
