import sensor from 'sa-sdk-javascript';

sensor.init({
  server_url: 'http://118.31.17.225:8006/sa?project=njiareal',
});

const util = {
  sensor,
};

export default util;
