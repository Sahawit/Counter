import { create } from "zustand";

export type Course = {
  id: number;
  code: string;
  nameTH: string;
  nameEN: string;
  credit: number;
  teacher: string;
  grade: string;
};

type CourseStore = {
  courses: Course[];
  droppedCourses: Course[];
  addCourse: (course: Omit<Course, "id">) => void;
  dropCourse: (id: number) => void;
  calculateGPA: () => number;
};

export const useCourseStore = create<CourseStore>((set, get) => ({
  courses: [],
  droppedCourses: [],
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, { id: Date.now(), ...course }],
    })),
  dropCourse: (id) =>
    set((state) => {
      const courseToDrop = state.courses.find((c) => c.id === id);
      if (!courseToDrop) return state;
      return {
        courses: state.courses.filter((c) => c.id !== id),
        droppedCourses: [...state.droppedCourses, courseToDrop],
      };
    }),
  calculateGPA: () => {
    const { courses } = get();
    if (courses.length === 0) return 0;

    const gradeMap: Record<string, number> = {
      A: 4.0,
      "B+": 3.5,
      B: 3.0,
      "C+": 2.5,
      C: 2.0,
      "D+": 1.5,
      D: 1.0,
      F: 0,
    };

    let totalCredits = 0;
    let totalPoints = 0;

    courses.forEach((c) => {
      if (gradeMap[c.grade] !== undefined) {
        totalCredits += c.credit;
        totalPoints += gradeMap[c.grade] * c.credit;
      }
    });

    return totalCredits > 0 ? totalPoints / totalCredits : 0;
  },
}));
