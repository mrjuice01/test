
require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, Mimetype, generateWAMessage, prepareWAMessageMedia, prepareMessageFromContent,  areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const crypto = require('crypto')
const yts = require('youtube-yts')
const xfar = require('xfarr-api')
const request = require('request')
const asiftod = require("tod-api")
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
const { buffergif } = require('./lib/myfunc2')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { jadibot, listJadibot } = require('./lib/rentbot')
const { performance } = require('perf_hooks')
const { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
ig.setCookie("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { fetchBuffer } = require("./lib/myfunc2")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'

//TIME
const xtime = moment.tz('Asia/Karachi').format('HH:mm:ss')
const xdate = moment.tz('Asia/Karachi').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Karachi').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 } 
 
// read database game
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.math = []
let vote = db.data.others.vote = []

//read database jid
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'));
let autorep =JSON.parse(fs.readFileSync('./database/autoreply.json'));

//database auto reply
let asifysticker = JSON.parse(fs.readFileSync('./LunaMedia/theme/Media-Store-Karne-Ke-Liye/sticker.json'));
let asifyaudio = JSON.parse(fs.readFileSync('./LunaMedia/theme/Media-Store-Karne-Ke-Liye/audio.json'));
let asifyimage = JSON.parse(fs.readFileSync('./LunaMedia/theme/Media-Store-Karne-Ke-Liye/image.json'));
let asifyvideo = JSON.parse(fs.readFileSync('./LunaMedia/theme/Media-Store-Karne-Ke-Liye/video.json'));

module.exports = AsifOfc = async (AsifOfc, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°${themeemoji}π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await AsifOfc.decodeJid(AsifOfc.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const type = Object.keys(mek.message)[0]  
const from = mek.key.remoteJid      
const content = JSON.stringify(mek.message)

	    const cekUser = (users, id) => {     
var cek = null
Object.keys(user).forEach((i) => { 
if (user[i].id === id){ cek = i } })
if (cek !== null){ 
if (users == "id"){ return user[cek].id }
if (users == "emote"){ return user[cek].emote }
if (users == "timers"){ return user[cek].timers }
if (users == "hit"){ return user[cek].hit }
if (users == "star"){ return user[cek].star }
if (users == "alasan"){ return user[cek].alasan }
if (users == "ban"){ return user[cek].ban }
if (users == "premium"){ return user[cek].premium }
}
if (cek == null) return null
}
	
	         //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
     
        //hijack function
        const ordermessage = (m.msg.xtype === 'conversation' && m.msg.message.conversation) ? m.msg.message.conversation : (m.msg.xtype == 'imageMessage') && m.msg.message.imageMessage.caption ? m.msg.message.imageMessage.caption : (m.msg.xtype == 'videoMessage') && m.msg.message.videoMessage.caption ? m.msg.message.videoMessage.caption : (m.msg.xtype == 'extendedTextMessage') && m.msg.message.extendedTextMessage.text.startsWith(prefix) ? m.msg.message.extendedTextMessage.text : (m.msg.xtype == 'buttonsResponseMessage') && m.msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.msg.message.buttonsResponseMessage.selectedButtonId : (m.msg.xtype == 'listResponseMessage') && m.msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.msg.message.listResponseMessage.singleSelectReply.selectedRowId : (m.msg.xtype == 'templateButtonReplyMessage') && m.msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.msg.message.templateButtonReplyMessage.selectedId : ''   
        const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
	 
	
	    //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./LunaMedia/theme/Lunapicture.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		
	
// Group
        const groupMetadata = m.isGroup ? await AsifOfc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
	    const isBan = banned.includes(m.sender)
        const isPremium = premium.includes(m.sender)
        const Autoreply = m.isGroup ? autorep.includes(from) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        const solot = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]

//afk and other
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            
    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
    if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
    } else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
    }
    
    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
//function leveling & pick
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

// Public & Self
if (!AsifOfc.public) {
    if (!m.key.fromMe) return
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const hsjdh = randomNomor(5)

//auto react all message
/////AsifOfc.sendMessage(m.chat, {
          ////react: {
            ////////////////////////////////////////text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            ////key: m.key,
          /////}})

//auto recording all
    if (global.autoRecord) { if (m.chat) { AsifOfc.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { AsifOfc.sendPresenceUpdate('composing', m.chat) }
}

// total hit
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/AsifOfc-md/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/AsifOfc-md${moment.tz('Asia/Karachi').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}

//premium
const prem1 = `Hi bro  ${pushname} ${ucapanWaktu} \n\nThis feature is for premium members only, please buy premium to use this feature`
const prem2 = `Click the button below to buy premium`
const prem3 = [{buttonId: `${prefix}buypreim`,buttonText: {displayText: `BUY PREMIUM`,},type: 1,},]
blomdaftar = `${ucapanWaktu} @${sender.split("@")[0]} Kamu belum terdaftar di database cek private message mu untuk mendaftar`
limitabis = `*[YOUR LIMIT IS EXPIRED]*\nBuy limit in ${prefix}buylimit or buy premium to get unlimited limit`

    //reply fake
	//group target \\
const reply = (teks) => {
           AsifOfc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./LunaMedia/theme/Lunapicture.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }

	//button
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const butonna = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
AsifOfc.sendMessage(id, butonna, options)
}
const http = randomNomor(500)

//document
const kontol = {
	key : {
   participant : '0@s.whatsapp.net'
},
       message: {
    documentMessage: {
    title: `${pushname}`, 
    jpegThumbnail: thumb
  }
}
      }
sendMenuDoc = async (ID, doc, fileName, fileLength, caption, footer, time, buttons, boddy, thumbnail, thumbnailUrl, sourceUrl, mediaUrl, options) => {
let buttonMessage = {
  document: doc,
  mimetype: "application/pdf",
  fileName: fileName,
  fileLength: fileLength,
  caption: caption,
  footer: footer,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
     title: time,
     body: boddy,
     thumbnail: thumbnail,
     thumbnailUrl: thumbnailUrl,
     sourceUrl: sourceUrl,
     mediaUrl: mediaUrl,  
     renderLargerThumbnail: true,
     showAdAttribution: true,
     mediaType: 1
   }}
       }
   AsifOfc.sendMessage(m.chat, buttonMessage, options)
   }
                
        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await AsifOfc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await AsifOfc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        // Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`${mess.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await AsifOfc.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return AsifOfc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`})
        if (isAdmins) return AsifOfc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`})
        if (isCreator) return AsifOfc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`})
        await AsifOfc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AsifOfc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			AsifOfc.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }
        
          // Antiwame by asif
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await AsifOfc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AsifOfc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
AsifOfc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await AsifOfc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AsifOfc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
AsifOfc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by asif
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
          await AsifOfc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AsifOfc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			AsifOfc.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by asif
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic🦄']
sin =  tos[Math.floor(Math.random() * (tos.length))]
m.reply(sin)
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await AsifOfc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AsifOfc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
AsifOfc.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by asif
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await AsifOfc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AsifOfc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
AsifOfc.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by asif
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await AsifOfc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AsifOfc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
AsifOfc.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by asif
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await AsifOfc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AsifOfc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
AsifOfc.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by asif
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await AsifOfc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AsifOfc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
AsifOfc.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by asif
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await AsifOfc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AsifOfc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
AsifOfc.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by asif
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await AsifOfc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AsifOfc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
AsifOfc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by asif
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await AsifOfc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AsifOfc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
AsifOfc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by asif
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await AsifOfc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AsifOfc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
AsifOfc.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

        //auto reply by asif
  if (Autoreply)
        for (let anji of asifysticker){
				if (budy === anji){
					result = fs.readFileSync(`./LunaMedia/sticker/${anji}.webp`)
					AsifOfc.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  if (Autoreply)
			for (let anju of asifyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./LunaMedia/audio/${anju}.mp3`)
					AsifOfc.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			  if (Autoreply)
			for (let anjh of asifyimage){
				if (budy === anjh){
					result = fs.readFileSync(`./LunaMedia/image/${anjh}.jpg`)
					AsifOfc.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  if (Autoreply) 
					for (let anjh of asifyvideo){
				if (budy === anjh){
					result = fs.readFileSync(`./LunaMedia/video/${anjh}.mp4`)
					AsifOfc.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,buttons: buttons,headerType: 4}
AsifOfc.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: AsifOfc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, AsifOfc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
AsifOfc.ev.emit('messages.upsert', msg)
}

//guess song
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AsifOfc.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, AsifOfc.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await AsifOfc.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await AsifOfc.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    AsifOfc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    AsifOfc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) AsifOfc.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) AsifOfc.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) AsifOfc.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    AsifOfc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) AsifOfc.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) AsifOfc.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    AsifOfc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Don't tag him!
He's in AFK ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
You stop AFK${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
        //menu image randomizer
	let picaks = [flaming,fluming,flarun,flasmurf]
	let picak = picaks[Math.floor(Math.random() * picaks.length)]
	
	//menu doc randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

//swtich case
        switch(command) {
	case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Already Afk*${text ? ': ' + text : ''}`)
            }
            break	
                case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await AsifOfc.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await AsifOfc.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            AsifOfc.sendText(m.chat, `Successfully deleted TicTacToe session`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 does not exist`)
            } else throw '?'
            } catch (e) {
            m.reply('damaged')
            }
            }
            break
            case 'suitpvp':case 'rps': case 'rockpaperscissors':case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Complete your previous game`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return m.reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *Challenged* @${m.mentionedJid[0].split`@`[0]} *to play suit*

*Hi* @${m.mentionedJid[0].split`@`[0]} *Please type accept to accept or type reject to reject`
            this.suit[id] = {
            chat: await AsifOfc.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) AsifOfc.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    AsifOfc.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    AsifOfc.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    AsifOfc.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    AsifOfc.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    AsifOfc.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    AsifOfc.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    AsifOfc.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break

            case 'guess': {
                if (!args.join(" ")) throw `Example : ${prefix + command} song`
if (args[0] === "song") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
let anugas = await fetchJson('https://raw.githubusercontent.com/DGasif/Lunapicture.jpg/main/guessSong.json')
let result = anugas[Math.floor(Math.random() * anugas.length)]
let msg = await AsifOfc.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
AsifOfc.sendText(m.chat, `What is the name of this song?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
AsifOfc.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess the song' }, type: 1 }], `Time has run out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
}
}
break
            case 'matchquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                AsifOfc.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    m.reply("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
  case 'slot': {
            const somtoy = solot[Math.floor(Math.random() * solot.length)]
            let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Information* :\n_If you get 3 of the same fruit_\n_Means You Win_\n\n_Example : 🍒 : 🍒 : 🍒_ <=====`
            let buttons = [{ buttonId: 'slot', buttonText: { displayText: '🎰PLAY AGAIN🎰' }, type: 1 }]
            await AsifOfc.sendButtonText(m.chat, buttons, sloth, botname, m)
            }
            break
            case 'soulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await AsifOfc.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await AsifOfc.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: menst})
            }
            break
            case 'buttonmaker': {
            if (!isPremium) throw mess.premime
			if (!text) throw `Example : ${prefix + command} hi|hello`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `${themeemoji}` }, type: 1 }]
            await AsifOfc.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                AsifOfc.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await AsifOfc.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leavegc': {
                if (!isCreator) throw mess.owner
                await AsifOfc.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AsifOfc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AsifOfc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AsifOfc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AsifOfc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AsifOfc.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AsifOfc.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await AsifOfc.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await AsifOfc.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await AsifOfc.downloadAndSaveMediaMessage(quoted)
                await AsifOfc.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await AsifOfc.downloadAndSaveMediaMessage(quoted)
                await AsifOfc.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `━══━✞✪»˙·٠${themeemoji}●♥ 𝚃𝙰𝙶 𝙰𝙻𝙻 ♥●${themeemoji}٠·˙«✪✞━══━ 
 
 🌿 *Message : ${q ? q : 'empty'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                AsifOfc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            AsifOfc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - for sure\n*${prefix}devote* - for devote\n*${prefix}cekvote* - to check the vote\n*${prefix}deletevote* - to delete votes`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

╭══━✞✪ UPVOTE ✪✞══━╮
┃ 
┣ Total: ${vote[m.chat][1].length}
┃
┃ 
╰═══━┈

╭══━✞✪ DEVOTE ✪✞══━╮
┃ 
┣ Total: ${vote[m.chat][2].length}
┃
┃ 
╰═══━┈

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: AsifOfc.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            AsifOfc.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

╭══━✞✪ UPVOTE ✪✞══━╮
┃ 
┣ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
╰═══━┈

╭══━✞✪ DEVOTE ✪✞══━╮
┃ 
┣ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
╰═══━┈

*${prefix}deletevote* - to delete votes`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: AsifOfc.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            AsifOfc.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

╭══━✞✪ UPVOTE ✪✞══━╮
┃ 
┣ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
╰═══━┈

╭══━✞✪ DEVOTE ✪✞══━╮
┃ 
┣ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
╰═══━┈

*${prefix}deletevote* - to delete votes`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: AsifOfc.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            AsifOfc.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

╭══━✞✪ UPVOTE ✪✞══━╮
┃ 
┣ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
╰═══━┈

╭══━✞✪ DEVOTE ✪✞══━╮
┃ 
┣ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
╰═══━┈

*${prefix}deletevote* - to delete votes


©${AsifOfc.user.id}
`
AsifOfc.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            m.reply('Successfully Deleted Vote Session In This Group')
	    }
            break
case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await AsifOfc.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Successfully Closed The Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await AsifOfc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Successfully Opened The Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await AsifOfc.sendButtonText(m.chat, buttons, `Mode Group`, botname, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await AsifOfc.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Successfully Opened Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await AsifOfc.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Successfully Close Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await AsifOfc.sendButtonText(m.chat, buttons, `Mode Edit Info`, botname, m)

            }
            }
            break
case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const asifkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
AsifOfc.sendMessage(m.chat, { text: asifkak }, { quoted: m })
break
case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`It's Been Active Before`)
                db.data.chats[m.chat].mute = true
                m.reply(`${AsifOfc.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Not Activated Before`)
                db.data.chats[m.chat].mute = false
                m.reply(`${AsifOfc.user.name} has been unmuted in this group !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AsifOfc.sendButtonText(m.chat, buttons, `Mute Bot`, botname, m)
                }
             }
             break
case 'chatinfo': {
if (!m.quoted) m.reply('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return m.reply('The message was not sent by a bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
teks += ` ┗━${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
AsifOfc.sendTextWithMentions(m.chat, teks, m)
}
break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await AsifOfc.groupInviteCode(m.chat)
                AsifOfc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the value enable/disable'
                if (args[0] === 'enable') {
                    await AsifOfc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await AsifOfc.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                AsifOfc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'bug': {
            	if (!text) throw `Example : ${prefix + command} Report an error feature`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS FOR THE REPORT' }, type: 1 }]
            await AsifOfc.sendButtonText(ownernya, buttons, pjtxt, botname, m, {mentions: ments})
            let akhji = `Report Sent\nTo Owner @${ownernya.split('@')[0]}\n*Thank you for the report🙏*\n_Your number will be blocked_\n_If the Report is Only Created_`
            await AsifOfc.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments})
            }
            break
            
            case 'bctext': case 'broadcasttext': case 'broadcast':
			    if (!isCreator) throw mess.owner
		            if (!text) throw `Enter text`
		                            var data = await store.chats.all()
                            for (let i of data) {
                               AsifOfc.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
                               await sleep(1000)
                            }
                            break
