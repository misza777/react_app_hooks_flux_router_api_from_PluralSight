import React, { useState, useEffect } from "react";
// import { getCourses } from "../api/courseApi";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses } from "../actions/courseActions";

const CoursesPage = () => {
  const [courses, setCourses] = useState(courseStore.getCourses());

  //   _courses to dane z api
  // useEffect(() => {
  //   getCourses().then((_courses) => setCourses(_courses));
  // }, []);

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange);
  }, []);
  //cleanup on unmount

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };

  //moja proba
  // useEffect(() => {
  //   async function fetchData() {
  //     const _courses = getCourses()
  //   setCourses(_courses)}
  //     fetchData()}, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await MyAPI.getData(someId);
  //     // ...
  //   }
  //   fetchData();
  // }, [someId]);

  return (
    <>
      <h2>Courses for super heroes!</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
};

export default CoursesPage;
