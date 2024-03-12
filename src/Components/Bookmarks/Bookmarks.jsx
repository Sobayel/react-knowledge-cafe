
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-[#1111110D] rounded-xl">
            <h2 className="text-2xl text-center pt-5 font-semibold">Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks