var IPToASN = require('ip-to-asn');
var client = new IPToASN();
var fs = require('fs')

function ethereum (){
var ips = fs.readFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/addr.txt','utf8').split('\n')
console.log(ips.length)
var data = fs.readFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/dnstoip.txt','utf8').split('\n')
for(var i=0; i < data.length; i++){
	ip = data[i].split(',')[0]
	if(ip != 'undefined'){
		ips.push(ip)
	}
}
console.log(ips.length)


client.query(ips, function (err, results) {
	fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/book.json',JSON.stringify(results))
});

}

function bitcoin(){

	var ips = fs.readFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/addr.txt','utf8').split('\n')
console.log(ips)



// client.query(ips, function (err, results) {
// 	// console.log(results)
// 	// fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/book.json',JSON.stringify(results))
// });

}

function ripple(){

var ips = fs.readFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/addr.txt','utf8').split('\n')
console.log(ips.length)

client.query(ips, function (err, results) {
	
	fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/book.json',JSON.stringify(results))
});

}

// bitcoin()
ripple()