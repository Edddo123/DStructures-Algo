/*
<p>
  A tandem bicycle is a bicycle that's operated by two people: person A and
  person B. Both people pedal the bicycle, but the person that pedals faster
  dictates the speed of the bicycle. So if person A pedals at a speed of
  <span>5</span>, and person B pedals at a speed of <span>4</span>, the tandem
  bicycle moves at a speed of <span>5</span> (i.e.,
  <span>tandemSpeed = max(speedA, speedB)</span>).
</p>
<p>
  You're given two lists of positive integers: one that contains the speeds of
  riders wearing red shirts and one that contains the speeds of riders wearing
  blue shirts. Each rider is represented by a single positive integer, which is
  the speed that they pedal a tandem bicycle at. Both lists have the same
  length, meaning that there are as many red-shirt riders as there are
  blue-shirt riders. Your goal is to pair every rider wearing a red shirt with a
  rider wearing a blue shirt to operate a tandem bicycle.
</p>
<p>
  Write a function that returns the maximum possible total speed or the minimum
  possible total speed of all of the tandem bicycles being ridden based on an
  input parameter, <span>fastest</span>. If <span>fastest = true</span>, your
  function should return the maximum possible total speed; otherwise it should
  return the minimum total speed.
</p>
<p>
  "Total speed" is defined as the sum of the speeds of all the tandem bicycles
  being ridden. For example, if there are 4 riders (2 red-shirt riders and 2
  blue-shirt riders) who have speeds of <span>1, 3, 4, 5</span>, and if they're
  paired on tandem bicycles as follows: <span>[1, 4], [5, 3]</span>, then the
  total speed of these tandem bicycles is <span>4 + 5 = 9</span>.
</p>
*/





// logic is to get maximum sum, 1 array must be sorted ascending and 2nd descending, this way we will get maximum numbers from 2 arrays. If we sort them both ascending, we will get min sum
// O(NlogN) and space O(1)
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    let result = 0;
  
    sortAscend(redShirtSpeeds)
    fastest ? sortDescend(blueShirtSpeeds) : sortAscend(blueShirtSpeeds)
  
    console.log("redshirt",redShirtSpeeds)
    console.log("blueshirt",blueShirtSpeeds)
  
    for(let i = 0; i < redShirtSpeeds.length; i++) {
      if(redShirtSpeeds[i] > blueShirtSpeeds[i]) result += redShirtSpeeds[i]
      else result += blueShirtSpeeds[i]
    }
    
  
    
    return result;
  }
  
  function sortAscend(array) {
    array.sort((a, b) => a - b)
  }
  
  function sortDescend(array) {
    array.sort((a, b) => b-a)
  }



// user solution
  function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => b - a);
    blueShirtSpeeds.sort((a, b) => fastest ? a - b : b - a);
  
    let result = 0;
  
    for (let index = 0; index < redShirtSpeeds.length; index++) {
      result += Math.max(redShirtSpeeds[index], blueShirtSpeeds[index]);
    }
    
    return result;
  }
  



  // this is same too just has bigger reverse function.

// O(nlog(n)) time | O(1) space - where n is the number of tandem bicycles
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
  
    if (!fastest) reverseArrayInPlace(redShirtSpeeds);
  
    let totalSpeed = 0;
    for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
      const rider1 = redShirtSpeeds[idx];
      const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - idx - 1];
      totalSpeed += Math.max(rider1, rider2);
    }
  
    return totalSpeed;
  }
  
  function reverseArrayInPlace(array) {
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
      const temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      start++;
      end--;
    }
  }
  
  // Do not edit the line below.
  exports.tandemBicycle = tandemBicycle;
  
  