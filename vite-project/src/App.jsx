import React from 'react'
import { RecoilRoot } from 'recoil'
import { HomeButtons } from './Components/HomeButtons'
import { Route, Routes } from 'react-router-dom'
import { Project1 } from './Components/Project1/Project1'
import { ShowCard } from './Components/Project1/ShowCard'

function App() {
  return (
    <RecoilRoot>
        

        <Routes>
          <Route path='/' element={<HomeButtons/>}/>
            <Route path='/Project1' element={<Project1/>}/>
            <Route path='/ShowCard' element={<ShowCard/>}/>
         </Routes>
    </RecoilRoot>
  )
}

export default App