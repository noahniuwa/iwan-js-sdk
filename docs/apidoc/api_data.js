define({ "api": [
  {
    "name": "getBalance",
    "group": "Accounts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getBalance",
    "version": "1.0.0",
    "description": "<p>Get balance for a single address</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN or ETH</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "address",
            "description": "<p>the account's address that you want to find</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getBalance\",\"params\":{\"address\": \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\",\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getBalance('WAN', '0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c');\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"10000000000000000000000\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Accounts"
  },
  {
    "name": "getMultiBalances",
    "group": "Accounts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getMultiBalances",
    "version": "1.0.0",
    "description": "<p>Get balance for multiple Addresses in a single call</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN or ETH</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "addressArray",
            "description": "<p>the account's address array that you want to find</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getMultiBalances\",\"params\":{\"address\": [\"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\",\"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2d\"],\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getMultiBalances('WAN', [\"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\",\"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2d\"]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": {\n  \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\": \"10000000000000000000000\",\n  \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2d\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Accounts"
  },
  {
    "name": "getNonce",
    "group": "Accounts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getNonce",
    "version": "1.0.0",
    "description": "<p>Get the nonce of an account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN or ETH</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "address",
            "description": "<p>the account's address that you want to find</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getNonce\",\"params\":{\"address\": \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\",\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getNonce(\"WAN\", \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"0x0\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Accounts"
  },
  {
    "name": "getNonceIncludePending",
    "group": "Accounts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getNonceIncludePending",
    "version": "1.0.0",
    "description": "<p>Get the pending nonce of an account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN or ETH</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "address",
            "description": "<p>the account's address that you want to find</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getNonceIncludePending\",\"params\":{\"address\": \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\",\"chainType\":\"WAN\"}, \"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getNonceIncludePending(\"WAN\", \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"0x0\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Accounts"
  },
  {
    "name": "getBlockByHash",
    "group": "Blocks",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getBlockByHash",
    "version": "1.0.0",
    "description": "<p>Get the block information about a block by block hash on certain chain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN</p>"
          },
          {
            "group": "Parameter",
            "type": "hash",
            "optional": false,
            "field": "blockHash",
            "description": "<p>the blockHash you want to search</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getBlockByHash\",\"params\":{\"chainType\":\"WAN\", \"blockHash\":\"0xeb3b437d765d4da9210481c2dd612fa9d0c51e0e83120ee7f573ed9d6296e9a8\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getBlockByHash(\"WAN\", \"0xeb3b437d765d4da9210481c2dd612fa9d0c51e0e83120ee7f573ed9d6296e9a8\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": {\n     \"size\": 727,\n     \"timestamp\": 1522575814,\n     \"transactions\": [\"0x4dcfc82728b5a9307f249ac095c8e6fcc436db4f85a094a0c5a457255c20f80f\"],\n     \"uncles\": [],\n     \"difficulty\": \"5812826\",\n     \"extraData\": \"0xd783010004846765746887676f312e392e32856c696e75780000000000000000de43ad982c5ccfa922f701d9ac91d47ceaaeeea7e1cc092b1ff6c3c5dcce70a07cf5a79886ff0cc02254ec0de51f1a6881a69a38cd2866a5c0dddbe0dd0f2ce301\",\n     \"gasLimit\": 4712388,\n     \"gasUsed\": 21000,\n     \"hash\": \"0xeb3b437d765d4da9210481c2dd612fa9d0c51e0e83120ee7f573ed9d6296e9a8\",\n     \"logsBloom\": \"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\n     \"miner\": \"0x321a210c019790308abb948360d144e7e00b7dc5\",\n     \"mixHash\": \"0x691299af763a758e94200545b8a5fe9d4f2cedbbfea031a1bbc540cbde4631d1\",\n     \"nonce\": \"0x2c8dd099eda5b188\",\n     \"number\": 670731,\n     \"parentHash\": \"0xd907820c7a46ba668a7e5bda8c6a23ec250877b853a85d8343688337f967b2d9\",\n     \"receiptsRoot\": \"0x056b23fbba480696b65fe5a59b8f2148a1299103c4f57df839233af2cf4ca2d2\",\n     \"sha3Uncles\": \"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347\",\n     \"stateRoot\": \"0xafbfae425a7fed863662f88d64819132079b43ac4d85988ab6cce7f9342348af\",\n     \"totalDifficulty\": \"3610551057115\",\n     \"transactionsRoot\": \"0x96fc902544191c38f1c9a2725ea2ae29e34246fb4e95728f3e72added7c9574b\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Blocks"
  },
  {
    "name": "getBlockByNumber",
    "group": "Blocks",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getBlockByNumber",
    "version": "1.0.0",
    "description": "<p>Get the block information about a block by block number on certain chain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "blockNumber",
            "description": "<p>the blockNumber you want to search</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getBlockByNumber\",\"params\":{\"chainType\":\"WAN\", \"blockNumber\":\"670731\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getBlockByNumber(\"WAN\", \"670731\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": {\n     \"size\": 727,\n     \"timestamp\": 1522575814,\n     \"transactions\": [\"0x4dcfc82728b5a9307f249ac095c8e6fcc436db4f85a094a0c5a457255c20f80f\"],\n     \"uncles\": [],\n     \"difficulty\": \"5812826\",\n     \"extraData\": \"0xd783010004846765746887676f312e392e32856c696e75780000000000000000de43ad982c5ccfa922f701d9ac91d47ceaaeeea7e1cc092b1ff6c3c5dcce70a07cf5a79886ff0cc02254ec0de51f1a6881a69a38cd2866a5c0dddbe0dd0f2ce301\",\n     \"gasLimit\": 4712388,\n     \"gasUsed\": 21000,\n     \"hash\": \"0xeb3b437d765d4da9210481c2dd612fa9d0c51e0e83120ee7f573ed9d6296e9a8\",\n     \"logsBloom\": \"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\n     \"miner\": \"0x321a210c019790308abb948360d144e7e00b7dc5\",\n     \"mixHash\": \"0x691299af763a758e94200545b8a5fe9d4f2cedbbfea031a1bbc540cbde4631d1\",\n     \"nonce\": \"0x2c8dd099eda5b188\",\n     \"number\": 670731,\n     \"parentHash\": \"0xd907820c7a46ba668a7e5bda8c6a23ec250877b853a85d8343688337f967b2d9\",\n     \"receiptsRoot\": \"0x056b23fbba480696b65fe5a59b8f2148a1299103c4f57df839233af2cf4ca2d2\",\n     \"sha3Uncles\": \"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347\",\n     \"stateRoot\": \"0xafbfae425a7fed863662f88d64819132079b43ac4d85988ab6cce7f9342348af\",\n     \"totalDifficulty\": \"3610551057115\",\n     \"transactionsRoot\": \"0x96fc902544191c38f1c9a2725ea2ae29e34246fb4e95728f3e72added7c9574b\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Blocks"
  },
  {
    "name": "getBlockNumber",
    "group": "Blocks",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getBlockNumber",
    "version": "1.0.0",
    "description": "<p>Get the current latest block number</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN or BTC</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getBlockNumber\",\"params\":{\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getBlockNumber(\"WAN\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"119858\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Blocks"
  },
  {
    "name": "getBlockTransactionCount",
    "group": "Blocks",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getBlockTransactionCount",
    "version": "1.0.0",
    "description": "<p>Get the number of transaction in a given block by blockNumber or blockhash on certain chain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN</p>"
          },
          {
            "group": "Parameter",
            "type": "hashOrNumber",
            "optional": true,
            "field": "blockHashOrBlockNumber",
            "description": "<p>the blockHash or the blockNumber you want to search</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getBlockTransactionCount\",\"params\":{\"chainType\":\"WAN\", \"blockNumber\":\"670731\"},\"id\":1}\nor\n{\"jsonrpc\":\"2.0\",\"method\":\"getBlockTransactionCount\",\"params\":{\"chainType\":\"WAN\", \"blockHash\":\"0xeb3b437d765d4da9210481c2dd612fa9d0c51e0e83120ee7f573ed9d6296e9a8\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "  let apiTest = new ApiInstance();\n  await sleep(5000);\n  let result = await apiTest.getBlockTransactionCount(\"WAN\", \"0xeb3b437d765d4da9210481c2dd612fa9d0c51e0e83120ee7f573ed9d6296e9a8\");\n//let result = await apiTest.getBlockTransactionCount(\"WAN\", \"670731\");\n  console.log(\"Result is \", result);\n  apiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": 1",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Blocks"
  },
  {
    "name": "callScFunc",
    "group": "Contracts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "callScFunc",
    "version": "1.0.0",
    "description": "<p>Call the specific public function of one contract on certain chain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN or ETH</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "scAddr",
            "description": "<p>the token address for the certain token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>the name of the specific contract public function</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "args",
            "description": "<p>the parameters array a of the specific contract public function</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "abi",
            "description": "<p>the abi of the specific contract</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"callScFunc\",\"params\":{\"chainType\": \"WAN\", \"scAddr\": \"0x55ba61f4da3166487a804bccde7ee4015f609f45\", \"name\": \"getPriAddress\", \"args\": [], \"abi\": [/The Abi of the contracts/]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.callScFunc(\"WAN\", \"0x55ba61f4da3166487a804bccde7ee4015f609f45\", \"getPriAddress\", [], [/The Abi of the contracts/]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"0x8cc420e422b3fa1c416a14fc600b3354e3312524\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Contracts"
  },
  {
    "name": "getScMap",
    "group": "Contracts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getScMap",
    "version": "1.0.0",
    "description": "<p>Get the specific public map value of one contract on certain chain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN or ETH</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "scAddr",
            "description": "<p>the token address for the certain token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>the name of the specific contract public map</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>the key of parameter of the specific contract public map</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "abi",
            "description": "<p>the abi of the specific contract</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getScMap\",\"params\":{\"chainType\": \"WAN\", \"scAddr\": \"0x55ba61f4da3166487a804bccde7ee4015f609f45\", \"name\": \"mapAddr\", \"key\": \"\", \"abi\": [/The Abi of the contracts/]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getScMap(\"WAN\", \"0x55ba61f4da3166487a804bccde7ee4015f609f45\", \"mapAddr\", \"key\", [/The Abi of the contracts/]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"0x2ecb855170c941f239ffe3495f3e07cceabd8421\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Contracts"
  },
  {
    "name": "getScOwner",
    "group": "Contracts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getScOwner",
    "version": "1.0.0",
    "description": "<p>Get the own of the specific contract on certain chain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chainType name that you want to search, should be WAN or ETH</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "scAddr",
            "description": "<p>the token address for the certain token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getScOwner\",\"params\":{\"chainType\":\"WAN\", \"scAddr\": \"0x59adc38f0b3f64fb542b50e3e955e7a8c1eb3e3b\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getScOwner('WAN', '0x59adc38f0b3f64fb542b50e3e955e7a8c1eb3e3b');\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"0xbb8703ca8226f411811dd16a3f1a2c1b3f71825d\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Contracts"
  },
  {
    "name": "getScVar",
    "group": "Contracts",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getScVar",
    "version": "1.0.0",
    "description": "<p>Get the specific public parameter value of one contract on certain chain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN or ETH</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "scAddr",
            "description": "<p>the token address for the certain token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>the name of the specific contract parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "abi",
            "description": "<p>the abi of the specific contract</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getScVar\",\"params\":{\"chainType\": \"WAN\", \"scAddr\": \"0x55ba61f4da3166487a804bccde7ee4015f609f45\", \"name\": \"addr\", \"abi\": [/The Abi of the contracts/]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getScVar(\"WAN\", \"0x55ba61f4da3166487a804bccde7ee4015f609f45\", \"addr\", [/The Abi of the contracts/]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"0x2ecb855170c941f239ffe3495f3e07cceabd8421\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Contracts"
  },
  {
    "name": "getCoin2WanRatio",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getCoin2WanRatio",
    "version": "1.0.0",
    "description": "<p>Get the native coin ratio to wan for specific chain,in 10000</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "crossChain",
            "description": "<p>the cross_chain native coin name that you want to search</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getCoin2WanRatio\",\"params\":{\"crossChain\":\"ETH\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getCoin2WanRatio('ETH');\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"20\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getErc20Allowance",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getErc20Allowance",
    "version": "1.0.0",
    "description": "<p>Get the erc20 allowance for one specific account on one contract for one specific spender account on certain chain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be &quot;ETH&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "tokenScAddr",
            "description": "<p>the token address for the certain token</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "ownerAddr",
            "description": "<p>the owner address on the certain contract</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "spenderAddr",
            "description": "<p>the spender address on the certain contract</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getErc20Allowance\",\"params\":{\"chainType\":\"ETH\", \"tokenScAddr\":\"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\", \"ownerAddr\":\"0xc27ecd85faa4ae80bf5e28daf91b605db7be1ba8\", \"spenderAddr\":\"0xcdc96fea7e2a6ce584df5dc22d9211e53a5b18b1\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getErc20Allowance(\"ETH\", \"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\", \"0xc27ecd85faa4ae80bf5e28daf91b605db7be1ba8\", \"0xcdc96fea7e2a6ce584df5dc22d9211e53a5b18b1\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"999999999999980000000000000\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getErc20Info",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getErc20Info",
    "version": "1.0.0",
    "description": "<p>Get the info of ERC20 contract, like symbol and decimals, on certain chain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be &quot;ETH&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "tokenScAddr",
            "description": "<p>the token address for the certain token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getErc20Info\",\"params\":{\"chainType\":\"ETH\", \"tokenScAddr\":\"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getErc20Info(\"ETH\", \"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": {\n  \"symbol\": \"WCT\",\n  \"decimals\": \"18\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getErc20StoremanGroups",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getErc20StoremanGroups",
    "version": "1.0.0",
    "description": "<p>Get the detail cross_chain storemanGroup info for one specific erc20 contract, like the quota, etc</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "crossChain",
            "description": "<p>the cross_chain name that you want to search, should be &quot;ETH&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "tokenScAddr",
            "description": "<p>the token address for the certain token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getErc20StoremanGroups\",\"params\":{\"crossChain\":\"ETH\", \"tokenScAddr\":\"0x00f58d6d585f84b2d7267940cede30ce2fe6eae8\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getErc20StoremanGroups('ETH', '0x00f58d6d585f84b2d7267940cede30ce2fe6eae8');\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": [{\n    \"tokenOrigAddr\": \"0xdbf193627ee704d38495c2f5eb3afc3512eafa4c\",\n    \"smgWanAddr\": \"0x765854f97f7a3b6762240c329331a870b65edd96\",\n    \"smgOrigAddr\": \"0x38b6c9a1575c90ceabbfe31b204b6b3a3ce4b3d9\",\n    \"wanDeposit\": \"5000000000000000000000\",\n    \"quota\": \"10000000000000000000000\",\n    \"txFeeRatio\": \"1\",\n    \"inboundQuota\": \"9999500000000000000000\",\n    \"outboundQuota\": \"500000000000000000\",\n    \"receivable\": \"0\",\n    \"payable\": \"0\",\n    \"debt\": \"500000000000000000\"\n  }]",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getMultiErc20Info",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getMultiErc20Info",
    "version": "1.0.0",
    "description": "<p>Get the infos of muti ERC20 contracts, like symbol and decimals, on certain chain in a single call</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be &quot;ETH&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "tokenScAddrArray",
            "description": "<p>the token address array for the certain token that you want to find</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getMultiErc20Info\",\"params\":{\"tokenScAddrArray\":[\"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\",\"0x7017500899433272b4088afe34c04d742d0ce7df\"],\"chainType\":\"ETH\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getMultiErc20Info(\"ETH\", [\"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\",\"0x7017500899433272b4088afe34c04d742d0ce7df\"]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": [{\n    \"0xc5bc855056d99ef4bda0a4ae937065315e2ae11a\": {\n      \"symbol\": \"WCT\",\n      \"decimals\": \"18\"\n    },\n    \"0x7017500899433272b4088afe34c04d742d0ce7df\": {\n      \"symbol\": \"WCT_One\",\n      \"decimals\": \"18\"\n    }\n  }]",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getRegErc20Tokens",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getRegErc20Tokens",
    "version": "1.0.0",
    "description": "<p>Get the detail info of registered contract for Erc20_crosschain, like address, ratio, etc, on certain chain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "crossChain",
            "description": "<p>the cross_chain name that you want to search, should be &quot;ETH&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getRegErc20Tokens\",\"params\":{\"crossChain\":\"ETH\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getRegErc20Tokens(\"ETH\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": [{\n    \"tokenOrigAddr\": \"0x54950025d1854808b09277fe082b54682b11a50b\",\n    \"tokenWanAddr\": \"0xe336cb9b982cdc8055771bd509ac8b89d3b7a3af\",\n    \"ratio\": \"5700000\",\n    \"minDeposit\": \"100000000000000000000\",\n    \"origHtlc\": \"0x87a0dee965e7679d15327ce0cc3df8dfc009b43d\",\n    \"wanHtlc\": \"0xe10515355e684e515c9c632c9eed04cca425cda1\",\n    \"withdrawDelayTime\": \"259200\"\n  }, {\n    \"tokenOrigAddr\": \"0xdbf193627ee704d38495c2f5eb3afc3512eafa4c\",\n    \"tokenWanAddr\": \"0x47db5125f4af190093b0ec2c502959d39dcbc4fa\",\n    \"ratio\": \"5000\",\n    \"minDeposit\": \"100000000000000000000\",\n    \"origHtlc\": \"0x87a0dee965e7679d15327ce0cc3df8dfc009b43d\",\n    \"wanHtlc\": \"0xe10515355e684e515c9c632c9eed04cca425cda1\",\n    \"withdrawDelayTime\": \"259200\"\n  }, {\n    \"tokenOrigAddr\": \"0x00f58d6d585f84b2d7267940cede30ce2fe6eae8\",\n    \"tokenWanAddr\": \"0x8b9efd0f6d5f078520a65ad731d79c0f63675ec0\",\n    \"ratio\": \"3000\",\n    \"minDeposit\": \"100000000000000000000\",\n    \"origHtlc\": \"0x87a0dee965e7679d15327ce0cc3df8dfc009b43d\",\n    \"wanHtlc\": \"0xe10515355e684e515c9c632c9eed04cca425cda1\",\n    \"withdrawDelayTime\": \"259200\"\n  }]",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getStoremanGroups",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getStoremanGroups",
    "version": "1.0.0",
    "description": "<p>Get the detail cross_chain storemanGroup info for one crossChain native coin, like the quota, etc</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "crossChain",
            "description": "<p>the cross_chain name that you want to search</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getStoremanGroups\",\"params\":{\"crossChain\":\"ETH\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getStoremanGroups('ETH');\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": " \"result\": [{\n     \"wanAddress\": \"0x06daa9379cbe241a84a65b217a11b38fe3b4b063\",\n     \"ethAddress\": \"0x41623962c5d44565de623d53eb677e0f300467d2\",\n     \"deposit\": \"128000000000000000000000\",\n     \"txFeeRatio\": \"10\",\n     \"quota\": \"400000000000000000000\",\n     \"inboundQuota\": \"290134198386719012352\",\n     \"outboundQuota\": \"85607176846820246993\",\n     \"receivable\": \"80000000000000000\",\n     \"payable\": \"24178624766460740655\",\n     \"debt\": \"109785801613280987648\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getToken2WanRatio",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getToken2WanRatio",
    "version": "1.0.0",
    "description": "<p>Get the token ratio to wan for specific erc20 token,in 10000</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "crossChain",
            "description": "<p>the cross_chain name that you want to search, should be &quot;ETH&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "tokenScAddr",
            "description": "<p>the token address for the certain token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getToken2WanRatio\",\"params\":{\"crossChain\":\"ETH\", \"tokenScAddr\":\"0x00f58d6d585f84b2d7267940cede30ce2fe6eae8\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getToken2WanRatio(\"ETH\", \"0x00f58d6d585f84b2d7267940cede30ce2fe6eae8\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"3000\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getTransaction",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTransaction",
    "version": "1.0.0",
    "description": "<p>Call getRawTransaction function with 1 at second param to get raw transaction info.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be BTC</p>"
          },
          {
            "group": "Parameter",
            "type": "txHash",
            "optional": false,
            "field": "txHash",
            "description": "<p>the txHash you want to search</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTransaction\",\"params\":{\"chainType\":\"BTC\",\"txHash\":\"7168a86c84eda0bbfb7ae553118b02983516e8a6c448dc4c0630d26299297f20\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getTransaction(\"BTC\", \"7168a86c84eda0bbfb7ae553118b02983516e8a6c448dc4c0630d26299297f20\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": {\n    \"txid\": \"7168a86c84eda0bbfb7ae553118b02983516e8a6c448dc4c0630d26299297f20\",\n    \"hash\": \"7168a86c84eda0bbfb7ae553118b02983516e8a6c448dc4c0630d26299297f20\",\n    \"version\": 1,\n    \"size\": 502,\n    \"vsize\": 502,\n    \"locktime\": 0,\n    \"vin\": [{\n      \"txid\": \"9573ace6a27f08ddb4306351d6764ef18e8d4ef1c21e3bbe40f4a313e552d3d9\",\n      \"vout\": 0,\n      \"scriptSig\": {\n        \"asm\": \"0 304402203367bfe118686d11de9194f01a31edcd578bdc5d8b377a2189c7ba68ecf763f10220738a0f2bbb298885950a7b08b5fdcfbe4a18ce581474b9160c097bb4ea939d3b[ALL] 304402205f74077b910e4e794e59e881939c71ef27bf4e709063973afa234d4cda69aaa6022042b6914c403adf94761ae42214ad9b366149dbd9f04b17d10c066b5ba3c9a9a3[ALL] 304402204757d2c32e1467cfbdb7327bd4a50b5ebcd5f18717b2b4d6d62d61e1a1cafbe30220461b2d5120b826605d1c83bee4e59eef73fefc94cd0c5ae30c9d1d25e89d3380[ALL] 5321022666ff58d872f45d5f38022af3e8ad21f7a109d70d718171111b035542332f202102378f6c2051e46ac2f8db79929bf24440e45c9fb985bfd5e8a71026440623f5e92103ced1ba9b2f46b49168b38f3f950a5a3cdf15d5d13e8e5a2ebf6a28d1beb6b2562103528901b8cd76a4b9fb270d020706619543d9a75dc2a9c717d397d3838b69e98654ae\",\n        \"hex\": \"0047304402203367bfe118686d11de9194f01a31edcd578bdc5d8b377a2189c7ba68ecf763f10220738a0f2bbb298885950a7b08b5fdcfbe4a18ce581474b9160c097bb4ea939d3b0147304402205f74077b910e4e794e59e881939c71ef27bf4e709063973afa234d4cda69aaa6022042b6914c403adf94761ae42214ad9b366149dbd9f04b17d10c066b5ba3c9a9a30147304402204757d2c32e1467cfbdb7327bd4a50b5ebcd5f18717b2b4d6d62d61e1a1cafbe30220461b2d5120b826605d1c83bee4e59eef73fefc94cd0c5ae30c9d1d25e89d3380014c8b5321022666ff58d872f45d5f38022af3e8ad21f7a109d70d718171111b035542332f202102378f6c2051e46ac2f8db79929bf24440e45c9fb985bfd5e8a71026440623f5e92103ced1ba9b2f46b49168b38f3f950a5a3cdf15d5d13e8e5a2ebf6a28d1beb6b2562103528901b8cd76a4b9fb270d020706619543d9a75dc2a9c717d397d3838b69e98654ae\"\n      },\n      \"sequence\": 4294967295\n    }],\n    \"vout\": [{\n      \"value\": 0.0531,\n      \"n\": 0,\n      \"scriptPubKey\": {\n        \"asm\": \"OP_HASH160 a3d3eea26a00225d76b089a690ae5f48471e5733 OP_EQUAL\",\n        \"hex\": \"a914a3d3eea26a00225d76b089a690ae5f48471e573387\",\n        \"reqSigs\": 1,\n        \"type\": \"scripthash\",\n        \"addresses\": [\"2N8BU1rgLfkRZZpUQWSz1fNJ5z6hCtWjkUd\"]\n      }\n    }, {\n      \"value\": 0,\n      \"n\": 1,\n      \"scriptPubKey\": {\n        \"asm\": \"OP_RETURN 45584f4e554d010078ab7200000000005d114ae1dce23ed8196dc2e6f8b605e228e3994d13900ed1919d604f0507cce9\",\n        \"hex\": \"6a3045584f4e554d010078ab7200000000005d114ae1dce23ed8196dc2e6f8b605e228e3994d13900ed1919d604f0507cce9\",\n        \"type\": \"nulldata\"\n      }\n    }],\n    \"hex\": \"0100000001d9d352e513a3f440be3b1ec2f14e8d8ef14e76d6516330b4dd087fa2e6ac739500000000fd66010047304402203367bfe118686d11de9194f01a31edcd578bdc5d8b377a2189c7ba68ecf763f10220738a0f2bbb298885950a7b08b5fdcfbe4a18ce581474b9160c097bb4ea939d3b0147304402205f74077b910e4e794e59e881939c71ef27bf4e709063973afa234d4cda69aaa6022042b6914c403adf94761ae42214ad9b366149dbd9f04b17d10c066b5ba3c9a9a30147304402204757d2c32e1467cfbdb7327bd4a50b5ebcd5f18717b2b4d6d62d61e1a1cafbe30220461b2d5120b826605d1c83bee4e59eef73fefc94cd0c5ae30c9d1d25e89d3380014c8b5321022666ff58d872f45d5f38022af3e8ad21f7a109d70d718171111b035542332f202102378f6c2051e46ac2f8db79929bf24440e45c9fb985bfd5e8a71026440623f5e92103ced1ba9b2f46b49168b38f3f950a5a3cdf15d5d13e8e5a2ebf6a28d1beb6b2562103528901b8cd76a4b9fb270d020706619543d9a75dc2a9c717d397d3838b69e98654aeffffffff02300651000000000017a914a3d3eea26a00225d76b089a690ae5f48471e5733870000000000000000326a3045584f4e554d010078ab7200000000005d114ae1dce23ed8196dc2e6f8b605e228e3994d13900ed1919d604f0507cce900000000\",\n    \"blockhash\": \"000000000000003e0d0f4782df67ca1d46472c7913470621377bcb2424833efe\",\n    \"confirmations\": 13,\n    \"time\": 1535367245,\n    \"blocktime\": 1535367245\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getUTXO",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getUTXO",
    "version": "1.0.0",
    "description": "<p>Get the detail btc utxo info for BTC</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chainType name that you want to search, should be BTC</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "minconf",
            "description": "<p>the min confirm number of BTC utxo, usually 0</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "maxconf",
            "description": "<p>the max confirm number of BTC utxo, usually the confirmed blockes you want to wait for the utxo</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "address",
            "description": "<p>the address array that you want to search</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getUTXO\",\"params\":{\"chainType\":\"BTC\", \"minconf\":0, \"maxconf\":100, \"address\":[\"n35aUMToGvxJhYm7QVMtyBL83PTDKzPC1R\"]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getUTXO('BTC', 0, 100, [\"n35aUMToGvxJhYm7QVMtyBL83PTDKzPC1R\"]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": " \"result\": [{\n     \"txid\": \"302588f81dc5ad7972d3affc781adc6eb326227a6feda53a990e9b98b715edcc\",\n     \"vout\": 0,\n     \"address\": \"n35aUMToGvxJhYm7QVMtyBL83PTDKzPC1R\",\n     \"account\": \"\",\n     \"scriptPubKey\": \"76a914ec8626d9aa394317659a45cfcbd1f0762126c5e888ac\",\n     \"amount\": 0.079,\n     \"confirmations\": 16,\n     \"spendable\": false,\n     \"solvable\": false,\n     \"safe\": true,\n     \"value\": 0.079\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "importAddress",
    "group": "CrossChain",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "importAddress",
    "version": "1.0.0",
    "description": "<p>Send a 'import address' command to btc.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be BTC</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "address",
            "description": "<p>the BTC account address you want to import to the node to scan transactions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"importAddress\",\"params\":{\"chainType\":\"BTC\",\"address\":\"mmmmmsdfasdjflaksdfasdf\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.importAddress(\"BTC\", \"mmmmmsdfasdjflaksdfasdf\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"success\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "CrossChain"
  },
  {
    "name": "getScEvent",
    "group": "EventLogs",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getScEvent",
    "version": "1.0.0",
    "description": "<p>Get smart contract event log via topics</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chainType name that you want to search, should be WAN</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "address",
            "description": "<p>the contract address</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "topics",
            "description": "<p>of Strings - An array of values which must each appear in the log entries. The order is important, if you want to leave topics out use null, e.g. [null, '0x00...'].</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getScEvent\",\"params\":{\"chainType\":\"WAN\", \"address\": \"0xda5b90dc89be59365ec44f3f2d7af8b6700d1167\", \"topics\": [\"0xa4345d0839b39e5a6622a55c68bd8f83ac8a68fad252a8363a2c09dbaf85c793\", \"0x0000000000000000000000000000000000000000000000000000000000000000\"]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getScEvent('WAN', '0xda5b90dc89be59365ec44f3f2d7af8b6700d1167', [\"0xa4345d0839b39e5a6622a55c68bd8f83ac8a68fad252a8363a2c09dbaf85c793\", \"0x0000000000000000000000000000000000000000000000000000000000000000\"]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\":[{\n     \"address\": \"0xda5b90dc89be59365ec44f3f2d7af8b6700d1167\",\n     \"topics\": [\"0xa4345d0839b39e5a6622a55c68bd8f83ac8a68fad252a8363a2c09dbaf85c793\", \"0x0000000000000000000000000000000000000000000000000000000000000000\"],\n     \"data\": \"0x54657374206d6573736167650000000000000000000000000000000000000000\",\n     \"blockNumber\": 1121916,\n     \"transactionHash\": \"0x6bdd2acf6e946be40e2b3a39d3aaadd6d615d59c89730196870f640990a57cbe\",\n     \"transactionIndex\": 0,\n     \"blockHash\": \"0xedda83000829f7d0a0820a7bdf2103a3142a70c404f78fd1dfc7751dc007f5a2\",\n     \"logIndex\": 0,\n     \"removed\": false\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "EventLogs"
  },
  {
    "name": "monitorLog",
    "group": "EventLogs",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "monitorLog",
    "version": "1.0.0",
    "description": "<p>Subscribe a smart contract event monitor. The server will push the event to subscriber when event comes.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chainType name that you want to search, should be WAN or ETH</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "address",
            "description": "<p>the contract address</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "topics",
            "description": "<p>of Strings - An array of values which must each appear in the log entries. The order is important, if you want to leave topics out use null, e.g. [null, '0x00...'].</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"monitorLog\",\"params\":{\"chainType\":\"WAN\", \"address\": \"0x0d18157D85c93A86Ca194DB635336E43B1Ffbd26\", \"topics\": [\"0x685c13adbbf429a7b274e90887dad988c5f9d0490c6fbedb07b03b388a1683c7\"]},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.monitorLog('WAN', '0x0d18157D85c93A86Ca194DB635336E43B1Ffbd26', [\"0x685c13adbbf429a7b274e90887dad988c5f9d0490c6fbedb07b03b388a1683c7\"]);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\":[{\n      \"address\": \"0x0d18157d85c93a86ca194db635336e43b1ffbd26\",\n      \"topics\": [\"0x685c13adbbf429a7b274e90887dad988c5f9d0490c6fbedb07b03b388a1683c7\", \"0x0000000000000000000000000d18157d85c93a86ca194db635336e43b1ffbd26\"],\n      \"data\": \"0xf124b8ff25fd9c5e4f4e555232840d6a0fb89f4eb9e507ee15b5eff1336de212\",\n      \"blockNumber\": 685211,\n      \"transactionHash\": \"0xf5889525629718bc39cc26909012f1502826e2241d6f169ac6c229328d38245b\",\n      \"transactionIndex\": 0,\n      \"blockHash\": \"0x6b673291fe79e06323766d0966430cafd0baec742ec7532a10be74018ba1d785\",\n      \"logIndex\": 0,\n      \"removed\": false\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "EventLogs"
  },
  {
    "name": "getGasPrice",
    "group": "Status",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getGasPrice",
    "version": "1.0.0",
    "description": "<p>Get total amount of certain token on Wanchain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getGasPrice\",\"params\":{\"chainType\":\"WAN\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getGasPrice('WAN');\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"180000000000\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Status"
  },
  {
    "name": "getTokenSupply",
    "group": "Status",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTokenSupply",
    "version": "1.0.0",
    "description": "<p>Get total amount of certain token on Wanchain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN or ETH, default WAN</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "tokenScAddr",
            "description": "<p>the token address for the certain token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTokenSupply\",\"params\":{\"tokenScAddr\" : \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\"},\"id\":1}\nor\n{\"jsonrpc\":\"2.0\",\"method\":\"getTokenSupply\",\"params\":{\"chainType\":\"WAN\", \"tokenScAddr\" : \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getTokenSupply(\"WAN\", \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"30000000000000000000000\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Status"
  },
  {
    "name": "getCrossScAddress",
    "group": "Token",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getCrossScAddress",
    "version": "1.0.0",
    "description": "<p>Get total amount of certain token on Wanchain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "crossChain",
            "description": "<p>the cross_chain name that you want to search, should be ETH</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getCrossScAddress\",\"params\":{\"crossChain\":\"ETH\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getCrossScAddress('ETH');\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": {\n  \"originalChainHtlcAddr\": \"0xb9f924b9d28ad550610d65b035ddd644da682a48\",\n  \"wanchainHtlcAddr\": \"0x3906b053c151c3f0b83df808e2b84d87e20efd4d\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Token"
  },
  {
    "name": "getMultiTokenBalance",
    "group": "Token",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getMultiTokenBalance",
    "version": "1.0.0",
    "description": "<p>Get token balance for multiple addresses of certain token on Wanchain in a single call</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN or ETH, default WAN</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "addressArray",
            "description": "<p>the account's address array that you want to find</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "tokenScAddr",
            "description": "<p>the token address for the certain token; if set chainType 'WAN', it should be the token address for WETH or WBTC</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getMultiTokenBalance\",\"params\":{\"address\": [\"0xfac95c16da814d24cc64b3186348afecf527324f\",\"0xfac95c16da814d24cc64b3186348afecf527324e\"],\"tokenScAddr\" : \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getMultiTokenBalance(\"WAN\", [\"0xfac95c16da814d24cc64b3186348afecf527324f\",\"0xfac95c16da814d24cc64b3186348afecf527324e\"], \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": {\n  \"0xfac95c16da814d24cc64b3186348afecf527324f\": \"10000000000000000000000\",\n  \"0xfac95c16da814d24cc64b3186348afecf527324e\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Token"
  },
  {
    "name": "getTokenBalance",
    "group": "Token",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTokenBalance",
    "version": "1.0.0",
    "description": "<p>Get token balance for a single address of certain token on Wanchain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN or ETH, default WAN</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "address",
            "description": "<p>the account's address that you want to find</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "tokenScAddr",
            "description": "<p>the token address for the certain token; if set chainType 'WAN', it should be the token address for WETH or WBTC</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTokenBalance\",\"params\":{\"address\": \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\",\"tokenScAddr\" : \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getTokenBalance(\"WAN\", \"0x2cc79fa3b80c5b9b02051facd02478ea88a78e2c\", \"0x63eed4943abaac5f43f657d8eec098ca6d6a546e\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"10000000000000000000000\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Token"
  },
  {
    "name": "getTransByAddress",
    "group": "Transactions",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTransByAddress",
    "version": "1.0.0",
    "description": "<p>Get transaction information via the specified address on certain chain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "address",
            "description": "<p>the account's address that you want to search</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTransByAddress\",\"params\":{\"chainType\":\"WAN\", \"address\":\"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getTransByAddress(\"WAN\", \"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": [{\n     \"blockNumber\": 1004796,\n     \"gas\": 90000,\n     \"nonce\": 505,\n     \"transactionIndex\": 0,\n     \"txType\": \"0x1\",\n     \"blockHash\": \"0x604e45aa6b67b1957ba793e534878d94bfbacd38eed2eb51990de097595a334e\",\n     \"from\": \"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\",\n     \"gasPrice\": \"180000000000\",\n     \"hash\": \"0x353545658d513ff4fe1db9b0f979a24a831ae0949b37bc1afefc8179fc29b358\",\n     \"input\": \"0x\",\n     \"to\": \"0x8fbc408bef86476e3098dc539762d4021092bbde\",\n     \"value\": \"100000000000000000000\",\n     \"v\": \"0x2a\",\n     \"r\": \"0xbe8f287930782cff4d2e12e4a55c46765b610b88d13bc1a060a4565f3316e933\",\n     \"s\": \"0x7a297e96c54fffd124833462e03725ea8d168465d34a3e577afbaa9d05a99cd0\"\n   }, {\n     \"blockNumber\": 1004818,\n     \"gas\": 21000,\n     \"nonce\": 0,\n     \"transactionIndex\": 0,\n     \"txType\": \"0x1\",\n     \"blockHash\": \"0xbb5769654036fdb768ede5b1a172298d408808e7dcb78a82b3c8d5ef32fc67cb\",\n     \"from\": \"0x8fbc408bef86476e3098dc539762d4021092bbde\",\n     \"gasPrice\": \"200000000000\",\n     \"hash\": \"0xee3371655a53e6d413c3b9d570fee8852989554989fde51136cf3b9c672e272d\",\n     \"input\": \"0x\",\n     \"to\": \"0xc68b75ca4e4bf0b71e3594452a5e47b11d287724\",\n     \"value\": \"1000000000000000000\",\n     \"v\": \"0x2a\",\n     \"r\": \"0x4341dcd4156050b664b9c977644756201a6357c7b12e5db86b370a38b1ed6dfb\",\n     \"s\": \"0x43b380fc67394e8b9483af97f5de067ef6617b17cfaa75517f07ec8d166f3c65\"\n   }]",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Transactions"
  },
  {
    "name": "getTransByAddressBetweenBlocks",
    "group": "Transactions",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTransByAddressBetweenBlocks",
    "version": "1.0.0",
    "description": "<p>Get transaction information via the specified address between the specified startBlockNo and endBlockNo on certain chain Comments:  if no startBlockNo given, startBlockNo will be set to 0; if no endBlockNo given, endBlockNo will be set to the newest blockNumber</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN</p>"
          },
          {
            "group": "Parameter",
            "type": "address",
            "optional": false,
            "field": "address",
            "description": "<p>the account's address that you want to search</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "startBlockNo",
            "description": "<p>the startBlockNo that you want to search from</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "endBlockNo",
            "description": "<p>the endBlockNo that you want to search to</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTransByAddressBetweenBlocks\",\"params\":{\"chainType\":\"WAN\", \"address\":\"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\", \"startBlockNo\":984119, \"endBlockNo\":984120},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getTransByAddressBetweenBlocks(\"WAN\", \"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\", 984119, 984120);\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": [{\n     \"blockNumber\": 984119,\n     \"gas\": 4700000,\n     \"nonce\": 407,\n     \"transactionIndex\": 0,\n     \"txType\": \"0x1\",\n     \"blockHash\": \"0xdf59acacabe8c1b64ca6ff611c629069731d9dae60f4b0cc753c4a0571ea7f27\",\n     \"from\": \"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\",\n     \"gasPrice\": \"180000000000\",\n     \"hash\": \"0xf4610446d836b95d577ba723e1df55258e4f602cfa26d5ada3b50fa2fe82b469\",\n     \"input\": \"0x6060604052341561000f57600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102d78061005e6000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100a05780638da5cb5b146100c9578063fdacd5761461011e575b600080fd5b341561007257600080fd5b61009e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610141565b005b34156100ab57600080fd5b6100b3610220565b6040518082815260200191505060405180910390f35b34156100d457600080fd5b6100dc610226565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561012957600080fd5b61013f600480803590602001909190505061024b565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561021c578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b151561020b57600080fd5b5af1151561021857600080fd5b5050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102a857806001819055505b505600a165627a7a72305820de682f89b485041a9206a7304a95a151cd2363297029280359a4ca996dcaeda20029\",\n     \"to\": null,\n     \"value\": \"0\",\n     \"v\": \"0x29\",\n     \"r\": \"0xd14dfde02e305a945e6a09b6dbd5fe1f1bd5a6dc0721c15f72732aa10a3829b3\",\n     \"s\": \"0x56923b20a15f02633295b415ae52161529d560580dfcd62a97bc394c841bea37\"\n   }]",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Transactions"
  },
  {
    "name": "getTransByBlock",
    "group": "Transactions",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTransByBlock",
    "version": "1.0.0",
    "description": "<p>Get transaction information in a given block by blockNumber or blockhash on certain chain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN</p>"
          },
          {
            "group": "Parameter",
            "type": "hashOrNumber",
            "optional": true,
            "field": "blockHashOrBlockNumber",
            "description": "<p>the blockHash or the blockNumber you want to search</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTransByBlock\",\"params\":{\"chainType\":\"WAN\", \"blockNumber\":\"984133\"},\"id\":1}\nor\n{\"jsonrpc\":\"2.0\",\"method\":\"getTransByBlock\",\"params\":{\"chainType\":\"WAN\", \"blockHash\":\"0xaa0fc2a8a868566f2e4888b2942ec05c47c2254e8b81e43d3ea87420a09126c2\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getTransByBlock(\"WAN\", \"0xc18c4bdf0d40c4bb2f34f0273eaf4dc674171fbf33c3301127e1d4c85c574ebe\");\n//let result = await apiTest.getTransByBlock(\"WAN\", \"984133\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": [{\n     \"blockNumber\": 984133,\n     \"gas\": 4700000,\n     \"nonce\": 414,\n     \"transactionIndex\": 0,\n     \"txType\": \"0x1\",\n     \"blockHash\": \"0xaa0fc2a8a868566f2e4888b2942ec05c47c2254e8b81e43d3ea87420a09126c2\",\n     \"from\": \"0xbb9003ca8226f411811dd16a3f1a2c1b3f71825d\",\n     \"gasPrice\": \"180000000000\",\n     \"hash\": \"0x2c6dee69c9cc5676484d80d173d683802a4f761d5785a694b4262fbf39dff8fe\",\n     \"input\": \"0xfdacd5760000000000000000000000000000000000000000000000000000000000000002\",\n     \"to\": \"0x92e8ae701cd081ae8f0cb03dcae2e57b9b261667\",\n     \"value\": \"0\",\n     \"v\": \"0x29\",\n     \"r\": \"0x1c1ad7e8ee64fc284adce0910d6f811933af327b20cb8adba392a1b24a15054f\",\n     \"s\": \"0x690785383bed28c9a951b30329a066cb78062f63febf5aa1ca7e7ef62a2108cb\"\n   }]",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Transactions"
  },
  {
    "name": "getTransactionConfirm",
    "group": "Transactions",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTransactionConfirm",
    "version": "1.0.0",
    "description": "<p>Get the transaction mined result on certain chain. When the receipt not existed, return directly with 'no receipt was found'; If receipt existed, the receipt will be returned after confirm-block-number blocks</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN or ETH</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "waitBlocks",
            "description": "<p>the confirm-block-number you want to set</p>"
          },
          {
            "group": "Parameter",
            "type": "hash",
            "optional": false,
            "field": "txHash",
            "description": "<p>the txHash you want to search</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTransactionConfirm\",\"params\":{\"chainType\":\"WAN\", \"waitBlocks\": 6, \"txHash\": \"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getTransactionConfirm(\"WAN\", 6, \"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": {\n     \"blockHash\": \"0xcb76ea6649d801cc45294f4d0858bad1ca0c2b169b20c4beae2852c57a7f69c9\",\n     \"blockNumber\": 1137680,\n     \"contractAddress\": null,\n     \"cumulativeGasUsed\": 29572,\n     \"from\": \"0xed1baf7289c0acef52db0c18e1198768eb06247e\",\n     \"gasUsed\": 29572,\n     \"logs\": [{\n       \"address\": \"0xda5b90dc89be59365ec44f3f2d7af8b6700d1167\",\n       \"topics\": [\"0xa4345d0839b39e5a6622a55c68bd8f83ac8a68fad252a8363a2c09dbaf85c793\", \"0x0000000000000000000000000000000000000000000000000000000000000005\"],\n       \"data\": \"0x54657374206d6573736167650000000000000000000000000000000000000000\",\n       \"blockNumber\": 1137680,\n       \"transactionHash\": \"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\",\n       \"transactionIndex\": 0,\n       \"blockHash\": \"0xcb76ea6649d801cc45294f4d0858bad1ca0c2b169b20c4beae2852c57a7f69c9\",\n       \"logIndex\": 0,\n       \"removed\": false\n     }],\n     \"logsBloom\": \"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000001000000800000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000200000000000\",\n     \"status\": \"0x1\",\n     \"to\": \"0xda5b90dc89be59365ec44f3f2d7af8b6700d1167\",\n     \"transactionHash\": \"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\",\n     \"transactionIndex\": 0\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Transactions"
  },
  {
    "name": "getTransactionReceipt",
    "group": "Transactions",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTransactionReceipt",
    "version": "1.0.0",
    "description": "<p>Get the receipt of a transaction by transaction hash on certain chain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN or ETH</p>"
          },
          {
            "group": "Parameter",
            "type": "hash",
            "optional": false,
            "field": "txHash",
            "description": "<p>the txHash you want to search</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTransactionReceipt\",\"params\":{\"chainType\":\"WAN\", \"txHash\":\"0xc18c4bdf0d40c4bb2f34f0273eaf4dc674171fbf33c3301127e1d4c85c574ebe\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getTransactionReceipt(\"WAN\", \"0xc18c4bdf0d40c4bb2f34f0273eaf4dc674171fbf33c3301127e1d4c85c574ebe\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": {\n     \"logs\": [],\n     \"blockHash\": \"0x18198d5e42859067db405c9144306f7da87210a8604aac66ef6759b14a199d6b\",\n     \"blockNumber\": 2548378,\n     \"contractAddress\": null,\n     \"cumulativeGasUsed\": 21000,\n     \"from\": \"0xdcfffcbb1edc98ebbc5c7a6b3b700a6748eca3b0\",\n     \"gasUsed\": 21000,\n     \"logsBloom\": \"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\n     \"status\": \"0x1\",\n     \"to\": \"0x157908807e95f864284e84cc5d307ce6f3574532\",\n     \"transactionHash\": \"0xc18c4bdf0d40c4bb2f34f0273eaf4dc674171fbf33c3301127e1d4c85c574ebe\",\n     \"transactionIndex\": 0\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Transactions"
  },
  {
    "name": "getTxInfo",
    "group": "Transactions",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "getTxInfo",
    "version": "1.0.0",
    "description": "<p>Get the transaction detail via txHash on certain chain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN or BTC</p>"
          },
          {
            "group": "Parameter",
            "type": "hash",
            "optional": false,
            "field": "txHash",
            "description": "<p>the txHash you want to search</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"getTxInfo\",\"params\":{\"chainType\":\"WAN\", \"txHash\":\"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.getTxInfo(\"WAN\", \"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\");\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": {\n     \"txType\": \"0x1\",\n     \"blockHash\": \"0xcb76ea6649d801cc45294f4d0858bad1ca0c2b169b20c4beae2852c57a7f69c9\",\n     \"blockNumber\": 1137680,\n     \"from\": \"0xed1baf7289c0acef52db0c18e1198768eb06247e\",\n     \"gas\": 1000000,\n     \"gasPrice\": \"320000000000\",\n     \"hash\": \"0xd2a5b1f403594dbc881e466d46a4cac3d6cf202476b1277876f0b24923d032da\",\n     \"input\": \"0x642b273754657374206d6573736167650000000000000000000000000000000000000000\",\n     \"nonce\": 26,\n     \"to\": \"0xda5b90dc89be59365ec44f3f2d7af8b6700d1167\",\n     \"transactionIndex\": 0,\n     \"value\": \"0\",\n     \"v\": \"0x1b\",\n     \"r\": \"0xe3a5a5d73d0b6512676723bc4bab4f7ffe01476f8cbc9631976890e175d487ac\",\n     \"s\": \"0x3a79e17290fe2a9f4e5b5c5431eb322882729d68ca0d736c5d9b1f3285c9169e\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Transactions"
  },
  {
    "name": "sendRawTransaction",
    "group": "Transactions",
    "type": "CONNECT",
    "url": "/ws/v3/YOUR-API-KEY",
    "title": "sendRawTransaction",
    "version": "1.0.0",
    "description": "<p>Submit a pre-signed transaction for broadcast to certain chain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chainType",
            "description": "<p>the chain name that you want to search, should be WAN or ETH or BTC</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "signedTx",
            "description": "<p>the signedTx you want to send</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-RPC over websocket",
          "content": "{\"jsonrpc\":\"2.0\",\"method\":\"sendRawTransaction\",\"params\":{\"chainType\":\"WAN\", \"signedTx\":\"0xf86e0109852e90edd000832dc6c0946ed9c11cbd8a6ae8355fa62ebca48493da572661880de0b6b3a7640000801ca0bd349ec9f51dd171eb5c59df9a6b8c5656eacb6793bed945a7ec69135f191abfa0359da11e8a4fdd51b52a8752ac32f9125d168441546d011406736bce67b8a356\"},\"id\":1}",
          "type": "string"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "let apiTest = new ApiInstance();\nawait sleep(5000);\nlet result = await apiTest.sendRawTransaction('WAN', '0xf86e0109852e90edd000832dc6c0946ed9c11cbd8a6ae8355fa62ebca48493da572661880de0b6b3a7640000801ca0bd349ec9f51dd171eb5c59df9a6b8c5656eacb6793bed945a7ec69135f191abfa0359da11e8a4fdd51b52a8752ac32f9125d168441546d011406736bce67b8a356');\nconsole.log(\"Result is \", result);\napiTest.close();",
        "type": "code"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "\"result\": \"0x4dcfc82728b5a9307f249ac095c8e6fcc436db4f85a094a0c5a457255c20f80f\"",
          "type": "json"
        }
      ]
    },
    "filename": "../src/apis/apiInstance.js",
    "groupTitle": "Transactions"
  }
] });