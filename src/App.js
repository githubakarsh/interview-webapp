import logo from './logo.svg';
import './App.css';
import AppRouter from './appRouter/AppRouter';
import TopNavigation from './components/TopNavigation';

function App() {
  return (
    <div >
      <TopNavigation />
      <AppRouter />
    </div>
  );
}

export default App;
