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
          background: radial-gradient(circle at top, #0f2027, #000);
          color: #0ff;
          overflow: hidden;
        }

        .app {
          height: 100vh;
          display: flex;
          animation: fadeIn 1.5s ease;
        }

        /* SIDEBAR */
        .sidebar {
          width: 240px;
          background: rgba(0, 0, 0, 0.8);
          border-right: 2px solid #0ff;
          padding: 30px 20px;
          box-shadow: 0 0 20px #0ff;
        }

        .logo {
          font-size: 22px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 40px;
          text-shadow: 0 0 15px #0ff;
        }

        .menu div {
          margin: 20px 0;
          cursor: pointer;
          padding: 10px;
          border-radius: 6px;
          transition: 0.3s;
        }

        .menu div:hover {
          background: #0ff;
          color: black;
          box-shadow: 0 0 15px #0ff;
        }

        /* MAIN */
        .main {
          flex: 1;
          padding: 40px;
          animation: slideUp 1.2s ease;
        }

        .header {
          font-size: 32px;
          margin-bottom: 20px;
          text-shadow: 0 0 20px #0ff;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 30px;
        }

        .card {
          background: rgba(0, 0, 0, 0.6);
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #0ff;
          box-shadow: 0 0 25px rgba(0,255,255,0.4);
          transition: 0.4s;
          animation: float 4s infinite ease-in-out;
        }

        .card:hover {
          transform: scale(1.08) rotate(1deg);
          box-shadow: 0 0 40px #0ff;
        }

        .card h3 {
          margin-bottom: 10px;
          text-shadow: 0 0 10px #0ff;
        }

        .card p {
          color: #9ff;
        }

        /* ANIMATIONS */
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }

        @keyframes slideUp {
          from {
            transform: translateY(60px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* FOOTER */
        .footer {
          position: absolute;
          bottom: 15px;
          right: 20px;
          font-size: 12px;
          color: #0ff;
          text-shadow: 0 0 10px #0ff;
        }
      `}</style>

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
          <div className="header">Optics Management Platform</div>

          <div className="cards">
            <div className="card">
              <h3>👓 Frames</h3>
              <p>Manage premium & budget frame inventory.</p>
            </div>

            <div className="card">
              <h3>🔬 Lenses</h3>
              <p>Power lenses, coatings & prescriptions.</p>
            </div>

            <div className="card">
              <h3>🧾 Billing</h3>
              <p>Fast billing with GST & customer history.</p>
            </div>

            <div className="card">
              <h3>👤 Customers</h3>
              <p>Prescription records & visit tracking.</p>
            </div>

            <div className="card">
              <h3>📊 Reports</h3>
              <p>Sales analytics & inventory alerts.</p>
            </div>

            <div className="card">
              <h3>⚙️ Settings</h3>
              <p>Staff roles, shop details & backups.</p>
            </div>
          </div>
        </div>

        <div className="footer">⚡ Powered by Optix Core</div>
      </div>
    </>
  );
}

export default App;
