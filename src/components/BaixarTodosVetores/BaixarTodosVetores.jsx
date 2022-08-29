import React from "react";

const BaixarTodosVetores = ({ urls }) => {
  const downloadAll = (array = [1, 2]) => {
    return array.map((url, i) => {
      return (
        <div key={i}>
          <iframe src={url} key={i}></iframe>
        </div>
      );
    });
  };

  return <div>{downloadAll(urls)}</div>;
};

export default BaixarTodosVetores;
