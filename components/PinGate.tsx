import { useState, useEffect } from 'react';

const PIN = '8041';

export default function PinGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('hermes_travel_auth');
      if (stored === 'true') setAuthenticated(true);
    } catch {}
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === PIN) {
      setAuthenticated(true);
      try { sessionStorage.setItem('hermes_travel_auth', 'true'); } catch {}
      setError(false);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setPin('');
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div style={pinStyles.container}>
      <div style={{ ...pinStyles.card, animation: shake ? 'shake 0.5s' : 'none' }}>
        <div style={pinStyles.icon}>🔒</div>
        <h1 style={pinStyles.title}>Hermes Travel Wiki</h1>
        <p style={pinStyles.subtitle}>Enter PIN to access travel documents</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            maxLength={4}
            value={pin}
            onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
            placeholder="••••"
            style={pinStyles.input}
            autoFocus
          />
          {error && <p style={pinStyles.error}>Incorrect PIN</p>}
          <button type="submit" style={pinStyles.button}>Unlock</button>
        </form>
        <p style={pinStyles.hint}>Default: 8041</p>
      </div>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-10px); }
          40%, 80% { transform: translateX(10px); }
        }
      `}</style>
    </div>
  );
}

const pinStyles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0a1628 0%, #1a3a5c 50%, #2d5a8a 100%)',
    fontFamily: "'Georgia', 'Times New Roman', serif",
  },
  card: {
    background: 'white',
    borderRadius: '16px',
    padding: '50px 40px',
    textAlign: 'center',
    maxWidth: '380px',
    width: '90%',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  icon: { fontSize: '48px', marginBottom: '16px' },
  title: { fontSize: '24px', color: '#1a3a5c', marginBottom: '8px', fontWeight: 400 },
  subtitle: { fontSize: '13px', color: '#475569', marginBottom: '30px', letterSpacing: '1px' },
  input: {
    width: '160px',
    fontSize: '28px',
    letterSpacing: '12px',
    textAlign: 'center',
    padding: '12px',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    outline: 'none',
    fontFamily: 'monospace',
  },
  error: { color: '#d80a18', fontSize: '13px', marginTop: '12px' },
  button: {
    display: 'block',
    width: '100%',
    marginTop: '20px',
    padding: '14px',
    background: '#1a3a5c',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  hint: { fontSize: '11px', color: '#94a3b8', marginTop: '20px' },
};
