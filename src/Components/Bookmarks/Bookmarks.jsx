
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div className='pb-4'>
                <h3 
                style={{border: '1px solid rgb(96, 71, 236)'}} 
                className="text-3xl text-center p-4 rounded-xl bg-[#3C47EC1A] text-[#6047EC] border-">Spent time on read: {readingTime}</h3>
            </div>
            <div className=' bg-[#1111110D] rounded-xl'>
            <h2 className="text-2xl text-center pt-5 font-semibold">Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks