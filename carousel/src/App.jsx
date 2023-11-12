import React from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons'


function App() {
  const slides = [
    {url: 'https://images.unsplash.com/photo-1461849038508-25d35f33c344?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHVibGljJTIwdHJhbnNwb3J0YXRpb258ZW58MHwwfDB8fHww'},
    {url: 'https://images.unsplash.com/photo-1598637419436-7e96a4488ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVibGljJTIwdHJhbnNwb3J0YXRpb258ZW58MHwwfDB8fHww'},
    {url: 'https://images.unsplash.com/photo-1543337280-0a85de23072f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVibGljJTIwdHJhbnNwb3J0YXRpb258ZW58MHwwfDB8fHww'},
    {url: 'https://images.unsplash.com/photo-1559835557-7766a856e6ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVibGljJTIwdHJhbnNwb3J0YXRpb258ZW58MHwwfDB8fHww'},
    {url: 'https://images.unsplash.com/photo-1611697930219-e76441073035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHB1YmxpYyUyMHRyYW5zcG9ydGF0aW9ufGVufDB8MHwwfHx8MA%3D%3D'},
  ];

  return (
   
     <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative '>
      <div style={{backgroundImage: `url(${slides[0].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
      {/* {left arrow} */}
      <div>
      <BsChevronCompactLeft  size={30} />
      </div>
      {/* {right arrow } */}
      <div>
      <BsChevronCompactRight size={30} />
      </div>
     </div>
   
  )
}

export default App
