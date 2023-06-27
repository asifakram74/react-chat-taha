import logo from './logo.svg';
import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import router from './router';
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:4000');




function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    // <div>
    //   <p>Hello World!</p>
    // </div>
  );
}

export default App;
