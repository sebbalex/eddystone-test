// Note that you may need to require a nested version of bleno
// See https://github.com/don/node-eddystone-beacon/issues/30
// See https://github.com/don/node-eddystone-beacon/pull/31

var noble = require('noble');
noble.startScanning(); // any service UUID, no duplicates


