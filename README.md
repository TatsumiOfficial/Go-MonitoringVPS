# Monitor Penggunaan CPU dan RAM

Script ini dapat digunakan untuk memonitor penggunaan CPU dan RAM yang digunakan pada sistem. Informasi penggunaan CPU dan RAM akan dikirimkan ke dalam sebuah grup Telegram setiap 1 menit.

## Cara Penggunaan

1. Clone atau download repository ini.
2. Instal dependencies dengan menjalankan perintah `npm install`.
3. Masukkan token API dan ID chat grup Telegram Anda pada file `index.js`.
4. Jalankan script dengan menjalankan perintah `node index.js`.

## Dependencies

Script ini membutuhkan package berikut ini:

- [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api)

Untuk menginstall dependencies yang dibutuhkan, Anda bisa menjalankan perintah berikut ini pada terminal atau command prompt:

npm install

Jika Anda menggunakan npm versi 6 atau yang lebih baru, Anda juga dapat menginstall dependencies dengan menambahkan flag `--save` atau `--save-prod`, seperti berikut ini:

npm install --save node-telegram-bot-api
npm install --save-prod node-telegram-bot-api



## Lisensi
Script ini tersedia di bawah lisensi MIT. Lihat file [LICENSE](LICENSE)
