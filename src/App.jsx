import "./layout.scss";
import HomePage from "./routes/homePage/homepage";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from "./routes/layout/layout";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profile/profilePage";
function App() {

const router = createBrowserRouter ([
  {
    path:'/',
    element: 
     <Layout />,
     children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/list',
        element:<ListPage/>
      },
      {
        path:'/:id',
        element:<SinglePage/>
      },
      {
        path:'/profile',
        element:<ProfilePage/>
      }
     ]
    
  },
 
])


  return (
   
    <RouterProvider router={router}/>
  );
}

export default App;
