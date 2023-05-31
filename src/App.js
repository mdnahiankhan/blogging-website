import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';
import { Provider } from "react-redux"
import store from './redux/store';

function App() {
  return (
    <div className=''>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </Provider>
    </div>
  );
}

export default App;
