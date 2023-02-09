const { Samsung, KEYS } = require('samsung-tv-control');

const control = new Samsung({
  debug: false,
  ip: '192.168.0.32',
  mac: '',
  port: 8002,
  token: '',
});

(async () => {
  await control.turnOn();
  try {
    const isAvailable = await control.isAvailable();
    // const token = await control.getTokenPromise();
    console.log('isAvailable', isAvailable);

    await control.sendKeyPromise(KEYS.KEY_POWER);

    control.closeConnection();
  } catch (err) {
    console.error('Error', err);
  }
})();
