# iWan-js-sdk

[![GitHub License][license]][license-url]

### JavaScript SDK for iWan RPC Server

## Install
Use NPM or Yarn to install the library:

```bash
npm install --save iwan-sdk
```
## Config
After installation, you can use the iWan SDK to connect iWan RPC server to do something like `getBalance`, you can do so by either the default config or by passing the config directly.
```bash
const iWanClient = require('iwan-sdk');
```
Use SDK by default, it will connect `api.wanchain.org`
```bash
let apiClient = new iWanClient(YourApiKey, YourSecretKey);

```
You can also specify other URL.
```bash
let option = {
      url:"apitest.wanchain.org",
    };
apiClient = new iWanClient(YourApiKey, YourSecretKey, option);

```
You should close the client after all operations.
```bash
apiClient.close();
```
If you do not want to use iWan SDK connecting to iWan RPC server, you can also use raw WebSocket API, for more information, please see the documentation [iWan RPC API](https://iwan.wanchain.org/static/apidoc/docs.html). We strongly recommend the use of iWan SDK.

### Detail about `option`
The SDK object can accept `option` object, you can use it like above.

- `option` {Object}
  - `url` {String}  The RPC server URL, default is 'api.wanchain.org'.
  - `port` {Number} The RPC server port, default is 443.
  - `flag` {String} The flag to connect the iWan RPC server, default is 'ws'.
  - `version` {String} The RPC method version, default is 'v3'.

### ApiKey and SecretKey
If you do not have an `ApiKey`, you could sign up [iWan](https://iwan.wanchain.org) first. Then create a new project to get a pair of `ApiKey` and `SecretKey`.

## Basic Usage
For each method, we both support `Promise` and `callback`. 

- `callback` {Function}
  - `err` {String}  if something wrong happened, it will tell error details, or `null` otherwise.
  - `result` {Object} if success (`err` is `null`), it will tell the result about the method you call such as `getBalance`.

We use the method `getBalance` as an example to show how to use iWan SDK by `callback` and `Promise` below:

### Callback
You can use `callback` for asynchronous mode:
```bash
apiClient.getBalance('WAN', '0x0cc79fa3b80c5b9b02051facd02478ea88a78e2c', (err, balance) => {
  if (err) {
    console.log("err:" + err);
  } else {
    console.log("balance:" + balance);
  }
});
```
### Promise
You can use `Promise` for synchronous mode:
```bash
try {
  let balance = await apiClient.getBalance('WAN', '0x0cc79fa3b80c5b9b02051facd02478ea88a78e2c');
  console.log("Balance result is ", balance);
} catch (err) {
  console.log(err);
}
```
## Development
1. `git clone https://github.com/wanchain/iWan-js-sdk.git`
2. `npm install`
3. `npm test`

## Documentation

[iWan SDK API](https://wanchain.github.io/iWan-js-sdk/) : API details about iWan SDK

[license]: https://img.shields.io/badge/license-GNUGPL3-blue.svg
[license-url]:https://github.com/wanchain/iWan-js-sdk/blob/master/LICENSE
