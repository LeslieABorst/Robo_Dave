const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
});
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log('Bot is ready');

});

client.on('message', (msg) => {
    if (msg.content === '?heart') {
      msg.channel.send(':heart:');
    }
  });

// Adding Pronoun Roles
client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    console.log(reaction.message.channel.id);
    if (reaction.message.channel.id == '820680539446181908') {
       console.log(reaction.emoji.name);
       //he him
        if (reaction.emoji.name === '❤️') {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add('814177516566741053');
            console.log("new role added!");
        }
        //she her
        if (reaction.emoji.name === '🧡') {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add('814178155362910239');
        }
        //they them
        if (reaction.emoji.name === '💛') {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add('814178009774293038');
        }
        //she they
        if (reaction.emoji.name === '💚') {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add('814178202724991037');
        }
        //he they
        if (reaction.emoji.name === '💙') {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add('814178123624873984');
        }
        //she he they
        if (reaction.emoji.name === '💜') {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add('814178062291566649');
        }
        //it/its
      if (reaction.emoji.name === '🖤') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('821135714024423484');
      }
      //other/ask
      if (reaction.emoji.name === '🤎') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('821135990378463282');
      }
    } else return;
});

// Removing Pronoun Roles
client.on('messageReactionRemove', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.channel.id == '820680539446181908') {
    //he him
      if (reaction.emoji.name === '❤️') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('814177516566741053');
      }
      //she her
      if (reaction.emoji.name === '🧡') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('814178155362910239');
      }
      //they them
      if (reaction.emoji.name === '💛') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('814178009774293038');
      }
      //she they
      if (reaction.emoji.name === '💚') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('814178202724991037');
      }
      //he they
      if (reaction.emoji.name === '💙') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('814178123624873984');
      }
      //she he they
      if (reaction.emoji.name === '💜') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('814178062291566649');
      }
      //it/its
      if (reaction.emoji.name === '🖤') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('821135714024423484');
      }
      //other/ask
      if (reaction.emoji.name === '🤎') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('821135990378463282');
      }
  } else return;
});

//Removing Notifications Role
client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.channel.id == '820680539446181908') {
    if (reaction.emoji.name === '🔕') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('663123260753313798');
    }

  } else return;
});