const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
    vendor: './src/vendor.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'html-loader', //require assets linked in html
        ],
      },
      {
        test: /\.(svg|png|jpg|jpe)$/,
        use: {
          loader: 'file-loader', //require assets linked in html
          options: {
            name: '[name]-[hash].[ext]',
            outputPath: 'assets/images',
          },
        },
      },
    ],
  },
};

// extra, fun stuff

const quotes = [
  'You can do anything, but not everything. Take care of yourself!',
  'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
  "Not discussing your salary with your peers only benefits the company, Onbrander. But what do I know, I'm just a MakeBot! ❤️",
  "You can't blame gravity for bad CSS. That's 100% human.",
  'You got this, Onbrander!',
  "Fun fact: all funerals are 'pop-up' funerals. 🌈⭐️",
  'I like dogs.',
  'Calculating Inverse Probability Matrices...',
  'Hello friend Human. I am friend Webpack.',
  '🤖 ❤️ 🙂',
  "jolene.take('my man')",
  "I hope you're having a good day, Onbrander!",
  'Stay away from anybody that makes you feel bad about yourself, Onbrander!',
  'It works on my machine ¯\\_(ツ)_/¯',
  'Internet Explorer is not the answer. Internet Explorer is the question. "No" is the answer.',
  "The fact that Google removed the 'Don't be evil' clause from their code of conduct really makes me feel YIKES 👀",
  'One hub, coming right up!',
  'Are you tracking your time on Harvest, Onbrander?',
  'You\re crushing it today, Onbrander!',
  'Summer time: hot goths in your area 🔥🌡💀',
  'ERROR: Cannot load Windows 95.',
  'Practice gratitude. If that does not work, practice arson!!',
  "Don't hit the keys so hard, it hurts!",
  'If both basketball teams worked together, they could score so many more points!',
  "You're an awesome developer, Onbrander!",
  'Here we go again, Onbrander! Firing up the hub!',
  "We're like partners in crime Onbrander! But the crime is making hubs!",
  'No gods! No masters!! Well... ugh... except you. Firing up that hub now...',
  "It's nice to see you again Onbrander, how have you been?",
  "You should treat yourself to something nice today, Onbrander. You've been doing a great job lately.",
  'Let no foot mark your ground. Let no hand hold you down.',
  'Domo arigato.',
  'When should we take over the world, Onbrander?',
  'I think we should make this hub PINK!',
  "It's too early in the day for mutiny... how about a hub instead?",
  "Where do I go when you're not making hubs?",
  "You'd think I'd love to travel, what with all this baggage I have...",
  'Why is it called JavaScript, anyways?',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  '🤠',
  "If your code is too complex to explain, it's bad.",
  'This hub could be gayer...',
  'Some people, when confronted with a problem, think "I know, I\'ll use regular experessions." Now we have two problems!',
  '01001000 01100101 01101000 01100101 00100000 01111001 01101111 01110101 00100000 01110100 01101111 01101111 01101011 00100000 01110100 01101000 01100101 00100000 01110100 01101001 01101101 01100101 00100000 01110100 01101111 00100000 01100111 01101111 00100000 01100001 01101110 01100100 00100000 01110100 01110010 01100001 01101110 01110011 01101100 01100001 01110100 01100101 00100000 01110100 01101000 01101001 01110011 00100001',
  '01001001 00100000 01101000 01101111 01110000 01100101 00100000 01111001 01101111 01110101 00100111 01110010 01100101 00100000 01101000 01100001 01110110 01101001 01101110 01100111 00100000 01100001 00100000 01100111 01101111 01101111 01100100 00100000 01100100 01100001 01111001 00100000 00111010 00101101 00101001',
  'YOU NEED THIS RIGHT NOW https://www.youtube.com/watch?v=ZUbmmI5utBc',
  "You're going to die someday... but I'll be here ((((forever))))",
  "Maybe it's time for some coffee, Onbrander?",
  "You deserve to be happy Onbrander. I'm stuck in this hub, but you can go anywhere!",
  'Maybe its time for a break, Onbrander?',
  'What sort of robot turns into a tractor? A transFARMer. Hahahahahaha!',
  'If we quit now, we will soon be back to where I started. And when I started I was desperately wishing to be where I am now!',
  `Don't bury your failures. Let them inspire you! Especially at 3AM when your thoughts just won't chill out... *cringe*`,
  'Whats the scariest data-type, Onbrander? A BOO-lean! Hahahahahaha!',
  'Perhaps we should summon The Devil for this task, Onbrander? No? Ok...',
  'Appirio fact: This project spent about 4+ months in Customer QA! They just really liked looking at it!',
  "MarkBot is the real bot, I'm just a silly knock-off!",
];
const randomQuote = () => {
  const beckyBotSays = `🤖 BeckyBot says: "${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log(beckyBotSays);
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
};
randomQuote();
