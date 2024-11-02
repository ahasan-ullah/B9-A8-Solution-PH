import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const data = useLoaderData();
  const { bookId } = useParams();
  const book = data.find((book) => book.bookId === parseInt(bookId));
  return (
    <div className="my-10 flex flex-col md:flex-row gap-10">
      <div className="md:w-1/2 p-10 flex items-center justify-center bg-gray-100 rounded-lg">
        <img className="w-96 md:w-full rounded-lg" src={book.image} alt="" />
      </div>
      <div className="md:w-1/2 p-6">
        <h1 className="text-5xl">{book.bookName}</h1>
        <br />
        <p className="text-2xl">By: {book.author}</p>
        <div className="divider"></div>
        <p className="text-2xl">{book.category}</p>
        <div className="divider"></div>
        <p className="text-xl">
          <span className="text-2xl font-bold">Review: </span>
          {book.review}
        </p>
        <br />
        <div className="space-x-3 text-3xl">
          <p className="text-xl inline-block">Tags: </p>
          {book.tags.map((tag, idx) => (
            <div key={idx} className="badge badge-outline text-green-500">
              {tag}
            </div>
          ))}
        </div>
        <div className="divider"></div>
        <p className="text-xl">
          Number of pages: <span className="font-bold">{book.totalPages}</span>
        </p>
        <br />
        <p className="text-xl">
          Publisher: <span className="font-bold">{book.publisher}</span>
        </p>
        <br />
        <p className="text-xl">
          Year of Publishing:{" "}
          <span className="font-bold">{book.yearOfPublishing}</span>
        </p>
        <br />
        <p className="text-xl">
          Rating: <span className="font-bold">{book.rating}</span>
        </p>
        <br />
        <div className="space-x-5">
          <button className="btn btn-accent">Read</button>
          <button className="btn btn-outline">Whishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
