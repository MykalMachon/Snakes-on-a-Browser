import { useEffect, useState } from 'preact/hooks';

export const WorkerCalc = () => {
  const [worker] = useState<Worker>(() => {
    return new Worker('/webworker.js');
  });

  const [sum, setSum] = useState<number | string>('');

  useEffect(() => {
    if (worker && !worker.onmessage) {
      worker.onmessage = (e) => {
        console.log(e);
        setSum(e.data);
      };
    }
  }, [worker]);

  const sendMessageToWorker = (e) => {
    e.preventDefault();
    const a = e.target['a'].value;
    const b = e.target['b'].value;
    worker.postMessage([a, b]);
  };

  return (
    <>
      <p>Hello Vite + Preact!</p>
      <p>
        <form onSubmit={sendMessageToWorker}>
          <input type="number" name="a" id="a" /> +
          <input type="number" name="b" id="b" />
          <button type="submit">send message to worker</button>
        </form>
      </p>
      <p>the output is : {sum}</p>
    </>
  );
};

export default WorkerCalc;