case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!isCreator) throw mess.owner
        if (!text) throw `enter text`
        let getGroups = await AsifOfc.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let asifcast = groups.map(v => v.id)
        m.reply(` Broadcasting in ${asifcast.length} Group Chat, in ${asifcast.length * 1.5} seconds`)
        for (let i of asifcast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${text}`
if(/image/.test(mime)) {
let media = await quoted.download()
await AsifOfc.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await AsifOfc.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        m.reply(`Successfuly Broadcasted in ${asifcast.length} Groups`)      
        break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Message!!')
		let wokwol = await AsifOfc.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 AsifOfc.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await AsifOfc.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Karachi').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 AsifOfc.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'onlinelist': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    AsifOfc.sendText(m.chat, 'Online Member:\n\n' + online.map(v => '${themeemoji} @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `*Reply Video/Image With Caption* ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await AsifOfc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maximum 10 seconds!*')
                let media = await quoted.download()
                let encmedia = await AsifOfc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Send Image/Video With Caption* ${prefix + command}\nDuration *Video 1-9 Seconds*`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
case 'buypreim':
m.reply(`Chat owner bro, please type .owner`)
break
  case 'addprem':
if (!isCreator) throw mess.owner
if (!q) return m.reply(`Enter the sample number\n\nExample: \n${prefix}${command} 916909137213`)
if(isNaN(q)) return await m.reply('must be a number')
  if (q.includes(`+`)) return m.reply('Do not use + direct number 9169****')
prmi = args.join(" ")
premium.push(`${prmi}@s.whatsapp.net`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
m.reply(`* PREMIUM ADDED *\n\n${themeemoji} *ID*: ${prmi}`)
break
case 'delprem':
 case 'dellprem':
if (!isCreator) throw mess.owner
  if (!q) return m.reply(`Enter the Number\n\nExample: \n${prefix}${command} 263780699988`)
  if(isNaN(q)) return await m.reply('must be a number')
  if (q.includes(`+`)) return m.reply('Do not use + direct number 2637806****')
  prmin = `${q}@s.whatsapp.net`
anul = banned.indexOf(prmin)
premium.splice(anul, 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
m.reply(`Success deleting premium ${prmi}`)
break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await AsifOfc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let anumix2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anumix2.results) {
		    let encmedia = await AsifOfc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
         case 'tts': case 'say':{
         	if (!text) throw `Example : ${prefix + command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_english?query=${text}`)
             AsifOfc.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true, fileName: `${text}.mp3` }, { quoted: m })
         	}
         break 
	case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
m.reply(mess.wait)
mee = await AsifOfc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await AsifOfc.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await AsifOfc.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let bufferimg13x = fs.readFileSync(ran)
                    AsifOfc.sendMessage(m.chat, { image: bufferimg13x }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await AsifOfc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await AsifOfc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            AsifOfc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            AsifOfc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${AsifOfc.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            AsifOfc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply video'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await AsifOfc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await AsifOfc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await AsifOfc.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    AsifOfc.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} Mr Juice OFC`
                let yts = require("youtube-yts")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} 𝙽𝚘 : ${no++}\n${themeemoji} 𝚃𝚈𝙿𝙴•||☞ : ${i.type}\n${themeemoji} 𝚅𝙸𝙳𝙴𝙾 𝙸𝙳•||☞ : ${i.videoId}\n${themeemoji} 𝚃𝙸𝚃𝙴𝙻•||☞ : ${i.title}\n${themeemoji} 𝚅𝙸𝙴𝚆𝚂•||☞ : ${i.views}\n${themeemoji} 𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽•||☞ : ${i.timestamp}\n${themeemoji} 𝚄𝙿𝙻𝙾𝙰𝙳𝙴𝙳•||☞ : ${i.ago}\n${themeemoji} 𝚄𝚁𝙻•||☞ : ${i.url}\n\n─────────────────\n\n`
                }
                AsifOfc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} Mr Juice`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `${themeemoji} *𝚃𝙸𝚃𝙴𝙻•||☞* : ${g.title}\n`
                teks += `${themeemoji} *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽•||☞* : ${g.snippet}\n`
                teks += `${themeemoji} *𝙻𝙸𝙽𝙺•||☞* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
case 'video': { 
if (!text) return m.reply(`Example : ${prefix + command} Stay jb`)
            let ytsvideo = require("youtube-yts")
            let videosearch = await ytsvideo(text)
            listSerch = []
            teskd = `\nSearched Video: ${text}\n`
            for (let i of videosearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp4 ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            let sections = [
                {
                    title: "Top " + videosearch.all.length + " videos thats matches search result",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: botname,
                title: ``,
                buttonText: "Videos",
                mentions: parseMention(teskd), sections
            }
            return AsifOfc.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
        break    
        case 'song':{
        if (!text) return m.reply(`Example : ${prefix + command} stay jb`)
            let ytslagu = require("youtube-yts")
            let lagusearch = await ytslagu(text)
            listSerch = []
            teskd = `Searched Song: ${text}\n`
            for (let i of lagusearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp3 ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            const sections = [
                {
                    title: "Top " + lagusearch.all.length + " songs that matched search result",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: botname,
                title: ``,
                buttonText: "Songs",
                mentions: parseMention(teskd), sections
            }
            return AsifOfc.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
            break
        
    case 'play': case 'ytplay':{
                if (!text) throw `Example : ${prefix + command} anime whatsapp status`
                let yts = require("youtube-yts")
                let search = await yts(text)
                let anulay = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `playmp3 ${anulay.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `playmp4 ${anulay.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anulay.thumbnail },
                    caption: `
${themeemoji} 𝚃𝙸𝚃𝙴𝙻•||☞ : ${anulay.title}
${themeemoji} 𝙴𝚇𝚃•||☞ : Search
${themeemoji} 𝙸𝙳•||☞ : ${anulay.videoId}
${themeemoji} 𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽•||☞ : ${anulay.timestamp}
${themeemoji} 𝚅𝙸𝙴𝚆𝙴𝚁•||☞ : ${anulay.views}
${themeemoji} 𝚄𝙿𝙻𝙾𝙰𝙳 𝙰𝚃•||☞ : ${anulay.ago}
${themeemoji} 𝙰𝚄𝚃𝙷𝙾𝚁•||☞ : ${anulay.author.name}
${themeemoji} 𝙲𝙷𝙰𝙽𝙴𝙻•||☞ : ${anulay.author.url}
${themeemoji} 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 : ${anulay.description}
${themeemoji} 𝚄𝚁𝙻•||☞ : ${anulay.url}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                AsifOfc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'playmp3': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (!text) throw `Example : ${prefix + command} anime whatsapp status`
const asifplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await asifplaymp3.mp3(anup3k.url)
await AsifOfc.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
break
case 'playmp4': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if(!text) throw `Example : ${prefix + command} anime whatsapp status`
const asifplaymp4 = require('./lib/ytdl2')
let ytsmp4 = require("youtube-yts")
        let asifsearch13 = await ytsmp4(text)
        let anuvidoke4 = asifsearch13.videos[0]
const pl2= await asifplaymp4.mp4(anuvidoke4.url)
await AsifOfc.sendMessage(m.chat,{
    document: {url:pl2.videoUrl},
    fileName: anuvidoke4.title + '.mp4',
    mimetype: 'video/mp4',
    contextInfo:{
        externalAdReply:{
            title:anuvidoke4.title,
            body: botname,
            thumbnail: await fetchBuffer(anuvidoke4.thumbnail),
            mediaType:2,
            mediaUrl:anuvidoke4.url,
        }

    },
},{quoted:m})
break
case 'ytmp3': case 'ytaudio': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
const asifaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !asifaudp3.isYTUrl(text)) throw `Where's the yt link?\nExample: ${prefix + command} https://youtu.be/vw09kqgqrAM`
const audio=await asifaudp3.mp3(text)
await AsifOfc.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
	    case 'ytmp3xx': case 'ytaudioxx': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtu.be/vw09kqgqrAM`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                AsifOfc.sendImage(m.chat, media.thumb, `${themeemoji} Title : ${media.title}\n${themeemoji} File Size : ${media.filesizeF}\n${themeemoji} Url : ${isUrl(text)}\n${themeemoji} Ext : MP3\n${themeemoji} Resolution : ${args[1] || '128kbps'}`, m)
                AsifOfc.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
case 'ytmp4': case 'ytvideo': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
const asifvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !asifvidoh.isYTUrl(text)) throw `Where is the link??\n\nExample : ${prefix + command} https://youtu.be/vw09kqgqrAM`
const vid=await asifvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await AsifOfc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
break
            case 'ytmp4xx': case 'ytvideoxx': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                AsifOfc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `${themeemoji} Title : ${media.title}\n${themeemoji} File Size : ${media.filesizeF}\n${themeemoji} Url : ${isUrl(text)}\n${themeemoji} Ext : MP3\n${themeemoji} Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anupint = await pinterest(text)
                result = anupint[Math.floor(Math.random() * anupint.length)]
                AsifOfc.sendMessage(m.chat, { image: { url: result }, caption: `${themeemoji} Media Url : `+result }, { quoted: m })
            }
            break
            case 'waifu': {
            	m.reply(mess.wait)
                anufux = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer13x = await getBuffer(anufux.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Next Image'}, type: 1},{buttonId: `animemenu`, buttonText: {displayText: '⬅️Back'}, type: 1}]
                let buttonMessage = {
                    image: buffer13x,
                    caption: `Random Waifu`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                AsifOfc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couplepp': case 'ppcouple': {
                m.reply(mess.wait)
                let anucpp = await fetchJson('https://raw.githubusercontent.com/DGasif/Lunapicture.jpg/main/couple.json')
                let random = anucpp[Math.floor(Math.random() * anucpp.length)]
                AsifOfc.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                AsifOfc.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffee`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                AsifOfc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                AsifOfc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./lib/scraper')
                anuwmedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                AsifOfc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
 case 'tinyurl':{
   if(!q) return m.reply('link?')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  m.reply(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rockart': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpinkart': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) throw `Example : ${prefix + command} ${global.ownername}`
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rockart/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpinkart/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anutexpro = await maker.textpro(link, q)
                AsifOfc.sendMessage(m.chat, { image: { url: anutexpro }, caption: `Made by ${global.botname}` }, { quoted: m })
             }
             break
case'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'waterdrop':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break

case 'lion2':
  if(!q) throw `Use ${prefix + command} text`
  m.reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break

case 'papercut':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case 'transformer':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   
case 'harrypot':
       if(!q) throw `Use ${prefix + command} text|text`
       m.reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break

case 'neondevil':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case '3dstone':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3davengers':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thunder':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'window':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

   case 'blackpinkneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti':
   case 'grafiti':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pornhub2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'blackpink2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch2':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dspace':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'lion':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'greenneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
    
case 'bokeh':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':

if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'wolf':

if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'joker':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'dropwater2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'natural':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 

case 'carbon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pencil':
if(!q) throw`Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'textmaker': {
   
if (args.length < 1) throw `Example :\n${prefix + command} <name>`
if (args[0] === 'glitch') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
AsifOfc.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
AsifOfc.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
m.reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
case 'hoorror':{

     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     m.reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AsifOfc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'whitebear':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'thunder2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   break
case 'neon':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'matrix2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sky':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'magma':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sand':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pencil':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'graffiti':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'metallic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'steel':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'harrpotter':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'underwater':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'luxury':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'glue2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'fabric':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'neonlight':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'lava':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/lava-text-effect-online-914.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'toxic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'ancient':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'christmas2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sci_fi':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'rainbow':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'classic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'watercolor2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweem2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweenfire':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'writing':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'foggy':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'marvel':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'skeleton2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sketch':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'wonderful':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'batman':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'juice':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fruit-juice-text-effect-861.html", [
    `${q}`,])
  .then((data) => AsifOfc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pornhub':{
	
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuphub = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
AsifOfc.sendMessage(from,{image:{url:anuphub}, caption:"Here you go!"},{quoted:m})
}
break
case 'retro':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anutro2 = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
AsifOfc.sendMessage(from,{image:{url:anutro2}, caption:"Here you go!"},{quoted:m})
}
break
case 'horror':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuror2 = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anuror2)
AsifOfc.sendMessage(from,{image:{url:anuror2}, caption:"Here you go!"},{quoted:m})
}
break
case '8bit':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anubit8 = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
AsifOfc.sendMessage(from,{image:{url:anubit8}, caption:"Here you go!"},{quoted:m})
}
break
case 'tiktok':{ 
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
    var button = [{ buttonId: `tiktokaudio ${q}`, buttonText: { displayText: `AUDIO‡` }, type: 1 }, { buttonId: `menu`, buttonText: { displayText: `Menu` }, type: 1 }]
AsifOfc.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }, buttons: button, footer: botname, mentions: [sender] })
})
}
break
case 'tiktokaudio':{
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
AsifOfc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'tiktokgirl':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var asupan = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
AsifOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokghea':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
AsifOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokbocil':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
AsifOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktoknukhty':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
AsifOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktoksantuy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
AsifOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokkayes':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
AsifOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokpanrika':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
AsifOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktoknotnot':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'chinese':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'hijab':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'indo':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'japanese':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'korean':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'malay':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'randomgirl':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'randomboy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'thai':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'vietnamese':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'aesthetic':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'antiwork':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'blackpink':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'bike':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'boneka':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cosplay':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cat':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'doggo':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'hacking':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/hacking.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'justina':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'kayes':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'kpop':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'notnot':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'car':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'pubg':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'rose':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ryujin':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ulzzangboy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ulzzanggirl':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break

case 'rentbot': {
if (!isPremium) return sendButMessage (m.chat, prem1, prem2, prem3, { quoted:m})
jadibot(AsifOfc, m, m.chat)
}
break
case 'rentbotlist':
try {
let user = [... new Set([...global.conns.filter(AsifOfc => AsifOfc.user).map(AsifOfc => AsifOfc.user)])]
te = "*Bot Rent List*\n\n"
for (let i of user){
let y = await AsifOfc.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
AsifOfc.sendMessage(m.chat,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`There are no users who have rented bot yet`)
}
break
case 'git': case 'gitclone':
if (!args[0]) return m.reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    AsifOfc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
	        case 'pinterest': {
m.reply(mess.wait)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
AsifOfc.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		AsifOfc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'stickman':
m.reply(mess.wait)
AsifOfc.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/manusia-lidi?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'spongebob':
m.reply(mess.wait)
AsifOfc.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kawan-sponsbob?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'gojosatoru':
m.reply(mess.wait)
AsifOfc.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/gojosatoru?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'nicholas':
m.reply(mess.wait)
AsifOfc.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/nicholas?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'cartoon':
m.reply(mess.wait)
AsifOfc.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kr-robot?apikey=dhmDlD5x`}}, {quoted: m })
break
		case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await AsifOfc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                AsifOfc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `For What Command?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                AsifOfc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${prefix + command} filename`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' registered in the message list`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not listed in the message list`
                AsifOfc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		m.reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'developer': case 'dev': {
reply(`•CHEEMS BOT DEVELOPER•\n\n\n   ©2021-2022 Asif Bot Inc.\n\n👑Dream Boy Asif\nPm: wa.me/923474187615`)
}
            break
case 'owner': case 'creator': case 'moderator': case 'mod': {
AsifOfc.sendContact(m.chat, owner, m)
}
            break
        case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (m.isGroup) return m.reply(mess.group)
				if (!text) return m.reply(`*How to use?*\n\Send command ${prefix + command} number|sender|message\n\nExample ${prefix + command} 91xxxxxxxxxx|handsome here|I have a crush on you\n\nExample 2 : ${prefix + command} 91xxxxxxxxxx|ur crush|I have a crush on you\n\nDon't worry, privacy is safe><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`All must be filled in! eg : confess 91xxxxxxxxxx|from|hello dude`)
				 let teksnya = `Hi friend, there is confess message for you!!\n\nFrom :  _${saking}_  \nMessage : _${pesan}_ `
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`
				 var button = [{ buttonId: `menfesconfirm`, buttonText: { displayText: `CONFIRM‡` }, type: 1 }, { buttonId: `menu`, buttonText: { displayText: `Menu` }, type: 1 }]
					AsifOfc.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, buttons: button, footer: botname })
				m.reply(`Success Sending Menfess!!`)
				break
			case 'menfesconfirm':{
 				 AsifOfc.sendMessage(q, {text: `It's been confirmed, Confess🌹`})
				  m.reply(`Thank you confess for being accepted.`)
				}
				break
case 'anonymous': {
                if (m.isGroup) return m.reply(mess.group)
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                AsifOfc.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await AsifOfc.getName(m.sender)} Welcome To Anonymous Chat\n\nClick the button below to find a partner\`\`\``, botname, m)
            }
			break
case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await AsifOfc.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press Button To Find Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await AsifOfc.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await AsifOfc.sendButtonText(m.chat, buttons, `\`\`\`You are still in an anonymous session, press the button below to terminate your anonymous session\`\`\``, botname, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await AsifOfc.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await AsifOfc.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await AsifOfc.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await AsifOfc.sendButtonText(m.chat, buttons, `\`\`\`You are not in an anonymous session, press the button to find a partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await AsifOfc.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await AsifOfc.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await AsifOfc.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await AsifOfc.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                AsifOfc.public = true
                m.reply('*Successful in Changing To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                AsifOfc.public = false
                m.reply('*Successful in Changing To Self Usage*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': case 'p': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                AsifOfc.sendListMsg(m.chat, `pilih aja *Din* Setmenu nya!`, AsifOfc.user.name, `*Hello AsifOfc* !`, `Pilih Din`, sections, m)
                }
            }
            break
            
case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS' }, type: 1 }]
            await AsifOfc.sendButtonText(ownernya, buttons, pjtxt, botname, m, {mentions: ments, quoted: fdoc})
            let akhji = `*Request has been sent*\n*To Owner @${ownernya.split('@')[0]}*\n_Thank you🙏_`
            await AsifOfc.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments, quoted: fkontak})
            }
            break
case 'report': case 'bug': {
            	if (!text) throw `Example : ${prefix + command} Report an error feature`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS FOR THE REPORT' }, type: 1 }]
            await AsifOfc.sendButtonText(ownernya, buttons, pjtxt, botname, m, {mentions: ments})
            let akhji = `Report Sent\nTo Owner @${ownernya.split('@')[0]}\n*Thank you for the report🙏*\n_Your number will be blocked_\n_If the Report is Only Created_`
            await AsifOfc.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments})
            }
            break
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
AsifOfc_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await AsifOfc.sendMessage(m.chat, { audio: AsifOfc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'hijack':{
  if(!isCreator) throw mess.owner
  let text1 = q.split("|")[0]
  let text2 = q.split("|")[1]
  if(!text1) throw `Example:\n${order +' 1234567890@g.us|_amount_'}`
  if(!text2) throw `Eg:\n${order +' 1234567890@g.us|_amount_'}`
  AsifOfc.sendMessage(text1, { text: `Member kidnapping request by @${m.sender.split("@")[0]}\nAmount: ${text2}\nImporting from : ${from} => ${text1}`, mentions: [m.sender] },{ quoted : m })               
  await AsifOfc.sendMessage(from, { text: `Member kidnapping request by @${m.sender.split("@")[0]}\nAmount: ${text2}\nImporting from : ${from} => ${text1}`, mentions: [m.sender] },{ quoted : m })                
  await m.sequestrar(text1, participants.map(mem => mem.id), text2)
  }
  break
case 'setthumb':{
                       if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
                       if (!isQuotedImage) return m.reply('Reply the picture!')
                                 let media = await AsifOfc.downloadMediaMessage(m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
                await fs.writeFileSync('./LunaMedia/theme/Lunapicture.jpg', media)
               m.reply(mess.success)
            }
          break
case 'creategroup':
if (!isCreator) return m.reply(mess.owner)
if (!q) return reply("Enter text")
const group = await AsifOfc.groupCreate(q, [owner + "@s.whatsapp.net"])
m.reply(mess.success)
AsifOfc.sendMessage(group.id, { text: 'Halo!!' }) // say hello to everyone on the group
break
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return m.reply('Already activated')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply('Success in turning on youtube video antilink in this group')
var groupe = await AsifOfc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AsifOfc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return m.reply('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply('Success in turning off youtube video antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AsifOfc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return m.reply('Already activated')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
m.reply('Success in turning on youtube channel antilink in this group')
var groupe = await AsifOfc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AsifOfc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return m.reply('Already deactivated')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
m.reply('Success in turning off youtube channel antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AsifOfc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return m.reply('Already activated')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply('Success in turning on instagram antilink in this group')
var groupe = await AsifOfc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AsifOfc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return m.reply('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply('Success in turning off instagram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AsifOfc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return m.reply('Already activated')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply('Success in turning on facebook antilink in this group')
var groupe = await AsifOfc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AsifOfc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return m.reply('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply('Success in turning off facebook antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AsifOfc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return m.reply('Already activated')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply('Success in turning on telegram antilink in this group')
var groupe = await AsifOfc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AsifOfc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return m.reply('Already deactivated')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply('Success in turning off telegram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AsifOfc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return m.reply('Already activated')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply('Success in turning on tiktok antilink in this group')
var groupe = await AsifOfc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AsifOfc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return m.reply('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply('Success in turning off tiktok antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AsifOfc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('Already activated')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply('Success in turning on twitter antilink in this group')
var groupe = await AsifOfc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AsifOfc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return m.reply('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply('Success in turning off twitter antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AsifOfc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
              case 'antilinkall': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
m.reply('Success in turning on all antilink in this group')
var groupe = await AsifOfc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AsifOfc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return m.reply('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
m.reply('Success in turning off all antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AsifOfc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antitoxic': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiToxic) return m.reply('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning on antitoxic in this group')
var groupe = await AsifOfc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AsifOfc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return m.reply('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning off antitoxic in this group')
} else {
  let buttonsnttoxic= [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AsifOfc.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'autoreply': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (Autoreply) return m.reply('Already activated')
autorep.push(from)
fs.writeFileSync('./database/autoreply.json', JSON.stringify(autorep))
m.reply('Success in turning on auto reply in this group')
var groupe = await AsifOfc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AsifOfc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nAuto reply has been enabled in this group, means bot may send unnecessary voice note!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Autoreply) return m.reply('Already deactivated')
let off = autorep.indexOf(from)
autorep.splice(off, 1)
fs.writeFileSync('./database/autoreply.json', JSON.stringify(autorep))
m.reply('Success in turning off auto reply in this group')
} else {
  let buttonsnttoxic= [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AsifOfc.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antiwame': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiWame) return m.reply('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
m.reply('Success in turning on antiwame in this group')
var groupe = await AsifOfc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AsifOfc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return m.reply('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
m.reply('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AsifOfc.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antilinkgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (Antilinkgc) return m.reply('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning on antiwame in this group')
var groupe = await AsifOfc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AsifOfc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return m.reply('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AsifOfc.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *Ndiri Wekumama* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *Im A Son Of A Dog*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of Munangagwa* for 5 hours",
    "type in Shona for 24 hours",
    "Use Political photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting room😂",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice note🤣🤣",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice note😂",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice note😂",
    "say i love the bot owner Mr Juice through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say *Pamber ne Zanu Pf* through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love you😌",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const asifdare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              AsifOfc.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ asifdare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, Mr Juice?🤣",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const asiftruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              AsifOfc.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ asiftruth }, {quoted:m})
              break  
case 'fliptext': {
if (args.length < 1) return m.reply(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
m.reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
case 'toviewonce': case 'toonce': { 
        if (!quoted) return m.reply(`Reply image`)
        if (/image/.test(mime)) {
anuoncr2 = await AsifOfc.downloadAndSaveMediaMessage(quoted)
AsifOfc.sendMessage(m.chat, {image: {url: anuoncr2},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anuonce2 = await AsifOfc.downloadAndSaveMediaMessage(quoted)
        AsifOfc.sendMessage(m.chat, {video: {url: anuonce2},viewOnce : true},{quoted: m })
        }
        }
        break
case 'autostickergc':
            case 'autosticker':
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return m.reply(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('autosticker activated')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('auto sticker deactivated')
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return m.reply('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
m.reply('Success in turning on antivirus in this group')
var groupe = await AsifOfc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AsifOfc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return m.reply('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
m.reply('Success in turning off antivirus this group')
} else {
  let buttonsntvirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AsifOfc.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'nsfw': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return m.reply('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
m.reply('Success in turning on nsfw in this group')
var groupe = await AsifOfc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AsifOfc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return m.reply('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
m.reply('Success in turning off nsfw in this group')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AsifOfc.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'mediafire': {
if (!text) throw mess.linkm
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `The link you provided is invalid`
const { mediafireDl } = require('./lib/mediafire.js')
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
m.reply(`${result4}`)
AsifOfc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
case 'lyrics2': {
	    if (!text) return reply(`Use example ${prefix}lyrics Despacito`)
	m.reply(mess.wait)
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    m.reply(`
${themeemoji} Title : *${result.title}*
${themeemoji} Author : ${result.author}
${themeemoji} Lyrics : ${result.lyrics}
${themeemoji} Url : ${result.link}
`.trim())
}
break
case 'lyrics':
if (!text) throw `Song name?`
const findLyrics = require('simple-find-lyrics')
try {
const lyrics = await findLyrics(text)
if (lyrics.lyrics == '') return console.log("it's f up")
var txt = `
*${themeemoji} Title :* ${lyrics.title}
*${themeemoji} Artist :* ${lyrics.artist}
*${themeemoji} Lyrics :-* \n
${lyrics.lyrics}`
console.log(lyrics)
 await AsifOfc.sendMessage(m.chat, {text:txt},{quoted:m})
} catch (err) {
    console.log(err)
    }
    break
        case 'gimage': {
       if (!text) throw `Example : ${prefix + command} kaori cicak`
        asifezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
        n = asifezyanu.result
        images = n[Math.floor(Math.random() * n.length)]
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
${themeemoji} *Query* : ${text}
${themeemoji} *Media Url* : ${images}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                AsifOfc.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
case 'img':
case 'image': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraperW')
                anuasifezy2 = await pinterest(text)
                resultkkk3 = anuasifezy2[Math.floor(Math.random() * anuasifezy2.length)]
                AsifOfc.sendMessage(m.chat, { image: { url: resultkkk3 }, caption: ` ${themeemoji} Media Url : `+resultkkk3 }, { quoted: m })
            }
            break
case 'swm': case 'stickerwm': case 'wm': case 'take': {  
if (!args.join(" ")) return m.reply(`Example :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
AsifOfc.downloadAndSaveMediaMessage(quoted, "gifee")
AsifOfc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await AsifOfc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await AsifOfc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'emoji': {
if (!args.join(" ")) return m.reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await AsifOfc.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await AsifOfc.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
media = await AsifOfc.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
AsifOfc.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
AsifOfc.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
m.reply("Send video/audio")
}
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewallpaper': case 'animewall': {
                if (!args.join(" ")) return m.reply("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                AsifOfc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'animewall2': case 'animewallpaper2':
m.reply(mess.wait)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return m.reply('What wallpaper do you want?')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `.${command} ${q}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Query :* ${q}`,
      footer: `${global.botname}`,
      buttons: walb,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Error!')
                })
//AsifOfc.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'igemoji': 
case 'instagramemoji': 
if (!q) return m.reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "10")
break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						AsifOfc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
case 'loli-waifu':
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					AsifOfc.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
                m.reply(mess.wait)
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                AsifOfc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `trap`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: trapbot,
  headerType: 1
  }     
            await AsifOfc.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: hnekobot,
  headerType: 1
  }      
            await AsifOfc.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await AsifOfc.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'gasm':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break  
