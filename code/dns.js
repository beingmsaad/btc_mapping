const domainPing = require("domain-ping");
var fs = require('fs')
var val = process.argv[2]


domainPing(val) // Insert the domain you want to ping
    .then((res) => {
        com = res.ip
        fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/dnstoip.txt', com)
        fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/dnstoip.txt', ',')
        fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/dnstoip.txt', val)
        fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/dnstoip.txt', '\n')
        
})

    .catch((error) => {
        com = error.ip
        fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/dnstoip.txt', com)
        fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/dnstoip.txt', ',')
        fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/dnstoip.txt', val)
        fs.appendFileSync('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/dnstoip.txt', '\n')
    });