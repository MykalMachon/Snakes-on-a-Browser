import { ComponentType } from 'preact';
import { useEffect, useState } from 'preact/hooks';

type PyodideProps = {
  PyLoading: ComponentType;
  PyLoaded: ComponentType;
};

const Pyodide = ({ PyLoading, PyLoaded }: PyodideProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // this loads pyodide, and exposes a callback when python is loaded...
    const pyoScript = document.createElement('script');
    pyoScript.src = 'https://cdn.jsdelivr.net/pyodide/v0.16.1/full/pyodide.js';
    pyoScript.async = true;
    pyoScript.onload = async () => {
      // @ts-ignore
      await window.languagePluginLoader;
      setLoading(false);
    };
    document.body.appendChild(pyoScript);
  }, []);

  if (loading) return <PyLoading />;
  return <PyLoaded />;
};

export default Pyodide;
