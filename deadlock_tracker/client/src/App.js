import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

//pages - import pages here
import Home from './pages/Home';
import Heroes from './pages/Heroes';
import Items from './pages/Items';
import Leaderboard from './pages/Leaderboard';
import PatchNotes from './pages/PatchNotes';



//layouts 
import RootLayout from './routes/RootLayout';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<RootLayout />} >
    
        <Route 
          index 
          element={<Home />} 
        />

        <Route 
          path='heroes' 
          element={<Heroes />} 
        />

        <Route 
          path='items' 
          element={<Items />} 
        />

        <Route 
          path='leaderboards' 
          element={<Leaderboard />} 
        />

        <Route 
          path='patchnotes' 
          element={<PatchNotes />} 
        />

  
        <Route 
          path='*' 
          element={<Home />}
         />

    </Route>

    
  )
  
)

function App ()
{
  return (
    <RouterProvider router={router} />
  );
}

export default App;