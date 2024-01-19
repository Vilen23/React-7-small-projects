import React from 'react'
import { RecoilRoot } from 'recoil'
import { HomeButtons } from './Components/HomeButtons'
import { Route, Routes } from 'react-router-dom'
import { Project1 } from './Components/Project1/Project1'
import { ShowCard } from './Components/Project1/ShowCard'
import { Project2 } from './Components/Project2/Project2'
import { SetColor } from './Components/Project2/SetColor'
import { ShowPara } from './Components/Project3/ShowPara'

function App() {
  return (
    <RecoilRoot>
        

        <Routes>
          <Route path='/' element={<HomeButtons/>}/>
            <Route path='/Project1' element={<Project1/>}/>
            <Route path='/ShowCard' element={<ShowCard/>}/>
            <Route path='/Project2' element={<SetColor/>}/>
            <Route path='/Project3' element={<ShowPara/>}/>
            
         </Routes>
    </RecoilRoot>
  )
}

export default App