import React, { useState, useEffect } from "react";
//import { useLoaderData } from "react-router-dom"; you can also  for optimize way
//import { useLoaderData } from "react-router-dom";  you can also

function Github() {
  // const data = useLoaderData()  you can also
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="text-center bg-zinc-900 m-4 p-4 text-white">
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="git picture" width={300} />
      </div>
    </>
  );
}

export default Github;

// export const githubInfoLoader = async () => {
//     constresponse = await fetch('https://api.github.com/users/hiteshchoudary')
//     return response.json()
// } you can do also
