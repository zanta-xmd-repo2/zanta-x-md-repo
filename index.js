const {
default: makeWASocket,
useMultiFileAuthState,
DisconnectReason,
jidDecode,
jidNormalizedUser,
getContentType,
fetchLatestBaileysVersion,
downloadContentFromMessage,
Browsers

} = require('@whiskeysockets/baileys')

const l = console.log 
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./lib/functions')
const fs = require('fs')
const P = require('pino')
const config = require('./config')
const qrcode = require('qrcode-terminal')
const util = require('util')
const { sms,downloadMediaMessage } = require('./lib/msg')
const axios = require('axios')
const { File } = require('megajs')
const FileType = require('file-type');


const ownerNumber = ['94742876968']

//===================SESSION-AUTH============================
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
if(!config.SESSION_ID) return console.log('Please add your session to SESSION_ID env !!')
const sessdata = config.SESSION_ID
const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
filer.download((err, data) => {
if(err) throw err
fs.writeFile(__dirname + '/auth_info_baileys/creds.json', data, () => {
console.log(" Session downloaded ✅")
})})}

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

//=============================================
///mongo db connet ==========
async function connectToWA() {
const connectDB = require(`./lib/mongodb`)
connectDB();
const {readEnv} = require('./lib/database')
const config = await readEnv();
const prefix = config.PREFIX
      //=======(((((((((((  
//=====================
console.log("Connecting TitanX-MD 🧬...");
const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
var { version } = await fetchLatestBaileysVersion()

const conn = makeWASocket({
        logger: P({ level: 'silent' }),
        printQRInTerminal: false,
        browser: Browsers.macOS("Firefox"),
        syncFullHistory: true,
        auth: state,
        version
        })
    
conn.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
connectToWA()
}
} else if (connection === 'open') {
console.log(' Is Installing... ')
const path = require('path');
fs.readdirSync("./plugins/").forEach((plugin) => {
if (path.extname(plugin).toLowerCase() == ".js") {
require("./plugins/" + plugin);
}
});
console.log('Plugins installed successful ✅')
console.log(' connected to whatsapp ✅')


let up = `
*_🧚‍♂️✨💫 𝗭𝗔𝗡𝗧𝗔-𝗫𝗠𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 𝗧𝗢 𝗬𝗢𝗨𝗥 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣... 🪀💯✅_*

> *😻👇YOUR DEFAULT SETTINGS HERE ✨💻*

*💻𝙼𝙾𝙳𝙴 -:* public
*🤖𝙰𝙽𝚃𝙸 𝙱𝙾𝚃 -:* false
*🔖𝙰𝙽𝚃𝙸 𝙱𝙰𝙳 -:* false
*🔗𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺 -:* false
*🔊𝙰𝚄𝚃𝙾 𝚅𝙾𝙸𝙲𝙴 -:* false
*💫𝙱𝙾𝚃 𝙿𝚁𝙴𝙵𝙸𝚇 -:* .
*💯𝙰𝙽𝚃𝙸 𝙳𝙴𝙻𝙴𝚃𝙴 -:* true
*😎𝚁𝙴𝙰𝙳 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 -:* true
*✨𝙰𝙻𝚆𝙰𝚈𝚂 𝙾𝙽𝙻𝙸𝙽𝙴 -:* false
*🎙️𝙰𝚄𝚃𝙾 𝚁𝙴𝙲𝙾𝚁𝙳𝙸𝙽𝙶 -:* false
*🧚‍♂️𝙰𝚄𝚃𝙾 𝚁𝙴𝙰𝙳 𝚂𝚃𝙰𝚃𝚄𝚂 -:* true

*𝘜𝘴𝘦 .𝘴𝘦𝘵𝘵𝘪𝘯𝘨𝘴 𝘤𝘰𝘮𝘮𝘢𝘯𝘥 𝘵𝘰 𝘤𝘩𝘢𝘯𝘨𝘦 𝘺𝘰𝘶𝘳 𝘴𝘦𝘵𝘵𝘪𝘯𝘨𝘴...😻🛠️🤍*

*😚 𝐒𝐓𝐀𝐘 𝐂𝐎𝐍𝐍𝐄𝐂𝐓 𝐖𝐈𝐓𝐇 𝐙𝐀𝐍𝐓𝐀-𝐗𝐌𝐃♥️*

> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 🗿*
`;

conn.sendMessage('94760879639@s.whatsapp.net', { image: { url: `https://files.catbox.moe/y2z9li.jpg` }, caption: up })

}
})
conn.ev.on('creds.update', saveCreds)  

