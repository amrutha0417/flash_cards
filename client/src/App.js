

import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import Mycalender from './pages/Mycalender';
import Widgets from './pages/Widgets';
import Addcard from './pages/Addcard';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        //route for home component
        {
          path:"/",
          element:<Home/>

        },
        //route for mycalender
        {
          path:"/Mycalender",
          element:<Mycalender/>
        },
        //route for widgets
        {
          path:"/Widgets",
          element:<Widgets/>
        }
        ,{
          path:"/Addcard",
          element:<Addcard/>
        },

      ]
    }
  ])
  return (
    <div className='body'>
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;

