import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState(0);
  const [finalresult, setFinalresult] = useState(0);

   function calculate(e) {
    e.preventDefault();
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsleft = grams - (burning * time);

    if (gender === 'male') {
      result = gramsleft / (weight * 0.7)
    }
    else {
      result = gramsleft / (weight * 0.6)
    }

    if (result < 0) {
      setFinalresult(0);
    }

    setFinalresult(result);
  }

  return (
   <form onSubmit={calculate}>
    <h3>Calculating alcohol blood level</h3>
    <div>
      <label>Weight</label>
      <input type="number" value={weight}
        onChange={(e) => setWeight(e.target.value)}/>
    </div>
    <div>
    <label for="bottles">Bottles</label>
<select id="bottles" name="bottles" value={bottles} onChange={(e) => setBottles(e.target.value)}>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="11">11</option>
  <option value="12">12</option>
  <option value="13">13</option>
  <option value="14">14</option>
  <option value="15">15</option>
  <option value="16">16</option>
  <option value="17">17</option>
  <option value="18">18</option>
  <option value="19">19</option>
  <option value="20">20</option>
  <option value="21">21</option>
  <option value="22">22</option>
  <option value="23">23</option>
  <option value="24">24</option>
</select>
    </div>
    <div>
    <label for="time">Time</label>
<select id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)}>
  <option value="1">1 hours</option>
  <option value="2">2 hours</option>
  <option value="3">2 hours</option>
  <option value="4">4 hours</option>
  <option value="5">5 hours</option>
  <option value="6">6 hours</option>
  <option value="7">7 hours</option>
  <option value="8">8 hours</option>
  <option value="9">9 hours</option>
  <option value="10">10 hours</option>
  <option value="11">11 hours</option>
  <option value="12">12 hours</option>
  <option value="13">13 hours</option>
  <option value="14">14 hours</option>
  <option value="15n">15 hours</option>
  <option value="16">16 hours</option>
  <option value="17">17 hours</option>
  <option value="18">18 hours</option>
  <option value="19">19 hours</option>
  <option value="20">20 hours</option>
  <option value="21">21 hours</option>
  <option value="22">22 hours</option>
  <option value="23">23 hours</option>
  <option value="24">24 hours</option>
</select>
    </div>
<div>
      <label>Gender</label>
  <input type="radio" value="female" onChange={(e) => setGender(e.target.value)} name="gender" />
  <label for="female">Female</label>
  <input type="radio"  value="male" 
        onChange={(e) => setGender(e.target.value)} id="male" name="gender" />
  <label for="male">Male</label>
</div>
<div>
<output>{finalresult}</output>
</div>
<button>Calculate</button>
   </form>
  );
}

export default App;