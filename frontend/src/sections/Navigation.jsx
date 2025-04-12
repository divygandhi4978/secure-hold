import React from "react";
import Nav from "../components/Nav";

export default function Navigation({ className }) {
  return (
    <nav className={`${className}`}>
      <Nav />
    </nav>
  );
}
