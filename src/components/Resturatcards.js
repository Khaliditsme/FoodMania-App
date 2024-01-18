
import CDN_link from '../utils/constants'

const Resturantcards =(props)=>{
    return (
      <div className="cards">
        <img
          className="photo"
          src={CDN_link + props.cloudinaryImageId}
          alt=""
        />
        <h2 className="overflow name">{props.name}</h2>
        <div className="inside">
          <p className='overflow'>❇️{props.avgRating}</p>
        </div>

        <p className="overflow">{props.cuisines}</p>
        <p className='overflow'>{props.costForTwo}</p>
      </div>
    );
}

export default Resturantcards;