import SlideThumbnail from "./SlideThumbnail";
import thumbnailImage from "./assets/Flower.png"
import LavenderImage from "./assets/Lavender.png"
import Roses from "./assets/Roses.png"
import Peace from "./assets/Peace.png"
import Birthday from "./assets/BirthdayFlowers.png"

const testSlides = [
    {
        id: 0,
        order: 1,
        image: thumbnailImage
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
]

export default function Sidebar() {
    return (
        <div className="border-end bg-light p-3 d-flex flex-column vh-100 overflow-auto">
            {testSlides.map(s => <SlideThumbnail key={s.id} slide={s} />)}
        </div>
    )
}

