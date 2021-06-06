import React from "react";

function ToyCard({ toysList, onDeletePlant, onUpdateToy }) {
  const { id, name, image, likes } = toysList;

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    });

    onDeletePlant(id);
  }

  function handleUpdate() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        likes: (likes + 1) 
      }),
    })
      .then((response) => response.json())
      .then((updateToy) => {
        onUpdateToy(updateToy);
      });
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn"onClick={handleUpdate}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