case 'milf':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/milf.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break 
case 'ahegao':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ahegao.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/jahy.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'thights':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thights.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/yuri.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/zettai.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await AsifOfc.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var asifyresultx = pickRandom(ahegaonsfw)
    await AsifOfc.sendMessage(m.chat,{video:asifyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case'slap2':
if(!quoted){
const   result = await fetchJson(`https://g.tenor.com/v1/random?q=anime slapping&key=LIVDSRZULELA`, {method: 'get'})
const ku = result.results[0]
const oj = ku.media[0]
const urlg = oj.mp4
const slapp = urlg.url
const { data: mediaData } = await axios.get(slapp, {responseType: "arraybuffer"})
const media = new MessageMedia(
    'video/mp4', 
    mediaData.toString("base64")
);
const mention = msg
const mentionedId = await AsifOfc.getName(mention.mentionedIds)
ctv = `@${contacts.number} *Slapped* @${mentionedId.number}`
const ahh = []
m.reply(media,m.chat , {mentions:[contacts,mentionedId], sendVideoAsGif:true, caption: ctv}).then((r) => {
})
}else if(quoted){
const qmid = quoted.author
const   result = await fetchJson(`https://g.tenor.com/v1/random?q=anime slapping&key=LIVDSRZULELA`, {method: 'get'})
const ku = result.results[0]
const oj = ku.media[0]
const urlg = oj.mp4
const slapp = urlg.url
const { data: mediaData } = await axios.get(slapp, {responseType: "arraybuffer"})
const media = new MessageMedia(
    'video/mp4', 
    mediaData.toString("base64")
);
const contact1 = await AsifOfc.getName(qmid)
ctv = `@${contacts.number} *Slapped* @${contact1.number} `
m.reply(media,m.chat , {mentions:[contacts,contact1 ], sendVideoAsGif:true, caption: ctv}).then((r) => {
})
}
break

case 'animesmug':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'foxgirl':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'animenom' :
m.reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `.nom`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await AsifOfc.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewaifu':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeneko':
m.reply(mess.wait)						
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `animeneko`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbutsss,
      headerType: 4
      }
            await AsifOfc.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('Error!')
                })               
                break
case 'animecuddle':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonsosMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonsosMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'animeslap':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let btutttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, btutttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepat':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let xxbuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, xxbuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeneko':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/neko`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonsTsMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonsTsMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehug':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonussMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonussMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekiss':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let bxxuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, bxxuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewlp':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttoxnssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttoxnssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animespank':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecry':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cry`)
                           var wbutt1sss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let button1ssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbutt1sss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, button1ssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekill':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/kill`)
                           var wbuttszzss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszzss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animelick':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz12ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx12Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz12ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx12Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebite':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bite`)
                           var wbuttszz123ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx123Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz123ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx123Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeyeet':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/yeet`)
                           var wbuttszz124ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx124Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz124ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx124Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebully':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz125ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx125Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz125ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx125Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebonk':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bonk`)
                           var wbuttszz126ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx126Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz126ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx126Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewink':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wink`)
                           var wbuttszz127ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx127Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz127ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx127Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepoke':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/poke`)
                           var wbuttszz128ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx128Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz128ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx128Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmile':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smile`)
                           var wbuttszz129ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx129Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz129ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx129Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewave':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wave`)
                           var wbuttszz1210ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx1210Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1210ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx1210Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeawoo':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/awoo`)
                           var wbuttszz1211ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx1211Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1211ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx1211Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeblush':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/blush`)
                           var wbuttszz1212ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx1212Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1212ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx1212Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmug':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smug`)
                           var wbuttszz1213ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx1213Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1213ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx1213Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeglomp':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/glomp`)
                           var wbuttszz1214ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx1214Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1214ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx1214Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehappy':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/happy`)
                           var wbuttszz1215ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx1215Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1215ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx1215Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animedance':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/dance`)
                           var wbuttszz1216ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx1216Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1216ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx1216Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecringe':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cringe`)
                           var wbuttszz1217ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx1217Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1217ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx1217Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehighfive':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/highfive`)
                           var wbuttszz1218ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx1218Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1218ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx1218Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehandhold':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/handhold`)
                           var wbuttszz1219ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx1219Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1219ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx1219Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animemegumin':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/megumin`)
                           var wbuttszz1220ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
        ]
      let buttonszzsx1220Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1220ss,
      headerType: 4
      }     
            await AsifOfc.sendMessage(m.chat, buttonszzsx1220Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'shinobu2':  
m.reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/shinobu')
var wbutsss = [
    {buttonId: `.shinobu`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
         ]
      let buttonsesMessage = {
      image: {url:ud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await AsifOfc.sendMessage(m.chat,buttonsesMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break
case 'animemegumin':
m.reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `.megumin`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await AsifOfc.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break     
case 'animeawoo':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `.${command}`, buttonText: {displayText: `𝙽𝙴𝚇𝚃🌹`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
   footer: `${global.botname}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await AsifOfc.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'loli':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/loli.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'husbu':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/husbu.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'neko2':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/neko.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'randomanime':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/random.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'shota':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/shota.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'waifu2':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/waifu.json'))
var asifyresult = pickRandom(ahegaonsfw)
AsifOfc.sendMessage(m.chat, { caption: mess.success, image: { url: asifyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'genshin':
try {
if (!text) throw `Which genshin are you lookin for?`
const genshin = require("genshin-api")
a = text.toLowerCase();
const anime = await genshin.Characters(text)
let txt = ""
txt += `🎀 *Name:* ${anime.name}\n`
txt += `🎖️ *Title:* ${anime.title}\n`
txt += `💠 *Vision:* ${anime.vision}\n`
txt += `🏹 *Weapon:* ${anime.weapon}\n`
txt += `💮 *Gender:* ${anime.gender}\n`
txt += `🌏 *Nation:* ${anime.nation}\n`
txt += `🪷 *Affiliation:* ${anime.affiliation}\n`
txt += `🌟 *Rarity:* ${anime.rarity}\n`
txt += `❄️ *Constellation:* ${anime.constellation}\n`
txt += `📖 *Description:* ${anime.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`
urll = `https://api.genshin.dev/characters/${a}/portrait`
await AsifOfc.sendMessage(m.chat,{image:{url:urll}, caption:txt},{quoted:m})
} catch (err) {
console.log(err)
throw mess.error
}
break
case 'anime':
if (!text) throw `Which anime are you lookin for?`
const malScraper = require('mal-scraper')
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) throw `Could not find`
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await AsifOfc.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/DGasif/Lunapicture.jpg/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await AsifOfc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'ttp': {
           if (!text) return m.reply(`*Example : ${prefix + command} hello*`)
           await AsifOfc.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'A L Y A', 'B O T M D', m, {asSticker: true})
         
                     }
                     break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGasif/Lunapicture.jpg/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await AsifOfc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/DGasif/Lunapicture.jpg/main/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await AsifOfc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGasif/Lunapicture.jpg/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await AsifOfc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
            case 'can': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} i dance?`
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'PATIENT 👀' }, type: 1 }]
            await AsifOfc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
            case 'is': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} she virgin?`
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await AsifOfc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
            case 'when': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} will i get married?`
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'PATIENT 👀' }, type: 1 }]
            await AsifOfc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'what': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} is your name?`
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await AsifOfc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'where': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} is your name?`
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await AsifOfc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'how': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} to date girl?`
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Sh*t! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`Be Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await AsifOfc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'rate': {
            	if (!text) throw `Example : ${prefix + command} my profile`
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await AsifOfc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'runtime': {
            	let lowq = `*Baymax Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
                await AsifOfc.sendButtonText(m.chat, buttons, lowq, botname, m, {quoted: fkontak})
            	}
            break
case 'handsomecheck':
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @asif`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
AsifOfc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @asif`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
AsifOfc.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @asif`)
					const asify =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = asify[Math.floor(Math.random() * asify.length)]
					AsifOfc.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
                    case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @asif`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
AsifOfc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
                    case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
            if (!m.isGroup) return m.reply(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'oke', buttonText: { displayText: '🤣' }, type: 1 }
                    ]
                    await AsifOfc.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
case 'id':{
            m.reply(from)
           }
          break
case 'toqr':{
  if (!q) return m.reply(' Please include link or text!')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await AsifOfc.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
case 'ig': case 'instagram': case 'reels':{ //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (args.length === 0) throw `Where is the link?\nSend ${prefix + command} url`
        let urlInsta = args[0];
        if (!(urlInsta.includes("instagram.com/p/") ||
            urlInsta.includes("instagram.com/reel/") ||
            urlInsta.includes("instagram.com/tv/")))
            return AsifOfc.sendMessage(
                m.chat,
                { text: `The link you provided is not a instagram link` },
                { quoted: m }
            );      
            if (urlInsta.includes("?"))
            urlInsta = urlInsta.split("/?")[0];
        console.log(urlInsta);
        ig.fetchPost(urlInsta).then((res) => {
            if (res.media_count == 1) {
                if (res.links[0].type == "video") {
                    AsifOfc.sendMessage(
                        m.chat,
                        {
                            video: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }else if (res.links[0].type == "image") {
                    AsifOfc.sendMessage(
                        m.chat,
                        {
                            image: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }
            }
            else if (res.media_count > 1) {
                for (let i = 0; i < res.media_count; i++) {
                    if (res.links[i].type == "video") {
                        AsifOfc.sendMessage(
                            m.chat,
                            {
                                video: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    } else if (res.links[i].type == "image") {
                        AsifOfc.sendMessage(
                            m.chat,
                            {
                                image: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    }
                }
            }            
        }).catch((error) => {
            console.log(error);
            AsifOfc.sendMessage(m.chat, { text: `Must be private or unavailable` }, { quoted: m })
        });
}
break
case 'spotify': //credit: Ray Senpai❤️ https://github.com/EternityBots/Nezuko
if (!text) return m.reply(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) throw `The link you provided is not spotify link`
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await AsifOfc.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await AsifOfc.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
break
case 'reddit': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (!text) throw `Where is the subreddit name?`
const RedditImageFetcher = require("reddit-image-fetcher")
RedditImageFetcher.fetch({
            type: 'custom',
            total: 1, 
            addSubreddit:text,
        }).then(result => {
            console.log(result);
            let akusingle = result[0]
            AsifOfc.sendMessage(m.chat,{image:{url:akusingle.image}},{quoted:m})
        })
        .catch(err => {
            m.reply ("Not found!")
        })
        break
case 'define': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (!q) throw `What do you want to define?`
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) throw mess.error
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   AsifOfc.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return m.reply (`*${q}* isn't a valid text`)
    }
    break
case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
teks = `*「 ${global.botname} Script 」*\n\n𝚆𝙴𝙱𝚂𝙸𝚃𝙴😢: ${global.websitex}\n𝙶𝙸𝚃𝙷𝚄𝙱🤤: ${global.botscript}\n\n𝙳𝙾𝙽𝚃 𝙵𝙾𝚁𝙶𝙴𝚃 𝚃𝙾 𝙵𝙾𝙻𝙻𝙾𝚆`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: '𝙾𝚆𝙽𝙴𝚁🌹'}, type: 1}
]
let buttonMessage = {
image: {url: `https://i.ibb.co/w46VQ8D/Picsart-22-10-08-06-46-30-674.jpg`},
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴 𝙼𝚈 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙲𝙷𝙰𝙽𝙽𝙴𝙻",
body: "🤤😢", 
thumbnail: fs.readFileSync("LunaMedia/theme/Lunapicture.jpg"),
mediaType:1,
mediaUrl: 'https://i.ibb.co/w46VQ8D/Picsart-22-10-08-06-46-30-674.jpg',
sourceUrl: "https://i.ibb.co/w46VQ8D/Picsart-22-10-08-06-46-30-674.jpg"
}}
}
AsifOfc.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break
case 'quotes':
const quoteasify = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quoteasify.data.quote.body}\n\n*${themeemoji} Author:* ${quoteasify.data.quote.author}`
return m.reply(textquotes)
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
AsifOfc.groupRevokeInvite(m.chat)
}
break
case 'imdb':
if (!text) return m.reply(`_Name a Series or movie`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           AsifOfc.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
case 'weather':
if (!text) return m.reply('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           AsifOfc.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           break
case 'horoscope':
if (!text) return m.reply('What sign?')
            try {
                const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`
                fetch(URL, {
                        method: 'POST'
                    })
                    .then(response => response.json())
                    .then(json => {
                        const date = json.current_date
                        console.log(date)
                        let textw = ""
                        textw += `*👁️ Horoscope of  ${text}*\n\n`
                        textw += `*Current Date:* ${json.current_date}.\n`
                        textw += `*Sign:* ${text}.\n`
                        textw += `*Lucky Time:* ${json.lucky_time}.\n`
                        textw += `*Compatibility:* ${json.compatibility}.\n`
                        textw += `*Lucky Number:* ${json.lucky_number}.\n`
                        textw += `*Lucky Color:* ${json.color}.\n`
                        textw += `*Today Mood:* ${json.mood}.\n`
                        textw += `*Overall:* ${json.description}.\n`
                        m.reply(textw)
                    })

            } catch (e) {
                console.log(e)
            }
        break
