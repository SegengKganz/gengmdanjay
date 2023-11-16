import fs from 'fs'
let handler = async (m, { conn }) => {
	let tqto = `
「 *DONASI* 」

╭─「 • *ᴘᴜʟꜱᴀ* • 」
│ • *AXIS* 6283846677065
╰─────

╭─「 • *ᴇ-ᴡᴀʟʟᴇᴛ* • 」
│ • Dana:6283846677065
╰─────
*NOTE* : QRIS DI ATAS
_◛˖ ᴛᴇʀɪᴍᴀᴋᴀꜱɪʜ ᴜɴᴛᴜᴋ ʏᴀɴɢ ꜱᴜᴅᴀʜ ʙᴇʀᴅᴏɴᴀꜱɪ_
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/9e3e3d1f6c89ee9941659.jpg' }, caption: tqto }, m)
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|dns)$/i;

export default handler;