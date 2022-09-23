import Bugsnag from '@bugsnag/react-native';

const start = () => Bugsnag.start();

const log = (error: any) => Bugsnag.notify(error);

export default {log, start};
