import React from 'react'
import { RecoilRoot } from 'recoil'
import { HomeButtons } from './Components/HomeButtons'
import { Route, Routes } from 'react-router-dom'
import { Project1 } from './Components/Project1'

function App() {
  return (
    <RecoilRoot>
        

        <Routes>
          <Route path='/' element={<HomeButtons/>}/>
            <Route path='/Project1' element={<Project1/>}/>
        </Routes>
    </RecoilRoot>
  )
}

export default App