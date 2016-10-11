var eddystoneBeacon = require('eddystone-beacon');

var options = {
  name: 'SebBeacon',    // set device name when advertising (Linux only)
 // txPowerLevel: -22, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};

var namespaceId = '00010203040506070809';
var instanceId = 'aabbccddeeff';
//eddystoneBeacon.advertiseUid(namespaceId, instanceId, [options]);

eddystoneBeacon.advertiseUrl('http://www.google.com');


var batteryVoltage = 500; // between 500 and 10,000 mV

eddystoneBeacon.setBatteryVoltage(batteryVoltage);
