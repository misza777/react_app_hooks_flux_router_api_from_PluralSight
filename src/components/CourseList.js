import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = (props) => {
  const RenderRow = (course) => (
    <tr key={course.id}>
      <td>
        <Link to={`/course/${course.slug}`}> {course.title}</Link>
      </td>
      <td>{course.authorID}</td>
      <td>{course.category}</td>
    </tr>
  );

  return (
    <>
      <table className="table">
        <thead>
          <tr>
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
