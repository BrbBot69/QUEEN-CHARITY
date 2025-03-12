//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "avenyamakazi8@gmail.com";
global.location = "Johannesburg, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/o4f1bs.jpg";
global.devs = "254112192119";
global.sudo = process.env.SUDO || "27767494368";
global.owner = process.env.OWNER_NUMBER || "27767494368";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/knhyh3.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VPQ0ZFS0MvaldvOVFoTkdieW5hZ3RUUGd4b2ZUODkrdnhuTUdJeVJXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUJyOE1yZmY2MzdDSVR6ZjhZc2NTUFU3RnVTbzF0M3lrWkI1UUZtenFtQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SWIrYVBOL256NGx0TU1vMTROUi9TQThySXRKVEU3ZEFHUUNXZ3lRcUZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJud1VpWGd5WFc3eFBtOFNaZUtBRCtOdUhVMWx5NUlYSnlPNWJlOUZmWUJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1JTHNGRTBQeHE4R2FrRXZxeHEzc3ZBWGJld3liSkw2MnBmMnpMY1FJa3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndCeG9kYlZaMW9GcG16RUVIdHdUUGhBUkZrWDFPSXJVM3Q2QjNGOTBMMGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0VHb2hacTRIalB4M21hV3hXaENwb2lSQWN4eDBhSndwWGV3RmN6aHpHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFRWMnUvSStKUGlSNUdxV2djRHVmcnVqSHZ0eTJra1lSNDQ3LzAyWW9sRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpYUjk0QnVnZWdjU2VTbDFMYXQrdFI1STJJYkxGTFgrUTFjbjM3WURzSURubUIvdzJvZ3VPVy9kajJDSFRLYUtUMDdUMFF4MHB2Ymw5THArWVhqM0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiJpNVpqZFZuVkV3d1pVQVpLNys4Z1B4bFBHY0dmODZlRTM2RTVJTHZ3WGtVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3ODE4MjMyMjY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA5RDExNjY3NDk3QTY2RTVDNENFNjFCMjQ4RjRBMTM0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDE3ODkzNjV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3ODE4MjMyMjY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY3Q0U3Nzg3QzVDQTIyMzlEMjI1REU4RkVFNzUxMzJEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDE3ODkzNjZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImsxbjVjWjlTVFJ5ak5vR3hzbFpER2ciLCJwaG9uZUlkIjoiODM0MDM1OGMtYzU4Mi00ZDA3LTg0MzktYWFiMWE4YzA5NTI2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUzNjZtV0ZJcG90dU44K08yZng1TURra1EvQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTZDg1Z3hISnBYaXUrRENWMkZlVTY0SWRGbFU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFFNWjJKREciLCJtZSI6eyJpZCI6IjI3ODE4MjMyMjY5OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiWW9nZ3kifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lXSDF2a0hFS2F4eHI0R0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhHOTQ1WDdYY2VzdU01WFhRWGNBYlMyMjdwL0JDQ2kvbGpTVkRrWmM5ejg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFZTXpWY2VDMlJ2YTcxanlDRXg4WU9yaGNacHJJT2daUTJmMlZSaWtqNzNVbWxZOXRpODBySE9vQzdKMTBveTBkQU14Z2NzT2JZUmQ0SGVQamJjbEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwNnNwK21VeHdTYkZVRkRiTVpyc1M1MHdEM0E2TmVrTEJHKzF3c3IxOVdDN2ZqMTVmSUZobFV3U3lTNFo1MU1BRXQ4K0xYNGFIN1F2UlhSNUFsR2pCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3ODE4MjMyMjY5OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVJ2ZU9WKzEzSHJMak9WMTBGM0FHMHR0dTZmd1Fnb3Y1WTBsUTVHWFBjLyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MTc4OTM2NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIU3MifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝕬𝖛𝖊𝕭𝖔𝖙 𝕸𝕯™`",
  author: process.env.PACK_AUTHER || "𒀱ꪳ𓊈𒆜𓂀𝕬𝖛𝖊.𝕭☚⍢⃝☚𓂀𒆜𓊉 𒀱",
  packname: process.env.PACK_NAME || "𝕬𝖛𝖊.𝕭 𝐓𝐄𝐂𝐇",
  botname: process.env.BOT_NAME || "`𝕬𝖛𝖊𝕭𝖔𝖙 𝕸𝕯`",
  ownername: process.env.OWNER_NAME || "𝕬𝖛𝖊.𝕭🫅",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
