import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <div>
          <p className="app__eyebrow">NexusTON</p>
          <h1>Network Operations Dashboard</h1>
        </div>
        <div className="app__status">
          <span className="status-dot" aria-hidden="true" />
          Live
        </div>
      </header>
      <Dashboard />
    </div>
  );
};

export default App;
