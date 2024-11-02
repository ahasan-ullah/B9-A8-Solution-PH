import booksBanner from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 p-20 rounded-lg mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img className='rounded-lg'
            src={booksBanner}
          />
        </div>
        <div className='space-y-12'>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn text-white bg-[#23BE0A]">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
