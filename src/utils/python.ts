const pyWorker = new Worker('/pyworker.js');

const runPython = (
  script: string,
  context: any,
  onSuccess: Function,
  onError: Function
) => {
  pyWorker.onerror = (e) => {
    console.error(e);
  };
  pyWorker.onmessage = (e) => onSuccess(e.data);
  pyWorker.postMessage({
    ...context,
    python: script,
  });
};

export const runPythonAsync = (code: string, context: any) => {
  return new Promise((onSuccess, onError) => {
    runPython(code, context, onSuccess, onError);
  });
};
