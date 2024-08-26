import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ChatApp from "./components/ChatApp";

import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://192.168.88.150:4000');


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home socket={socket} />,
    },
    {
      path: "/chat",
      element: <ChatApp socket={socket} />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);


  export default router;