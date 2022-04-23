import React, { useEffect, useState } from "react";
import { Segment, Input } from "semantic-ui-react";
import "./Search.css";

export default function Search({ searchProduct }) {
  
  const [inp, setInp] = useState();

  useEffect(() => {
    const idSearch = setTimeout(() => {
      searchProduct(inp);
    }, 1100);
    return () => clearTimeout(idSearch);
  }, [inp]);

  return (
    <div>
      <Segment className="search" inverted>
        <Input
          inverted
          placeholder="Search..."
          onChange={(e) => {
            setInp(e.target.value);
          }}
        />
      </Segment>
    </div>
  );
}
