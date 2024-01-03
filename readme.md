# Formatingjs
adalah sebuah library NPM yang dirancang khusus untuk memudahkan pemformatan string dalam pengembangan web. Library ini menyediakan berbagai fungsi dan metode untuk memanipulasi teks dengan mudah dan efisien.

## Features

- **Easy Integration**: Simple and seamless integration with your applications.
- **Cross-Platform**: Works on various platforms, including Windows, macOS, and Linux.

## Installation

```bash
npm install formatingjs
```

## Usage
```javascript
const {
  joinString,
  countCharacters,
  reverseString,
  cutString,
  currencyFormat,
  replaceString,
} = require("../src/index");

const string = "Hello World!!";
const longString =
  "Sebelum kematiannya, Heiter berhasil memasukkan manusia magang muda bernama Fern ke Frieren. Didorong oleh hasrat sang elf untuk mengumpulkan segudang mantra sihir, pasangan ini memulai perjalanan tanpa tujuan, mengunjungi kembali tempat-tempat yang pernah dikunjungi para pahlawan dahulu kala. Sepanjang perjalanan mereka, Frieren perlahan-lahan menghadapi penyesalannya atas hilangnya kesempatan untuk menjalin ikatan yang lebih erat dengan rekan-rekannya yang kini telah meninggal. - Source Frieren My Anime List";

console.log(joinString(["Hello", "World", "!!"]));
console.log("\n");

console.log(countCharacters(string));
console.log("\n");

console.log(reverseString(string));
console.log("\n");

console.log(cutString(string, 8));
console.log("\n");

console.log(currencyFormat(100000, "id-ID", "currency", "IDR"));
console.log("\n");

console.log(replaceString(longString, "Frieren", "Elf", false));
console.log("\n");

console.log(replaceString(longString, "Frieren", "Elf"));
console.log("\n");

var body = longString;
body = replaceString(body, "mati", "ma*i", true);
body = replaceString(body, "hasrat", "has*at", true);
console.log(body);
console.log("\n");

```

## Output
```output
> formatingjs@1.0.0 test
> node test/test.js

Hello World !!


13


!!dlroW olleH


Hello Wo


Rp 100.000,00


Sebelum kematiannya, Heiter berhasil memasukkan manusia magang muda bernama Fern ke Elf. Didorong oleh hasrat sang elf untuk mengumpulkan segudang mantra sihir, pasangan ini memulai perjalanan tanpa tujuan, mengunjungi kembali tempat-tempat yang pernah dikunjungi para pahlawan dahulu kala. Sepanjang perjalanan mereka, Frieren perlahan-lahan menghadapi penyesalannya atas hilangnya kesempatan untuk menjalin ikatan yang lebih erat dengan rekan-rekannya yang kini telah meninggal. - Source Frieren My Anime List


Sebelum kematiannya, Heiter berhasil memasukkan manusia magang muda bernama Fern ke Elf. Didorong oleh hasrat sang elf untuk mengumpulkan segudang mantra sihir, pasangan ini memulai perjalanan tanpa tujuan, mengunjungi kembali tempat-tempat yang pernah dikunjungi para pahlawan dahulu kala. Sepanjang perjalanan mereka, Elf perlahan-lahan menghadapi penyesalannya atas hilangnya kesempatan untuk menjalin ikatan yang lebih erat dengan rekan-rekannya yang kini telah meninggal. - Source Elf My Anime List


Sebelum kema*iannya, Heiter berhasil memasukkan manusia magang muda bernama Fern ke Frieren. Didorong oleh has*at sang elf untuk mengumpulkan segudang mantra sihir, pasangan ini memulai perjalanan tanpa tujuan, mengunjungi kembali tempat-tempat yang pernah dikunjungi para pahlawan dahulu kala. Sepanjang perjalanan mereka, Frieren perlahan-lahan menghadapi penyesalannya atas hilangnya kesempatan untuk menjalin ikatan yang lebih erat dengan rekan-rekannya yang kini telah meninggal. - Source Frieren My Anime List
```

## Contributing
We welcome contributions! Please follow our contribution guidelines before submitting pull requests.

## License
This project is licensed under the [MIT](https://github.com/kikuKeii/formatingjs/blob/main/LICENSE) License - see the LICENSE file for details.

## Support
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/X8X031K5P)