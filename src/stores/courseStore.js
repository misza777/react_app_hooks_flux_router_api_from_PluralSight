import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
// import { getCourses, getCourseBySlug } from "../api/courseApi";

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find((course) => course.slug === slug);
  }
}

const store = new CourseStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      //anytime the store changes, we need to call emitChange
      store.emitChange();
      break;
    case actionTypes.UPDATE_COURSE:
      
      store.emitChange();
      break;
    case actionTypes.DELETE_COURSE:
      //to moze byc string wiec dla bezpieczenstwa dajemy paseinta
      _courses = _courses.filter(
        (course) => course.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;

    default:
    //nothing to do here
  }
});

//mapowanie - tworzenie nowej tablicy!!!

export default store;
