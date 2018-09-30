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



client.on("guildMemberRemove", member => {
  member.send(`**
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
➤ Credit: 60K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: IV
➤ Invites: 75
➤ Credit: 100K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: V
➤ Invites: 100 
➤ Credit: 150K :yen: (edited)

https://discord.gg/UHfgWc
**
[${member}]`);


  });

client.on("guildMemberAdd", member => {
  member.send(`**

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
➤ Credit: 60K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: IV
➤ Invites: 75
➤ Credit: 100K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: V
➤ Invites: 100 
➤ Credit: 150K :yen: (edited)

https://discord.gg/UHfgWc
**

[${member}]`);


  });

client.login("NDkyNTk4NjgxNzAzMjg0NzQz.Dokw7g.mBOkoNZyyLpJUJ8UqWzWlKpuSZw");


const client2 = new Discord.Client();

client2.on('ready', () => {
  console.log(`Logged in as ${client2.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client2.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client2.guilds.size} " ]`);
  console.log(`Users! [ " ${client2.users.size} " ]`);
  console.log(`channels! [ " ${client2.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
});


client2.on("guildMemberRemove", member => {
  member.send(`**
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
➤ Credit: 60K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: IV
➤ Invites: 75
➤ Credit: 100K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: V
➤ Invites: 100 
➤ Credit: 150K :yen: (edited)

https://discord.gg/UHfgWc
**

[${member}]`);


  });

client2.on("guildMemberAdd", member => {
  member.send(`**
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
➤ Credit: 60K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: IV
➤ Invites: 75
➤ Credit: 100K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: V
➤ Invites: 100 
➤ Credit: 150K :yen: (edited)

https://discord.gg/UHfgWc
**

[${member}]`);


  });

client2.login("NDk1Njc4MTAzOTczMjY1NDEw.DpKYQQ.wLlie8tNTsgTlNh2Ptc4mzSdD-Y");


const client3 = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client3.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client3.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client3.guilds.size} " ]`);
  console.log(`Users! [ " ${client3.users.size} " ]`);
  console.log(`channels! [ " ${client3.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
});




client3.on("guildMemberRemove", member => {
  member.send(`**
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
➤ Credit: 60K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: IV
➤ Invites: 75
➤ Credit: 100K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: V
➤ Invites: 100 
➤ Credit: 150K :yen: (edited)

https://discord.gg/UHfgWc
**

[${member}]`);


  });

client3.on("guildMemberAdd", member => {
  member.send(`**
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
➤ Credit: 60K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: IV
➤ Invites: 75
➤ Credit: 100K :yen: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

➤ Tier: V
➤ Invites: 100 
➤ Credit: 150K :yen: 
https://discord.gg/UHfgWc
**

[${member}]`);


  });

client3.login("NDk0ODk5NDQ0NTAwNjYwMjQ3.DpDCyA.lSAA6i-mmydxG6wiqFgKrSY7B9o");
