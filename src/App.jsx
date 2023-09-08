import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';
function App() {
 function handleClick(){
  alert('Button Clicked');
 }
 const handleClick2 =()=>{
  alert('Button 2 clicked');
 }
 const addToFive = (num) =>{
  alert(num+5);
 }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>CLick Me</button>
      <button onClick={handleClick2}>CLick2</button>
      <button onClick={() =>{alert("third clicked")}}>Third</button>
    <button onClick={()=>addToFive(3)}>Four</button>
    </>
  )
}

export default App
