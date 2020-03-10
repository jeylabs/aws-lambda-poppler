# AWS Lambda Poppler

Poppler execution helpers for AWS Lambda Node.js environment.

## Install

NPM

```
$ npm install @jeylabs/aws-lambda-poppler --save
```

Yarn

```
$ yarn add @jeylabs/aws-lambda-poppler
```

## Available methods

These are the methods currently supported.

- [useFonts](https://linux.die.net/man/1/pdffonts)
- [useInfo](https://linux.die.net/man/1/pdfinfo)
- [useText](https://linux.die.net/man/1/pdftotext)
- [useHTML](https://linux.die.net/man/1/pdftohtml)
- [usePixmap](https://linux.die.net/man/1/pdftoppm)
- [usePostScript](https://linux.die.net/man/1/pdftops)
- [useCairo](https://manpages.debian.org/jessie/poppler-utils/pdftocairo.1.en.html)

## How to use

```js
const {usePixmap} = require('@jeylabs/aws-lambda-poppler');

module.exports.handler = () => {
  // assuming there is a document.pdf file inside /tmp dir
  return usePixmap('document.pdf'); // returns [document/page-1.png, document/page-2.png]
};
```

## How to configure

You can pass configrations as secound parameter to all methods, Please check the source to check supported options.

- Default working diractory is `/tmp`, you can modify it by passing your value with `root` key.
- If you want to supply more arguments you can pass your argument list with `options` key.

```js
usePixmap('document.pdf', {
  root: '/tmp',
  prefix: 'modified-page',
  options: ['-png', '-freetype no']
}); // returns [document/modified-page-1.png, document/modified-page-2.png]
```

## See Also

- [aws-lambda-poppler-layer](https://github.com/jeylabs/aws-lambda-poppler-layer)

## Thanks

- Inspired by [aws-lambda-libreoffice](https://github.com/shelfio/aws-lambda-libreoffice)

## License

MIT © [jeylabs](https://jeylabs.com/)
