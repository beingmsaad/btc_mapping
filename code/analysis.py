import pandas as pd 
import os 
import glob
import numpy as np
import json

def split(a, n):
    k, m = divmod(len(a), n)
    return (a[i * k + min(i, m):(i + 1) * k + min(i + 1, m)] for i in range(n))

def ethereum():
	files= glob.glob('/media/saad/HDD/ICBC/dataset/ICBC/Ethereum/*.csv')
	file = []
	for i in range(0,len(files)):
		file.append(files[i].split('Ethereum/')[1].split('.csv')[0])
	file.sort()
	ls = list(split(file, 19))
	dc = {}
	for i in range(0,len(ls)):
		ips = []
		for j in range(0,len(ls[i])):
			df = pd.read_csv('/media/saad/HDD/ICBC/dataset/ICBC/Ethereum/'+ls[i][j]+'.csv', delimiter = '\t')
			ip = list(df['host'])
			for address in ip:
				ips.append(address)
		ips = np.unique(ips)
		ips = ips.tolist()
		dc[i] = ips
	dcc = {}	
	for key in sorted(dc.keys()):
	    dcc[key] = dc[key]
	with open('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/allips.json', 'w') as fp:
	    json.dump(dcc, fp)


def bitcoin():
	files= glob.glob('/media/saad/HDD/ICBC/dataset/ICBC/Bitcoin/*.csv')
	file = []
	for i in range(0,len(files)):
		file.append(files[i].split('Bitcoin/')[1].split('.csv')[0])
	file.sort()
	ls = list(split(file, 19))
	dc = {}
	for i in range(0,len(ls)):
		ips = []
		for j in range(0,len(ls[i])):
			df = pd.read_csv('/media/saad/HDD/ICBC/dataset/ICBC/Bitcoin/'+ls[i][j]+'.csv', delimiter = '\t')
			ip = list(df['Node'])
			for address in ip:
				ips.append(address)
		ips = np.unique(ips)
		ips = ips.tolist()
		dc[i] = ips
	dcc = {}	
	for key in sorted(dc.keys()):
	    dcc[key] = dc[key]
	with open('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Bitcoin/allips.json', 'w') as fp:
	    json.dump(dcc, fp)


def ripple():
	files= glob.glob('/media/saad/HDD/ICBC/dataset/ICBC/Ripple/Topology/*.txt')
	file = []
	for i in range(0,len(files)):
		file.append(files[i].split('Topology/')[1].split('.txt')[0])
	file.sort()
	ips = []
	dc = {}
	ls = list(split(file, 19))
	for j in range(0,len(ls)):
		for k in range(0,len(ls[j])):
			try:
				f = open('/media/saad/HDD/ICBC/dataset/ICBC/Ripple/Topology/'+ls[j][k]+'.txt',"r")
				data = json.loads(f.read())
				nodes = data['nodes']
				for i in range(0,len(nodes)):
					print(len(nodes))
					try:
						ips.append(nodes[i]['ip'])
					except:
						continue
				ips = np.unique(ips)
				ips = ips.tolist()
				dc[j] = ips
			except:
				continue
	dcc = {}	
	for key in sorted(dc.keys()):
	    dcc[key] = dc[key]
	with open('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ripple/allips.json', 'w') as fp:
	    json.dump(dcc, fp)



#bitcoin()
ripple()
# ethereum()