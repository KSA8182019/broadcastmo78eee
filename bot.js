const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = '-'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity('', { type: 'WATCHING' })
});




client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});








client.login(process.env.BOT_TOKEN)
