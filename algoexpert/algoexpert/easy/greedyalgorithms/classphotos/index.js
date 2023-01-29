/*
<p>
  It's photo day at the local school, and you're the photographer assigned to
  take class photos. The class that you'll be photographing has an even number
  of students, and all these students are wearing red or blue shirts. In fact,
  exactly half of the class is wearing red shirts, and the other half is wearing
  blue shirts. You're responsible for arranging the students in two rows before
  taking the photo. Each row should contain the same number of the students and
  should adhere to the following guidelines:
</p>
<ul>
  <li>All students wearing red shirts must be in the same row.</li>
  <li>All students wearing blue shirts must be in the same row.</li>
  <li>
    Each student in the back row must be strictly taller than the student
    directly in front of them in the front row.
  </li>
</ul>
<p>
  You're given two input arrays: one containing the heights of all the students
  with red shirts and another one containing the heights of all the students
  with blue shirts. These arrays will always have the same length, and each
  height will be a positive integer. Write a function that returns whether or
  not a class photo that follows the stated guidelines can be taken.
</p>
<p>Note: you can assume that each class has at least 2 students.</p>
*/



// O(nlog(n)) time | O(1) space - where n is the number of students
function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);
  
    // here we identify who is in first row. Smallest person in group must be part of red team
    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
    for (let idx = 0; idx < redShirtHeights.length; idx++) {
      const redShirtHeight = redShirtHeights[idx];
      const blueShirtHeight = blueShirtHeights[idx];
  
      // here we basically check if front row is red, everyone must match condition of being smaller
      if (shirtColorInFirstRow === 'RED') {
        if (redShirtHeight >= blueShirtHeight) return false;
      } else if (blueShirtHeight >= redShirtHeight) return false;
    }
  
    return true;
  }