import {useParams }from "react-router-dom";
  
  function Video() {
    const { id } = useParams();

    return (
      <div className="Video">
        {id}
      </div>
    );
  }
  
  export default Video;
  