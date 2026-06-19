import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Solo traveler",
    avatar: "/public/avatar-1.png",
    rating: 5,
    quote:
      "Planning my three-week Europe trip used to feel impossible. With this app every booking, train, and reservation lived in one timeline. I just showed up and enjoyed it.",
  },
  {
    name: "David Okonkwo",
    role: "Family vacations",
    avatar: "/public/avatar-2.png",
    rating: 5,
    quote:
      "Coordinating a trip for five people is chaos. Shared itineraries and the budget tracker kept everyone on the same page and saved us from overspending.",
  },
  {
    name: "Elena Rossi",
    role: "Digital nomad",
    avatar: "/public/avatar-3.png",
    rating: 5,
    quote:
      "I live out of a suitcase and switch countries monthly. Having my documents, plans, and expenses synced across devices is genuinely a lifesaver.",
  },
]

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? "size-4 fill-yellow-400 text-yellow-400"
              : "size-4 fill-muted-foreground/20 text-muted-foreground/30"
          }
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground">
            <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
            Loved by travelers
          </span>
          <h2 className="mt-5 text-pretty text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Trusted by thousands of happy explorers
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From weekend getaways to round-the-world adventures, here&apos;s what our community has to say
            about traveling with us.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-5 hover:scale-[1.03] hover:shadow-2xl"
            >
              <Quote className="size-7 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-card-foreground">
                {t.quote}
              </blockquote>
              <div className="mt-6">
                <Stars rating={t.rating} />
              </div>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <img
                  src={t.avatar || "/placeholder.svg"}
                  alt={t.name}
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}