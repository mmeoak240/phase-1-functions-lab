function distanceFromHqInBlocks(blocks) {
  if(blocks > 42) {
    return blocks - 42
  } else {
    return 42 - blocks
  }
}


function distanceFromHqInFeet(inFeet) {
 return distanceFromHqInBlocks(inFeet) * 264
}


function distanceTravelledInFeet(start, destination) {
  if(start < destination) {
 return (destination - start) * 264
  } else {
  return (start - destination) * 264
    }
}


function calculatesFarePrice(start, destination) {
  let blocks = Math.abs(start - destination)
  let distance = blocks * 264

 if(distance < 400) {
   return 0
 }
  else if( distance > 400 && distance <= 2000) {
  return (distance - 400) * .02
 } 
 else if( distance > 2000 && distance < 2500) {
  return 25
 } 
 else if(distance >= 2500) {
   return 'cannot travel that far'
 }
}