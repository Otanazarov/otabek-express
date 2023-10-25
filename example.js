// function primeNumber(a){
//     number = []
//     isPrime = true
//     for(let i = 2; i < a ;i++){
//         if(a%i==0){
//             isPeime = false
//         }
//     }
//     if(isPrime){
//         console.log(a);
//     }
// }

// console.log(primeNumber(100));
function tubSonlarniTop(max) {
    var tubSonlar = [];
    function isTubSon(n) {
      for (var i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    }
  
    for (var j = 2; j <= max; j++) {
      if (isTubSon(j)) {
        console.log(j);
        tubSonlar.push(j);
      }
    }
  
    return tubSonlar;
  }
  
  var tubSonlar100 = tubSonlarniTop(100);

  console.log(tubSonlar100);