import { useState } from "react";

export default function PostForm() {
  const [formValues, setFormValues] = useState({
    guest_name: "",
    title: "",
    description: "",
    location: "",
  });

  function handleFormValuesChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);
    fetch("http://localhost:8080/addPosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    setFormValues({
      guest_name: "",
      title: "",
      description: "",
      location: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create your post!</h1>
      <div>
        <label>Guest Name: </label>
        <input
          id="guest_name"
          name="guest_name"
          type="text"
          value={formValues.guest_name}
          onChange={handleFormValuesChange}
          placeholder="Enter Username"
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formValues.title}
          onChange={handleFormValuesChange}
          placeholder="Post title"
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          id="description"
          name="description"
          type="text"
          value={formValues.description}
          onChange={handleFormValuesChange}
          placeholder="Post description"
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          id="location"
          name="location"
          type="text"
          value={formValues.location}
          onChange={handleFormValuesChange}
          placeholder="Where did you go?"
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
}
