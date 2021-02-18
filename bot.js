 /// Need Help? DM toehoe_#7777 on discord

//////////////////////////////////////////////////////
//THIS IS v11 version! of node
/////////////////////////////////////////////////////

const Discord = require("discord.js");
const client = new Discord.Client();
const configs = require("./config.json");
const fivereborn = require('fivereborn-query');
client.config = configs;
const version = "1.2.9 " /// Bot version
const developer = " | Author : toehoe_#7777 " 

/////////////////////////////////////////////////////
// BOT Start
/////////////////////////////////////////////////////

client.login(configs.token)
  .then(
    () => {
      console.log("bot started");
    },
    () => {
      client.destroy();
      console.log("ERROR!");
      console.log("ERROR!");
      console.log("ERROR!");
      console.log("ERROR!");
      console.log("ERROR!");
      console.log("ERROR!");
    });

/////////////////////////////////////////////////////
// funkcje 
/////////////////////////////////////////////////////

function activity() {
  setTimeout(() => {
    fivereborn.query(configs.serverInfo[0], configs.serverInfo[1], (err, data) => {
      if (err) {
        console.log(err);
      } else {
	  client.user.setActivity( "© ServerName | Players : " +data.clients  ,"/64  | BOT VERSION : " + version + developer , { type: "STREAMING", url: "https://discord.gg/4VswWdPx3z" }); // typy "PLAYING", "WATCHING","LISTENING","STREAMING"
      }
    });
    activity();
  }, 10000); ///// player count > data.clients 

}
activity();


/// komendy 

client.on("message", async message => {

  if(message.author.bot) return;


  if(!message.content.startsWith(configs.prefix)) return;

  const args = message.content.slice(configs.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
  
  if(command === "ping") {
  
    const m = await message.channel.send("Ping?");
    m.edit(`Your ping is ${m.createdTimestamp - message.createdTimestamp}ms. `); //
  }
  
  if(command === "powiedz") {
    let person = message.member.displayName
    const sayMessage ={
      color : 0xe5e5e5, 
      author :{
    
        name : "servername",
        icon_url : "some icon url"
      },
    
      
    title : `${person} Said`,
      description :  args.join(" "),
    footer :{
      text: ' © servername || BOT Version: ' + version + developer,
      icon_url: 'some icon url',
    },
      };

    message.delete().catch(O_o=>{}); 
    message.channel.send({embed : sayMessage});
  }


const bpermisji ={
  color : 0xe5e5e5, 
  author :{

    name : "servername",
    icon_url : "some icon url"
  },

  
title : "You don't have enough permissions ",
  description : 'You cant do that. You`re not **admin** ', 
footer :{
  text: ' © servername || BOT Version: ' + version + developer,
  icon_url: 'some icon url',
},
  };

  const ntak ={
    color : 0xe5e5e5, 
    author :{

      name : "servername",
      icon_url : "some icon url"
    },

    
	title : "Something went wrong... ",
    description : ' Try to ping this user agian ', 
	footer :{
		text: ' © servername | BOT Version: ' + version + developer,
		icon_url: 'some icon url',
	},
    };

  if(command === "ogl") {

    (!message.member.roles.cache.some(r=>["*allow.moderation"].includes(r.name)) ); // create role from [] and give for admin
    

    const sayMessage = args.join(" ");
 
    message.delete().catch(O_o=>{}); 
    message.channel.send("@everyone")
    message.channel.send(sayMessage);
    
  }


  
  
  if(command === "kick") {
 
    if(!message.member.roles.cache.some(r=>["**allow.moderation" ].includes(r.name)) )
      return message.channel.send({embed : bpermisji });
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.channel.send({embed : ntak})
    if(!member.kickable) 
      return message.reply("I can't ban! I need permisions!");
    
   
    let reason = args.slice(1).join(' ');
    if(!reason) reason = " - ";
    
   
    await member.kick(reason)
      .catch(error => message.reply(`Sorki ${message.author}, Coś zle zrobiles. Kod bledu: ${error}`));
      const kicked ={
        color : 0xe5e5e5, 
        author :{
      
          name : "servername",
          icon_url : "some icon url"
        },
      
        
      title : " Member has been **Kicked!** ",
        description : `${member.user.tag} Has been kicked by ${message.author.tag}. Reason: ${reason}`, 
      footer :{
        text: ' © servername || BOT Version: ' + version + developer,
        icon_url: 'some icon url',
      },
        };
    
    message.channel.send({embed : kicked});

  }
  
  if(command === "ban") {

    if(!message.member.roles.cache.some(r=>["*allow.moderation"].includes(r.name)) ) // you have to create this role and give it to the mod
      return message.channel.send({embed : bpermisji });
    
    let member = message.mentions.members.first();
    if(!member)
      return message.channel.send({embed : ntak})
    if(!member.bannable) 
      return message.reply("I can't ban! I need permisions!");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = " - ";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} Something went worng. error code: ${error}`));
      const banned ={
        color : 0xe5e5e5, 
        author :{
      
          name : "servername",
          icon_url : "some icon url"
        },
      
        
      title : " Member has been **BANNED!** ",
        description : `${member.user.tag} Has been banned by ${message.author.tag}. Reason: ${reason}`, 
      footer :{
        text: ' © servername || BOT Version: ' + version + developer,
        icon_url: 'some icon url',
      },
        };
    
    message.reply({embed : banned });
  }

 

    const ip ={
    color : 0xe5e5e5, 
    author :{

      name : "servername",
      icon_url : "some icon url"
    },

    
	title : "IP **servername** ",
    description : `IP:  **serverip**  `, 
	footer :{
		text: ' © servername | BOT Version: ' + version + developer,
		icon_url: 'some icon url',
	},
    };
	  if(command === "ip") {
        message.channel.send({embed : ip });

      
    }})




client.login(configs.token);

//creator toehoe_#7777
