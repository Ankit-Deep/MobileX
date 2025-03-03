import React from "react";

function Container({ children }) {
  return (
    <>
      <div className="  sm:px-3 p-3 w-screen sm:w-[95vw] mx-auto">
        {children}
      </div>
    </>
  );
}

export default Container;
