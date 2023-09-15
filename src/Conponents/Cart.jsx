import PropTypes from 'prop-types';

const Cart = ({details, pursheHandle}) => {
    const {name, age, image } = details;
    return (
        <div>
            
            <div className="card glass">
          <figure><img className='w-40 h-40 rounded-full' src={image} /></figure>
          <div className="card-body">
            <h2 className="text-2xl">Name: {name.slice(0, 15)}</h2>
            <p>Age: {age}</p>
            <div className="card-actions justify-end">
              <button onClick={() =>pursheHandle(details)}  className="btn btn-primary">Purshe</button>
            </div>
          </div>
        </div>

        </div>
    );
};
Cart.propTypes ={
    details: PropTypes.object.isRequired,
    pursheHandle: PropTypes.func.isRequired
}

export default Cart;