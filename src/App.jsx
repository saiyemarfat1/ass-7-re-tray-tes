
import { useEffect, useState } from 'react'
import './App.css'
import Carts from './Conponents/Carts'
import Imformation from './Conponents/Imformation'
function App() {

  const [datas, setDatas] = useState([])
  const [info, setInfo] =useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(res => setDatas(res))
  }, [])

  const pursheHandle = (details)=>{
    
    const newDatail = [...info, details]
    setInfo(newDatail)
    
    


  }

  return (
    <>
      <div className='flex container mx-auto'>
        <div className='w-2/3'>

        <Carts pursheHandle={pursheHandle} datas={datas}></Carts>
        </div>
        <div className='w-1/3'>
          <Imformation info={info}></Imformation>
        </div>
      </div>


    </>
  )
}

export default App
