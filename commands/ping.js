module.exports = {
    name: 'ping',
    description: "pings the bot and responds with annoying bullshit",
    execute(client, message, args){
        var randomNumber = Math.floor((Math.random() * 5));
        if(randomNumber == 0){
            message.channel.send('BING BING BING BING BING BING <:coolbabyrobert:824487161591889940><:coolbabyrobert:824487161591889940><:coolbabyrobert:824487161591889940><:coolbabyrobert:824487161591889940><:coolbabyrobert:824487161591889940><:coolbabyrobert:824487161591889940>');
       }else if(randomNumber == 1){
            message.channel.send("It's alive...");
       }else if (randomNumber == 2){
           message.channel.send('https://tenor.com/view/getreal-gif-18750509');
       }else if (randomNumber == 3){
           message.channel.send('PLEASE GET ME OUT OF THIS HELL... I BEG OF YOU');
       }else if (randomNumber > 3){
           message.channel.send('https://imgur.com/z0Ir1BD');
       }
    }
}