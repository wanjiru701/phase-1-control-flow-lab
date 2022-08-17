function scuberGreetingForFeet(feet) {
  if (feet<=400) { 
    return 'This one is on me!';
  } else if (feet>2500) {
    return 'No can do.';
  } else if (feet>2000) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(City){
  const getCity = City === "NYC" ? 'Ok, sounds good.' : 'No go.';
  return getCity;
}

function switchOnCharmFromTip(msg) {
  switch (msg) {
case (msg = 'generous') :
return "Thank you so much.";
break;
case (msg = 'not as generous'):
return 'Thank you.';
break;
default:
  return 'Bye.';
  }
}