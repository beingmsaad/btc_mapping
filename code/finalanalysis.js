var fs = require('fs')


function ethereum(){
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv','day')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',',')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv','ip')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',',')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv','hostname')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',',')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv','prefix')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',',')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv','as')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv','\n')
dc = {}
var data = fs.readFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/book.json','utf8')
var range = data.split('\"range\":')
for(var i=2 ; i < range.length-1; i++){
var ip = range[i-1].split(',')[range[i-1].split(',').length-1].split(':{')[0]
var rg =  range[i].split(',')[0]
var as = range[i].split('ASN\":')[1].split(',')[0]
ip = ip.split("\"")[1]
as = as.split('\"')[1]
rg = rg.split('\"')[1]
dc[ip] = [rg,as]
}

dcc = {}
var ndata = fs.readFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/dnstoip.txt', 'utf8').split('\n')
for(var i=0; i <ndata.length; i++){
	if(ndata[i].length > 0){
		dcc[ndata[i].split(',')[1]] = ndata[i].split(',')[0]
	}
}


var data = fs.readFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/allips.json','utf8')
data = JSON.parse(data)
for(var x =0; x < 19; x++){
var test = data[JSON.stringify(x)]
for(var i=0; i < test.length; i++){
try{	
	if(dc[test[i]]){
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',x)
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',test[i])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv','na')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',dc[test[i]][0])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',dc[test[i]][1])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv','\n')
}


		if(dcc[test[i]] && dc[dcc[test[i]]][1]){
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',x)
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',dcc[test[i]])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',test[i])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',dc[dcc[test[i]]][0])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',dc[dcc[test[i]]][1])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv','\n')
	}
}
catch(error){}

}}

}

function bitcoin(){
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv','day')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',',')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv','ip')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',',')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv','hostname')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',',')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv','prefix')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',',')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv','as')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv','\n')
dc = {}
var data = fs.readFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/book.json','utf8')
var range = data.split('\"range\":')
for(var i=2 ; i < range.length-1; i++){
var ip = range[i-1].split(',')[range[i-1].split(',').length-1].split(':{')[0]
var rg =  range[i].split(',')[0]
var as = range[i].split('ASN\":')[1].split(',')[0]
ip = ip.split("\"")[1]
as = as.split('\"')[1]
rg = rg.split('\"')[1]
dc[ip] = [rg,as]
}




var data = fs.readFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/allips.json','utf8')
data = JSON.parse(data)

for(var x =0; x < 19; x++){
var test = data[JSON.stringify(x)]
for(var i=0; i < test.length; i++){
try{	
	if(test[i].indexOf('[') != -1 && test[i].indexOf('onion') == -1){
		test[i] = test[i].split('[')[1].split(']')[0]
			if(dc[test[i]]){
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',x)
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',test[i])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv','na')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',dc[test[i]][0])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',dc[test[i]][1])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv','\n')
}
	}

	if(test[i].indexOf('[') == -1 && test[i].indexOf('onion') == -1){
		test[i] = test[i].split(':')[0]
			if(dc[test[i]]){
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',x)
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',test[i])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv','na')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',dc[test[i]][0])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv',dc[test[i]][1])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/BitcoinResult.csv','\n')
}

	}




}
catch(error){}

}
}
}




function ripple(){
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv','day')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv',',')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv','ip')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv',',')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv','hostname')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv',',')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv','prefix')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv',',')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv','as')
fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv','\n')
dc = {}
var data = fs.readFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/book.json','utf8')
var range = data.split('\"range\":')
for(var i=2 ; i < range.length-1; i++){
var ip = range[i-1].split(',')[range[i-1].split(',').length-1].split(':{')[0]
var rg =  range[i].split(',')[0]
var as = range[i].split('ASN\":')[1].split(',')[0]
ip = ip.split("\"")[1]
as = as.split('\"')[1]
rg = rg.split('\"')[1]
dc[ip] = [rg,as]
}



var data = fs.readFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/allips.json','utf8')
data = JSON.parse(data)

for(var x =0; x < 19; x++){
var test = data[JSON.stringify(x)]
for(var i=0; i < test.length; i++){
try{	
	if(dc[test[i]]){
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv',x)
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv',test[i])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv','na')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv',dc[test[i]][0])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv',',')
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv',dc[test[i]][1])
		fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/RippleResult.csv','\n')
}
	





}
catch(error){}

}
}
}

ripple()