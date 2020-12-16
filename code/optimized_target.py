import pandas as pd 
import numpy as np
import itertools
# def main():
# 	df = pd.read_csv('/home/saad/PhD/Research/VS/btc_mapping/dataset/joint_data.csv', delimiter=',')
# 	file = open("/home/saad/PhD/Research/VS/btc_mapping/code/analysis/target.txt","r")
# 	for line in file:
# 		field = line.split(',')
# 	data = df.loc[df['AS'].isin(field)]
# 	data.to_csv(r'/home/saad/PhD/Research/VS/btc_mapping/dataset/optimal.csv', index = False)


def cost():	
	df = pd.read_csv('/home/saad/PhD/Research/VS/btc_mapping/dataset/optimal.csv', delimiter=',')
	rCost = list(df['eth_weight'])
	rNodes = list(df['eth_tot'])
	a = {}
	for i in range(0,len(rCost)):
	    a[rNodes[i]] = rCost[i]
	
	
	numbers = sorted(a)
	rg = np.sum(numbers)
	
	dc = {}
	dc2 = {}
	for x in range(0,rg):
	    target = x
	    result = [seq for i in range(len(numbers), 0, -1) for seq in itertools.combinations(numbers, i) if sum(seq) == target]
	    if len(result) != 0:
	        mcost = 0
	        cost = 10000
	        for i in range(0,len(result)):
	            tCost = 0
	            for j in range(0,len(result[i])):
	                tCost += a[result[i][j]]
	            if tCost < cost:
	                cost = tCost
	            if tCost > mcost:
	                mcost = tCost
	        dc[target] = cost
	        dc2[target] = mcost
	
	import csv
	with open('/home/saad/PhD/Research/VS/btc_mapping/dataset/ebest.csv', 'w') as f:
	    for key in dc.keys():
	        f.write("%s,%s\n"%(key,dc[key]))
	with open('/home/saad/PhD/Research/VS/btc_mapping/dataset/eworst.csv', 'w') as f:
	    for key in dc2.keys():
	        f.write("%s,%s\n"%(key,dc2[key]))
	
cost()