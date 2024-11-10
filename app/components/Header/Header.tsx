import Link from "next/link";


export default function Header() {

  return (

    



      <div>





        

          <div>
            <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
              <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="text-3xl font-bold">Fatima&#39;s Portfolio</h1>
                  
                <nav className="flex space-x-8">
                  
                  
                 
              <p  className="text-lg font-semibold hover:text-gray-300 transition-colors duration-200"><Link href="/Home">Home</Link> </p>


                  <p className="text-lg font-semibold hover:text-gray-300 transition-colors duration-200"><Link href="/Services">Services</Link></p>
                  
                  <p className="text-lg font-semibold hover:text-gray-300 transition-colors duration-200"><Link href="/contact-us">contact-us</Link></p>
                </nav>
              </div>
            </header>
          </div>

        </div>



      





































    




  )


}