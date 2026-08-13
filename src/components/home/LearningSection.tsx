import { BookOpen } from 'lucide-react'
import {
  currentCourses,
  learningHeadLine,
  learningIntro,
  upcomingCourses,
} from '@/config/learning'

export function LearningSection() {
  return (
    <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
      <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
        <BookOpen size={28} />
        {learningHeadLine}
      </h2>
      <p className="text-base text-muted-foreground max-w-2xl mb-8">
        {learningIntro}
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {currentCourses.map((course) => (
          <div
            key={course.name}
            className="rounded-2xl border border-muted-foreground/20 p-6 shadow-sm"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <span className="text-xs font-medium text-muted-foreground">
                {course.period}
              </span>
            </div>
            {course.description && (
              <p className="mt-3 text-sm text-muted-foreground">
                {course.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-dashed border-muted-foreground/20 p-6">
        <p className="text-sm font-semibold">{upcomingCourses.period}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {upcomingCourses.courses.map((course) => (
            <span
              key={course}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
