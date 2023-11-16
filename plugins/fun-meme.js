import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  m.reply('Tunggu sebentar...');

  let apiUrl = 'https://api.lolhuman.xyz/api/randommeme?apikey=haikalgans';
  
  let res = await fetch(apiUrl);
  let json = await res.json();

  if (json.caption && json.media) {
    let caption = json.caption;
    let mediaUrl = json.media;
    
    await conn.sendFile(m.chat, mediaUrl, '', caption, m);
  } else {
    throw 'Gagal memuat meme acak';
  }
};

handler.help = ['meme'];
handler.tags = ['fun'];
handler.command = /^(meme)$/i;
handler.limit = true;

export default handler;