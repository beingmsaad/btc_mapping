                             
import pandas as pd 
import glob
import os 
import json
files = glob.glob('/home/saad/Data/Full_Nodes/MiningPools/Ethereum/*.csv')
files.sort(key=os.path.getctime)
eth_files = []
for file in files:
        if os.path.getsize(file) > 65:
                eth_files.append(file)

dc = {}
dcc = {}
dep = []
arr = []
total = []
for i in range(1, len(eth_files)):
    # try:
    #     df = pd.read_csv(eth_files[i], delimiter='\t')
        print(eth_files[i])
        # nodes = df['host']
        # df2 = pd.read_csv(eth_files[i - 1], delimiter='\t')
        # newnodes = df2['host']
        # a = list(set(newnodes) - set(nodes))
        # b = list(set(nodes) - set(newnodes))
        # arr.append(len(a))
        # dep.append(len(b))
        # total.append(len(nodes))
        # print (i,len(a), len(b))
    except:
        continue

# dcc['incoming'] = arr
# dcc ['outgoing'] = dep
# dcc['total'] = total
# with open('ethereumchurn.json', 'w') as outfile:
#     json.dump(dcc, outfile)



