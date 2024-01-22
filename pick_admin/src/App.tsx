import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { mainRouter } from './routes/routes'

const App:React.FC = () => {
  return (
    <div>
        <RouterProvider router={mainRouter} />
    </div>
  )
}

export default App