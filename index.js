function theBeatlesPlay(musicians, instruments)
{
  var stringArr = [];
  for(let i = 0; i < musicians.length; i++)
  {
    stringArr.push(musicians[i] + " plays " + instruments[i])
  }
  return stringArr
}

function johnLennonFacts(facts)
{
  var fact = [];
  var i = 0;
  while(i < facts.length)
  {
    fact.push(facts[i] + "!!!")
    i++
  }
  return fact
}

function iLoveTheBeatles(number)
{
  var arr = [];
  do{
    arr.push("I love the Beatles!")
    number++
  }while(number < 15);
}