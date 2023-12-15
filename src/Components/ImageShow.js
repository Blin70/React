function ImageShow({image}) {
    return (
            <div>
                <img src={image.urls.small} alt={image.alt_description} className="w-full mb-2.5" />
            </div>
        )
};

export default ImageShow;