import { useEffect, useState } from 'react';
import type { Bowler } from './services/apiClient';
import { getBowlers } from './services/apiClient';
import PageHeading from './components/PageHeading';
import BowlersTable from './components/BowlersTable';
import './App.css';

function App() {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBowlers = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getBowlers();
        setBowlers(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch bowler data'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBowlers();
  }, []);

  return (
    <main className="app">
      <PageHeading />
      <BowlersTable bowlers={bowlers} loading={loading} error={error} />
    </main>
  );
}

export default App;
