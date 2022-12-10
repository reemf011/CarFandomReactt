import Repairpage from './Components/repairs/Repairpage';
import Repairlist from './Components/repairs/Repairlist';
function App() {
  const list1={
    MName:'Dawoodys Repair Mechanic',
    RLocation:'Nasr City',
    RDescription:'Price range 1K to up '
  };
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>
      </header>
    </div>
  );
}
const Onbutton =() =>{
  setRepair(list1);
};
return(
  <div className="flex flex-col items-center justify-center">
    <Repairlist repair={repair}/>
    <button onClick={Onbutton}></button>
  </div>
)
const App =()=>{
  return(
  <div>
      <Repairpage/>
    </div>
  );
};

export default App;
