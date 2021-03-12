import { useState } from 'preact/hooks';
import { runPythonAsync } from '../utils/python';

export const WorkerCalc = () => {
  const [sum, setSum] = useState<number | string>('');

  const runPythonCode = async (e) => {
    e.preventDefault();
    const { results, error } = await runPythonAsync(
      `
    returnVal = ${e.target['a'].value} + ${e.target['b'].value}
    `,
      {}
    );
    if (error) {
      console.error('something broke');
    } else {
      console.log(results);
      setSum(parseInt(results));
    }
  };

  return (
    <>
      <p>Hello Vite + Preact!</p>
      <p>
        <form onSubmit={runPythonCode}>
          <input type="number" name="a" id="a" value={0} /> +
          <input type="number" name="b" id="b" value={0} />
          <button type="submit">send message to worker</button>
        </form>
      </p>
      <p>the output is : {sum}</p>
    </>
  );
};

export default WorkerCalc;
