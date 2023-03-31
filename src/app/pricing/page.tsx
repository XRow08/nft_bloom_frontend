import { DynamicPrice } from "@/components/DynamicPrice";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Pricing() {
  return (
    <section className="h-full bg-pricing bg-no-repeat bg-cover bg-top flex flex-col items-center gap-4">
      <Header />
      <DynamicPrice />
      <Footer />
    </section>
  );
}
