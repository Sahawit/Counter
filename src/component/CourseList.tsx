import { useCourseStore } from "../store/courseStore";
import DropButton from "./DropButton";

const CourseList = () => {
  const courses = useCourseStore((state) => state.courses);
  const gpa = useCourseStore((state) => state.calculateGPA());

  return (
    <div>
      <h3>รายวิชาที่ลงทะเบียน</h3>
      <ul>
        {courses.map((c) => (
          <li key={c.id}>
            {c.code} - {c.nameTH} ({c.credit} หน่วยกิต) | เกรด: {c.grade}
            <DropButton id={c.id} />
          </li>
        ))}
      </ul>
      <p><strong>GPA รวม:</strong> {gpa.toFixed(2)}</p>
    </div>
  );
};

export default CourseList;
