import { Compass, Map, ShieldCheck, Wallet, Clock, Globe2 } from "lucide-react"

const stats = [
  { value: "120+", label: "Destinations" },
  { value: "45K", label: "Trips planned" },
  { value: "4.9", label: "Avg. rating" },
  { value: "98%", label: "Happy travelers" },
]

const features = [
  {
    icon: Map,
    title: "Smart itineraries",
    description: "Build day-by-day plans with stops, timings, and notes that stay perfectly organized.",
  },
  {
    icon: Wallet,
    title: "Budget tracking",
    description: "Log expenses on the go and always know exactly how much your trip is costing.",
  },
  {
    icon: ShieldCheck,
    title: "Travel safety",
    description: "Store documents, share live plans, and get local alerts so you travel with peace of mind.",
  },
  {
    icon: Clock,
    title: "Real-time sync",
    description: "Every change updates instantly across all your devices and travel companions.",
  },
]

export default function About() {
  return (
    <section id="about" className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-secondary/40 p-4">
              <img
                src="/public/about-travel.png"
                alt="Illustration of a person planning a trip on a laptop with floating maps, location pins, calendar, budget chart, and checklist"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-lg md:-right-6">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Globe2 className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-card-foreground">Plan anywhere</p>
                <p className="text-xs text-muted-foreground">Trips in your pocket</p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              <Compass className="size-3.5" />
              About us
            </span>
            <h2 className="mt-5 text-pretty text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Travel planning made effortless, from dream to departure
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              We started with a simple belief: planning a trip should be as exciting as the trip itself.
              Our platform brings your itineraries, bookings, budgets, and travel companions together in one
              place so you can spend less time organizing and more time exploring.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <feature.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card px-6 py-8 text-center">
              <p className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}