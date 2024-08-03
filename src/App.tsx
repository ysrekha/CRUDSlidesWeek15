import Sidebar from "./Sidebar.tsx";
import SlideView from "./SlideView.tsx";
import Toolsbar from "./ToolsBar.tsx";

export default function App(){
  
  return (
  <div className ="d-flex flex-column vh-100 vw-100">
   <Toolsbar/> 
    <div className = "d-flex flex-grow-1">
    <Sidebar/>
    <SlideView/>
    
  </div>
  </div>
  )
}


