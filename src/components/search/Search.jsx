import React from "react";
import { Segment, Input } from "semantic-ui-react";
import "./Search.css";

export default function Search({searchProduct}) {
    
  return (
    <div>
      <Segment className="search" inverted>
        <Input
          inverted
          placeholder="Search..."
          onChange={(e) => {
            searchProduct(e.target.value);
          }}
        />
      </Segment>
    </div>
  );
}
