// Import the Sidebar component from the Sidebar.tsx file
import Sidebar from "./Sidebar.tsx";

// Import the SlideView component from the SlideView.tsx file
import SlideView from "./SlideView.tsx";

// Import the Toolsbar component from the ToolsBar.tsx file
import Toolsbar from "./ToolsBar.tsx";

// Define and export the main App component
export default function App() {
  
  // Render the App component
  return (
    // Outer div container with Flexbox layout
    <div className="d-flex flex-column vh-100 vw-100">
      {/* Render the Toolsbar component */}
      <Toolsbar />
      
      {/* Inner div container with Flexbox layout */}
      <div className="d-flex flex-grow-1">
        {/* Render the Sidebar component */}
        <Sidebar />
        
        {/* Render the SlideView component */}
        <SlideView />
      </div>
    </div>
  )
}
