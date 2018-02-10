import crypto from 'crypto';
import config from '../config/env.json';

if (!config.private_key || !config.public_key) {
  throw new Error('Please fill up the env file in src/config/env.json');
}

const PUBLIC = config.public_key;
const PRIVATE = config.private_key;

export default () => {
  const ts = Date.now();

  return {
    ts,
    apikey: PUBLIC,
    hash: crypto
      .createHash('md5')
      .update(`${ts}${PRIVATE}${PUBLIC}`)
      .digest('hex'),
  };
};
