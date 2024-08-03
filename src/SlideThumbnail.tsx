// import thumbnailImage from "./assets/Flower.png"

export default function SlideThumbnail({slide}:{slide:{order: number, image:string}}) {
    return (
        < >
            <span>{slide.order}</span>
            <br></br>
            <img src={slide.image} style={{width: "9.5rem" , height:"10.5rem"}} onClick={() =>alert ("I am a thumbnail")}/>
         
        </>

    )
}