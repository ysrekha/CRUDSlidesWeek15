// Importing an image is commented out, meaning it's not currently used in this file
// import thumbnailImage from "./assets/Flower.png"

// Define and export the SlideThumbnail component
// The component receives a single prop 'slide' with a specific shape
export default function SlideThumbnail({slide}:{slide:{order: number, image:string}}) {
    return (
        <>
            {/* Display the order of the slide */}
            <span>{slide.order}</span>
            <br /> {/* Line break for spacing */}
            
            {/* Display the slide's image */}
            {/* The image has inline styles for width and height, and an onClick handler */}
            <img 
                src={slide.image} 
                style={{width: "9.5rem", height: "10.5rem"}} 
                onClick={() => alert("I am a thumbnail")} 
            />
        </>
    );
}
