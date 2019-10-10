# Dapr SDK for Javascript
Dapr is a programming model for writing cloud-native applications which are distributed, dynamically scaled, and loosely coupled in nature.

Dapr SDK for Javascript is autogenerated by protobuf compiler from Dapr proto-buf definition.

This repo generates following package:
dapr.io

## Usage
Dapr javascript sdk package can be installed as:
```bash
npm install dapr.io
```

### Creating the client
```
var dapr = require('dapr-client');
var messages = dapr.dapr_pb; 
var services = dapr.dapr_grpc;
var grpc = require('grpc');

const PORT = process.env.DAPR_GRPC_PORT || 50001;
var client = new services.DaprClient('localhost:${PORT}`, grpc.credentials.createInsecure());
```

For usage, refer to [examples/simple/app.js](https://github.com/dapr/js-sdk/blob/master/examples/simple/app.js)


### Running the code locally.

```
dapr run --grpc-port=50001 node app.js
```


TODO: Add more usage and update package name when finalized.
