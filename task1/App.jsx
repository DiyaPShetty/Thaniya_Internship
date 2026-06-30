import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="content">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
