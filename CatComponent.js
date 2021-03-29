import React, { useState, useEffect } from "react";

const CatComponent = () => {
  const [data, setData] = useState([]);
  const url =
    "https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json";
  async function fetchData() {
    const res = await fetch(url);
    res.json().then((res) => setData(res.filter((a) => a.pets)));
  }
  useEffect(() => {
    fetchData();
  }, []);

  const gennerateList = (gender, type) =>
    [].concat
      .apply(
        [],
        data
          .filter((p) => p.pets)
          .filter((g) => g.gender === gender)
          .map((p) => p.pets.filter((t) => t.type === type))
      )
      .sort((a, b) => (a.name > b.name ? 1 : -1));
  const femaleCatList = () => (
    <ul>
      {gennerateList("Female", "Cat").map((s) => (
        <li key={s.name + 1}> {s.name}</li>
      ))}
    </ul>
  );
  const maleCatList = () => (
    <ul>
      {gennerateList("Male", "Cat").map((s) => (
        <li key={s.name + 1}> {s.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {" "}
      <div> Female </div>
      {femaleCatList()}
      <div> Male </div>
      {maleCatList()}
    </div>
  );
};

export default CatComponent;
