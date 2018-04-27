function printRange(rangeStart, rangeStop) {
    var text = [];
    for (var i = rangeStart; i <= rangeStop; i+=2) {
      text.push(i);
    }
    console.log(text);
  }
  
printRange(50, 100);