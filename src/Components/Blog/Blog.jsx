import PropTypes from 'prop-types';
import {FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, posted_date,reading_time, hashtag} = blog;
    return (
        <div className='mb-16 space-y-4'>
            <img className='w-full mb-8 rounded-xl' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 items-center'>
                <div className='flex items-center'>
                    <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl font-semibold">{author}</h3>
                        <p className='text-[#11111199] text-xl'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span className='text-xl text-[#11111199]'>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmark(blog)} className='ml-2 hover:text-slate-400 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4 font-semibold">{title}</h2>
            <p>
                {
                    hashtag.map((hash, index) => <span key={index}><a className='text-[#11111199] text-xl' href="">#{hash}</a></span>)
                }
                
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-[#3C47EC] underline text-xl hover:text-zinc-400 font-semibold'>Mark as read</button>
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;