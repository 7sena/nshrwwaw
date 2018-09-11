const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: I
➤ Invites: 10 
➤ Credit: 10K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: II
➤ Invites: 25 
➤ Credit: 30K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: III
➤ Invites: 50 
➤ Credit: 70K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: IV
➤ Invites: 75
➤ Credit: 100K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: V
➤ Invites: 100 
➤ Credit: 150K :yen: 
https://discord.gg/SGcdsS  ${member}  
**`) 
}).catch(console.error)
})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: I
➤ Invites: 10 
➤ Credit: 10K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: II
➤ Invites: 25 
➤ Credit: 30K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: III
➤ Invites: 50 
➤ Credit: 70K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: IV
➤ Invites: 75
➤ Credit: 100K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: V
➤ Invites: 100 
➤ Credit: 150K :yen: 
https://discord.gg/SGcdsS ${member}  
**`) 
}).catch(console.error)
})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: I
➤ Invites: 10 
➤ Credit: 10K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: II
➤ Invites: 25 
➤ Credit: 30K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: III
➤ Invites: 50 
➤ Credit: 70K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: IV
➤ Invites: 75
➤ Credit: 100K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: V
➤ Invites: 100 
➤ Credit: 150K :yen: 
https://discord.gg/SGcdsS ${member}  
**`) 
}).catch(console.error)
})


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: I
➤ Invites: 10 
➤ Credit: 10K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: II
➤ Invites: 25 
➤ Credit: 30K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: III
➤ Invites: 50 
➤ Credit: 70K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: IV
➤ Invites: 75
➤ Credit: 100K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: V
➤ Invites: 100 
➤ Credit: 150K :yen: 
https://discord.gg/SGcdsS  ${member}  
**`) 
}).catch(console.error)
})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: I
➤ Invites: 10 
➤ Credit: 10K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: II
➤ Invites: 25 
➤ Credit: 30K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: III
➤ Invites: 50 
➤ Credit: 70K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: IV
➤ Invites: 75
➤ Credit: 100K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: V
➤ Invites: 100 
➤ Credit: 150K :yen: 
https://discord.gg/SGcdsS  ${member}  
**`) 
}).catch(console.error)
})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: I
➤ Invites: 10 
➤ Credit: 10K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: II
➤ Invites: 25 
➤ Credit: 30K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: III
➤ Invites: 50 
➤ Credit: 70K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: IV
➤ Invites: 75
➤ Credit: 100K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: V
➤ Invites: 100 
➤ Credit: 150K :yen: 
https://discord.gg/SGcdsS ${member}  
**`) 
}).catch(console.error)
})



client.login("NDc5MzI4NDUwNTc0ODExMTU4.DnmdGw.qU7u5MTfa-FrI0h8vwqrag-R0kU")
