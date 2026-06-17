import { CalendarCheck, Map, MapPinned, Users, Wallet } from "lucide-react";
import React from "react";

const Features = () => {
  const featuresData = [
    {
      icon: MapPinned,
      title: "Smart Planning",
      description:
        "Plan trips effortlessly with organized destinations, schedules, and essential    travel   details in one place.",
    },
    {
      icon: Wallet,
      title: "Budget Control",
      description:
        "Track expenses, manage budgets, and monitor spending to keep every trip financially organized and stress-free.",
    },
    {
      icon: Users,
      title: "Team Travel",
      description:
        "Collaborate with friends by sharing trips, assigning tasks, and coordinating plans for smooth group travel.",
    },
    {
      icon: CalendarCheck,
      title: "Live Updates",
      description:
        "Receive real-time trip updates, reminders, and notifications to ensure every journey stays perfectly on track.",
    },
  ];

  return (
    <section className="px-20 py-32">
      <div>
        <h2 className="text-5xl font-bold mb-24 text-center">Features</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresData.map((feature, index) => {
          return(
            <div key={index} className="border border-black-300 p-4 rounded-lg">
              <div className="flex justify-center">
                <feature.icon className="h-10 w-10 text-blue-400 " />
              </div>
              

              <h1 className=" text-center text-xl font-medium my-2">{feature.title}</h1>

              <p>{feature.description}</p>
              </div>
          )
        })}
      </div>
    </section>
  );
};

export default Features;
