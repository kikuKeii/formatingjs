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
