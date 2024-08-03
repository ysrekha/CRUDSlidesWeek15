// Import the ToolbarButton component from the ToolbarButton file
import ToolbarButton from "./ToolbarButton";

// Import image assets to be used as icons for the toolbar buttons
import icon1 from "./assets/Color.png";
import icon4 from "./assets/FontFamily.png";
import icon3 from "./assets/Emoji.png";

// Define and export the Toolsbar component
export default function Toolsbar() {
    return (
        // Container div with styling classes for the toolbar
        <div className="bg-light p-3 border-bottom">
            {/* ToolbarButton components with different icons and click handlers */}
            {/* Each button displays a different icon and triggers a specific alert message when clicked */}
            <ToolbarButton icon={icon1} onClick={() => alert("Set font color!")} />
            <ToolbarButton icon={icon4} onClick={() => alert("Set font family!")} />
            <ToolbarButton icon={icon3} onClick={() => alert("Set Emoji!")} />
        </div>
    )
}
