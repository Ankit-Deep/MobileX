import React from "react";
import { useParams } from "react-router-dom";

function CollectionComp() {
  const params = useParams();

  return (
    <>
      <section>
        <h1>collecitons</h1>
        <h1 className="text-black">{params.collectionComp}</h1>
      </section>
    </>
  );
}

export default CollectionComp;
