function theBeatlesPlay(musicians, instruments)
{
  var stringArr = {};
  for(let i = 0; i < musicians.length; i++)
  {
    var string = `$(musicians[i]) plays $(instruments[i])`
    stringArr.push(string)
  }
}