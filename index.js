const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "a!";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefix)) return;
    if (msg.author.bot) return; 

    const command = msg.content.substr(prefix.length);


    if (command == "ping") {
        msg.channel.send("pong")
    };
    if (command == "gg")
        msg.channel.send("Well Played");

    if (msg.content == "F")
        msg.channel.send("F")
    
    if (command == "countdown") {
        msg.channel.send("Starting in...")
            setTimeout(function(){
                msg.channel.send("3")
            }, 1000)
            setTimeout(function () {
                msg.channel.send("2")
            }, 2000)
            setTimeout(function () {
                msg.channel.send("1")
            }, 3000)
            setTimeout(function () {
                msg.channel.send("Go!")
            }, 4000)
    };
    
    if (command.toLowerCase() == "help") {
        msg.channel.send({
            embed: {
                "title": "Help",
                "description": "Command list:",
                "color": 4950743,
                "fields" : [
                    {
                        "name": "Sea of Thieves",
                        "value": "a!sot + <starttime>",
                        "inline": true
                    },
                    {
                        "name": "Countdown",
                        "value": "a!countdown",
                        "inline": true
                    },
                    {
                        "name": "Ping --> Pong",
                        "value": "a!ping",
                        "inline": true
                    },
                    {
                        "name": "Respect",
                        "value": "a!respect",
                        "inline": true
                    },
                    {
                        "name": "Baguette",
                        "value": "a!baguette",
                        "inline": true
                    },
                    {
                        "name": "Good Game",
                        "value": "a!gg",
                        "inline": true
                    }
                ]
            }
        })
    }

    if (command == "baguette") 
        msg.channel.send(":french_bread:")

    if (command.startsWith("sot")) { 
        var SeaTime = command.split(" ")
        var UserTag = msg.author.id;
        console.log(SeaTime); 
        msg.channel.send("<@&588061447775584286>, <@" + UserTag + "> gaat om " + SeaTime[1] + " Sea of Thieves spelen, wie doet er mee?"); //de SeaTime variabele is in 2 delen gesplit, je hebt nu de hele variabbele erin geplaatst
    };

    if (command.startsWith("testsot")) {
        var SeaTime = command.split(" ")
        var UserTag = msg.author.id;
        console.log(SeaTime);
        msg.channel.send("<@&631206020013752355>, <@" + UserTag + "> gaat om " + SeaTime[1] + " Sea of Thieves spelen, wie doet er mee?"); //de SeaTime variabele is in 2 delen gesplit, je hebt nu de hele variabbele erin geplaatst
    };

    if (command.startsWith("teleport")) {
        var UserTag = command.split(" ")
        if (UserTag[1].startsWith("<@")) {
            msg.channel.send("*teleports behind " + UserTag[1] + "* Nothing personal kid.");
        } else {
            msg.channel.send("*teleports behind <@" + msg.author.id + ">* Nothing personal kid.");
        };
    };

    if (msg.content == "Yes")
        msg.channel.send("No") 

    if (msg.content == "yes")
        msg.channel.send("no")

    if (msg.content == "YES")
        msg.channel.send("Ok")

    if (msg.content == "ping")
        msg.channel.send("pong")
    
    if (msg.content == "Armin, start a countdown") {
        msg.channel.send("Starting in...")
        setTimeout(function () {
            msg.channel.send("3")
        }, 1000)
        setTimeout(function () {
            msg.channel.send("2")
        }, 2000)
        setTimeout(function () {
            msg.channel.send("1")
        }, 3000)
        setTimeout(function () {
            msg.channel.send("Go!")
        }, 4000)
    };

    if (command == "respect")
        msg.channel.send("F")


});

client.login("NjI5NjgwNTA1Njk2Mjg4Nzcx.XZdR2A.WJIidCdkQ10H_hjLHPYEHToJifM");
