import React, { useState, useEffect } from "react";

const CatComponent = () => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState({});
  const url =
    "https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json";

  async function fetchData() {
    const res = await fetch(url);
    res
      .json()
      .then((res) => setData(res.filter((a) => a.pets)))
      .catch((err) => setErrors(err));
  }
  useEffect(() => {
    fetchData();
  }, []);

  const femaleList = () => {
    return (
      <ul>
        {[].concat
          .apply(
            [],
            data
              .filter((b) => b.pets)
              .filter((g) => g.gender === "Female")
              .map((p) => p.pets.filter((t) => t.type === "Cat"))
          )
          .sort()
          .map((s) => (
            <li> {s.name}</li>
          ))}
      </ul>
    );
  };

  const maleList = () => {
    return (
      <ul>
        {[].concat
          .apply(
            [],
            data
              .filter((b) => b.pets)
              .filter((g) => g.gender === "Male")
              .map((p) => p.pets.filter((t) => t.type === "Cat"))
          )
          .sort()
          .map((s) => (
            <li> {s.name}</li>
          ))}
      </ul>
    );
  };

  return (
    <div>
      {" "}
      <div> Female </div>
      {femaleList()}
      <div> Male </div>
      {maleList()}
    </div>
  );
};

export default CatComponent;
