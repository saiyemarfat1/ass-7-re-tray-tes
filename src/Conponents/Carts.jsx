/* eslint-disable react/prop-types */
import Cart from "./Cart";
import PropTypes from 'prop-types';


const Carts = ({datas, pursheHandle}) => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                datas.map((details, index) => <Cart pursheHandle={pursheHandle} key={index} details={details}></Cart>)
            }
        </div>
    );
};

Cart.propTypes ={
    datas: PropTypes.array.isRequired
}
export default Carts;