conn.ev.on('messages.upsert', async(mek) => {
mek = mek.messages[0]
if (!mek.message) return	
mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS === "true"){
await conn.readMessages([mek.key])
}
const m = sms(conn, mek)
const type = getContentType(mek.message)
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
const senderNumber = sender.split('@')[0]
const botNumber = conn.user.id.split(':')[0]
const pushname = mek.pushName || 'Sin Nombre'
const isMe = botNumber.includes(senderNumber)
const isOwner = ownerNumber.includes(senderNumber) || isMe
const botNumber2 = await jidNormalizedUser(conn.user.id);
const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const isReact = m.message.reactionMessage ? true : false
const reply = (teks) => {
conn.sendMessage(from, { text: teks }, { quoted: mek })
}

conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
              let mime = '';
              let res = await axios.head(url)
              mime = res.headers['content-type']
              if (mime.split("/")[1] === "gif") {
                return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
              }
              let type = mime.split("/")[0] + "Message"
              if (mime === "application/pdf") {
                return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
              }
              if (mime.split("/")[0] === "image") {
                return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
              }
              if (mime.split("/")[0] === "video") {
                return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
              }
              if (mime.split("/")[0] === "audio") {
                return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
              }
            }
if (isCmd && config.READ_CMD === "true") {
              await conn.readMessages([mek.key])  // Mark command as read
          }
if(!isOwner && config.MODE === "private") return
if(!isOwner && isGroup && config.MODE === "inbox") return
if(!isOwner && !isGroup && config.MODE === "groups") return

//================ownerreact==============
if(senderNumber.includes("+4742876968")){
if(isReact) return
m.react("👨‍💻")
}
       if (config.ALLWAYS_OFFLINE === "true") {
        conn.sendPresenceUpdate('unavailable'); // Sets the bot's last seen status
    }

//=============== AUTO REACT ===============

if (config.AUTO_REACT === 'true') { 
  if (isReact) return;
  const emojis = ["💗", "🔥", "✨", "💯", "♠️", "🪄", "🔗", "🫧", "🪷", "🦠", "🌺", "🐬", "🦋", "🍁", "🌿", "🍦", "🌏", "✈️", "❄️", "🎉", "🎊"];
    
  emojis.forEach(emoji => {
  m.react(emoji);
  });
  }

//////////////////////////////
if (config.AUTO_VOICE === 'true') {
  const url = 'https://github.com/DushanTechnic/TitanX-MD-Media/raw/refs/heads/main/autovoice/%E0%B7%84%E0%B7%99%E0%B6%BD%E0%B7%8A%E0%B6%BD%E0%B7%99%E0%B6%B1%E0%B7%8A%E0%B6%B1%E0%B6%91%E0%B6%B4%E0%B7%8F%E0%B6%B8%E0%B7%94%E0%B6%9A%E0%B7%99%E0%B6%BD%E0%B7%92%E0%B6%BA%E0%B7%92.mp3'
  let { data } = await axios.get(url)
  for (vr in data){
  if((new RegExp(`\\b${vr}\\b`,'gi')).test(body)) conn.sendMessage(from,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:mek})   
   }}
////////////////////////////////////////

const events = require('./command')
const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
if (isCmd) {
const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
if (cmd) {
if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key }})

try {
cmd.function(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply});
} catch (e) {
console.error("[PLUGIN ERROR] " + e);
}
}
}
events.commands.map(async(command) => {
if (body && command.on === "body") {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (mek.q && command.on === "text") {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (
(command.on === "image" || command.on === "photo") &&
mek.type === "imageMessage"
) {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (
command.on === "sticker" &&
mek.type === "stickerMessage"
) {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
}});
//============================================================================ 

})
}
app.get("/", (req, res) => {
res.send("Yuresh-MD");
});
app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
setTimeout(() => {
connectToWA()
}, 4000);