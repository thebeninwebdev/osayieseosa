import { Projects } from "../components/Projects"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "mrEseosa - My projects",
  description: "Come take a look my projects crafted with care and technique to solve problems and foster innovation.",
};

export default function page() {
  return (
    <div>
          <div className="w-full py-20">
  <h2 className="text-3xl font-bold text-[#f9d339] px-5 mb-5">My Projects</h2>
  <Projects/>
  </div>
    </div>
  )
}
