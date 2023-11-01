const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userProfile = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  userProfile.name = answer;

  rl.question("What's an activity you like doing? ", (answer) => {
    userProfile.hobby = answer;

    rl.question("What do you listen to while doing that? ", (answer) => {
      userProfile.music = answer;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        userProfile.meal = answer;

        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          userProfile.food = answer;

          rl.question("Which sport is your absolute favourite? ", (answer) => {
            userProfile.sport = answer;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              userProfile.power = answer;


              console.log(`Your name is ${userProfile.name}, and you like to ${userProfile.hobby} while you listen to ${userProfile.music}. Your favourite meal is ${userProfile.meal} where there is plenty of ${userProfile.food}! Your superpower is ${userProfile.power} and you're great at ${userProfile.sport}`)
              rl.close();
            });
          });
        });
      });
    });
  });
});