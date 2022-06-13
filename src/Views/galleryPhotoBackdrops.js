import React, {useState,useEffect} from 'react';
import PictureCard from '../Components/pictureCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft,faCircleArrowRight,faXmark } from '@fortawesome/free-solid-svg-icons'
import Walls,{GetPictures} from '../Pictures/PictureWalls';



function GalleryWalls() {
  const [showGalery, setShowGalery] = useState(false);
  const [picId, setPictureId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  // const [touchEnd, setTouchEnd] = useState(0);


  const handleClickOutside = (event) => {
    console.log(event.keyCode)

   switch(event.keyCode)
   {
    case 37:
      if (picId <= 0) {
        setPictureId(Walls.length - 1);
      } else {
        setPictureId(picId - 1);
      }
      break;
      case 39:
        if (picId >=Walls.length-1) {
          setPictureId(0);
        } else {
          setPictureId(picId + 1);
        }
        break;
      case 27:
        setShowGalery(false);
        break;
      default:
          break;
   }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleClickOutside, true);
    };
  });
  useEffect(() => {
    setLoading(true);
    GetPictures().then(event=>{
    setLoading(false);
    })
  },[]);
  if (loading)
  { return (
    <div className="galery-page page-conatiner-box">
     <div className="circle"></div>
    </div>
  );
    
  }
  return (
    <div className="galery-page page-conatiner-box">
      
      <div
        className="gallery-full-view "
        style={{ display: showGalery ? "" : "none" }}
      >
     
        <div className='gallery-view-button-nav galery-view-close'
           onClick={() => {
            setShowGalery(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} size="3x" />
        </div>
        <div className='gallery-view-button-nav'
          onClick={() => {
            if (picId <= 0) {
              setPictureId(Walls.length - 1);
            } else {
              setPictureId(picId - 1);
            }
          }}
          
        >
          <FontAwesomeIcon icon={faCircleArrowLeft} size="3x" />
        </div>
        <div className="galery-full-view-container"
        onTouchStart={(e)=>{ var clientX = e.touches[0].clientX;
          setTouchStart(clientX);
          console.log("Touch start",clientX)}}
        onTouchEnd={(e)=>{
          // setTouchEnd(e.changedTouches[0].clientX);
          var touchEndValue = e.changedTouches[0].clientX;
          console.log("Touch end", e.changedTouches[0].clientX);
          if(touchStart-touchEndValue<0)
          {
            if (picId <= 0) {
              setPictureId(Walls.length - 1);
            } else {
              setPictureId(picId - 1);
            }
          }
          else
          {
            if (picId >=Walls.length-1) {
              setPictureId(0);
            } else {
              setPictureId(picId + 1);
            }
          }
          // setPictureId(picId+1);
        }
        
        }
          
        >
          <img src={Walls[picId].obj} alt={Walls[picId].title} />
        </div>
        <div className='gallery-view-button-nav'
          onClick={() => {
            if (picId === Walls.length - 1) {
              setPictureId(0);
            } else {
              setPictureId(picId + 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faCircleArrowRight} size="3x" />
        </div>
      </div>
      
      <div className="galery-container">
      {Walls.map((x, i) => (
          <PictureCard
          key={"photobackdrops-" + i}
          picture={x.obj}
          alt={x.title}
          id={i}
          setShowGalery={setShowGalery}
          setPictureId={setPictureId}
        />
        ))}
      
        </div>
    </div>
  );
}
export default GalleryWalls;