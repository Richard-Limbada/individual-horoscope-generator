// filtering through an array to find matching attribute 
Array.prototype.filterObjects = function(key, value) {
    return this.filter(function(x) { return x[key] === value; })
}

var resultsButton = document.getElementById('resultsBtn');

// all zodiac signs
var signs = [ {animal: "rat", year: '2018'},
    {animal: "rat", year: '2008'},
{animal: "rat", year: '1996'},
{animal: "rat", year: '1984'},
{animal: "rat", year: '1972'},
{animal: "rat", year: '1960'},
{animal: "ox", year: '2009'},
{animal: "ox", year: '1997'},
{animal: "ox", year: '1985'},
{animal: "ox", year: '1973'},
{animal: "ox", year: '1961'},
{animal: "tiger", year: '2010'},
{animal: "tiger", year: '1998'},
{animal: "tiger", year: '1986'},
{animal: "tiger", year: '1974'},
{animal: "tiger", year: '1962'},
{animal: "rabbit", year: '2011'},
{animal: "rabbit", year: '1999'},
{animal: "rabbit", year: '1987'},
{animal: "rabbit", year: '1975'},
{animal: "rabbit", year: '1963'},
{animal: "dragon", year: '2012'},
{animal: "dragon", year: '2000'},
{animal: "dragon", year: '1988'},
{animal: "dragon", year: '1976'},
{animal: "dragon", year: '1964'},
{animal: "snake", year: '2013'},
{animal: "snake", year: '2001'},
{animal: "snake", year: '1989'},
{animal: "snake", year: '1977'},
{animal: "snake", year: '1965'},
{animal: "horse", year: '2014'},
{animal: "horse", year: '2002'},
{animal: "horse", year: '1990'},
{animal: "horse", year: '1978'},
{animal: "horse", year: '1966'},
{animal: "goat", year: '2015'},
{animal: "goat", year: '2003'},
{animal: "goat", year: '1991'},
{animal: "goat", year: '1979'},
{animal: "goat", year: '1967'},
{animal: "monkey", year: '2016'},
{animal: "monkey", year: '2004'},
{animal: "monkey", year: '1992'},
{animal: "monkey", year: '1980'},
{animal: "monkey", year: '1968'},
{animal: "rooster", year: '2017'},
{animal: "rooster", year: '2005'},
{animal: "rooster", year: '1993'},
{animal: "rooster", year: '1981'},
{animal: "rooster", year: '1969'},
{animal: "dog", year: '2018'},
{animal: "dog", year: '2006'},
{animal: "dog", year: '1994'},
{animal: "dog", year: '1982'},
{animal: "dog", year: '1970'},
{animal: "pig", year: '2019'},
{animal: "pig", year: '2007'},
{animal: "pig", year: '1995'},
{animal: "pig", year: '1983'},
{animal: "pig", year: '1971'},

];


function checkYear() {
    
    var result = document.getElementById('result');
    var input = document.getElementById('inputDate');
    
    var inputValue = input.value;
    
    console.log(inputValue);
    var anim = signs.filterObjects('year', inputValue)[0].animal
    console.log(signs.filterObjects('year', '1961'));
    console.log('url(img/' + anim + '.jpg)');
    
    document.getElementById('result').style.backgroundImage = 'url(img/' + anim + '.jpg)';
}






var bullshit = [
    'You will begin developing the most intense romantic interest in someone that you have ever had in your life. Unfortunately for you, that someone is a pet rock named Teddy.',
    'There is no point in telling you what to do this week. You will just do whatever you want anyway.',
    'You know what they say, when life gives you lemons, make lemonade. Except in your case life is giving you a lot of clinically depressed frogs. So make some sad frog juice?',
    'What was supposed to be an enjoyable week is now miserable thanks to some unpleasant phone calls you will have with your long lost relatives in Greenland',
    'You will spend a great deal of time wandering around aimlessly due to the poor quality of all the treasure maps you stole.',
    'Do not mess with powerful forces that you do not understand. One of them being gravity, and the other being the irresistable laugh of Oprah Winfrey.',
    'Slow and gradual change will take place inside yourself. Over the course of 40,000 years you will start to become a much better person. Hold that head up high!',
    'People will travel for miles and miles to seek out your words of wisdom. This is proof that people will do anything in order to get a good laugh.',
    'Allow your decisions and life choices to be influenced by some words you read on the internet. This is especially important when it comes to personal relationships.',
    'Creativity will strike you this week, knocking you completely out, and leaving you with a rather large and noticable black eye.',
    'Your insurance company will still insist that it has no obligation in insure you, as long as your lower body still remains frozen in that carbonite.',
    'You thought that your love would last forever. However, you are shocked to find an expiration date printed on the back, a long with the nuritional facts and warnings.',
    'You will feel cheated when you finally discover that there is no law requiring you to be kind to grieving family members at a funeral.',
    'You will develop an unfortunate personality disorder that causes you to pay more attention to the lives of celebrities then to the current events of the world.',
    'You should remember to check yourself this week. It would not be pleasant to embarrasingly wreck yourself later on.',
    'An attempt to write a beautiful love poem will fall terribly short when you have your heart set on someone named Orange',
    'We tried to tell you that attempting to cuddle with a hibernating grizzly bear was an awful idea, but you did not listen did you?',
    'You have many talents. Extreme ironing is most certainly not one of them, however.',
    'When you are attempting to swim across the Pacific Ocean, the stars strongly suggest that you do no wear a wetsuit that is made entirely out of seal meat.',
    'Aliens will visit the planet and gives you all of the secrets to obtaining world peace, but not before you shoot a few thousand of them.'
];

//var horoscopes = document.getElementB.yId("horoscopes");



function test(){
function random_bullshit(bullshit)
{

    return bullshit[Math.floor(Math.random()*bullshit.length)];
   
}

var randomOutput= random_bullshit(bullshit);
 document.getElementById("horoscopes").innerHTML = randomOutput;

}


resultsButton.addEventListener('click', function(){
    checkYear();
    test();
});



//
//Source bullshit
//
//arrange in Array
//
//pass a string thtough a functions parameter that Randomises the index value; 


