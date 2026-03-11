import type { Bowler } from '../services/apiClient';
import './BowlersTable.css';

interface BowlersTableProps {
  bowlers: Bowler[];
  loading: boolean;
  error: string | null;
}

function BowlersTable({ bowlers, loading, error }: BowlersTableProps) {
  if (loading) {
    return <div className="loading">Loading bowler data...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (bowlers.length === 0) {
    return <div className="no-data">No bowlers found</div>;
  }

  return (
    <div className="table-container">
      <table className="bowlers-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Initial</th>
            <th>Last Name</th>
            <th>Team</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((bowler) => (
            <tr key={bowler.bowlerId}>
              <td>{bowler.bowlerFirstName}</td>
              <td>{bowler.bowlerMiddleInit}</td>
              <td>{bowler.bowlerLastName}</td>
              <td className="team-name">{bowler.teamName}</td>
              <td>{bowler.bowlerAddress}</td>
              <td>{bowler.bowlerCity}</td>
              <td>{bowler.bowlerState}</td>
              <td>{bowler.bowlerZip}</td>
              <td>{bowler.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BowlersTable;
