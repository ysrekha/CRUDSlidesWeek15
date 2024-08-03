import ToolbarButton from "./ToolbarButton";
import icon1 from "./assets/Color.png";
import icon4 from "./assets/FontFamily.png"
import icon3 from "./assets/Emoji.png";

export default function Toolsbar() {
    return (
        <div className="bg-light p-3 border-bottom">
            <ToolbarButton icon={icon1} onClick={() => alert("Set font color!")} />
            <ToolbarButton icon={icon4} onClick={() => alert("Set font family!")} />
            <ToolbarButton icon={icon3} onClick={() => alert("Set Emoji!")} />
        </div>
    )
}