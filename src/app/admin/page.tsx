'use client';

import { useState, useEffect } from 'react';

interface Signup {
  email: string;
  timestamp: string;
  ip?: string;
}

export default function AdminPage() {
  const [signups, setSignups] = useState<Signup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSignups();
  }, []);

  const fetchSignups = async () => {
    try {
      const response = await fetch('/api/admin/signups');
      if (response.ok) {
        const data = await response.json();
        setSignups(data.signups || []);
      }
    } catch (error) {
      console.error('Error fetching signups:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportEmails = () => {
    const emails = signups.map(s => s.email).join('\n');
    const blob = new Blob([emails], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'milton-market-emails.txt';
    a.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Milton Market - Signups</h1>
          <button
            onClick={exportEmails}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
          >
            Export Emails
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <p className="text-gray-300">Total Signups: <span className="text-green-400 font-bold">{signups.length}</span></p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="pb-3 text-gray-300">#</th>
                  <th className="pb-3 text-gray-300">Email</th>
                  <th className="pb-3 text-gray-300">Signup Date</th>
                  <th className="pb-3 text-gray-300">IP</th>
                </tr>
              </thead>
              <tbody>
                {signups.map((signup, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-3 text-gray-400">{signups.length - index}</td>
                    <td className="py-3">{signup.email}</td>
                    <td className="py-3 text-gray-400">
                      {new Date(signup.timestamp).toLocaleString()}
                    </td>
                    <td className="py-3 text-gray-500 text-sm">{signup.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {signups.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              No signups yet. Share the landing page to get started!
            </div>
          )}
        </div>

        <div className="mt-8 bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Next Steps</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Contact signups within 24 hours with payment link</li>
            <li>• Use manual-signal-email.py to send weekly summaries</li>
            <li>• Goal: Convert 10-20% of signups to paying customers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}