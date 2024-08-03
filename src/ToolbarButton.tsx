type ToolbarButtonProps = {
    icon: string,
    onClick: () => void
}


export default function ToolbarButton({ icon, onClick }: ToolbarButtonProps) {
    return (
        <button
            className="btn btn-outline-secondary me-2"
            onClick={onClick}
        >
            <img src={icon} style={{ width: "2.5rem", height: "2.5rem" }} />
        </button>
    )
}

