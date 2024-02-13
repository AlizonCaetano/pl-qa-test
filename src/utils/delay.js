function delay(seconds) {
  return new Promise((returned) => {
    setTimeout(returned, seconds);
  });
}

module.exports = delay;
