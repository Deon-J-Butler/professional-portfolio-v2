import React from "react";
import { BookCard } from "./BookCard";

export function Books() {
  const books = [
    {
      image: "https:",
      title: "Test book",
      price: "$19.99",
    },
    {
      image: "https:",
      title: "Test book",
      price: "$15.00",
    },
    {
      image: "https:",
      title: "Test book",
      price: "$20.00",
    },
    {
      image: "https:",
      title: "Test book",
      price: "$17.00",
    },
    {
      image: "https:",
      title: "Test book",
      price: "$12.99",
    },
    {
      image: "https:",
      title: "Test book",
      price: "$24.00",
    },
  ];

  return (
    <>
      {books.map((book) => (
        <BookCard book={book} key={book.name} />
      ))}
    </>
  );
}
