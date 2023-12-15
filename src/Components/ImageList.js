import ImageShow from "./ImageShow";

function ImageList({images}) {
    
    const rendered_Images = images.map((image)=>{
        return <ImageShow key={image.id} image={image}/>
    })
    
    return <div className="columns-6 columns-3xs gap-3">{rendered_Images}</div>;
};

export default ImageList;