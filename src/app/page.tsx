import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col bg-neutral-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full px-5 py-24 h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)] flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
            Automate Your Work With AutoForge
          </h1>
          <p className="text-xl mb-8 text-neutral-400">
            Streamline your workflow and boost productivity with our automation
            tools.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-neutral-200 transition-all"
          >
            Start For Free Today
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-5">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            "Easy Integration",
            "Powerful Automation",
            "Customizable Workflows",
          ].map((feature, index) => (
            <div
              key={index}
              className="border border-neutral-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{feature}</h3>
              <p className="text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-5 bg-neutral-900">
        <h2 className="text-3xl font-bold mb-8 text-center">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: "Hobby",
              price: "$0",
              features: [
                "3 Free automations",
                "100 tasks per month",
                "Two-step Actions",
              ],
            },
            {
              name: "Pro",
              price: "$29",
              features: [
                "Unlimited automations",
                "1000 tasks per month",
                "Multi-step Actions",
              ],
            },
            {
              name: "Enterprise",
              price: "$99",
              features: ["Custom solutions", "Dedicated support", "API access"],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="border border-neutral-800 rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 mb-2">
                    <CheckIcon className="text-green-500" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-white text-black hover:bg-neutral-200 transition-all">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-5 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Automate Your Workflow?
        </h2>
        <p className="text-xl mb-8 text-neutral-400">
          Join thousands of satisfied users and start boosting your productivity
          today.
        </p>
        <Button
          size="lg"
          className="bg-white text-black hover:bg-neutral-200 transition-all"
        >
          Sign Up Now
        </Button>
      </section>
    </main>
  );
}
