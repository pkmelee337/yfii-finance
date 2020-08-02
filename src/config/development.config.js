const config = {
  erc20ABI: [
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_spender",
  				"type": "address"
  			},
  			{
  				"name": "_value",
  				"type": "uint256"
  			}
  		],
  		"name": "approve",
  		"outputs": [
  			{
  				"name": "success",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_to",
  				"type": "address"
  			},
  			{
  				"name": "_value",
  				"type": "uint256"
  			}
  		],
  		"name": "showMeTheMoney",
  		"outputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_to",
  				"type": "address"
  			},
  			{
  				"name": "_value",
  				"type": "uint256"
  			}
  		],
  		"name": "transfer",
  		"outputs": [
  			{
  				"name": "success",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_from",
  				"type": "address"
  			},
  			{
  				"name": "_to",
  				"type": "address"
  			},
  			{
  				"name": "_value",
  				"type": "uint256"
  			}
  		],
  		"name": "transferFrom",
  		"outputs": [
  			{
  				"name": "success",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": true,
  				"name": "_from",
  				"type": "address"
  			},
  			{
  				"indexed": true,
  				"name": "_to",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_value",
  				"type": "uint256"
  			}
  		],
  		"name": "Transfer",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": true,
  				"name": "_owner",
  				"type": "address"
  			},
  			{
  				"indexed": true,
  				"name": "_spender",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_value",
  				"type": "uint256"
  			}
  		],
  		"name": "Approval",
  		"type": "event"
  	},
  	{
  		"constant": true,
  		"inputs": [
  			{
  				"name": "_owner",
  				"type": "address"
  			},
  			{
  				"name": "_spender",
  				"type": "address"
  			}
  		],
  		"name": "allowance",
  		"outputs": [
  			{
  				"name": "remaining",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [
  			{
  				"name": "_owner",
  				"type": "address"
  			}
  		],
  		"name": "balanceOf",
  		"outputs": [
  			{
  				"name": "balance",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "decimals",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "name",
  		"outputs": [
  			{
  				"name": "",
  				"type": "string"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "symbol",
  		"outputs": [
  			{
  				"name": "",
  				"type": "string"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "totalSupply",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
	  },
	governanceV2Address: '0xBa37B002AbaFDd8E89a1995dA52740bbC013D992',
  	governanceV2ABI: [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"},{"indexed":false,"internalType":"address","name":"executor","type":"address"}],"name":"NewProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_for","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_against","type":"uint256"},{"indexed":false,"internalType":"bool","name":"quorumReached","type":"bool"}],"name":"ProposalFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"votes","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalVotes","type":"uint256"}],"name":"RegisterVoter","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"votes","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalVotes","type":"uint256"}],"name":"RevokeVoter","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"bool","name":"vote","type":"bool"},{"indexed":false,"internalType":"uint256","name":"weight","type":"uint256"}],"name":"Vote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"constant":true,"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"breaker","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"config","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"execute","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStats","outputs":[{"internalType":"uint256","name":"_for","type":"uint256"},{"internalType":"uint256","name":"_against","type":"uint256"},{"internalType":"uint256","name":"_quorum","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"period","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposals","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"proposer","type":"address"},{"internalType":"uint256","name":"totalForVotes","type":"uint256"},{"internalType":"uint256","name":"totalAgainstVotes","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"address","name":"executor","type":"address"},{"internalType":"string","name":"hash","type":"string"},{"internalType":"uint256","name":"totalVotesAvailable","type":"uint256"},{"internalType":"uint256","name":"quorum","type":"uint256"},{"internalType":"uint256","name":"quorumRequired","type":"uint256"},{"internalType":"bool","name":"open","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"executor","type":"address"},{"internalType":"string","name":"hash","type":"string"}],"name":"propose","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"quorum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"revoke","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"seize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"_breaker","type":"bool"}],"name":"setBreaker","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_governance","type":"address"}],"name":"setGovernance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_lock","type":"uint256"}],"name":"setLock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_minimum","type":"uint256"}],"name":"setMinimum","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setPeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_quorum","type":"uint256"}],"name":"setQuorum","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_rewardDistribution","type":"address"}],"name":"setRewardDistribution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"tallyVotes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vote","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"voteAgainst","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"voteFor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"voteLock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"voters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"votes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"voter","type":"address"}],"name":"votesOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],
  ]}
};

export default config;
