import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Masukkan teks.\nContoh: *.neon Skizo || Team';

  m.reply('Tunggu sebentar...');

  let text = encodeURIComponent(args.join(' '));
  let apiUrl = `https://api.lolhuman.xyz/api/party-neon?text=${text}&apikey=haikalgans`;

  let res = await fetch(apiUrl);
  let buffer = await res.buffer();

  await conn.sendFile(m.chat, buffer, 'neon.jpg', '', m, false, {
    mimetype: 'image/jpeg',
    thumbnail: buffer,
  });
};

handler.help = ['neon'];
handler.tags = ['image'];
handler.command = /^(neon)$/i;
handler.limit = true;

export default handler;