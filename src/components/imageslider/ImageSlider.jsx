import React,{ useState, useEffect } from 'react'
function ImageSlider({url,page,limit}) {
    const [image, setImage] = useState([]);
    const [currSlide, setCurrSlide] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page:=${page}&limit=${limit}`)
            const data = await response.json();
            if (data) {
                setImage(data)
                // setCurrSlide(data);
                setLoading(false);
            }
        } catch(e) {
            setError(e.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        if(url!==' ') fetchImages(url)
    }, [url])
    
    console.log(image)
    
    if (loading) {
        return <span>loading data please wait</span>
    }
    if (error !== null) {
        return <div>error occured</div>
    }
    return (
        <div className='container'>
            {/* <img src={image.url} alt="noimge" /> */}
            {image.map((imageItem)=>(
            <img key={imageItem.id} src={imageItem.download_url} alt="noimge" height={200}/>
            ))}
        </div>
    )
}

export default ImageSlider
