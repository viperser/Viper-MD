/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█      
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█      
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█      


 █░░▒█   ▄█░
 ▒█▒█░   ░█░
 ░▀▄▀░   ▄█▄
 
 𝙌𝙪𝙚𝙚𝙣 𝙀𝙡𝙞𝙨𝙖 𝙈𝘿 𝘽𝙮 𝘿𝙖𝙧𝙠 𝙈𝙖𝙠𝙚𝙧 
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 07 / 03 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 𝙁𝙧𝙤 𝙂𝙤𝙟𝙤 𝙎𝙖𝙩𝙤𝙧𝙪
 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
           𝘼𝙡𝙡 𝙃𝙚𝙡𝙥𝙚𝙧𝙨 💞
*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['916238054812'] // Owner number , (අයිතිකරුගේ නම්බර් එක )
global.pemilik = ['916238054812'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['6238054812'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '𝙑𝙄𝙋𝞢𝙍 𝙎𝞢𝙍🕊' // Your name ඔබේ නම 
global.botnma = '🕊️⃞⋆⋆ ♰⃟〄ᴠɪᴘᴇʀ ʙᴏᴛ🇱🇷⃞➻➤' // Your bot name , ඔබගෙ බොට්ගේ නම 
global.ownernma = '𝙑𝙄𝙋𝞢𝙍 𝙎𝞢𝙍🕊' //ownernama,ownername
global.packname = '🕊️⃞⋆⋆ ♰⃟〄ᴠɪᴘᴇʀ ʙᴏᴛ🇱🇷⃞➻➤' // Sticker package name 
global.author = '𝙑𝙄𝙋𝞢𝙍 𝙎𝞢𝙍🕊' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage , ඔබේ බොගේ alive massage  එක මෙහි ඇති ` ` මෙම ලකුනු ඇතුලේ ඔබට අවශ්‍ය ඔනිම දෙයක් Type කරන්න.💃
global.alivelogo = `https://telegra.ph/file/ba7bf357a7998b88f8ea9.jpg`
global.alive =`Hello i am alive now

Download song type .yt 
Thanks fro using...`
// Welcome massage  ඔබට කැමති නම් මෙයට ඔබෙ welcome massage  එක යොදන්න 
global.welcome = `
🌀 Thanks Fro using sl viper bot
✾ Some bugs fixing
😼♥️
`
// වෙල්කම් එක යවන්න ඔනි නම් add කියලා දාන්න 
global.sendwelcome = `add`
// Good bye එක ඔනි නම් remove කියලා දාන්න
global.sendgoodbye = `remove`
// Caption 
global.cap = `© 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐕𝐢𝐩𝐞𝐫 𝐁𝐨𝐭 𝐌𝐃`
global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd myre!',
    botAdmin: 'Bot must be admin myre!',
    owner: 'This cmd is for viper bot owner only punde!',
    group: 'oooh sorry this cmd is for groups only! Vere Valla panikum podey',
    private: 'Da Menda it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Adang punde ippa varum 🌝',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
