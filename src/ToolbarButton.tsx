// Define a type for the props that the ToolbarButton component will receive
type ToolbarButtonProps = {
    icon: string,    // URL or path to the icon image to be displayed
    onClick: () => void // Function to be called when the button is clicked
}

// Define and export the ToolbarButton component
export default function ToolbarButton({ icon, onClick }: ToolbarButtonProps) {
    return (
        // Button element with styling and click event handler
        <button
            className="btn btn-outline-secondary me-2" // Bootstrap classes for styling
            onClick={onClick} // Attach the click event handler
        >
            {/* Image element for the icon */}
            <img 
                src={icon} // Source URL or path for the icon image
                style={{ width: "2.5rem", height: "2.5rem" }} // Inline styles to set the size of the icon
            />
        </button>
    )
}
