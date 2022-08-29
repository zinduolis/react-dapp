import { useState } from 'react';
import { ethers } from 'ethers'
import './App.css';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'

// localhost const greeterAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"
const greeterAddress = "0x9Ddd4C47B17852fB41fd8f29510bD0c4810F097E" //ropsten

function App() {
  const [greeting, setGreetingValue] = useState('')

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts'});
  }

  async function fetchGreeting() {
    // console.log('fetchGreeting')
    // console.log(typeof window.ethereum !== 'undefined')
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
 //     console.log('provider', provider)
      try {
        const data = await contract.greet()
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }

  async function setGreeting() {
  //  console.log('setGreeting')
    if (!greeting) return
 //   console.log(greeting)
    if (typeof window.ethereum !== 'undefined') {
    //  console.log('setGreeting inside')
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
      const transaction = await contract.setGreeting(greeting)
      setGreetingValue('')
      await transaction.wait()
      fetchGreeting()
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input
          onChange={e => setGreetingValue(e.target.value)}
          placeholder="Set greeting" 
          value={greeting}
        />
      </header>
    </div>
  );
}

export default App;
