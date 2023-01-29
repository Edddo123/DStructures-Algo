/*
<p>
  You're given a non-empty array of positive integers representing the amounts
  of time that specific queries take to execute. Only one query can be executed
  at a time, but the queries can be executed in any order.
</p>
<p>
  A query's <b>waiting time</b> is defined as the amount of time that it must
  wait before its execution starts. In other words, if a query is executed
  second, then its waiting time is the duration of the first query; if a query
  is executed third, then its waiting time is the sum of the durations of the
  first two queries.
</p>
<p>
  Write a function that returns the minimum amount of total waiting time for all
  of the queries. For example, if you're given the queries of durations
  <span>[1, 4, 5]</span>, then the total waiting time if the queries were
  executed in the order of <span>[5, 1, 4]</span> would be
  <span>(0) + (5) + (5 + 1) = 11</span>. The first query of duration
  <span>5</span> would be executed immediately, so its waiting time would be
  <span>0</span>, the second query of duration <span>1</span> would have to wait
  <span>5</span> seconds (the duration of the first query) to be executed, and
  the last query would have to wait the duration of the first two queries before
  being executed.
</p>
*/



// O(nLogn) and space O(1)
function minimumWaitingTime(queries) {
    // we sort it since if we want to get minimum sum, we must put most time at last so we have smallest amounts before
  queries.sort((a, b) => a - b);
  let minSum = 0;
  let totalSum = 0;

  for (let i = 1; i < queries.length; i++) {
    // getting sum on each stage
    minSum += queries[i - 1];
    // accumulating sums of each stage
    totalSum += minSum;
  }

  return totalSum;
}



// 2nd solution
// O(nlogn) time | O(1) space - where n is the number of queries
function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b);
  
    let totalWaitingTime = 0;
    for (let idx = 0; idx < queries.length; idx++) {
      const duration = queries[idx];
      // so idea is whatever waiting time is, all subsequent queries will have to wait for it. So if first input is 1, it means all queries that are left have to wait for 1 sec. Meaning total duration will inceease by queries left * 1
      const queriesLeft = queries.length - (idx + 1); // with this +1 here we omit first element and also make sure last element is not included(on last element idx + 1 will be same as queries.length so it will result in 0)
      totalWaitingTime += duration * queriesLeft;
    }
  
    return totalWaitingTime;
  }
  
  // Do not edit the line below.
  exports.minimumWaitingTime = minimumWaitingTime;
  