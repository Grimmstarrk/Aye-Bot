const settings = require("./settings.json");
    const Discord = require("discord.js");
        const bot = new Discord.Client();
            const pms = require("pretty-ms");
                const ms = require("ms");
                    bot.login(settings.TOKEN);

bot.on('ready', function () { 
    //bot.user.setGame('game title')
        console.log(`Online`) //Bot message saying "Online"
});

bot.on("message", function(msg) {
    if (msg.channel.type == "dm") return;
        if (msg.author.equals(bot.user)) return;
            if (!msg.content.startsWith(settings.PREFIX)) return;
                var args = msg.content.substring(settings.PREFIX.length).split(" ")

var yesno = [ "yes", "no", "yup", "heck no", "ye boi", "tf.. no", "Yurrrrrr" ] //Yesno Command var 

switch (args[0].toLowerCase()) {

    case "ping": //Ping Command
        if (msg.channel.type == "dm") return;
            msg.channel.send(":ping_pong:")
            break;

    case "smug": //Smug Command
        if (msg.channel.type == "dm") return;
            msg.channel.send("", {file: `./smug/smug${Math.round(Math.random() * 13)}.png`})
            break;

    case "wtf": //Smug Command
        if (msg.channel.type == "dm") return;
            msg.channel.send("", {file: `./wtf/wtf${Math.round(Math.random() * 1)}.png`})
            break;

    case "wtf!": //Smug Command
        if (msg.channel.type == "dm") return;
            msg.channel.send("", {file: `./wtf!/wtf!${Math.round(Math.random() * 2)}.png`})
            break;

    case "say": //Say Command
        if (msg.channel.type == "dm") return;
            msg.delete()
                if (args.length === 1) msg.channel.send(" ```!say (messsage)``` ")
                    else msg.channel.send(args.join(" ").substring(4))
                    break;

    case "yesno": //Yesno Command
        if (args[1]) msg.channel.send(yesno[Math.floor(Math.random() * yesno.length)])
            else msg.channel.send("its !yesno (question) boi");
            break;
 
    case "server": //Server Command
        if (msg.channel.type == "dm") return;
            var embed = new Discord.RichEmbed() 
                .setThumbnail(msg.guild.iconURL)
                .setTitle("» Server info")
                .setDescription("➽**Total members**:" +" "+ msg.guild.members.size + "\n➽**Server region**:" +" "+ msg.guild.region + "\n➽**Server owner**:" +" "+ msg.guild.owner.user.tag)
                .setColor("#" +Math.floor(Math.random() * 16777215).toString(16))
            msg.channel.send({embed})
        break;           

    case "stats": //Stats Command    
        if (msg.channel.type == "dm") return;  
            var embed = new Discord.RichEmbed()
                .setThumbnail(bot.user.avatarURL)
                .setTitle("» Aye's Info")    
                .setDescription(`➽**Total guilds**: ${bot.guilds.size}\n➽**Total users**: ${bot.users.size}\n➽**Total channels**: ${bot.channels.size}\n➽**Gender**: Fighter jet\n➽**Up time**:` +" "+ pms(bot.uptime, {verbose: true}))
                .setColor("#" +Math.floor(Math.random() * 16777215).toString(16))
            msg.channel.send({embed})
            break;

    case "help": //Help Command
        if (msg.channel.type == "dm") return;
            var embed = new Discord.RichEmbed()          
                .setTitle("» Commands")
                .setDescription("__**Anime Commands**__\n**Smug**: Posts a random smug anime face\n**Wtf**: Posts a random shocked wtf anime face\n**Wtf!**: Posts a random even more shocked wtf anime face\n__**Utility Commands**__\n**Ping**: Pings the bot\n**Server**: Shows server information\n**Stats**: Shows Aye's information\n__**Other Commands**__**\nSay** *(message)*: Makes the bot say the message\n**Yesno** (question): answers a yes or no question\n__**Mod Commands**__\nnone.")
                .setColor("#" +Math.floor(Math.random() * 16777215).toString(16))
            msg.channel.send({embed})
            break;
        }   
});