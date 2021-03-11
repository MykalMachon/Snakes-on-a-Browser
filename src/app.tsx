import { useEffect, useState } from 'preact/hooks';
import Loading from './components/Loading';
import Pyodide from './components/Pyodide';
import WorkerCalc from './components/WorkerCalc';

export function App() {
  return <Pyodide PyLoading={Loading} PyLoaded={WorkerCalc} />;
}
