import { useCourseStore } from "../store/courseStore";

const CourseDrop = () => {
  const droppedCourses = useCourseStore((state) => state.droppedCourses);

  return (
    <div>
      <h3>รายวิชาที่ถอนแล้ว</h3>
      <ul>
        {droppedCourses.map((c) => (
          <li key={c.id}>
            {c.code} - {c.nameTH} ({c.credit} หน่วยกิต)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDrop;