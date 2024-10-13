import { useState } from "react";

export default function CommentForm() {
  const [formValues, setFormValues] = useState({
    commenter_name: "",
    comment_text: "",
  });

  function handleFormValuesChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);
    fetch("http://localhost:8080/Comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    setFormValues({
      commenter_name: "",
      comment_text: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Comment</h3>
      <div>
        <input
          name="commenter_name"
          type="text"
          value={formValues.commenter_Name}
          onChange={handleFormValuesChange}
          placeholder="Username"
          required
        />
      </div>

      {/* <div>
        <input
        name=""
          type="number"
          min="0"
          max="5"
          value={formValues.commenter_Name}
          onChange={handleFormValuesChange}
          placeholder="Rating out of 5"
          required
        />
      </div> */}

      <div>
        <textarea
          name="comment_text"
          value={formValues.comment_Text}
          onChange={handleFormValuesChange}
          placeholder="Comment"
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
