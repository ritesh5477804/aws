function App() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', sans-serif;
        }

        body {
          background: black;
          color: #00ffff;
          overflow: hidden;
        }

        /* BACKGROUND GRID */
        .bg-grid {
          position: fixed;
          inset: 0;
          background:
            linear-gradient(transparent 95%, rgba(0,255,255,0.1) 96%),
            linear-gradient(90deg, transparent 95%, rgba(0,255,255,0.1) 96%);
          background-size: 40px 40px;
          animation: gridMove 15s linear infinite;
          z-index: -1;
        }

        @keyframes gridMove {
          from { background-position: 0 0, 0 0; }
          to { background-position: 0 400px, 400px 0; }
        }

        .app {
          height: 100vh;
          display: flex;
          animation: fadeIn 2s ease;
        }

        /* SIDEBAR */
        .sidebar {
          width: 260px;
          background: rgba(0, 0, 0, 0.85);
          border-right: 2px solid #00ffff;
          padding: 30px 20px;
          box-shadow: inset 0 0 30px #00ffff;
          animation: neonPulse 3s infinite alternate;
        }

        @keyframes neonPulse {
          from { box-shadow: inset 0 0 10px #00ffff; }
          to { box-shadow: inset 0 0 35px #00ffff; }
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 50px;
          position: relative;
          animation: glitch 2s infinite;
        }

        /* GLITCH EFFECT */
        @keyframes glitch {
          0% { text-shadow: 2px 2px #0ff; }
          20% { text-shadow: -2px -2px #f0f; }
          40% { text-shadow: 2px -2px #0ff; }
          60% { text-shadow: -2px 2px #f0f; }
          100% { text-shadow: 2px 2px #0ff; }
        }

        .menu div {
          margin: 22px 0;
          padding: 12px;
          cursor: pointer;
          border-left: 3px solid transparent;
          transition: 0.4s;
        }

        .menu div:hover {
          border-left: 3px solid #00ffff;
          padding-left: 18px;
          background: rgba(0,255,255,0.1);
          box-shadow: inset 0 0 15px #00ffff;
        }

        /* MAIN */
        .main {
          flex: 1;
          padding: 40px;
          position: relative;
        }

        /* SCANLINE */
        .scanline {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            transparent,
            rgba(0,255,255,0.05),
            transparent
          );
          animation: scan 4s linear infinite;
          pointer-events: none;
        }

        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }

        .header {
          font-size: 36px;
          margin-bottom: 20px;
          animation: flicker 3s infinite;
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .card {
          background: rgba(0,0,0,0.7);
          padding: 30px;
          border-radius: 18px;
          border: 1px solid rgba(0,255,255,0.5);
          position: relative;
          overflow: hidden;
          animation: float 5s infinite ease-in-out;
        }

        /* LASER BORDER */
        .card::before {
          content: "";
          position: absolute;
          inset: -2px;
          border: 2px solid transparent;
          animation: borderRun 2s linear infinite;
        }

        @keyframes borderRun {
          0% { border-color: #00ffff transparent transparent transparent; }
          25% { border-color: transparent #00ffff transparent transparent; }
          50% { border-color: transparent transparent #00ffff transparent; }
          75% { border-color: transparent transparent transparent #00ffff; }
          100% { border-color: #00ffff transparent transparent transparent; }
        }

        .card:hover {
          transform: scale(1.1);
          box-shadow: 0 0 40px #00ffff;
        }

        .card h3 {
          margin-bottom: 12px;
        }

        .card p {
          color: #9ff;
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        /* FOOTER */
        .footer {
          position: absolute;
          bottom: 15px;
          right: 20px;
          font-size: 12px;
          opacity: 0.8;
        }
      `}</style>

      <div className="bg-grid" />

      <div className="app">
        <div className="sidebar">
          <div className="logo">👓 OPTIX CORE</div>
          <div className="menu">
            <div>Dashboard</div>
            <div>Frames Inventory</div>
            <div>Lenses</div>
            <div>Customers</div>
            <div>Billing</div>
            <div>Reports</div>
          </div>
        </div>

        <div className="main">
          <div className="scanline"></div>
          <div className="header">Optics Management Platform</div>

          <div className="cards">
            <div className="card">
              <h3>👓 Frames</h3>
              <p>Real-time smart frame inventory.</p>
            </div>
            <div className="card">
              <h3>🔬 Lenses</h3>
              <p>AI-powered lens prescriptions.</p>
            </div>
            <div className="card">
              <h3>🧾 Billing</h3>
              <p>Ultra-fast neon billing system.</p>
            </div>
            <div className="card">
              <h3>👤 Customers</h3>
              <p>Digital prescription vault.</p>
            </div>
            <div className="card">
              <h3>📊 Reports</h3>
              <p>Holographic analytics dashboard.</p>
            </div>
            <div className="card">
              <h3>⚙️ Settings</h3>
              <p>System calibration & controls.</p>
            </div>
          </div>
        </div>

        <div className="footer">⚡ NEON OPTICS SYSTEM v1.0</div>
      </div>
    </>
  );
}

export default App;
