import { HobbyCategoryType } from '@/config/hobbies'

export function HobbyCard({
  hobby,
  titleAs,
}: {
  hobby: HobbyCategoryType
  titleAs?: keyof JSX.IntrinsicElements
}) {
  const Component = titleAs ?? 'h2'

  return (
    <li className="group relative flex flex-col items-start h-full">
      <div className="relative flex flex-col justify-between h-full w-full py-5 px-6 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
        <div>
          <Component className="text-sm font-semibold tracking-tight">
            {hobby.name}
          </Component>
          <p className="relative z-10 mt-2 text-sm text-muted-foreground">
            {hobby.description}
          </p>
          {hobby.featured && (
            <p className="relative z-10 mt-3 text-sm font-medium text-primary/90">
              {hobby.featured}
            </p>
          )}
        </div>

        <div className="relative z-10 mt-4 flex flex-wrap gap-2">
          {hobby.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-muted-foreground/20 px-3 py-1 text-xs text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </li>
  )
}
