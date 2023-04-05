
import { IImage } from './Home';

const Details: React.FC<IImage> = (props) => {
  const { id, link, description, title, ups, downs, score } = props;
  return (
    <div className='px-96 py-10'>
      <div className='w-full min-w-fit rounded overflow-hidden shadow-lg'>
        <div className='p-3 bg-blue-200 flex justify-center font-bold'>
          {title ? title : 'No title'}
        </div>
        <div className='p-3'>
          <img className='my-3 flex mx-auto' src={link} alt='Imgur' />
          <div className='flex justify-center bg-blue-200 p-2'>
            <div className='flex flex-col font-bold '>
              <span>Description:</span>
              <span>Upvotes:</span>
              <span>Downvotes:</span>
              <span>Score:</span>
            </div>
            <div className='flex flex-col ml-10'>
              <span>{description ? description : 'No description'}</span>
              <span>{ups ? ups : 0}</span>
              <span>{downs ? downs : 0}</span>
              <span>{score ? score : 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;