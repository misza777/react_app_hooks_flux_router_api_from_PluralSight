import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CourseList = (props) => {
  const RenderRow = (course) => (
    <tr key={course.id}>
      <td>
        <button
          // className="badge badge-danger"
          className="btn btn-outline-danger"
          onClick={() => {
            props.deleteCourse(course.id);
            toast.error("Great! Course deleted.");
          }}
        >
          Delete
        </button>
      </td>
      <td>
        <Link to={`/course/${course.slug}`}> {course.title}</Link>
      </td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
    </tr>
  );

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{props.courses.map(RenderRow)}</tbody>
      </table>
    </>
  );
};

//walidaca propsow, dla typow props zaczynamy od malej litery
// to tylko dla wersji develperskiej, testowanie
CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// CourseList.defaultProps = {
//   courses: [],
// };

export default CourseList;
