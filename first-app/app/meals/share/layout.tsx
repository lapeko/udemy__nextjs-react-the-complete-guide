import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Share a Meal | NextLevel Food",
  description: "Share your favorite recipe with the food-loving community.",
};

export default function ShareMealLayout({ children }: { children: React.ReactNode }) {
  return children;
}
