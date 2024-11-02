import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`books/${book.bookId}`}>
      <div className="card bg-base-100 w-80 border p-6 space-y-3">
        <figure className="bg-gray-200 py-8 rounded-lg">
          <img
            className="h-[166px] rounded-lg"
            src={book.image}
            alt={book.bookName}
          />
        </figure>
        <div className="space-y-3">
          <div className="space-x-3">
            {book.tags.map((tag,idx) => (
              <div key={idx} className="badge badge-outline text-green-500">{tag}</div>
            ))}
          </div>
          <h2 className="card-title">{book.bookName}</h2>
          <p>By: {book.author}</p>
          <div className="border border-dashed"></div>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">{book.category}</div>
            <div className="rating flex items-center justify-center">
              5.00
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Book;
