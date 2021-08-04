module.exports = {
    name: 'roll',
    description: "rolls from 1 to whatever number is given",
    execute(client, message, args){
        //convents args to a number
        var argument = +(args);

        //randomizes the number i hope
        var randomNumber = Math.floor(Math.random() * argument) + 1;

        //print the random number except IT FUCKIGN DOESN'T WHT
        if (randomNumber > 0){
            message.channel.send(randomNumber);
        } else return;

        //check if the last 2 digits of the number repeat
        var lastDigit = randomNumber % 10;
        var digitAhead = Math.floor(randomNumber / 10) % 10;

        //check if numbers equal something funny
        if(randomNumber == 25){
            message.channel.send('https://tenor.com/view/spongebob-squarepants-patrick-laugh-giggle-gif-3535831');
        } else if(randomNumber == 69){
            message.channel.send('https://tenor.com/view/bill-and-ted-69-dudes-gif-14399218');
        } else if(randomNumber == 420){
            message.channel.send('https://tenor.com/view/fat-jull-rip-vaping-old-man-coughing-smoke-gif-15218259');
        } else if(randomNumber == 727){
            message.channel.send('https://tenor.com/view/wysi-gif-21694798');
            
        } else if(lastDigit === digitAhead && randomNumber != lastDigit){
            message.channel.send('https://cdn.discordapp.com/attachments/789667677186162701/872274601252630588/iu.png');
        }
    }
}