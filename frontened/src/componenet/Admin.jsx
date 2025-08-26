import React, { useEffect, useState } from 'react';
import api from '../api';
import './styles/Admin.css';

const Admin = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const res = await api.get('/api/all');
        setRegistrations(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to load registrations.');
      } finally {
        setLoading(false);
      }
    };
    fetchRegistrations();
  }, []);
  const exportToCSV = () => {
    if (!registrations.length) return alert('No data to export');
    const headers = ['Name', 'Email', 'Phone', 'Team Name', 'Idea Brief', 'Created At'];
    const rows = registrations.map(r => [r.name,r.email,r.phone, r.team_name,r.idea_brief ? r.idea_brief.replace(/\n/g, ' ') : '',r.created_at || '']);
    let csv = headers.join(',') + '\n';
    rows.forEach(row => {
      const escaped = row.map(cell => {
        if (cell === null || cell === undefined) return '';
        const s = String(cell).replace(/"/g, '""');
        return `"${s}"`;
      });
      csv += escaped.join(',') + '\n';
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'registrations.csv';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };
  return (
    <div className="admin-container">
      <div className='heading'>
        <p>Registrations</p>
      </div>
      <div className="admin-actions">
        <button onClick={exportToCSV} className="btn-export">Export to CSV</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th><th>Name</th><th>Email</th><th>Phone</th><th>Team</th><th>Idea</th><th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((r, idx) => (
                <tr key={r.id || idx}>
                  <td>{idx + 1}</td>
                  <td>{r.name}</td>
                  <td>{r.email}</td>
                  <td>{r.phone}</td>
                  <td>{r.team_name}</td>
                  <td className="idea-cell">{r.idea_brief}</td>
                  <td>{r.created_at ? new Date(r.created_at).toLocaleString() : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default Admin;
