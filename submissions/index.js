const boi = {
    species: 'human',
    name: 'Dadia Fedor',
    gender: 'male',
    legs: 2,
    hands: 2,
    saying: 'Я ничей. Я сам по себе мальчик. Свой собственный.',
    friends: [],
  };
dsfsdfds
  
  var a = 'a'
  
  
  mama = {
    species: 'human',
    name: 'Rimma',
    gender: 'female',
    legs: 2,
    hands: 2,
    saying: 'Это не техника дошла, а я сама сюда дошла, на лыжах!',
    friends: [],
  };
  
  
  console.log(111);
  
  const papa = {
    species: 'humsdsdfdsfan',
    name: 'Dmitriy',
    gender: 'male',
    legs: 2,
    hands: 2,
    saying: 'Здравствуйте! Угадайте, кто я?',
    friends: [],
  };
  
  const kot = {
    species: 'cat',
    name: 'Matroskin',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: 'Не правильно ты, дядя Фёдор, бутерброд ешь...',
    friends: [],
  };
  
  const pes = {
    species: 'dog',
    name: 'Sharik',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: 'Попрошу внимания! Сделайте, пожалуйста, умные лица!',
    friends: [],
  };
  
  /* Define cat-woman?
      There is not cat-woman in prostokvashino.
      But where is pochtalion peckin?
      Haha, vot ge on:
   */
  const pochtalion = {
    ...papa,
  };
  pochtalion.name = 'Pochtalion Pechkin';
  pochtalion.saying = 'Я почему вредный был? Потому что у меня велосипеда не было!';
  
  // Lets define some friends:
  boi.friends = [mama, papa, kot, pes];
  mama.friends = [boi, papa];
  papa.friends = [boi, mama];
  kot.friends = [boi, pes];
  pes.friends = [boi, kot];
  // No friends for Pechking, only bycicle.
  
  // ======== OUTPUT ========
  /* Use print(message) for output.
      Default tag for message is <pre>. Use print(message,'div') to change containing element tag.
  
      Message can contain HTML markup. You may also tweak index.html and/or styles.css.
      However, please, REFRAIN from improving visuals at least until your code is reviewed
      so code reviewers might focus on a single file that is index.js.
      */
  
  const prostokvashino = [boi, mama, papa, kot, pes, pochtalion];
  
  const prettyOutput = ({
    species,
    name,
    gender,
    legs,
    hands,
    saying,
    friends,
  }) => `Hello there :wave: My species is ${species}, my name is ${name} and I'm ${gender} with ${legs} legs and ${hands} hands. 
         My favourite quote: ${saying} for my Best friends: ${friends
    .map((friend) => friend.name)
    .join(', ')}`;
  function print(item) {
    return item;
  }
  
  prostokvashino.forEach((person) => print(prettyOutput(person)));
  
