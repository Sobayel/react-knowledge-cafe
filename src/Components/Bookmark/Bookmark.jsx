
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title}= bookmark;
    return (
        <div className='bg-white p-3 rounded-xl m-10'>
            <h3 className="text-xl text-[#111111]">{title}</h3>
        </div>
    );
};
Bookmark.propTypes ={
    bookmark: PropTypes.object
}
export default Bookmark;