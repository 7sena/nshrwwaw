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
15 invite =  10 View in youtube 
30 invite = 20 View in youtube  
60 invite = 50 View in youtube 
100 invite = 100 View in youtube 

20 like YT = 20 invite 
50 like YT = 50 invite
100 like YT = 100 invite 

20 sub YT = 20 invite 
50 sub YT = 50 invite 
100 sub YT = 100 invite

100 invite = 1$
1000 invite = 20 $

https://discord.gg/pfZeuG
@everyone || @here 
**
[${member}]`);


  });

client.on("guildMemberAdd", member => {
  member.send(`**
15 invite =  10 View in youtube 
30 invite = 20 View in youtube  
60 invite = 50 View in youtube 
100 invite = 100 View in youtube 

20 like YT = 20 invite 
50 like YT = 50 invite
100 like YT = 100 invite 

20 sub YT = 20 invite 
50 sub YT = 50 invite 
100 sub YT = 100 invite

100 invite = 1$
1000 invite = 20 $

https://discord.gg/pfZeuG
@everyone || @here 
**
[${member}]`);


  });

client.login("NDc0MTQ5NjIyMjc3ODY1NDc0.DokZeg.yiW-MVWO5376wzK_mxjU7WptPJ8")
