import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

const CourseForm = (props) => {
  // console.log(props);
  //na formie dajemy handlera bo jest bardziej dostepny
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        onChange={props.onChange}
        name="title"
        value={props.course.title}
        errors={props.errors.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            onChange={props.onChange}
            id="author"
            name="authorId"
            className="form-control"
            // nie moze byc null if, null to pusty
            value={props.course.authorId || ""}
          >
            <option value="" />
            <option value="1">Misza Grishakishvili</option>
            <option value="1">Grisza Miszakishvili</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>

      <TextInput
        id="category"
        label="Category"
        name="category"
        onChange={props.onChange}
        value={props.course.category}
        errors={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

//validacja propsow - dokumentuje oczekiwania componentu!!! wazna rzecz
CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CourseForm;
