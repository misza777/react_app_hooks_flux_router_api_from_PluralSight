import React, { useState, useEffect } from "react";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";

// import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = (props) => {
  //zarzadzanie bledami
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: "",
    category: "",
  });

  //single changer - ale to bez sensu bo potrzebujemy uniwersalny
  //   function handleTitleChange(event) {
  //     const updatedCourse = { ...course, title: event.target.value };
  //     setCourse(updatedCourse);
  //   }

  //   function handleChange(event) {
  //     //computed property
  //     const updatedCourse = {
  //       ...course,
  //       [event.target.name]: event.target.value,
  //     };
  //     setCourse(updatedCourse);
  //   }

  //
  useEffect(() => {
    const slug = props.match.params.slug;
    //from the path '/courses/:slug  - moze byc inna nazwa trzeba zmienic na roucie w app.js'
    if (slug) {
      //zwraca promis wiec then
      //   courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
      setCourse(courseStore.getCourseBySlug(slug));
    }
  }, [props.match.params.slug]);

  function handleChange({ target }) {
    //computed property
    setCourse({
      ...course,
      [target.name]: target.value,
    });
  }

  // validacja formularza
  const formIsValid = () => {
    // bledy dajemy w obiekty bo latwiej nimi operowac w formularzu, niz w tablicy, w propsach mozna przekazac!!!
    const _errors = {};
    if (!course.title) _errors.title = "Title is rquired";
    if (!course.authorId) _errors.authorId = "Author ID is rquired";
    if (!course.category) _errors.category = "Category is rquired";

    setErrors(_errors);
    //Form is valid if the errors object has no properties daje false:)
    return Object.keys(_errors).length === 0;
  };

  //uaktualnienie bazy danych kursow
  const handleSubmit = (event) => {
    event.preventDefault();

    //validacja
    if (!formIsValid()) return;

    //funkcja importowana z courseAPi zwraca promise
    // tutaj mozna uzyc redirect ale uzyjemy ruter history object
    // courseApi.saveCourse(course).then(() => {
    //   props.history.push("/courses");

    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Congratulations! Course saved.");
    });
  };

  //   debugger;
  //   console.log(props);
  return (
    <>
      <h2>Manage Course</h2>
      {/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
      {/* {props.match.params.slug} */}
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
