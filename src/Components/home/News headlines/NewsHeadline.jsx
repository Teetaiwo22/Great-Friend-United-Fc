import "./newsHeadlines.css";
import Player1 from "/src/assets/player1.webp"
import Player2 from "/src/assets/player2.webp"
import Player3 from "/src/assets/player3.webp"
import Player4 from "/src/assets/player4.webp"

const NewsHeadlines = () => {
  return (
    <div className="headline-container">
      <div className="headline-card">
        <div className="headline-image">
          <img className="headline-img" src={Player1} alt=""/>
        </div>
        <div>
          <h2>Dalot embracing attacking challeneg</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim modi
            fuga distinctio, animi dolorem iste? Asperiores consequatur iure hic
            nobis, veniam corporis eum dolor in perspiciatis, unde nesciunt
            facere possimus!
          </p>
        </div>
        <div>
            <div>title</div>
            <div>time stamp</div>
        </div>
      </div>


      <div  className="headline-card">
        <div className="headline-image">
          <img  className="headline-img" src={Player2} alt="" width= "100%"/>
        </div>
        <div>
          <h2>Dalot embracing attacking challeneg</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim modi
            fuga distinctio, animi dolorem iste? Asperiores consequatur iure hic
            nobis, veniam corporis eum dolor in perspiciatis, unde nesciunt
            facere possimus!
          </p>
        </div>
        <div>
            <div>title</div>
            <div>time stamp</div>
        </div>
      </div>


      <div className="headline-card">
        <div className="headline-image">
          <img  className="headline-img" src={Player3} alt=""/>
        </div>
        <div>
          <h2>Dalot embracing attacking challeneg</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim modi
            fuga distinctio, animi dolorem iste? Asperiores consequatur iure hic
            nobis, veniam corporis eum dolor in perspiciatis, unde nesciunt
            facere possimus!
          </p>
        </div>
        <div>
            <div>title</div>
            <div>time stamp</div>
        </div>
      </div>


      <div className="headline-card">
        <div className="headline-image">
          <img className="headline-img" src={Player4} alt=""/>
        </div>
        <div>
          <h2>Dalot embracing attacking challeneg</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim modi
            fuga distinctio, animi dolorem iste? Asperiores consequatur iure hic
            nobis, veniam corporis eum dolor in perspiciatis, unde nesciunt
            facere possimus!
          </p>
        </div>
        <div>
            <div>title</div>
            <div>time stamp</div>
        </div>
      </div>


      
    </div>
  );
};

export default NewsHeadlines;
