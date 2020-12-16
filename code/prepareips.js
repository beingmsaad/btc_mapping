var fs = require('fs')

function ethereum(){
var data = JSON.parse(fs.readFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/allips.json','utf8'))
keys = Object.keys(data)
ips = []
for (var i=0; i < keys.length; i++){
	addr = data[keys[i]]
	for(var j =0; j < addr.length; j++){
		ips.push(addr[j])
	}
}
ips = [...new Set(ips)];

for(var i=0; i < ips.length; i++){
	if(ips[i].length > 20){
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/dns.txt', "	node /media/saad/HDD/ICBC/dataset/ICBC/Code/dns.js "+ips[i])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/dns.txt', '\n')
	}

	if(ips[i].length < 20){
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/addr.txt', ips[i])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/addr.txt', '\n')
	}
}
}


function bitcoin(){
var data = JSON.parse(fs.readFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/allips.json','utf8'))
keys = Object.keys(data)

ips = []
for (var i=0; i < keys.length; i++){
	addr = data[keys[i]]
	for(var j =0; j < addr.length; j++){
		ips.push(addr[j])
	}
}
ips = [...new Set(ips)];
for(var i=0; i < ips.length; i++){
	if(ips[i].indexOf('[') != -1 && ips[i].indexOf('onion') == -1){
		addr = ips[i].split('[')[1].split(']')[0]
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/addr.txt', addr)
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/addr.txt', '\n')
	}

		if(ips[i].indexOf('[') == -1 && ips[i].indexOf('onion') == -1){
		addr = ips[i].split(':')[0]
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/addr.txt', addr)
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/addr.txt', '\n')
	}
}

}


function ripple(){
var data = JSON.parse(fs.readFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/allips.json','utf8'))
keys = Object.keys(data)

ips = []
for (var i=0; i < keys.length; i++){
	addr = data[keys[i]]
	for(var j =0; j < addr.length; j++){
		ips.push(addr[j])
	}
}
ips = [...new Set(ips)];
console.log(ips.length)
for(var i=0; i < ips.length; i++){
	// console.log(ips[i])
		// addr = ips[i].split('[')[1].split(']')[0]
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/addr.txt', ips[i])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/addr.txt', '\n')
}

}
ripple()

