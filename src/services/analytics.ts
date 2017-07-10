import * as debug from 'debug';

const log = debug('typed-react:analytics');

const analytics = {
  track(pathname: string) {
    log('### track ### ', pathname);
  }
};

export default analytics;
