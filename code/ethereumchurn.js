var fs = require('fs')
var data = JSON.parse(fs.readFileSync('/media/saad/HDD/Ripple/Ethereum/ethereumchurn.json','utf8'))
var outgoing = data['outgoing']
var incoming = data['incoming']
var total = data['total']

Array.prototype.chunk = function ( n ) {
    if ( !this.length ) {
        return [];
    }
    return [ this.slice( 0, n ) ].concat( this.slice(n).chunk(n) );
};


total = total.chunk(144)
incoming = incoming.chunk(144)
outgoing = outgoing.chunk(144)

for(var i=0; i < total.length; i++){
	
  sum_a = (total[i].reduce((a, b) => a + b, 0))
  sum_b = outgoing[i].reduce((a, b) => a + b, 0)
  sum_c = incoming[i].reduce((a, b) => a + b, 0)
console.log(sum_b) 
}