case 'nowa':
var inputnumber = text.split(" ")[0]
        if (!inputnumber.includes('x')) return m.reply(`You did not add xx\nExample: ${prefix + command} 923474187615xx`)
        m.reply(`Checking Old status Numbers...`)
        m.reply(`Hacking Kary ga tu Bhenchod 🤣🤣🤣`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await AsifOfc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await AsifOfc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Karachi').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        m.reply(`${text66}${nobio}${nowhatsapp}`)
break
case 'tqtt': 
throw `╭══════✪𝙲𝚁𝙴𝙳𝙸𝚃✪══════╮ 
┃🌹 ᴍᴇ ᴍʀ ᴊᴜɪᴄᴇ||°🤤
┃🌹ᴀꜱɪꜰ
┃🌹ᴇʀʀᴏʀ ᴍᴏᴅꜱ ᴏꜰᴄ
┃🌹ɴᴏᴏɴᴇ ᴇʟꜱᴇ 😢💔
╰══════✪✞✪══════╯`
break
case 'alive': case 'panel': case 'list': case 'menu': case 'help': case '?': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed();
            let latensie = speed() - timestampe
            let asifezy = `╭━════════✞✪✞═══════━┈   
┃⍈𔘓 𝙷𝙴𝙻𝙻𝙾🌹 ${pushname}  
┃⍈𔘓  ${ucapanWaktu} 𝙸𝙼 𝐋𝐮𝐧𝐚💃
╰━══════════════════━─┈
╭━━━══✞ꪶ 𝐁𝐀𝐘𝐌𝐀𝐗 𝐯8 ꫂ✞══━─┈
┃⍈𔘓
┃⍈𔘓  ✧ 𝙱𝙾𝚃 𝙱𝚈 ❝𝙰𝚂𝙸𝙵 𝙾𝙵𝙲👑❞
┃⍈𔘓  │
┃⍈𔘓  ✧𝚂𝙿𝙴𝙴𝙳 : ${latensie.toFixed(4)} miliseconds
┃⍈𔘓  │
┃⍈𔘓  ✧𝚁𝚄𝙽𝚃𝙸𝙼𝙴 : ${runtime(process.uptime())}
┃⍈𔘓  │
┃⍈𔘓  ✧𝙿𝙾𝚆𝙴𝚁𝙴𝙳 : @${ini_mark.split('@')[0]}
┃⍈𔘓  │
┃⍈𔘓  ✧𝙱𝙾𝚃 : ${global.botname}
┃⍈𔘓  │
┃⍈𔘓  ✧𝙾𝚆𝙽𝙴𝚁 : @${ownernya.split('@')[0]}
┃⍈𔘓  │
┃⍈𔘓  ✧𝚈𝚃 :  https://www.youtube.com/@Asif-King
┃⍈𔘓  │
┃⍈𔘓  ✧𝙼𝙾𝙳𝙴 : ${AsifOfc.public ? 'Public' : `Self`}
┃⍈𔘓  │
┃⍈𔘓  ✧𝙾𝚆𝙽𝙴𝚁 𝚃𝙰𝙶 : ${global.owner}
┃⍈𔘓  │
┃⍈𔘓  ✧𝙷𝙾𝚂𝚃 𝙽𝙰𝙼𝙴 : ${os.hostname()}
┃⍈𔘓  │
┃⍈𔘓  ✧𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼 : ${os.platform()}
┃⍈𔘓  │
┃⍈𔘓  ✧𝚃𝙾𝚃𝙰𝙻 𝚄𝚂𝙴𝚁 : ${Object.keys(global.db.data.users).length}
┃⍈𔘓  │
┃⍈𔘓  ✧𝚃𝙾𝚃𝙰𝙻 𝙷𝙸𝚃 : ${jumlahcmd}
┃⍈𔘓  
┃⍈𔘓  ✧𝚃𝙾𝚃𝙰𝙻 𝙷𝙸𝚃 𝚃𝙾𝙳𝙰𝚈 : ${jumlahharian}
┃⍈𔘓  │
┃⍈𔘓  ╰──────────────────╯
╰━══════════════════━─┈
╭━═════✞ꪶ𝐔𝐬𝐞𝐫 𝐈𝐧𝐟𝐨ꫂ✞══════━┈
┃⍈𔘓   
┃⍈𔘓 𝙽𝙰𝙼𝙴 : ${pushname} 
┃⍈𔘓 𝙽𝚄𝙼𝙱𝙴𝚁 : @${me.split('@')[0]}
┃⍈𔘓 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 : ${isPremium ? '✅' : `❌`}
┃⍈𔘓 𝙻𝙸𝙼𝙸𝚃 : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
╰━══════════════════━─┈
╭──────────────────···▸
┃⍈𔘓   ✧𝐓𝐎𝐃𝐀𝐘✧
┃⍈𔘓 𝚃𝙸𝙼𝙴 : ${xtime}
┃⍈𔘓 𝙳𝙰𝚃𝙴 : ${xdate}
╰──────────────────···▸
╭═════⧫𝙰𝚂𝙸𝙵 𝙾𝙵𝙲⧫══════╮
┃✧💔 +923474187615
┃✧💔 ©⏤͟͟͞͞ ❝𝙰𝚂𝙸𝙵 𝙾𝙵𝙲👑❞
╰═══════════════════╯
╭─────────────────···▸
┃⍈𔘓 𝙷𝙴𝚁𝙴 𝙸𝚂 𝚃𝙷𝙴 𝙻𝙸𝚂 𝙾𝙵 𝙼𝚈 𝙲𝙾𝙼𝙼𝙰𝙳𝚂.
╰────────────────···▸
   ╭══════════════╮
   ┃⍈𔘓 🌹𝙿𝙻𝙴𝙰𝚂𝙴 𝙲𝙻𝙸𝙲𝙺🌹
   ┃⍈𔘓 🌹 𝚃𝙷𝙴 𝙱𝚄𝚃𝚃𝙾𝙽𝚂🌹
   ╰══════════════╯`
            let ments = [ownernya, me, ini_mark]        
            let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: '🌹𝙰𝙻𝙻 𝙼𝙴𝙽𝚄🌹' }, type: 1 },{ buttonId: 'command', buttonText: { displayText: '🌹𝙻𝙸𝚂𝚃 𝙼𝙴𝙽𝚄🌹' }, type: 1 },{ buttonId: 'sc', buttonText: { displayText: '🌹𝚂𝙲𝚁𝙸𝙿𝚃🌹' }, type: 1 }]
            let buttonMessage = {
  document: fs.readFileSync('./LunaMedia/theme/luna.xlsx'),
  fileName : `${wm}`,
  mimetype: `${docs}`,
  fileLength: '99999999999999',
  pageCount: '1000000000',
  caption: asifezy,
  footer: botname,
  buttons: buttons,
  mentions: ments,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: botname,
  body: wm, 
  showAdAttribution: true,
  thumbnail: thumb,
  mediaType: 2,
  mediaUrl: websitex,
  sourceUrl: websitex
  }}
  }
  AsifOfc.sendMessage(m.chat, buttonMessage, {quoted: fkontak})
  }
 break
            break
            case 'command': {
	const sections = [{
								"title": "Initial 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂 𝙾𝙵 𝙻𝚄𝙽𝙰-𝙼𝙳💃",
								"rows": [
									{
										"title": "𝙾𝚃𝙷𝙴𝚁😢",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈𝚂 𝙾𝚃𝙷𝙴𝚁 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂",
										"rowId": `${prefix}othermenu`
									}
								]
							},
							{
								"title": "𝙱𝙾𝚃 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂❤️",
								"rows": [
									{
										"title": "𝙰𝙻𝙻 𝙼𝙴𝙽𝚄",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈 𝙰𝙻𝙻 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄😭",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈 𝙾𝙽𝙻𝚈 𝙾𝚆𝙽𝙴𝚁 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄🥂",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈 𝙼𝙰𝙸𝙽 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂",
										"rowId": `${prefix}groupmenu`
										},
										{
										"title": "𝙼𝙰𝙺𝙴𝚁 𝙼𝙴𝙽𝚄🌼",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈 𝙻𝙾𝙶𝙾 𝙼𝙰𝙺𝙸𝙽𝙶 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂",
										"rowId": `${prefix}makermenu`
									},
									{
										"title": "𝚂𝙾𝚄𝙽𝙳 𝙼𝙴𝙽𝚄 🎵",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈 𝚂𝙾𝚄𝙽 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂",
										"rowId": `${prefix}soundmenu`
									},
									{
										"title": "𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄 ↘️",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙼𝙴𝙽𝚄👿",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙼𝙴𝙽𝚄",
										"rowId": `${prefix}stickermenu`
									},
									{
										"title": "𝚂𝙴𝙰𝙲𝙷 𝙼𝙴𝙽𝚄 🔎",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈 𝚂𝙴𝙰𝙲𝙷𝙸𝙽𝙶 𝙼𝙴𝙽𝚄",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "𝚁𝙰𝙽𝙳𝙾𝙼 𝙸𝙼𝙰𝙶𝙴 𝙼𝙴𝙽𝚄🌆",
										"description": "𝙳𝙸𝚂𝙻𝙰𝚈𝚂 𝚁𝙰𝙽𝙳𝙾𝙼 𝙸𝙼𝙰𝙶𝙴 𝙼𝙴𝙽𝚄",
										"rowId": `${prefix}randomimagemenu`
									},
									{
										"title": "𝚁𝙰𝙽𝙳𝙾𝙼 𝚅𝙸𝙳𝙴𝙾 𝙼𝙴𝙽𝚄🌆",
										"description": "𝙳𝙸𝚂𝙻𝙰𝚈𝚂 𝚁𝙰𝙽𝙳𝙾𝙼 𝚅𝙸𝙳𝙴𝙾 𝙼𝙴𝙽𝚄",
										"rowId": `${prefix}randomvideomenu`
									},
									{
										"title": "𝙸𝙼𝙰𝙶𝙴 𝙴𝙵𝙵𝙴𝙲𝚃 𝙼𝙴𝙽𝚄🎇️",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈 𝙻𝙸𝚂𝚃 𝙾𝙵 𝙸𝙼𝙰𝙶𝙴 𝙴𝙵𝙵𝙴𝙲𝚃𝚂",
										"rowId": `${prefix}imageeffectmenu`
									},
										{
											"title": "𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄👾",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈 𝚁𝙰𝙽𝙳𝙾𝙼 𝙰𝙽𝙸𝙼𝙴 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂",
										"rowId": `${prefix}animemenu`
										},
										{
											"title": "𝙴𝙼𝙾𝚃𝙴 𝙼𝙴𝙽𝚄😀",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈𝚂 𝙻𝙸𝚂𝚃 𝙾𝙵 𝙴𝙼𝙾𝚃𝙴 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂",
										"rowId": `${prefix}emotemenu`
										},
										{
										"title": "𝙰𝙽𝙸𝙼𝙴 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙼𝙴𝙽𝚄️🐧",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈𝚂 𝙻𝙸𝚂𝚃 𝙾𝙵 𝙰𝙽𝙸𝙼𝙴 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂",
										"rowId": `${prefix}animestickermenu`
									     },
									{
										"title": "𝙽𝚂𝙵𝚆 𝙼𝙴𝙽𝚄👙",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈𝚂 𝙻𝙸𝚂𝚃 𝙾𝙵 𝙽𝚂𝙵𝚆 𝙼𝙴𝙽𝚄",
										"rowId": `${prefix}nsfwmenu`
									     },
										{
											"title": "𝙵𝚄𝙽 𝙼𝙴𝙽𝚄 🕺",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈𝚂 𝙻𝙸𝚂𝚃 𝙾𝙵 𝙵𝚄𝙽 𝙼𝙴𝙽𝚄",
										"rowId": `${prefix}funmenu`
										},
										{
										"title": "𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄 🎮",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈𝚂 𝙻𝙸𝚂𝚃 𝙾𝙵 𝙶𝙰𝙼𝙴 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂",
										"rowId": `${prefix}gamemenu`
									},
										{
											"title": "𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝙼𝙴𝙽𝚄🗿",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈𝚂 𝙻𝙸𝚂𝚃 𝙾𝙵 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝙼𝙴𝙽𝚄",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "𝙳𝙰𝚃𝙰 𝙱𝙰𝚂𝙴 𝙼𝙴𝙽𝚄♻️",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈𝚂 𝙻𝙸𝚂𝚃 𝙾𝙵 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴 𝙼𝙴𝙽𝚄",
										"rowId": `${prefix}databasemenu`
										},
										{
										"title": "𝙾𝚃𝙷𝙴𝚁 𝙼𝙴𝙽𝚄 🐸",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈𝚂 𝙻𝙸𝚂𝚃 𝙾𝙵 𝙼𝙸𝚂𝙻𝙰𝙽𝙴𝙸𝚄𝚂 𝙵𝙴𝙰𝚃𝚄𝚁𝙴𝚂",
										"rowId": `${prefix}othermenu`
									     },
										{
										"title": "𝚆𝙰𝚁 𝙼𝙴𝙽𝚄🔫",
										"description": "𝚃𝙷𝙸𝚂 𝙸𝚂 𝚆𝙷𝙴𝚁𝙴 𝚈𝙾𝚄 𝙰𝙻𝙻 𝙳𝙸𝙴👿",
										"rowId": `${prefix}warmenu`
									}
								]
							},
							{
										"title": "𝙰𝙽𝙾𝚈𝙼𝙾𝚄𝚂 𝙲𝙷𝙰𝚃 𝙼𝙴𝙽𝚄☠️️",
										"description": "𝙳𝙸𝚂𝙿𝙻𝙰𝚈𝚂 𝙻𝙸𝚂𝚃 𝙾𝙵 𝙰𝙽𝙾𝚈𝙼𝙾𝚄𝚂 𝙲𝙷𝙰𝚃",
										"rowId": `${prefix}anonymousmenu`
									},
										{
								"title": "©⏤͟͟͞͞ ❝𝙰𝚂𝙸𝙵 𝙺𝙷𝙰𝙽👑❞",
								"rows": [
									{
										"title": "𝚃𝙷𝙰𝙽𝙺𝚂 𝚃𝙾🌹️",
										"description": "𝚃𝙷𝙾𝚂𝙴 𝚆𝙷𝙾 𝙳𝙴𝚂𝚅𝙴𝚁 𝙲𝚁𝙴𝙳𝙸𝚃 𝙵𝙾𝚁 𝚃𝙷𝙴 𝙱𝙾𝚃 !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						]
const listMessage = {
  text: "𝙿𝙻𝙴𝙰𝚂𝙴 𝙲𝙷𝙾𝙾𝚂𝙴 𝚃𝙷𝙴 𝙼𝙴𝙽𝚄",
  footer: `${botname}\n😢𝚆𝙴𝙱𝚂𝙸𝚃𝙴: ${websitex}\n👙𝚂𝙲𝚁𝙸𝙿𝚃: ${botscript}`,
  title: `Hi 👋 ${pushname}`,
  buttonText: "Menu",
  sections
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, listMessage)
}
break
            case 'allmenu':{
var unicorn = await getBuffer(picak+'All Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝙾𝚆𝙽𝙴𝚁 ✪✞══━┓	
┃•𖥔  ${prefix}self
┃•𖥔  ${prefix}public
┃•𖥔  ${prefix}join [link]
┃•𖥔  ${prefix}leavegc
┃•𖥔  ${prefix}setbio
┃•𖥔  ${prefix}bctext [text]
┃•𖥔  ${prefix}bcimage [reply img/text]
┃•𖥔  ${prefix}bcvideo [reply img/text]
┃•𖥔  ${prefix}setbotpp [image]
┃•𖥔  ${prefix}setthumb [reply img]
┃•𖥔  ${prefix}setexif
┃•𖥔  ${prefix}hijack
┃•𖥔  ${prefix}creategroup [name]
┃•𖥔  ${prefix}block [tag/number]
┃•𖥔  ${prefix}unblock [tag/number]
┃•𖥔 ◐══════✪ GROUP 	        
┃•𖥔 ${prefix}grouplink
┃•𖥔 ${prefix}ephemeral [option]
┃•𖥔 ${prefix}setgcpp [image]
┃•𖥔 ${prefix}setname [text]
┃•𖥔 ${prefix}setdesc [text]
┃•𖥔 ${prefix}group 
┃•𖥔 ${prefix}resetgrouplink
┃•𖥔 ${prefix}editinfo [option]
┃•𖥔 ${prefix}menfess [number]
┃•𖥔 ${prefix}add [user]
┃•𖥔 ${prefix}kick [reply/tag]
┃•𖥔 ${prefix}hidetag [text]
┃•𖥔 ${prefix}tagall [text]
┃•𖥔 ${prefix}antilinkgc [on/off]
┃•𖥔 ${prefix}antilinktg [on/off]
┃•𖥔 ${prefix}antilinktt [on/off]
┃•𖥔 ${prefix}antilinkytch [on/off]
┃•𖥔 ${prefix}antilinkytvid [on/off]
┃•𖥔 ${prefix}antilinkig [on/off]
┃•𖥔 ${prefix}antilinkfb [on/off]
┃•𖥔 ${prefix}antilinktwit [on/off]
┃•𖥔 ${prefix}antilinkall [on/off]
┃•𖥔 ${prefix}antivirus [on/off]
┃•𖥔 ${prefix}antitoxic [on/off]
┃•𖥔 ${prefix}antiwame [on/off]
┃•𖥔 ${prefix}nsfw [on/off]
┃•𖥔 ${prefix}promote [reply/tag]
┃•𖥔 ${prefix}demote [reply/tag]
┃•𖥔 ${prefix}react [reply emoji]
┃•𖥔 ${prefix}vote
┃•𖥔 ${prefix}devote
┃•𖥔 ${prefix}upvote
┃•𖥔 ${prefix}checkvote
┃•𖥔 ${prefix}delvote
┃•𖥔 ◐══════✪ MAKER 
┃•𖥔 ${prefix}candy
┃•𖥔 ${prefix}blackpinkneon
┃•𖥔 ${prefix}deepsea
┃•𖥔 ${prefix}scifi
┃•𖥔 ${prefix}fiction
┃•𖥔 ${prefix}berry
┃•𖥔 ${prefix}fruitjuice
┃•𖥔 ${prefix}biscuit
┃•𖥔 ${prefix}wood
┃•𖥔 ${prefix}chocolate
┃•𖥔 ${prefix}matrix
┃•𖥔 ${prefix}blood
┃•𖥔 ${prefix}halloween
┃•𖥔 ${prefix}wicker
┃•𖥔 ${prefix}darkgold
┃•𖥔 ${prefix}firework
┃•𖥔 ${prefix}skeleton
┃•𖥔 ${prefix}sand
┃•𖥔 ${prefix}glue
┃•𖥔 ${prefix}leaves
┃•𖥔 ${prefix}magma
┃•𖥔 ${prefix}lava
┃•𖥔 ${prefix}rockart
┃•𖥔 ${prefix}bloodglas
┃•𖥔 ${prefix}underwater
┃•𖥔 ${prefix}textmaker
┃•𖥔 ${prefix}honey
┃•𖥔 ${prefix}ice
┃•𖥔 ${prefix}watercolor
┃•𖥔 ${prefix}multicolor
┃•𖥔 ${prefix}snow
┃•𖥔 ${prefix}harrypot
┃•𖥔 ${prefix}harrypotter
┃•𖥔 ${prefix}brokenglass
┃•𖥔 ${prefix}waterpipe
┃•𖥔 ${prefix}spooky
┃•𖥔 ${prefix}circuit
┃•𖥔 ${prefix}metallic
┃•𖥔 ${prefix}demon
┃•𖥔 ${prefix}sparklechristmas
┃•𖥔 ${prefix}christmas
┃•𖥔 ${prefix}3dchristmas
┃•𖥔 ${prefix}3dbox
┃•𖥔 ${prefix}waterdrop
┃•𖥔 ${prefix}lion2
┃•𖥔 ${prefix}papercut
┃•𖥔 ${prefix}transformer
┃•𖥔 ${prefix}neondevil
┃•𖥔 ${prefix}3davengers
┃•𖥔 ${prefix}3dstone
┃•𖥔 ${prefix}3dstone2
┃•𖥔 ${prefix}summertime
┃•𖥔 ${prefix}thunder
┃•𖥔 ${prefix}window
┃•𖥔 ${prefix}graffiti
┃•𖥔 ${prefix}graffitibike
┃•𖥔 ${prefix}pornhub
┃•𖥔 ${prefix}glitch
┃•𖥔 ${prefix}blackpinkart
┃•𖥔 ${prefix}glitch2
┃•𖥔 ${prefix}glitch3
┃•𖥔 ${prefix}3dspace
┃•𖥔 ${prefix}lion
┃•𖥔 ${prefix}3dneon
┃•𖥔 ${prefix}greenneon
┃•𖥔 ${prefix}bokeh
┃•𖥔 ${prefix}holographic
┃•𖥔 ${prefix}bear
┃•𖥔 ${prefix}wolf
┃•𖥔 ${prefix}joker
┃•𖥔 ${prefix}dropwater
┃•𖥔 ${prefix}dropwater2
┃•𖥔 ${prefix}thewall
┃•𖥔 ${prefix}neonlight
┃•𖥔 ${prefix}natural
┃•𖥔 ${prefix}carbon
┃•𖥔 ${prefix}pencil
┃•𖥔 ${prefix}blackpink2
┃•𖥔 ${prefix}neon
┃•𖥔 ${prefix}neonlight2
┃•𖥔 ${prefix}toxic
┃•𖥔 ${prefix}strawberry
┃•𖥔 ${prefix}discovery
┃•𖥔 ${prefix}1917
┃•𖥔  ${prefix}sci_fi
┃•𖥔  ${prefix}ancient
┃•𖥔  ${prefix}fabric
┃•𖥔  ${prefix}hoorror
┃•𖥔  ${prefix}whitebear
┃•𖥔  ${prefix}juice
┃•𖥔  ${prefix}batman
┃•𖥔  ${prefix}multicolor
┃•𖥔  ${prefix}wonderful
┃•𖥔  ${prefix}sketch
┃•𖥔  ${prefix}marvel
┃•𖥔  ${prefix}foggy
┃•𖥔  ${prefix}writing
┃•𖥔  ${prefix}halloweenfire
┃•𖥔  ${prefix}halloween
┃•𖥔  ${prefix}watercolor
┃•𖥔  ${prefix}classic
┃•𖥔 ◐════✪ DOWNLOAD 	
┃•𖥔 ${prefix}tiktok [url]
┃•𖥔 ${prefix}tiktokaudio [url]
┃•𖥔 ${prefix}instagram [url]
┃•𖥔 ${prefix}spotify [url]
┃•𖥔 ${prefix}mediafire [url]
┃•𖥔 ${prefix}ytmp3 [url|quality]
┃•𖥔 ${prefix}ytmp4 [url|quality]
┃•𖥔 ${prefix}gitclone [repo link]
┃•𖥔 ◐══════✪ SEARCH 	
┃•𖥔 ${prefix}play [query]
┃•𖥔 ${prefix}song [query]
┃•𖥔 ${prefix}yts [query]
┃•𖥔 ${prefix}lyrics [query]
┃•𖥔 ${prefix}gimage [query]
┃•𖥔 ${prefix}google [query]
┃•𖥔 ${prefix}anime [query]
┃•𖥔 ${prefix}pinterest [query]
┃•𖥔 ${prefix}image [query]
┃•𖥔 ${prefix}wallpaper [query]
┃•𖥔 ${prefix}searchno [number]
┃•𖥔 ${prefix}horoscope [query]
┃•𖥔 ${prefix}imdb [movie name]
┃•𖥔 ${prefix}weather [loc name]
┃•𖥔 ${prefix}genshin [char name]
┃•𖥔 ${prefix}wikimedia [query]
┃•𖥔 ${prefix}ytsearch [query]
┃•𖥔 ${prefix}ringtone [query]
┃•𖥔 ◐══════✪ CONVERT 
┃•𖥔  ${prefix}toimage [reply stick]
┃•𖥔  ${prefix}sticker [reply img|gif]
┃•𖥔  ${prefix}take [reply img|gif|stik]
┃•𖥔  ${prefix}smeme [reply img]
┃•𖥔  ${prefix}emoji [emoji]
┃•𖥔  ${prefix}tovideo [reply img]
┃•𖥔  ${prefix}togif [reply stick]
┃•𖥔  ${prefix}tovn [reply aud]
┃•𖥔  ${prefix}tomp3 [reply vn]
┃•𖥔  ${prefix}toaudio [reply vid]
┃•𖥔  ${prefix}ebinary [reply txt]
┃•𖥔  ${prefix}dbinary [reply txt]
┃•𖥔  ${prefix}tinyurl [link]
┃•𖥔  ${prefix}styletext [text]
┃•𖥔 ${prefix}volume [reply aud]
┃•𖥔 ${prefix}bass [reply aud]
┃•𖥔 ${prefix}blown [reply aud]
┃•𖥔 ${prefix}deep [reply aud]
┃•𖥔 ${prefix}earrape [reply aud]
┃•𖥔 ${prefix}fast [reply aud]
┃•𖥔 ${prefix}fat [reply aud]
┃•𖥔 ${prefix}nightcore [reply aud]
┃•𖥔 ${prefix}reverse [reply aud]
┃•𖥔 ${prefix}robot [reply aud]
┃•𖥔 ${prefix}slow [reply aud]
┃•𖥔 ${prefix}smooth [reply aud]
┃•𖥔 ${prefix}squirrel [reply aud]
┃•𖥔 ◐══════✪ IMG EFFECT 
┃•𖥔 ${prefix}removebg [reply img]
┃•𖥔 ◐══════✪ RANDOM IMG 
┃•𖥔 ${prefix}coffee
┃•𖥔 ${prefix}woof
┃•𖥔 ${prefix}meow
┃•𖥔 ${prefix}lizard
┃•𖥔 ${prefix}chinese
┃•𖥔 ${prefix}japanese
┃•𖥔 ${prefix}korean
┃•𖥔 ${prefix}indo
┃•𖥔 ${prefix}thai
┃•𖥔 ${prefix}vietnamese
┃•𖥔 ${prefix}malay
┃•𖥔 ${prefix}hijab
┃•𖥔 ${prefix}randomgirl
┃•𖥔 ${prefix}randomboy
┃•𖥔 ${prefix}aesthetic
┃•𖥔 ${prefix}antiwork
┃•𖥔 ${prefix}cosplay
┃•𖥔 ${prefix}car
┃•𖥔 ${prefix}bike
┃•𖥔 ${prefix}doggo
┃•𖥔 ${prefix}cat
┃•𖥔 ${prefix}notnot
┃•𖥔 ${prefix}kayes
┃•𖥔 ${prefix}justina
┃•𖥔 ${prefix}ryujin
┃•𖥔 ${prefix}boneka
┃•𖥔 ${prefix}rose
┃•𖥔 ${prefix}kpop
┃•𖥔 ${prefix}blackpink
┃•𖥔 ${prefix}ulzzangboy
┃•𖥔 ${prefix}ulzzanggirl
┃•𖥔 ${prefix}pubg
┃•𖥔 ${prefix}hacking
┃•𖥔 ${prefix}profilepicture
┃•𖥔 ${prefix}couplepicture
┃•𖥔 ${prefix}wallphone
┃•𖥔 ${prefix}wallml
┃•𖥔 ◐══════✪ RANDOM VIDEO
┃•𖥔 ${prefix}tiktokgirl	
┃•𖥔 ${prefix}tiktoknukhty
┃•𖥔 ${prefix}tiktokpanrika
┃•𖥔 ${prefix}tiktokkayes
┃•𖥔 ${prefix}tiktoknotnot
┃•𖥔 ${prefix}tiktokghea
┃•𖥔 ${prefix}tiktoksantuy
┃•𖥔 ${prefix}tiktokbocil
┃•𖥔 ◐══════✪ EMOTE 
┃•𖥔 ${prefix}instagramemoji
┃•𖥔 ${prefix}facebookemoji
┃•𖥔 ${prefix}iphoneemoji
┃•𖥔 ${prefix}samsungemoji
┃•𖥔 ${prefix}joyemoji
┃•𖥔 ${prefix}skypeemoji
┃•𖥔 ${prefix}twitteremoji
┃•𖥔 ${prefix}whatsappemoji
┃•𖥔 ${prefix}microsoftemoji
┃•𖥔 ${prefix}googleemoji
┃•𖥔 ${prefix}pediaemoji
┃•𖥔 ${prefix}microsoftemoji
┃•𖥔 ◐══════✪ ANIME 
┃•𖥔 ${prefix}animeneko
┃•𖥔 ${prefix}waifu
┃•𖥔 ${prefix}animewaifu
┃•𖥔 ${prefix}animeawoo
┃•𖥔 ${prefix}shinobu
┃•𖥔 ${prefix}foxgirl
┃•𖥔 ${prefix}animemegumin
┃•𖥔 ${prefix}loli-waifu
┃•𖥔 ${prefix}8ball
┃•𖥔 ${prefix}animenom
┃•𖥔 ${prefix}goose
┃•𖥔 ${prefix}avatar
┃•𖥔 ${prefix}tickle
┃•𖥔 ${prefix}gecg
┃•𖥔 ${prefix}feed
┃•𖥔 ${prefix}husbu
┃•𖥔 ${prefix}neko2
┃•𖥔 ${prefix}randomanime
┃•𖥔 ${prefix}shota
┃•𖥔 ${prefix}waifu2
┃•𖥔 ${prefix}animeslap
┃•𖥔 ${prefix}animepat
┃•𖥔 ${prefix}animeneko
┃•𖥔 ${prefix}animekiss
┃•𖥔 ${prefix}animewlp
┃•𖥔 ${prefix}animecuddle
┃•𖥔 ${prefix}animecry
┃•𖥔 ${prefix}animekill
┃•𖥔 ${prefix}animelick
┃•𖥔 ${prefix}animebite
┃•𖥔 ${prefix}animeyeet
┃•𖥔 ${prefix}animebully
┃•𖥔 ${prefix}animebonk
┃•𖥔 ${prefix}animewink
┃•𖥔 ${prefix}animepoke
┃•𖥔 ${prefix}animesmile
┃•𖥔 ${prefix}animewave
┃•𖥔 ${prefix}animeawoo
┃•𖥔 ${prefix}animeblush
┃•𖥔 ${prefix}animesmug
┃•𖥔 ${prefix}animeglomp
┃•𖥔 ${prefix}animehappy
┃•𖥔 ${prefix}animedance
┃•𖥔 ${prefix}animecringe
┃•𖥔 ${prefix}animehighfive
┃•𖥔 ${prefix}animehandhold
┃•𖥔 ${prefix}animemegumin
┃•𖥔 ${prefix}animesmug
┃•𖥔 ${prefix}couplepp
┃•𖥔 ${prefix}animewall [query]
┃•𖥔 ${prefix}animewall2 [query]
┃•𖥔 ◐════✪ STICKER 
┃•𖥔  ${prefix}patrick
┃•𖥔  ${prefix}emoji
┃•𖥔  ${prefix}emojimix
┃•𖥔  ${prefix}doge
┃•𖥔  ${prefix}lovesticker
┃•𖥔  ${prefix}animestick
┃•𖥔  ${prefix}spongebob
┃•𖥔  ${prefix}gojosatoru
┃•𖥔  ${prefix}nicholas
┃•𖥔  ${prefix}cartoon
┃•𖥔  ${prefix}stickman
┃•𖥔 ◐════✪ ANIME STICKER 
┃•𖥔 ${prefix}loli
┃•𖥔 ${prefix}bully
┃•𖥔 ${prefix}cuddle
┃•𖥔 ${prefix}cry
┃•𖥔 ${prefix}hug
┃•𖥔 ${prefix}awoo
┃•𖥔 ${prefix}kiss
┃•𖥔 ${prefix}lick
┃•𖥔 ${prefix}pat
┃•𖥔 ${prefix}smug
┃•𖥔 ${prefix}bonk
┃•𖥔 ${prefix}yeet
┃•𖥔 ${prefix}blush
┃•𖥔 ${prefix}smile
┃•𖥔 ${prefix}wave
┃•𖥔 ${prefix}highfive
┃•𖥔 ${prefix}handhold
┃•𖥔 ${prefix}nom
┃•𖥔 ${prefix}glomp
┃•𖥔 ${prefix}bite
┃•𖥔 ${prefix}slap
┃•𖥔 ${prefix}kill
┃•𖥔 ${prefix}happy
┃•𖥔 ${prefix}wink
┃•𖥔 ${prefix}poke
┃•𖥔 ${prefix}dance
┃•𖥔 ${prefix}cringe
┃•𖥔 ${prefix}neko
┃•𖥔 ${prefix}gura
┃•𖥔 ◐══════✪ NSFW 
┃•𖥔 ${prefix}gifhentai
┃•𖥔 ${prefix}gifblowjob
┃•𖥔 ${prefix}hentaivideo
┃•𖥔 ${prefix}hneko
┃•𖥔 ${prefix}nwaifu
┃•𖥔 ${prefix}animespank
┃•𖥔 ${prefix}trap
┃•𖥔 ${prefix}gasm
┃•𖥔 ${prefix}ahegao
┃•𖥔 ${prefix}ass
┃•𖥔 ${prefix}bdsm
┃•𖥔 ${prefix}blowjob
┃•𖥔 ${prefix}cuckold
┃•𖥔 ${prefix}cum
┃•𖥔 ${prefix}milf
┃•𖥔 ${prefix}eba
┃•𖥔 ${prefix}ero
┃•𖥔 ${prefix}femdom
┃•𖥔 ${prefix}foot
┃•𖥔 ${prefix}gangbang
┃•𖥔 ${prefix}glasses
┃•𖥔 ${prefix}hentai
┃•𖥔 ${prefix}jahy
┃•𖥔 ${prefix}manga
┃•𖥔 ${prefix}masturbation
┃•𖥔 ${prefix}neko-hentai
┃•𖥔 ${prefix}neko-hentai2
┃•𖥔 ${prefix}nsfwloli
┃•𖥔 ${prefix}orgy
┃•𖥔 ${prefix}panties
┃•𖥔 ${prefix}pussy
┃•𖥔 ${prefix}tentacles
┃•𖥔 ${prefix}thights
┃•𖥔 ${prefix}yuri
┃•𖥔 ${prefix}zettai
┃•𖥔 ◐══════✪ FUN 
┃•𖥔  ${prefix}say [text]
┃•𖥔  ${prefix}define [text]
┃•𖥔  ${prefix}how [text
┃•𖥔  ${prefix}when [text]
┃•𖥔  ${prefix}where [text]
┃•𖥔  ${prefix}is [text]
┃•𖥔  ${prefix}what [text]
┃•𖥔  ${prefix}can [text]
┃•𖥔  ${prefix}rate [text]
┃•𖥔  ${prefix}coolcheck [tag]
┃•𖥔  ${prefix}stupidcheck [tag]
┃•𖥔  ${prefix}waifucheck [tag]
┃•𖥔  ${prefix}evilcheck [tag]
┃•𖥔  ${prefix}dogcheck [tag]
┃•𖥔  ${prefix}hotcheck [tag]
┃•𖥔  ${prefix}smartcheck [tag]
┃•𖥔  ${prefix}uncleancheck [tag]
┃•𖥔  ${prefix}greatcheck [tag]
┃•𖥔  ${prefix}beautifulcheck [tag]
┃•𖥔  ${prefix}awesomecheck [tag]
┃•𖥔  ${prefix}prettycheck [tag]
┃•𖥔  ${prefix}lesbiancheck [tag]
┃•𖥔  ${prefix}gaycheck [tag]
┃•𖥔  ${prefix}cutecheck [tag]
┃•𖥔  ${prefix}uglycheck [tag]
┃•𖥔  ${prefix}hornycheck [tag]
┃•𖥔  ${prefix}charactercheck [tag]
┃•𖥔  ${prefix}lovelycheck [tag]
┃•𖥔  ${prefix}couple
┃•𖥔  ${prefix}soulmate
┃•𖥔  ${prefix}hot
┃•𖥔  ${prefix}sexy
┃•𖥔  ${prefix}kind
┃•𖥔  ${prefix}idiot
┃•𖥔  ${prefix}handsome
┃•𖥔  ${prefix}beautiful
┃•𖥔  ${prefix}cute
┃•𖥔  ${prefix}pretty
┃•𖥔  ${prefix}lesbian
┃•𖥔  ${prefix}noob
┃•𖥔  ${prefix}bastard
┃•𖥔  ${prefix}foolish
┃•𖥔  ${prefix}nerd
┃•𖥔  ${prefix}asshole
┃•𖥔  ${prefix}gay
┃•𖥔  ${prefix}smart
┃•𖥔  ${prefix}stubble
┃•𖥔  ${prefix}dog
┃•𖥔  ${prefix}horny
┃•𖥔  ${prefix}cunt
┃•𖥔  ${prefix}wibu
┃•𖥔  ${prefix}noobra
┃•𖥔  ${prefix}nibba
┃•𖥔  ${prefix}nibbi
┃•𖥔  ${prefix}comrade
┃•𖥔  ${prefix}mumu
┃•𖥔  ${prefix}rascal
┃•𖥔  ${prefix}scumbag
┃•𖥔  ${prefix}nuts
┃•𖥔  ${prefix}fagot
┃•𖥔  ${prefix}scoundrel
┃•𖥔  ${prefix}ditch
┃•𖥔  ${prefix}dope
┃•𖥔  ${prefix}gucci
┃•𖥔  ${prefix}lit
┃•𖥔  ${prefix}dumbass
┃•𖥔  ${prefix}crackhead
┃•𖥔  ${prefix}mf
┃•𖥔  ${prefix}motherfucker
┃•𖥔  ${prefix}sucker
┃•𖥔  ${prefix}fuckboy
┃•𖥔  ${prefix}playboy
┃•𖥔  ${prefix}fuckgirl
┃•𖥔  ${prefix}playgirl
┃•𖥔  ${prefix}quotes
┃•𖥔 ◐════✪ SOUND 
┃•𖥔  ${prefix}sound1
┃•𖥔  ${prefix}sound2
┃•𖥔  ${prefix}sound3
┃•𖥔  ${prefix}sound4
┃•𖥔  ${prefix}sound5
┃•𖥔  ${prefix}sound6
┃•𖥔  ${prefix}sound7
┃•𖥔  ${prefix}sound8
┃•𖥔  ${prefix}sound9
┃•𖥔  ${prefix}sound10
┃•𖥔  ${prefix}sound11
┃•𖥔  ${prefix}sound12
┃•𖥔  ${prefix}sound13
┃•𖥔  ${prefix}sound14
┃•𖥔  ${prefix}sound15
┃•𖥔  ${prefix}sound16
┃•𖥔  ${prefix}sound17
┃•𖥔  ${prefix}sound18
┃•𖥔  ${prefix}sound19
┃•𖥔  ${prefix}sound20
┃•𖥔  ${prefix}sound21
┃•𖥔  ${prefix}sound22
┃•𖥔  ${prefix}sound23
┃•𖥔  ${prefix}sound24
┃•𖥔  ${prefix}sound25
┃•𖥔  ${prefix}sound26
┃•𖥔  ${prefix}sound27
┃•𖥔  ${prefix}sound28
┃•𖥔  ${prefix}sound29
┃•𖥔  ${prefix}sound30
┃•𖥔  ${prefix}sound31
┃•𖥔  ${prefix}sound32
┃•𖥔  ${prefix}sound33
┃•𖥔  ${prefix}sound34
┃•𖥔  ${prefix}sound35
┃•𖥔  ${prefix}sound36
┃•𖥔  ${prefix}sound37
┃•𖥔  ${prefix}sound38
┃•𖥔  ${prefix}sound39
┃•𖥔  ${prefix}sound40
┃•𖥔  ${prefix}sound41
┃•𖥔  ${prefix}sound42
┃•𖥔  ${prefix}sound43
┃•𖥔  ${prefix}sound44
┃•𖥔  ${prefix}sound45
┃•𖥔  ${prefix}sound46
┃•𖥔  ${prefix}sound47
┃•𖥔  ${prefix}sound48
┃•𖥔  ${prefix}sound49
┃•𖥔  ${prefix}sound50
┃•𖥔  ${prefix}sound51
┃•𖥔  ${prefix}sound52
┃•𖥔  ${prefix}sound53
┃•𖥔  ${prefix}sound54
┃•𖥔  ${prefix}sound55
┃•𖥔  ${prefix}sound56
┃•𖥔  ${prefix}sound57
┃•𖥔  ${prefix}sound58
┃•𖥔  ${prefix}sound59
┃•𖥔  ${prefix}sound60
┃•𖥔  ${prefix}sound61
┃•𖥔  ${prefix}sound62
┃•𖥔  ${prefix}sound63
┃•𖥔  ${prefix}sound64
┃•𖥔  ${prefix}sound65
┃•𖥔  ${prefix}sound66
┃•𖥔  ${prefix}sound67
┃•𖥔  ${prefix}sound68
┃•𖥔  ${prefix}sound69
┃•𖥔  ${prefix}sound70
┃•𖥔  ${prefix}sound71
┃•𖥔  ${prefix}sound72
┃•𖥔  ${prefix}sound73
┃•𖥔  ${prefix}sound74
┃•𖥔  ${prefix}sound75
┃•𖥔  ${prefix}sound76
┃•𖥔  ${prefix}sound77
┃•𖥔  ${prefix}sound78
┃•𖥔  ${prefix}sound79
┃•𖥔  ${prefix}sound80
┃•𖥔  ${prefix}sound81
┃•𖥔  ${prefix}sound82
┃•𖥔  ${prefix}sound83
┃•𖥔  ${prefix}sound84
┃•𖥔  ${prefix}sound85
┃•𖥔  ${prefix}sound86
┃•𖥔  ${prefix}sound87
┃•𖥔  ${prefix}sound88
┃•𖥔  ${prefix}sound89
┃•𖥔  ${prefix}sound90
┃•𖥔  ${prefix}sound91
┃•𖥔  ${prefix}sound92
┃•𖥔  ${prefix}sound93
┃•𖥔  ${prefix}sound94
┃•𖥔  ${prefix}sound95
┃•𖥔  ${prefix}sound96
┃•𖥔  ${prefix}sound97
┃•𖥔  ${prefix}sound98
┃•𖥔  ${prefix}sound99
┃•𖥔  ${prefix}sound100
┃•𖥔  ${prefix}sound101
┃•𖥔  ${prefix}sound102
┃•𖥔  ${prefix}sound103
┃•𖥔  ${prefix}sound104
┃•𖥔  ${prefix}sound105
┃•𖥔  ${prefix}sound106
┃•𖥔  ${prefix}sound107
┃•𖥔  ${prefix}sound108
┃•𖥔  ${prefix}sound109
┃•𖥔  ${prefix}sound110
┃•𖥔  ${prefix}sound111
┃•𖥔  ${prefix}sound112
┃•𖥔  ${prefix}sound113
┃•𖥔  ${prefix}sound114
┃•𖥔  ${prefix}sound115
┃•𖥔  ${prefix}sound116
┃•𖥔  ${prefix}sound117
┃•𖥔  ${prefix}sound118
┃•𖥔  ${prefix}sound119
┃•𖥔  ${prefix}sound120
┃•𖥔  ${prefix}sound121
┃•𖥔  ${prefix}sound122
┃•𖥔  ${prefix}sound123
┃•𖥔  ${prefix}sound124
┃•𖥔  ${prefix}sound125
┃•𖥔  ${prefix}sound126
┃•𖥔  ${prefix}sound127
┃•𖥔  ${prefix}sound128
┃•𖥔  ${prefix}sound129
┃•𖥔  ${prefix}sound130
┃•𖥔  ${prefix}sound131
┃•𖥔  ${prefix}sound132
┃•𖥔  ${prefix}sound133
┃•𖥔  ${prefix}sound134
┃•𖥔  ${prefix}sound135
┃•𖥔  ${prefix}sound136
┃•𖥔  ${prefix}sound137
┃•𖥔  ${prefix}sound138
┃•𖥔  ${prefix}sound139
┃•𖥔  ${prefix}sound140
┃•𖥔  ${prefix}sound141
┃•𖥔  ${prefix}sound142
┃•𖥔  ${prefix}sound143
┃•𖥔  ${prefix}sound144
┃•𖥔  ${prefix}sound145
┃•𖥔  ${prefix}sound146
┃•𖥔  ${prefix}sound147
┃•𖥔  ${prefix}sound148
┃•𖥔  ${prefix}sound149
┃•𖥔  ${prefix}sound150
┃•𖥔  ${prefix}sound151
┃•𖥔  ${prefix}sound152
┃•𖥔  ${prefix}sound153
┃•𖥔  ${prefix}sound154
┃•𖥔  ${prefix}sound155
┃•𖥔  ${prefix}sound156
┃•𖥔  ${prefix}sound157
┃•𖥔  ${prefix}sound158
┃•𖥔  ${prefix}sound159
┃•𖥔  ${prefix}sound160
┃•𖥔  ${prefix}sound161
┃•𖥔 ◐════✪ GAME 
┃•𖥔  ${prefix}truth
┃•𖥔  ${prefix}dare
┃•𖥔  ${prefix}tictactoe
┃•𖥔  ${prefix}delttt
┃•𖥔  ${prefix}guess [option]
┃•𖥔  ${prefix}math [mode]
┃•𖥔  ${prefix}suitpvp [tag]
┃•𖥔 ◐══✪ ANONYMOUS CHAT 
┃•𖥔 ${prefix}anonymous
┃•𖥔 ${prefix}start
┃•𖥔 ${prefix}next
┃•𖥔 ${prefix}leave
┃•𖥔 ◐═══✪ DATABASE 
┃•𖥔  ${prefix}setcmd
┃•𖥔  ${prefix}listcmd
┃•𖥔  ${prefix}delcmd
┃•𖥔  ${prefix}lockcmd
┃•𖥔  ${prefix}addmsg
┃•𖥔  ${prefix}listmsg
┃•𖥔  ${prefix}getmsg
┃•𖥔  ${prefix}delmsg
┃•𖥔 ◐════✪ OTHER 
┃•𖥔  ${prefix}afk
┃•𖥔  ${prefix}id
┃•𖥔  ${prefix}toqr [link]
┃•𖥔  ${prefix}repeat
┃•𖥔  ${prefix}readmore [text]
┃•𖥔  ${prefix}toviewonce
┃•𖥔  ${prefix}fliptext [text]]
┃•𖥔  ${prefix}chatinfo
┃•𖥔  ${prefix}alive
┃•𖥔  ${prefix}script
┃•𖥔  ${prefix}ping
┃•𖥔  ${prefix}owner
┃•𖥔  ${prefix}menu
┃•𖥔  ${prefix}delete
┃•𖥔  ${prefix}quoted
┃•𖥔  ${prefix}listpc
┃•𖥔  ${prefix}listgc
┃•𖥔  ${prefix}donate
┃•𖥔  ${prefix}request
┃•𖥔  ${prefix}report [bug]
┃•𖥔 ◐══════✪「 BUG MENU 」	
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
      case 'ownermenu':{
	   var unicorn = await getBuffer(picak+'Owner Menu')
const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝙾𝚆𝙽𝙴𝚁 ✪✞══━┓	
┃𖥔 ֶָ֢֪  ${prefix}self
┃𖥔 ֶָ֢֪  ${prefix}public
┃𖥔 ֶָ֢֪  ${prefix}join [link]
┃𖥔 ֶָ֢֪  ${prefix}leavegc
┃𖥔 ֶָ֢֪  ${prefix}setbio
┃𖥔 ֶָ֢֪  ${prefix}hijack
┃𖥔 ֶָ֢֪  ${prefix}creategroup [name]
┃𖥔 ֶָ֢֪  ${prefix}block [user]
┃𖥔 ֶָ֢֪  ${prefix}unblock [user]
┃𖥔 ֶָ֢֪  ${prefix}broadcast [text]
┃𖥔 ֶָ֢֪  ${prefix}setppbot [image]
┃𖥔 ֶָ֢֪  ${prefix}setthumb [reply img]
┃𖥔 ֶָ֢֪  ${prefix}setexif
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
            case 'groupmenu':{
var unicorn = await getBuffer(picak+'Group Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝙶𝚁𝙾𝚄𝙿 ✪✞══━┓	
┃𖥔 ֶָ֢֪ ${prefix}grouplink
┃𖥔 ֶָ֢֪ ${prefix}ephemeral [option]
┃𖥔 ֶָ֢֪ ${prefix}setgcpp [image]
┃𖥔 ֶָ֢֪ ${prefix}setname [text]
┃𖥔 ֶָ֢֪ ${prefix}setdesc [text]
┃𖥔 ֶָ֢֪ ${prefix}group
┃𖥔 ֶָ֢֪ ${prefix}botgroups
┃𖥔 ֶָ֢֪ ${prefix}resetgrouplink
┃𖥔 ֶָ֢֪ ${prefix}editinfo [option]
┃𖥔 ֶָ֢֪ ${prefix}add [user]
┃𖥔 ֶָ֢֪ ${prefix}menfess [number]
┃𖥔 ֶָ֢֪ ${prefix}kick [reply/tag]
┃𖥔 ֶָ֢֪ ${prefix}hidetag [text]
┃𖥔 ֶָ֢֪ ${prefix}tagall [text]
┃𖥔 ֶָ֢֪ ${prefix}autosticker [on/off]
┃𖥔 ֶָ֢֪ ${prefix}autostickerpc [on/off]
┃𖥔 ֶָ֢֪ ${prefix}leveling [on/off]
┃𖥔 ֶָ֢֪ ${prefix}antilinkgc [on/off] 
┃𖥔 ֶָ֢֪ ${prefix}antilinktg [on/off]
┃𖥔 ֶָ֢֪ ${prefix}antilinktt [on/off]
┃𖥔 ֶָ֢֪ ${prefix}antilinkytch [on/off]
┃𖥔 ֶָ֢֪ ${prefix}antilinkytvid [on/off]
┃𖥔 ֶָ֢֪ ${prefix}antilinkig [on/off]
┃𖥔 ֶָ֢֪ ${prefix}antilinkfb [on/off]
┃𖥔 ֶָ֢֪ ${prefix}antilinktwit [on/off]
┃𖥔 ֶָ֢֪ ${prefix}antilinkall [on/off]
┃𖥔 ֶָ֢֪ ${prefix}antivirus [on/off]
┃𖥔 ֶָ֢֪ ${prefix}antitoxic [on/off]
┃𖥔 ֶָ֢֪ ${prefix}antiwame [on/off]
┃𖥔 ֶָ֢֪ ${prefix}nsfw [on/off]
┃𖥔 ֶָ֢֪ ${prefix}promote [reply/tag]
┃𖥔 ֶָ֢֪ ${prefix}demote [reply/tag]
┃𖥔 ֶָ֢֪ ${prefix}react [reply emoji]
┃𖥔 ֶָ֢֪ ${prefix}getpp [reply user]
┃𖥔 ֶָ֢֪ ${prefix}vote
┃𖥔 ֶָ֢֪ ${prefix}devote
┃𖥔 ֶָ֢֪ ${prefix}upvote
┃𖥔 ֶָ֢֪ ${prefix}checkvote
┃𖥔 ֶָ֢֪ ${prefix}delvote
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
case 'makermenu':{
var unicorn = await getBuffer(picak+'Maker Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝙼𝙰𝙺𝙴𝚁 ✪✞══━┓	
┃𖥔 ֶָ֢֪ ${prefix}candy
┃𖥔 ֶָ֢֪ ${prefix}8bit
┃𖥔 ֶָ֢֪ ${prefix}horror
┃𖥔 ֶָ֢֪ ${prefix}hoorror
┃𖥔 ֶָ֢֪ ${prefix}retro
┃𖥔 ֶָ֢֪ ${prefix}blackpinkneon
┃𖥔 ֶָ֢֪ ${prefix}deepsea
┃𖥔 ֶָ֢֪ ${prefix}scifi
┃𖥔 ֶָ֢֪ ${prefix}fiction
┃𖥔 ֶָ֢֪ ${prefix}berry
┃𖥔 ֶָ֢֪ ${prefix}fruitjuice
┃𖥔 ֶָ֢֪ ${prefix}biscuit
┃𖥔 ֶָ֢֪ ${prefix}wood
┃𖥔 ֶָ֢֪ ${prefix}chocolate
┃𖥔 ֶָ֢֪ ${prefix}matrix
┃𖥔 ֶָ֢֪ ${prefix}blood
┃𖥔 ֶָ֢֪ ${prefix}halloween
┃𖥔 ֶָ֢֪ ${prefix}wicker
┃𖥔 ֶָ֢֪ ${prefix}darkgold
┃𖥔 ֶָ֢֪ ${prefix}firework
┃𖥔 ֶָ֢֪ ${prefix}skeleton
┃𖥔 ֶָ֢֪ ${prefix}sand
┃𖥔 ֶָ֢֪ ${prefix}glue
┃𖥔 ֶָ֢֪ ${prefix}leaves
┃𖥔 ֶָ֢֪ ${prefix}magma
┃𖥔 ֶָ֢֪ ${prefix}lava
┃𖥔 ֶָ֢֪ ${prefix}rockart
┃𖥔 ֶָ֢֪ ${prefix}bloodglas
┃𖥔 ֶָ֢֪ ${prefix}underwater
┃𖥔 ֶָ֢֪ ${prefix}textmaker
┃𖥔 ֶָ֢֪ ${prefix}honey
┃𖥔 ֶָ֢֪ ${prefix}ice
┃𖥔 ֶָ֢֪ ${prefix}watercolor
┃𖥔 ֶָ֢֪ ${prefix}multicolor
┃𖥔 ֶָ֢֪ ${prefix}snow
┃𖥔 ֶָ֢֪ ${prefix}harrypot
┃𖥔 ֶָ֢֪ ${prefix}harrypotter
┃𖥔 ֶָ֢֪ ${prefix}brokenglass
┃𖥔 ֶָ֢֪ ${prefix}waterpipe
┃𖥔 ֶָ֢֪ ${prefix}spooky
┃𖥔 ֶָ֢֪ ${prefix}circuit
┃𖥔 ֶָ֢֪ ${prefix}metallic
┃𖥔 ֶָ֢֪ ${prefix}demon
┃𖥔 ֶָ֢֪ ${prefix}sparklechristmas
┃𖥔 ֶָ֢֪ ${prefix}christmas
┃𖥔 ֶָ֢֪ ${prefix}3dchristmas
┃𖥔 ֶָ֢֪ ${prefix}3dbox
┃𖥔 ֶָ֢֪ ${prefix}waterdrop
┃𖥔 ֶָ֢֪ ${prefix}lion2
┃𖥔 ֶָ֢֪ ${prefix}papercut
┃𖥔 ֶָ֢֪ ${prefix}transformer
┃𖥔 ֶָ֢֪ ${prefix}neondevil
┃𖥔 ֶָ֢֪ ${prefix}3davengers
┃𖥔 ֶָ֢֪ ${prefix}3dstone
┃𖥔 ֶָ֢֪ ${prefix}3dstone2
┃𖥔 ֶָ֢֪ ${prefix}summertime
┃𖥔 ֶָ֢֪ ${prefix}thunder
┃𖥔 ֶָ֢֪ ${prefix}window
┃𖥔 ֶָ֢֪ ${prefix}graffiti
┃𖥔 ֶָ֢֪ ${prefix}graffitibike
┃𖥔 ֶָ֢֪ ${prefix}pornhub
┃𖥔 ֶָ֢֪ ${prefix}glitch
┃𖥔 ֶָ֢֪ ${prefix}blackpinkart
┃𖥔 ֶָ֢֪ ${prefix}glitch2
┃𖥔 ֶָ֢֪ ${prefix}glitch3
┃𖥔 ֶָ֢֪ ${prefix}3dspace
┃𖥔 ֶָ֢֪ ${prefix}lion
┃𖥔 ֶָ֢֪ ${prefix}3dneon
┃𖥔 ֶָ֢֪ ${prefix}greenneon
┃𖥔 ֶָ֢֪ ${prefix}bokeh
┃𖥔 ֶָ֢֪ ${prefix}holographic
┃𖥔 ֶָ֢֪ ${prefix}bear
┃𖥔 ֶָ֢֪ ${prefix}wolf
┃𖥔 ֶָ֢֪ ${prefix}joker
┃𖥔 ֶָ֢֪ ${prefix}dropwater
┃𖥔 ֶָ֢֪ ${prefix}dropwater2
┃𖥔 ֶָ֢֪ ${prefix}thewall
┃𖥔 ֶָ֢֪ ${prefix}neonlight
┃𖥔 ֶָ֢֪ ${prefix}natural
┃𖥔 ֶָ֢֪ ${prefix}carbon
┃𖥔 ֶָ֢֪ ${prefix}pencil
┃𖥔 ֶָ֢֪ ${prefix}blackpink2
┃𖥔 ֶָ֢֪ ${prefix}neon
┃𖥔 ֶָ֢֪ ${prefix}neonlight2
┃𖥔 ֶָ֢֪ ${prefix}toxic
┃𖥔 ֶָ֢֪ ${prefix}strawberry
┃𖥔 ֶָ֢֪ ${prefix}discovery
┃𖥔 ֶָ֢֪ ${prefix}1917
┃𖥔 ֶָ֢֪  ${prefix}sci_fi
┃𖥔 ֶָ֢֪  ${prefix}ancient
┃𖥔 ֶָ֢֪  ${prefix}fabric
┃𖥔 ֶָ֢֪  ${prefix}hoorror
┃𖥔 ֶָ֢֪  ${prefix}whitebear
┃𖥔 ֶָ֢֪  ${prefix}juice
┃𖥔 ֶָ֢֪  ${prefix}batman
┃𖥔 ֶָ֢֪  ${prefix}multicolor
┃𖥔 ֶָ֢֪  ${prefix}wonderful
┃𖥔 ֶָ֢֪  ${prefix}sketch
┃𖥔 ֶָ֢֪  ${prefix}marvel
┃𖥔 ֶָ֢֪  ${prefix}foggy
┃𖥔 ֶָ֢֪  ${prefix}writing
┃𖥔 ֶָ֢֪  ${prefix}halloweenfire
┃𖥔 ֶָ֢֪  ${prefix}halloween
┃𖥔 ֶָ֢֪  ${prefix}watercolor
┃𖥔 ֶָ֢֪  ${prefix}classic
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
            case 'downloadmenu':{
var unicorn = await getBuffer(picak+'Download Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳✪✞══━┓	
┃𖥔 ֶָ֢֪ ${prefix}tiktok [url]
┃𖥔 ֶָ֢֪ ${prefix}tiktokaudio [url]
┃𖥔 ֶָ֢֪ ${prefix}instagram [url]
┃𖥔 ֶָ֢֪ ${prefix}spotify [url]
┃𖥔 ֶָ֢֪ ${prefix}mediafire [url]
┃𖥔 ֶָ֢֪ ${prefix}ytmp3 [url|quality]
┃𖥔 ֶָ֢֪ ${prefix}ytmp4 [url|quality]
┃𖥔 ֶָ֢֪ ${prefix}gitclone [repo link]
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
            case 'searchmenu':{
var unicorn = await getBuffer(picak+'Search Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝚂𝙴𝙰𝚁𝙲𝙷 ✪✞══━┓	
┃𖥔 ֶָ֢֪ ${prefix}play [query]
┃𖥔 ֶָ֢֪ ${prefix}song [query]
┃𖥔 ֶָ֢֪ ${prefix}yts [query]
┃𖥔 ֶָ֢֪ ${prefix}lyrics [query]
┃𖥔 ֶָ֢֪ ${prefix}google [query]
┃𖥔 ֶָ֢֪ ${prefix}google [query]
┃𖥔 ֶָ֢֪ ${prefix}anime [query]
┃𖥔 ֶָ֢֪ ${prefix}pinterest [query]
┃𖥔 ֶָ֢֪ ${prefix}image [query]
┃𖥔 ֶָ֢֪ ${prefix}wallpaper [query]
┃𖥔 ֶָ֢֪ ${prefix}searchno [number]
┃𖥔 ֶָ֢֪ ${prefix}horoscope [query]
┃𖥔 ֶָ֢֪ ${prefix}imdb [movie name]
┃𖥔 ֶָ֢֪ ${prefix}weather [loc name]
┃𖥔 ֶָ֢֪ ${prefix}genshin [char name]
┃𖥔 ֶָ֢֪ ${prefix}wikimedia [query]
┃𖥔 ֶָ֢֪ ${prefix}ytsearch [query]
┃𖥔 ֶָ֢֪ ${prefix}ringtone [query]
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
            case 'convertmenu':{
var unicorn = await getBuffer(picak+'Convert Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 ✪✞══━┓	
┃𖥔 ֶָ֢֪  ${prefix}toimage [reply stick]
┃𖥔 ֶָ֢֪  ${prefix}sticker [reply img|gif]
┃𖥔 ֶָ֢֪  ${prefix}take [reply img|gif|stik]
┃𖥔 ֶָ֢֪  ${prefix}smeme [reply img]
┃𖥔 ֶָ֢֪  ${prefix}emoji [emoji]
┃𖥔 ֶָ֢֪  ${prefix}tovideo [reply img]
┃𖥔 ֶָ֢֪  ${prefix}togif [reply stick]
┃𖥔 ֶָ֢֪  ${prefix}tovn [reply aud]
┃𖥔 ֶָ֢֪  ${prefix}tomp3 [reply vn]
┃𖥔 ֶָ֢֪  ${prefix}toaudio [reply vid]
┃𖥔 ֶָ֢֪  ${prefix}ebinary [reply txt]
┃𖥔 ֶָ֢֪  ${prefix}dbinary [reply txt]
┃𖥔 ֶָ֢֪  ${prefix}tinyurl [link]
┃𖥔 ֶָ֢֪  ${prefix}styletext [text]
┃𖥔 ֶָ֢֪ ${prefix}volume [reply aud]
┃𖥔 ֶָ֢֪ ${prefix}bass [reply aud]
┃𖥔 ֶָ֢֪ ${prefix}blown [reply aud]
┃𖥔 ֶָ֢֪ ${prefix}deep [reply aud]
┃𖥔 ֶָ֢֪ ${prefix}earrape [reply aud]
┃𖥔 ֶָ֢֪ ${prefix}fast [reply aud]
┃𖥔 ֶָ֢֪ ${prefix}fat [reply aud]
┃𖥔 ֶָ֢֪ ${prefix}nightcore [reply aud]
┃𖥔 ֶָ֢֪ ${prefix}reverse [reply aud]
┃𖥔 ֶָ֢֪ ${prefix}robot [reply aud]
┃𖥔 ֶָ֢֪ ${prefix}slow [reply aud]
┃𖥔 ֶָ֢֪ ${prefix}smooth [reply aud]
┃𖥔 ֶָ֢֪ ${prefix}squirrel [reply aud]
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
case 'randomimagemenu':{
var unicorn = await getBuffer(picak+'Random Image Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝚁𝙰𝙽𝙳𝙼 𝙸𝙼𝙶 ✪✞══━┓ 	
┃𖥔 ֶָ֢֪ ${prefix}coffee
┃𖥔 ֶָ֢֪ ${prefix}woof
┃𖥔 ֶָ֢֪ ${prefix}meow
┃𖥔 ֶָ֢֪ ${prefix}lizard
┃𖥔 ֶָ֢֪ ${prefix}chinese
┃𖥔 ֶָ֢֪ ${prefix}japanese
┃𖥔 ֶָ֢֪ ${prefix}korean
┃𖥔 ֶָ֢֪ ${prefix}indo
┃𖥔 ֶָ֢֪ ${prefix}thai
┃𖥔 ֶָ֢֪ ${prefix}vietnamese
┃𖥔 ֶָ֢֪ ${prefix}malay
┃𖥔 ֶָ֢֪ ${prefix}hijab
┃𖥔 ֶָ֢֪ ${prefix}randomgirl
┃𖥔 ֶָ֢֪ ${prefix}randomboy
┃𖥔 ֶָ֢֪ ${prefix}aesthetic
┃𖥔 ֶָ֢֪ ${prefix}antiwork
┃𖥔 ֶָ֢֪ ${prefix}cosplay
┃𖥔 ֶָ֢֪ ${prefix}car
┃𖥔 ֶָ֢֪ ${prefix}bike
┃𖥔 ֶָ֢֪ ${prefix}doggo
┃𖥔 ֶָ֢֪ ${prefix}cat
┃𖥔 ֶָ֢֪ ${prefix}notnot
┃𖥔 ֶָ֢֪ ${prefix}kayes
┃𖥔 ֶָ֢֪ ${prefix}justina
┃𖥔 ֶָ֢֪ ${prefix}ryujin
┃𖥔 ֶָ֢֪ ${prefix}boneka
┃𖥔 ֶָ֢֪ ${prefix}rose
┃𖥔 ֶָ֢֪ ${prefix}kpop
┃𖥔 ֶָ֢֪ ${prefix}blackpink
┃𖥔 ֶָ֢֪ ${prefix}ulzzangboy
┃𖥔 ֶָ֢֪ ${prefix}ulzzanggirl
┃𖥔 ֶָ֢֪ ${prefix}pubg
┃𖥔 ֶָ֢֪ ${prefix}hacking
┃𖥔 ֶָ֢֪ ${prefix}profilepicture
┃𖥔 ֶָ֢֪ ${prefix}couplepicture
┃𖥔 ֶָ֢֪ ${prefix}wallphone
┃𖥔 ֶָ֢֪ ${prefix}wallml
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
case 'randomvideomenu':{
var unicorn = await getBuffer(picak+'Random Video Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝚁𝙰𝙽𝙳𝙾𝙼 𝚅𝙸𝙳 ✪✞══━┓
┃𖥔 ֶָ֢֪ ${prefix}tiktokgirl	
┃𖥔 ֶָ֢֪ ${prefix}tiktoknukhty
┃𖥔 ֶָ֢֪ ${prefix}tiktokpanrika
┃𖥔 ֶָ֢֪ ${prefix}tiktokkayes
┃𖥔 ֶָ֢֪ ${prefix}tiktoknotnot
┃𖥔 ֶָ֢֪ ${prefix}tiktokghea
┃𖥔 ֶָ֢֪ ${prefix}tiktoksantuy
┃𖥔 ֶָ֢֪ ${prefix}tiktokbocil
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
           case 'emotemenu':{
var unicorn = await getBuffer(picak+'Emote Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝙴𝙼𝙾𝚃𝙴 ✪✞══━┓ 	
┃𖥔 ֶָ֢֪ ${prefix}instagramemoji
┃𖥔 ֶָ֢֪ ${prefix}facebookemoji
┃𖥔 ֶָ֢֪ ${prefix}iphoneemoji
┃𖥔 ֶָ֢֪ ${prefix}samsungemoji
┃𖥔 ֶָ֢֪ ${prefix}joyemoji
┃𖥔 ֶָ֢֪ ${prefix}skypeemoji
┃𖥔 ֶָ֢֪ ${prefix}twitteremoji
┃𖥔 ֶָ֢֪ ${prefix}whatsappemoji
┃𖥔 ֶָ֢֪ ${prefix}microsoftemoji
┃𖥔 ֶָ֢֪ ${prefix}googleemoji
┃𖥔 ֶָ֢֪ ${prefix}pediaemoji
┃𖥔 ֶָ֢֪ ${prefix}microsoftemoji
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
            case 'imageeffectmenu':{
var unicorn = await getBuffer(picak+'Image Effect Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏═════✪ IMG EFFECT 	
┃𖥔 ֶָ֢֪ ${prefix}removebg [reply img]
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
case 'animemenu':{
var unicorn = await getBuffer(picak+'Anime Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝙰𝙽𝙸𝙼𝙴 ✪✞══━┓ 	
┃𖥔 ֶָ֢֪ ${prefix}animeneko
┃𖥔 ֶָ֢֪ ${prefix}waifu
┃𖥔 ֶָ֢֪ ${prefix}shinobu
┃𖥔 ֶָ֢֪ ${prefix}animeawoo
┃𖥔 ֶָ֢֪ ${prefix}animewaifu
┃𖥔 ֶָ֢֪ ${prefix}foxgirl
┃𖥔 ֶָ֢֪ ${prefix}animenom
┃𖥔 ֶָ֢֪ ${prefix}goose
┃𖥔 ֶָ֢֪ ${prefix}8ball
┃𖥔 ֶָ֢֪ ${prefix}avatar
┃𖥔 ֶָ֢֪ ${prefix}tickle
┃𖥔 ֶָ֢֪ ${prefix}gecg
┃𖥔 ֶָ֢֪ ${prefix}feed
┃𖥔 ֶָ֢֪ ${prefix}husbu
┃𖥔 ֶָ֢֪ ${prefix}neko2
┃𖥔 ֶָ֢֪ ${prefix}randomanime
┃𖥔 ֶָ֢֪ ${prefix}shota
┃𖥔 ֶָ֢֪ ${prefix}waifu2
┃𖥔 ֶָ֢֪ ${prefix}animeslap
┃𖥔 ֶָ֢֪ ${prefix}animepat
┃𖥔 ֶָ֢֪ ${prefix}animeneko
┃𖥔 ֶָ֢֪ ${prefix}animekiss
┃𖥔 ֶָ֢֪ ${prefix}animewlp
┃𖥔 ֶָ֢֪ ${prefix}animecuddle
┃𖥔 ֶָ֢֪ ${prefix}animecry
┃𖥔 ֶָ֢֪ ${prefix}animekill
┃𖥔 ֶָ֢֪ ${prefix}animelick
┃𖥔 ֶָ֢֪ ${prefix}animebite
┃𖥔 ֶָ֢֪ ${prefix}animeyeet
┃𖥔 ֶָ֢֪ ${prefix}animebully
┃𖥔 ֶָ֢֪ ${prefix}animebonk
┃𖥔 ֶָ֢֪ ${prefix}animewink
┃𖥔 ֶָ֢֪ ${prefix}animepoke
┃𖥔 ֶָ֢֪ ${prefix}animesmile
┃𖥔 ֶָ֢֪ ${prefix}animewave
┃𖥔 ֶָ֢֪ ${prefix}animeawoo
┃𖥔 ֶָ֢֪ ${prefix}animeblush
┃𖥔 ֶָ֢֪ ${prefix}animesmug
┃𖥔 ֶָ֢֪ ${prefix}animeglomp
┃𖥔 ֶָ֢֪ ${prefix}animehappy
┃𖥔 ֶָ֢֪ ${prefix}animedance
┃𖥔 ֶָ֢֪ ${prefix}animecringe
┃𖥔 ֶָ֢֪ ${prefix}animehighfive
┃𖥔 ֶָ֢֪ ${prefix}animehandhold
┃𖥔 ֶָ֢֪ ${prefix}animemegumin
┃𖥔 ֶָ֢֪ ${prefix}animemegumin
┃𖥔 ֶָ֢֪ ${prefix}animesmug
┃𖥔 ֶָ֢֪ ${prefix}loli-waifu
┃𖥔 ֶָ֢֪ ${prefix}couplepp
┃𖥔 ֶָ֢֪ ${prefix}animewall [query]
┃𖥔 ֶָ֢֪ ${prefix}animewall2 [query]
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
            case 'stickermenu':{
var unicorn = await getBuffer(picak+'Sticker Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 ✪✞══━┓ 	
┃𖥔 ֶָ֢֪  ${prefix}patrick
┃𖥔 ֶָ֢֪  ${prefix}emoji
┃𖥔 ֶָ֢֪  ${prefix}emojimix
┃𖥔 ֶָ֢֪  ${prefix}doge
┃𖥔 ֶָ֢֪  ${prefix}lovesticker
┃𖥔 ֶָ֢֪  ${prefix}animestick
┃𖥔 ֶָ֢֪  ${prefix}spongebob
┃𖥔 ֶָ֢֪  ${prefix}gojosatoru
┃𖥔 ֶָ֢֪  ${prefix}nicholas
┃𖥔 ֶָ֢֪  ${prefix}cartoon
┃𖥔 ֶָ֢֪  ${prefix}stickman
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
case 'animestickermenu':{
var unicorn = await getBuffer(picak+'Anime Sticker Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝙰𝙽𝙸𝙼𝙴 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 ✪✞══━┓	
┃𖥔 ֶָ֢֪ ${prefix}loli
┃𖥔 ֶָ֢֪ ${prefix}bully
┃𖥔 ֶָ֢֪ ${prefix}cuddle
┃𖥔 ֶָ֢֪ ${prefix}cry
┃𖥔 ֶָ֢֪ ${prefix}hug
┃𖥔 ֶָ֢֪ ${prefix}awoo
┃𖥔 ֶָ֢֪ ${prefix}kiss
┃𖥔 ֶָ֢֪ ${prefix}lick
┃𖥔 ֶָ֢֪ ${prefix}pat
┃𖥔 ֶָ֢֪ ${prefix}smug
┃𖥔 ֶָ֢֪ ${prefix}bonk
┃𖥔 ֶָ֢֪ ${prefix}yeet
┃𖥔 ֶָ֢֪ ${prefix}blush
┃𖥔 ֶָ֢֪ ${prefix}smile
┃𖥔 ֶָ֢֪ ${prefix}wave
┃𖥔 ֶָ֢֪ ${prefix}highfive
┃𖥔 ֶָ֢֪ ${prefix}handhold
┃𖥔 ֶָ֢֪ ${prefix}nom
┃𖥔 ֶָ֢֪ ${prefix}glomp
┃𖥔 ֶָ֢֪ ${prefix}bite
┃𖥔 ֶָ֢֪ ${prefix}slap
┃𖥔 ֶָ֢֪ ${prefix}kill
┃𖥔 ֶָ֢֪ ${prefix}happy
┃𖥔 ֶָ֢֪ ${prefix}wink
┃𖥔 ֶָ֢֪ ${prefix}poke
┃𖥔 ֶָ֢֪ ${prefix}dance
┃𖥔 ֶָ֢֪ ${prefix}cringe
┃𖥔 ֶָ֢֪ ${prefix}neko
┃𖥔 ֶָ֢֪ ${prefix}gura
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break 
case 'nsfwmenu':{
var unicorn = await getBuffer(picak+'Nsfw Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝙽𝚂𝙵𝚆 ✪✞══━┓	
┃𖥔 ֶָ֢֪ ${prefix}gifhentai
┃𖥔 ֶָ֢֪ ${prefix}gifblowjob
┃𖥔 ֶָ֢֪ ${prefix}hentaivideo
┃𖥔 ֶָ֢֪ ${prefix}hneko
┃𖥔 ֶָ֢֪ ${prefix}nwaifu
┃𖥔 ֶָ֢֪ ${prefix}animespank
┃𖥔 ֶָ֢֪ ${prefix}trap
┃𖥔 ֶָ֢֪ ${prefix}gasm
┃𖥔 ֶָ֢֪ ${prefix}ahegao
┃𖥔 ֶָ֢֪ ${prefix}ass
┃𖥔 ֶָ֢֪ ${prefix}bdsm
┃𖥔 ֶָ֢֪ ${prefix}blowjob
┃𖥔 ֶָ֢֪ ${prefix}cuckold
┃𖥔 ֶָ֢֪ ${prefix}cum
┃𖥔 ֶָ֢֪ ${prefix}milf
┃𖥔 ֶָ֢֪ ${prefix}eba
┃𖥔 ֶָ֢֪ ${prefix}ero
┃𖥔 ֶָ֢֪ ${prefix}femdom
┃𖥔 ֶָ֢֪ ${prefix}foot
┃𖥔 ֶָ֢֪ ${prefix}gangbang
┃𖥔 ֶָ֢֪ ${prefix}glasses
┃𖥔 ֶָ֢֪ ${prefix}hentai
┃𖥔 ֶָ֢֪ ${prefix}jahy
┃𖥔 ֶָ֢֪ ${prefix}manga
┃𖥔 ֶָ֢֪ ${prefix}masturbation
┃𖥔 ֶָ֢֪ ${prefix}neko-hentai
┃𖥔 ֶָ֢֪ ${prefix}neko-hentai2
┃𖥔 ֶָ֢֪ ${prefix}nsfwloli
┃𖥔 ֶָ֢֪ ${prefix}orgy
┃𖥔 ֶָ֢֪ ${prefix}panties
┃𖥔 ֶָ֢֪ ${prefix}pussy
┃𖥔 ֶָ֢֪ ${prefix}tentacles
┃𖥔 ֶָ֢֪ ${prefix}thights
┃𖥔 ֶָ֢֪ ${prefix}yuri
┃𖥔 ֶָ֢֪ ${prefix}zettai
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
case 'funmenu':{
var unicorn = await getBuffer(picak+'Fun Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝙵𝚄𝙽 ✪✞══━┓ 
┃𖥔 ֶָ֢֪  ${prefix}say [text]	
┃𖥔 ֶָ֢֪  ${prefix}define [text]
┃𖥔 ֶָ֢֪  ${prefix}how [text]
┃𖥔 ֶָ֢֪  ${prefix}when [text]
┃𖥔 ֶָ֢֪  ${prefix}where [text]
┃𖥔 ֶָ֢֪  ${prefix}is [text]
┃𖥔 ֶָ֢֪  ${prefix}what [text]
┃𖥔 ֶָ֢֪  ${prefix}can [text]
┃𖥔 ֶָ֢֪  ${prefix}rate [text]
┃𖥔 ֶָ֢֪  ${prefix}coolcheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}stupidcheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}waifucheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}evilcheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}dogcheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}hotcheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}smartcheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}uncleancheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}greatcheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}beautifulcheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}awesomecheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}prettycheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}lesbiancheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}gaycheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}cutecheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}uglycheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}hornycheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}charactercheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}lovelycheck [tag]
┃𖥔 ֶָ֢֪  ${prefix}couple
┃𖥔 ֶָ֢֪  ${prefix}soulmate
┃𖥔 ֶָ֢֪  ${prefix}hot
┃𖥔 ֶָ֢֪  ${prefix}sexy
┃𖥔 ֶָ֢֪  ${prefix}kind
┃𖥔 ֶָ֢֪  ${prefix}idiot
┃𖥔 ֶָ֢֪  ${prefix}handsome
┃𖥔 ֶָ֢֪  ${prefix}beautiful
┃𖥔 ֶָ֢֪  ${prefix}cute
┃𖥔 ֶָ֢֪  ${prefix}pretty
┃𖥔 ֶָ֢֪  ${prefix}lesbian
┃𖥔 ֶָ֢֪  ${prefix}noob
┃𖥔 ֶָ֢֪  ${prefix}bastard
┃𖥔 ֶָ֢֪  ${prefix}foolish
┃𖥔 ֶָ֢֪  ${prefix}nerd
┃𖥔 ֶָ֢֪  ${prefix}asshole
┃𖥔 ֶָ֢֪  ${prefix}gay
┃𖥔 ֶָ֢֪  ${prefix}smart
┃𖥔 ֶָ֢֪  ${prefix}stubble
┃𖥔 ֶָ֢֪  ${prefix}dog
┃𖥔 ֶָ֢֪  ${prefix}horny
┃𖥔 ֶָ֢֪  ${prefix}cunt
┃𖥔 ֶָ֢֪  ${prefix}wibu
┃𖥔 ֶָ֢֪  ${prefix}noobra
┃𖥔 ֶָ֢֪  ${prefix}nibba
┃𖥔 ֶָ֢֪  ${prefix}nibbi
┃𖥔 ֶָ֢֪  ${prefix}comrade
┃𖥔 ֶָ֢֪  ${prefix}mumu
┃𖥔 ֶָ֢֪  ${prefix}rascal
┃𖥔 ֶָ֢֪  ${prefix}scumbag
┃𖥔 ֶָ֢֪  ${prefix}nuts
┃𖥔 ֶָ֢֪  ${prefix}fagot
┃𖥔 ֶָ֢֪  ${prefix}scoundrel
┃𖥔 ֶָ֢֪  ${prefix}ditch
┃𖥔 ֶָ֢֪  ${prefix}dope
┃𖥔 ֶָ֢֪  ${prefix}gucci
┃𖥔 ֶָ֢֪  ${prefix}lit
┃𖥔 ֶָ֢֪  ${prefix}dumbass
┃𖥔 ֶָ֢֪  ${prefix}crackhead
┃𖥔 ֶָ֢֪  ${prefix}mf
┃𖥔 ֶָ֢֪  ${prefix}motherfucker
┃𖥔 ֶָ֢֪  ${prefix}sucker
┃𖥔 ֶָ֢֪  ${prefix}fuckboy
┃𖥔 ֶָ֢֪  ${prefix}playboy
┃𖥔 ֶָ֢֪  ${prefix}fuckgirl
┃𖥔 ֶָ֢֪  ${prefix}playgirl
┃𖥔 ֶָ֢֪  ${prefix}quotes
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
case 'soundmenu':{
var unicorn = await getBuffer(picak+'Sound Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝚂𝙾𝚄𝙽𝙳 ✪✞══━┓ 	
┃𖥔 ֶָ֢֪  ${prefix}sound1
┃𖥔 ֶָ֢֪  ${prefix}sound2
┃𖥔 ֶָ֢֪  ${prefix}sound3
┃𖥔 ֶָ֢֪  ${prefix}sound4
┃𖥔 ֶָ֢֪  ${prefix}sound5
┃𖥔 ֶָ֢֪  ${prefix}sound6
┃𖥔 ֶָ֢֪  ${prefix}sound7
┃𖥔 ֶָ֢֪  ${prefix}sound8
┃𖥔 ֶָ֢֪  ${prefix}sound9
┃𖥔 ֶָ֢֪  ${prefix}sound10
┃𖥔 ֶָ֢֪  ${prefix}sound11
┃𖥔 ֶָ֢֪  ${prefix}sound12
┃𖥔 ֶָ֢֪  ${prefix}sound13
┃𖥔 ֶָ֢֪  ${prefix}sound14
┃𖥔 ֶָ֢֪  ${prefix}sound15
┃𖥔 ֶָ֢֪  ${prefix}sound16
┃𖥔 ֶָ֢֪  ${prefix}sound17
┃𖥔 ֶָ֢֪  ${prefix}sound18
┃𖥔 ֶָ֢֪  ${prefix}sound19
┃𖥔 ֶָ֢֪  ${prefix}sound20
┃𖥔 ֶָ֢֪  ${prefix}sound21
┃𖥔 ֶָ֢֪  ${prefix}sound22
┃𖥔 ֶָ֢֪  ${prefix}sound23
┃𖥔 ֶָ֢֪  ${prefix}sound24
┃𖥔 ֶָ֢֪  ${prefix}sound25
┃𖥔 ֶָ֢֪  ${prefix}sound26
┃𖥔 ֶָ֢֪  ${prefix}sound27
┃𖥔 ֶָ֢֪  ${prefix}sound28
┃𖥔 ֶָ֢֪  ${prefix}sound29
┃𖥔 ֶָ֢֪  ${prefix}sound30
┃𖥔 ֶָ֢֪  ${prefix}sound31
┃𖥔 ֶָ֢֪  ${prefix}sound32
┃𖥔 ֶָ֢֪  ${prefix}sound33
┃𖥔 ֶָ֢֪  ${prefix}sound34
┃𖥔 ֶָ֢֪  ${prefix}sound35
┃𖥔 ֶָ֢֪  ${prefix}sound36
┃𖥔 ֶָ֢֪  ${prefix}sound37
┃𖥔 ֶָ֢֪  ${prefix}sound38
┃𖥔 ֶָ֢֪  ${prefix}sound39
┃𖥔 ֶָ֢֪  ${prefix}sound40
┃𖥔 ֶָ֢֪  ${prefix}sound41
┃𖥔 ֶָ֢֪  ${prefix}sound42
┃𖥔 ֶָ֢֪  ${prefix}sound43
┃𖥔 ֶָ֢֪  ${prefix}sound44
┃𖥔 ֶָ֢֪  ${prefix}sound45
┃𖥔 ֶָ֢֪  ${prefix}sound46
┃𖥔 ֶָ֢֪  ${prefix}sound47
┃𖥔 ֶָ֢֪  ${prefix}sound48
┃𖥔 ֶָ֢֪  ${prefix}sound49
┃𖥔 ֶָ֢֪  ${prefix}sound50
┃𖥔 ֶָ֢֪  ${prefix}sound51
┃𖥔 ֶָ֢֪  ${prefix}sound52
┃𖥔 ֶָ֢֪  ${prefix}sound53
┃𖥔 ֶָ֢֪  ${prefix}sound54
┃𖥔 ֶָ֢֪  ${prefix}sound55
┃𖥔 ֶָ֢֪  ${prefix}sound56
┃𖥔 ֶָ֢֪  ${prefix}sound57
┃𖥔 ֶָ֢֪  ${prefix}sound58
┃𖥔 ֶָ֢֪  ${prefix}sound59
┃𖥔 ֶָ֢֪  ${prefix}sound60
┃𖥔 ֶָ֢֪  ${prefix}sound61
┃𖥔 ֶָ֢֪  ${prefix}sound62
┃𖥔 ֶָ֢֪  ${prefix}sound63
┃𖥔 ֶָ֢֪  ${prefix}sound64
┃𖥔 ֶָ֢֪  ${prefix}sound65
┃𖥔 ֶָ֢֪  ${prefix}sound66
┃𖥔 ֶָ֢֪  ${prefix}sound67
┃𖥔 ֶָ֢֪  ${prefix}sound68
┃𖥔 ֶָ֢֪  ${prefix}sound69
┃𖥔 ֶָ֢֪  ${prefix}sound70
┃𖥔 ֶָ֢֪  ${prefix}sound71
┃𖥔 ֶָ֢֪  ${prefix}sound72
┃𖥔 ֶָ֢֪  ${prefix}sound73
┃𖥔 ֶָ֢֪  ${prefix}sound74
┃𖥔 ֶָ֢֪  ${prefix}sound75
┃𖥔 ֶָ֢֪  ${prefix}sound76
┃𖥔 ֶָ֢֪  ${prefix}sound77
┃𖥔 ֶָ֢֪  ${prefix}sound78
┃𖥔 ֶָ֢֪  ${prefix}sound79
┃𖥔 ֶָ֢֪  ${prefix}sound80
┃𖥔 ֶָ֢֪  ${prefix}sound81
┃𖥔 ֶָ֢֪  ${prefix}sound82
┃𖥔 ֶָ֢֪  ${prefix}sound83
┃𖥔 ֶָ֢֪  ${prefix}sound84
┃𖥔 ֶָ֢֪  ${prefix}sound85
┃𖥔 ֶָ֢֪  ${prefix}sound86
┃𖥔 ֶָ֢֪  ${prefix}sound87
┃𖥔 ֶָ֢֪  ${prefix}sound88
┃𖥔 ֶָ֢֪  ${prefix}sound89
┃𖥔 ֶָ֢֪  ${prefix}sound90
┃𖥔 ֶָ֢֪  ${prefix}sound91
┃𖥔 ֶָ֢֪  ${prefix}sound92
┃𖥔 ֶָ֢֪  ${prefix}sound93
┃𖥔 ֶָ֢֪  ${prefix}sound94
┃𖥔 ֶָ֢֪  ${prefix}sound95
┃𖥔 ֶָ֢֪  ${prefix}sound96
┃𖥔 ֶָ֢֪  ${prefix}sound97
┃𖥔 ֶָ֢֪  ${prefix}sound98
┃𖥔 ֶָ֢֪  ${prefix}sound99
┃𖥔 ֶָ֢֪  ${prefix}sound100
┃𖥔 ֶָ֢֪  ${prefix}sound101
┃𖥔 ֶָ֢֪  ${prefix}sound102
┃𖥔 ֶָ֢֪  ${prefix}sound103
┃𖥔 ֶָ֢֪  ${prefix}sound104
┃𖥔 ֶָ֢֪  ${prefix}sound105
┃𖥔 ֶָ֢֪  ${prefix}sound106
┃𖥔 ֶָ֢֪  ${prefix}sound107
┃𖥔 ֶָ֢֪  ${prefix}sound108
┃𖥔 ֶָ֢֪  ${prefix}sound109
┃𖥔 ֶָ֢֪  ${prefix}sound110
┃𖥔 ֶָ֢֪  ${prefix}sound111
┃𖥔 ֶָ֢֪  ${prefix}sound112
┃𖥔 ֶָ֢֪  ${prefix}sound113
┃𖥔 ֶָ֢֪  ${prefix}sound114
┃𖥔 ֶָ֢֪  ${prefix}sound115
┃𖥔 ֶָ֢֪  ${prefix}sound116
┃𖥔 ֶָ֢֪  ${prefix}sound117
┃𖥔 ֶָ֢֪  ${prefix}sound118
┃𖥔 ֶָ֢֪  ${prefix}sound119
┃𖥔 ֶָ֢֪  ${prefix}sound120
┃𖥔 ֶָ֢֪  ${prefix}sound121
┃𖥔 ֶָ֢֪  ${prefix}sound122
┃𖥔 ֶָ֢֪  ${prefix}sound123
┃𖥔 ֶָ֢֪  ${prefix}sound124
┃𖥔 ֶָ֢֪  ${prefix}sound125
┃𖥔 ֶָ֢֪  ${prefix}sound126
┃𖥔 ֶָ֢֪  ${prefix}sound127
┃𖥔 ֶָ֢֪  ${prefix}sound128
┃𖥔 ֶָ֢֪  ${prefix}sound129
┃𖥔 ֶָ֢֪  ${prefix}sound130
┃𖥔 ֶָ֢֪  ${prefix}sound131
┃𖥔 ֶָ֢֪  ${prefix}sound132
┃𖥔 ֶָ֢֪  ${prefix}sound133
┃𖥔 ֶָ֢֪  ${prefix}sound134
┃𖥔 ֶָ֢֪  ${prefix}sound135
┃𖥔 ֶָ֢֪  ${prefix}sound136
┃𖥔 ֶָ֢֪  ${prefix}sound137
┃𖥔 ֶָ֢֪  ${prefix}sound138
┃𖥔 ֶָ֢֪  ${prefix}sound139
┃𖥔 ֶָ֢֪  ${prefix}sound140
┃𖥔 ֶָ֢֪  ${prefix}sound141
┃𖥔 ֶָ֢֪  ${prefix}sound142
┃𖥔 ֶָ֢֪  ${prefix}sound143
┃𖥔 ֶָ֢֪  ${prefix}sound144
┃𖥔 ֶָ֢֪  ${prefix}sound145
┃𖥔 ֶָ֢֪  ${prefix}sound146
┃𖥔 ֶָ֢֪  ${prefix}sound147
┃𖥔 ֶָ֢֪  ${prefix}sound148
┃𖥔 ֶָ֢֪  ${prefix}sound149
┃𖥔 ֶָ֢֪  ${prefix}sound150
┃𖥔 ֶָ֢֪  ${prefix}sound151
┃𖥔 ֶָ֢֪  ${prefix}sound152
┃𖥔 ֶָ֢֪  ${prefix}sound153
┃𖥔 ֶָ֢֪  ${prefix}sound154
┃𖥔 ֶָ֢֪  ${prefix}sound155
┃𖥔 ֶָ֢֪  ${prefix}sound156
┃𖥔 ֶָ֢֪  ${prefix}sound157
┃𖥔 ֶָ֢֪  ${prefix}sound158
┃𖥔 ֶָ֢֪  ${prefix}sound159
┃𖥔 ֶָ֢֪  ${prefix}sound160
┃𖥔 ֶָ֢֪  ${prefix}sound161
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
case 'gamemenu':{
var unicorn = await getBuffer(picak+'Game Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝙶𝙰𝙼𝙴 ✪✞══━┓ 	
┃𖥔 ֶָ֢֪  ${prefix}truth
┃𖥔 ֶָ֢֪  ${prefix}dare
┃𖥔 ֶָ֢֪  ${prefix}tictactoe
┃𖥔 ֶָ֢֪  ${prefix}delttt
┃𖥔 ֶָ֢֪  ${prefix}guess [option]
┃𖥔 ֶָ֢֪  ${prefix}math [mode]
┃𖥔 ֶָ֢֪  ${prefix}suitpvp [tag]
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
            case 'anonymousmenu':{
var unicorn = await getBuffer(picak+'Anonymous Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏═══✪ ANONYMOUS 	
┃𖥔 ֶָ֢֪ ${prefix}anonymous
┃𖥔 ֶָ֢֪ ${prefix}start
┃𖥔 ֶָ֢֪ ${prefix}next
┃𖥔 ֶָ֢֪ ${prefix}leave
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
case 'databasemenu':{
var unicorn = await getBuffer(picak+'Database Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏═══✪ DATABASE 	
┃𖥔 ֶָ֢֪  ${prefix}setcmd
┃𖥔 ֶָ֢֪  ${prefix}listcmd
┃𖥔 ֶָ֢֪  ${prefix}delcmd
┃𖥔 ֶָ֢֪  ${prefix}lockcmd
┃𖥔 ֶָ֢֪  ${prefix}addmsg
┃𖥔 ֶָ֢֪  ${prefix}listmsg
┃𖥔 ֶָ֢֪  ${prefix}getmsg
┃𖥔 ֶָ֢֪  ${prefix}delmsg
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
case 'othermenu':{
var unicorn = await getBuffer(picak+'Other Menu')

const buttons = [
  {buttonId: 'owner', buttonText: {displayText: 'Owner🌹'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `┏══━✞✪ 𝙾𝚃𝙷𝙴𝚁 ✪✞══━┓	
┃𖥔 ֶָ֢֪  ${prefix}afk
┃𖥔 ֶָ֢֪  ${prefix}id
┃𖥔 ֶָ֢֪  ${prefix}toqr [link]
┃𖥔 ֶָ֢֪  ${prefix}repeat
┃𖥔 ֶָ֢֪  ${prefix}readmore [text]
┃𖥔 ֶָ֢֪  ${prefix}toviewonce
┃𖥔 ֶָ֢֪  ${prefix}fliptext [text]] 
┃𖥔 ֶָ֢֪  ${prefix}alive
┃𖥔 ֶָ֢֪  ${prefix}script
┃𖥔 ֶָ֢֪  ${prefix}ping
┃𖥔 ֶָ֢֪  ${prefix}owner
┃𖥔 ֶָ֢֪  ${prefix}menu
┃𖥔 ֶָ֢֪  ${prefix}delete
┃𖥔 ֶָ֢֪  ${prefix}chatinfo
┃𖥔 ֶָ֢֪  ${prefix}quoted
┃𖥔 ֶָ֢֪  ${prefix}listpc
┃𖥔 ֶָ֢֪  ${prefix}listgc
┃𖥔 ֶָ֢֪  ${prefix}donate
┃𖥔 ֶָ֢֪  ${prefix}request
┃𖥔 ֶָ֢֪  ${prefix}report [bug]
┗══════✪✞✪══════┛`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await AsifOfc.sendMessage(m.chat, buttonMessage)
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Find Partners', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    AsifOfc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }       

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})