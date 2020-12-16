import pandas as pd 
import matplotlib.pyplot as plt 
import numpy as np
import collections
df = pd.read_csv('/media/saad/HDD/ICBC/dataset/ICBC/Code/analysis/Ethereum/EthereumResult.csv',delimiter = ',')
day = list(df['day'])
asn = list(df['as'])
ases = []
count = 0
for i in range(0,len(asn)):
	if(str(asn[i]) != 'nan'):
		count += 1
		if isinstance(asn[i], float) == True:
			ases.append(str(int(asn[i])))
		if isinstance(asn[i], str) == True:
			ases.append(asn[i])

counter=collections.Counter(ases)
keys = counter.keys()
values = counter.values()
dc = {}
for i in range(0,len(keys)):
	if(int(values[i])*100)/count > 0:
		dc[keys[i]] = (int(values[i])*100)/count
print(dc)
# print(counter.most_common(10))