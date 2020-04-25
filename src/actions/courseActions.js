import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

//cala funkcja ponizej to Action Creator
export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    //hej dispatcher, go tell all the stores that a course was just created
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((courses) => {
    //hej dispatcher, go tell all the stores that a course was just created
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses,
    });
  });
}

export function deleteCourse(id) {
  return courseApi.getCourses(id).then(() => {
    //hej dispatcher, go tell all the stores that we want to delete course id=...
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      id: id,
    });
  });
}
