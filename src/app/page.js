
import Navbar from "@/components/navbar";
import Main from "@/components/main";
import Clients from "@/components/clients";
import Special from "@/components/special";
import Projects from "@/components/projects";
import Designer from "@/components/designer";
import People from "@/components/people";
import Questions from "@/components/questions";
import Atmos from "@/components/atmos";
import Talk from "@/components/talk";
import Footer from "@/components/footer";


export default function Home() {
  return (
    
   <div>
  <Navbar />
  <Main />
  <Clients />
  <Special />
  <Projects />
  <Designer />
  <People />
  <Questions />
  <Atmos />
  <Talk />
  <Footer />

   </div>
  );
}
