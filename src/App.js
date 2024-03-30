import './App.css';
import Header from './components/Header';
import Data from './components/Data';
import Mian from './components/Main';
function App() {
  const content = Data.map((items) => {
    return (
      <Mian
        key={items.id}
        {...items}
      />)
  })
  return (
    <div>
      <Header/>
     {content}
    </div>
  );
}

export default App;
