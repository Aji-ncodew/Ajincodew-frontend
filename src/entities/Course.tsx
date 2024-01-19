interface CourseEntity {
    _id: number;
    image: string;
    type: string;
    title: string;
    speakers: string[];
    year: string;
    duration: string;
    link: string;
  }

export default CourseEntity;