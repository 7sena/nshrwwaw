const Discord = require('discord.js');
const client = new Discord.Client();

Client.on("guildMemberRemove", member => {
  member.send(`
**اهلن فيك في سيرفرنا  تشرفنا 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

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
https://discord.gg/SGcdsS
**
[${member}]`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`
**اهلن فيك في سيرفرنا  تشرفنا 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

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
https://discord.gg/SGcdsS
**
[${member}]`);

  });


client.login("NDc5MzI4NDUwNTc0ODExMTU4.DnmdGw.qU7u5MTfa-FrI0h8vwqrag-R0kU")
