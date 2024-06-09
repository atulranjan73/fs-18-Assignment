import { useEffect, useState } from 'react'
import Tenure from './components/Tenure'
import './App.css'
import Header from './components/Header'
import { CChart } from '@coreui/react-chartjs'
function App() {
  const [homeValue, setHomeValue] = useState(1000)
  const [downPayment, setDownPaymnet] = useState(0)
  const [loanAmmount, setLoanAmmount] = useState(0)
  const [interestRate, setInterestRate] = useState(2)
  const [tenure , setTenure] = useState(10)

  const [monthlyPayment , setMonthlyPayment] = useState(0);


useEffect( ()=>{
  const newDownPayment = Math.floor(homeValue * 0.2);
  setDownPaymnet(newDownPayment)
  setLoanAmmount(homeValue - newDownPayment)
},[homeValue]);

useEffect( ()=>{
   const interestPerM = interestRate /100 /12;
   const totalLoanM = tenure *12;
   const EMI = 
    ( loanAmmount *
      interestPerM *
        ( 1 + interestPerM) ** totalLoanM ) / 
    (  ( 1 + interestPerM) ** totalLoanM -1 )
   
   setMonthlyPayment(EMI);
}, [loanAmmount , interestRate , tenure])



  return (
    <>
      <Header/>
      <div style={{ display: "flex", justifyContent: "space-around", padding: "2rem" }}>

        <div>
          <div className='rigthDiv'>
            <p>Home Value</p>
            <p>{homeValue}</p>
            <input onChange={(e)=> 
              setHomeValue(parseInt(e.target.value)) } 
           
             type="range"
             min="1000" 
             max="10000" />
          </div>
          <div>
            <p>Down Payment</p>
            <p>$ {homeValue-loanAmmount}</p>
            <input  
              onChange={(e)=>{
                setDownPaymnet(parseInt(e.target.value))
                setLoanAmmount(homeValue - parseInt(e.target.value))
              }}
            type="range" 
            min="0" 
            max={homeValue} />
          </div>

          <div>
            <p>Loan Ammount</p>
            <p>$ {homeValue - downPayment}</p>
            <input onChange={(e)=>{
              setLoanAmmount(parseInt(e.target.value));
              setDownPaymnet(homeValue - parseInt(e.target.value))
            }}
            type="range" 
             min="0" 
             max={homeValue} />
          </div>
          <div>
            <p>Intrest Rate</p>
            <p>% {interestRate}</p>
            <input onChange={(e)=> setInterestRate(parseInt(e.target.value))}
             type="range"
             min="2" 
             max="18" />
          </div>
          
          <Tenure
            tenure={tenure}
            setTenure={setTenure}
         />

        </div>

        

        <div style={{ width: "300px" }}>
          <h3>Monthly Payment : $ {monthlyPayment}</h3>
          <CChart
            type="pie"
            data={{
              labels: ['Principle', 'Interest'],
              datasets: [
                {
                  backgroundColor: ["rgb(204, 240, 255)","rgb(236, 180, 207)" ],
                  data: [homeValue , monthlyPayment * tenure *12 - loanAmmount],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: "green",
                  }
                }
              },
            }}
          />

        </div>

      </div>
{/* // */}

    </>
  )
}

export default App