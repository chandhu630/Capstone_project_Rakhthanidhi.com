import './Gallery.css';
function GalleryStore()
{
    return(
        <div>
            <div className='center'>
                <div className='displayFlexphoto'>
                    <img className ='startpic cursor' src="/photos/imag2.jpeg" alt ="" />
                    <img className = "image cursor" src="/photos/image8.jpeg" alt ="" />
                    <img className = "image cursor" src="/photos/image1.jpeg" alt ="" />
                </div>
                <div className='displayFlexphoto'>
                    <img className = "startpic cursor" src="/photos/image4.jpeg" alt ="" />
                    <img className = "image cursor" src="/photos/image5.jpeg" alt ="" />
                    <img className = "image cursor" src="/photos/image6.jpeg" alt =""/>
                </div>
                <div className='displayFlexphoto'>
                    <img className = "startpic cursor" src="/photos/image3.jpeg" alt =""/>
                    <img className = "image cursor" src="/photos/image9.jpeg" alt =""/>
                    <img className = "image cursor" src="/photos/gruop.jpeg" alt =""/>
                </div>
            </div>
        </div>
    )

}
export default GalleryStore;