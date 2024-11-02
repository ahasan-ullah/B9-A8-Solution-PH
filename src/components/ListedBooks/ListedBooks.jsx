import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredList } from "../../Utility/addToDB";
import Book from "../Book/Book";

const ListedBooks = () => {
  const allBooks = useLoaderData();

  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedReadList = getStoredList("read-list").map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storedReadList.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  return (
    <div className="my-10">
      <h3 className="text-3xl font-bold">Listed Books</h3>
      <Tabs className="my-8">
        <TabList className="font-semibold text-xl">
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-xl my-5">Books I Read {readList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-xl my-5">My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
