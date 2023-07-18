import { Compare } from "./components/Compare"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"
import { Pricing } from "./components/Pricing"

export function Landing() {
    return <>
    <div className="container py-3">
      <NavBar />
      <main>
        <Pricing />
        <Compare />
      </main>
      <Footer />
    </div>
  </>
  
}
