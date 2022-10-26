import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PersonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [person, setPerson] = useState("");

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setPerson(data.data))
      
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container text-center">
      <h3>
        {person?.first_name}
        {person?.last_name}
      </h3>
      <img className="rounded" src={person?.avatar} alt="avatar" />
      <p>{person?.email}</p>
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">
          Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
