import Navbar from "../components/layouts/Navbar"; 
import Footer from "../components/layouts/Footer";  
function MainLayout({ children }) 
{   return (    
     <>       <Navbar />    
        <main>{children}</main>    
           <Footer />     </>   ); } 
export default MainLayout;