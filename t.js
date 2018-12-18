const token = '2cb2c4c2a6f8c046d0a75601c2f09ca9df210c9185193d7ac32ad06d4f827dac';


const DigitalOcean = require('./dist/do-wrapper').default;

const doo = new DigitalOcean(token);

doo.kubernetesAvailability().then((data) => {
  console.log(data.body);
});
