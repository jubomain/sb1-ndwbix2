export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  ageGroup: string;
}

const courses: Course[] = [
  {
    id: '1',
    title: 'African Tales for Kids',
    description: 'Explore magical stories and fables from across Africa, perfect for young readers.',
    image: 'https://images.unsplash.com/photo-1503945839639-aea48daa250f?auto=format&fit=crop&q=80',
    instructor: 'Ms. Amina Diallo',
    duration: '4 weeks',
    level: 'Beginner',
    category: 'Literature',
    ageGroup: '5-8',
  },
  {
    id: '2',
    title: 'Junior African History',
    description: 'Learn about ancient African kingdoms and civilizations in a fun, interactive way.',
    image: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&q=80',
    instructor: 'Mr. Kwame Mensah',
    duration: '6 weeks',
    level: 'Intermediate',
    category: 'History',
    ageGroup: '9-12',
  },
  {
    id: '3',
    title: 'African Music & Dance',
    description: 'Experience the rhythm and joy of traditional African music and dance.',
    image: 'https://images.unsplash.com/photo-1516663235285-845fac339ca7?auto=format&fit=crop&q=80',
    instructor: 'Mrs. Fatima Sy',
    duration: '8 weeks',
    level: 'Beginner',
    category: 'Arts',
    ageGroup: '5-12',
  }
];

export function getCourse(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

export function getAllCourses(): Course[] {
  return courses;
}