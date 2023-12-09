import Timer from "./Timer";

export default function QuizHeader() {
  return <section className="flex gap-10">
    <span>QUESTION NUMBER</span>
    <Timer />
  </section>
}