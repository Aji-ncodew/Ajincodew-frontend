import ProblemSolvingEp1 from "../assets/courses/ProblemSolvingEp1.jpg";
import ProblemSolvingEp2 from "../assets/courses/ProblemSolvingEp2.jpg";
import LaravelEp1 from "../assets/courses/LaravelEp1.jpg";
import LaravelEp2 from "../assets/courses/LaravelEp2.png";
import CourseEntity from "../entities/Course";


const CoursesData: CourseEntity[] = [
    {
      _id: 1,
      image: ProblemSolvingEp1,
      type: "Training",
      title: "Ajincodew : Problem solving (bdarija)",
      speakers: ["Achraf TAFFAH"],
      Year: "2023",
      Duration: "6:21 minutes",
      link: "https://www.youtube.com/watch?v=jLT_cKI28aU&t=24s",
    },
    {
      _id: 2,
      image: ProblemSolvingEp2,
      type: "Training",
      title: "Problem Solving bdarija Ep 2",
      speakers: ["Achraf TAFFAH"],
      Year: "2023",
      Duration: "8:41 minutes",
      link: "https://www.youtube.com/watch?v=X32NQ3v8la4&t=16s",
    },
    {
      _id:  3,
      image: LaravelEp1,
      type: "Training",
      title: "Laravel formation PART 1",
      speakers: ["Zakia REGOUG"],
      Year: "2023",
      Duration: "4:15 minutes",
      link: "https://www.youtube.com/watch?v=QSgOcXb-GZs&t=188s",
    },
    {
      _id: 4,
      image: LaravelEp2,
      type: "Training",
      title: "Laravel formation PART 2",
      speakers: ["Zakia REGOUG"],
      Year: "2023",
      Duration: "41:36 minutes",
      link: "https://www.youtube.com/watch?v=X32NQ3v8la4&t=16s",
    }
  ]
  
  export default CoursesData