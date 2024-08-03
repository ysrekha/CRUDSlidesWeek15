// Import the SlideThumbnail component, which will be used to display individual slide thumbnails
import SlideThumbnail from "./SlideThumbnail";

// Import image assets to be used as slide thumbnails
import thumbnailImage from "./assets/Flower.png";
import LavenderImage from "./assets/Lavender.png";
import Roses from "./assets/Roses.png";
import Peace from "./assets/Peace.png";
import Birthday from "./assets/BirthdayFlowers.png";

// Define an array of slide objects, each representing a slide with an id, order, and image
const testSlides = [
    {
        id: 0,         // Unique identifier for the slide
        order: 1,      // Order of the slide, used for sorting or display purposes
        image: thumbnailImage // Path to the image asset for the slide
    },
    {
        id: 1,
        order: 2,
        image: Birthday
    },
    {
        id: 2,
        order: 3,
        image: LavenderImage
    },
    {
        id: 3,
        order: 4,
        image: Roses
    },
    {
        id: 4,
        order: 5,
        image: Peace
    }
];

// Define and export the Sidebar component
export default function Sidebar() {
    return (
        // Container for the sidebar with styling classes for layout and appearance
        <div className="border-end bg-light p-3 d-flex flex-column vh-100 overflow-auto">
            {/* Map over the testSlides array to render a SlideThumbnail component for each slide */}
            {/* Each SlideThumbnail receives a unique key and the slide data as props */}
            {testSlides.map(s => <SlideThumbnail key={s.id} slide={s} />)}
        </div>
    );
}
