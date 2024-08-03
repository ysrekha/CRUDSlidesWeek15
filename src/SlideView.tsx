// Define and export the SlideView component
export default function SlideView() {
    // Define a variable for the height of the slide view container
    let slideHeight = 600;
    
    // Return the JSX structure for the SlideView component
    return (
        // Outer div container using Flexbox layout
        <div className="flex-grow-1 d-flex flex-column">
            {/* Inner div for the slide view area */}
            <div className="d-flex flex-grow-1 justify-content-center bg-light align-items-center">
                {/* Container for the slide view with styling and dynamic height */}
                <div 
                    className="bg-white m-3 w-75 shadow-sm p-3 border" 
                    style={{ height: slideHeight + "px" }}
                >
                    Slide View
                </div>
            </div>
            
            {/* Textarea for speaker notes */}
            <div>
                <textarea 
                    className="form-control" 
                    defaultValue="Speaker Notes"
                />
            </div>
        </div>
    );
}
