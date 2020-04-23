import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

//cala funkcja ponizej to Action Creator
export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    //hej dispatcher, go tell all the stores that a course was just created
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
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
