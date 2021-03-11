onmessage = (e) => {
  console.log('Worker: recieved message from renderer');
  const { data } = e;
  const res = parseInt(data[0]) + parseInt(data[1]);
  console.log(res);
  if (isNaN(res)) {
    postMessage('Error: one of these is not a number');
  } else {
    console.log('Worker: finished calculating sum...');
    postMessage(res);
  }
};
