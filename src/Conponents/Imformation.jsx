
import PropTypes from 'prop-types';
const Imformation = ({info}) => {
    return (
        <div>
            <h1 className='text-4xl'>imformation</h1>
            {
                info.map((dtl, index) => <div key={index}>
                    <img className='w-40 h-40 rounded-full' src={dtl.image} alt="" />
                    <h1>{dtl.name}</h1>
                    <p>{dtl.age}</p>
                </div>)
            }

        </div>
    );
};
Imformation.propTypes ={
    info: PropTypes.array.isRequired
}

export default Imformation;