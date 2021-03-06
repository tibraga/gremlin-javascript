import highland from 'highland';

const defaultExecuteHandler = (messageStream, callback) =>
  highland(messageStream)
    .map(({ result: { data } }) => data)
    .sequence()
    .collect()
    .toCallback(callback);

export default defaultExecuteHandler;
