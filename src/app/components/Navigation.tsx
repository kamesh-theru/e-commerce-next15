import Image from "next/image"
import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-[#003d5d] shadow-md py-4" >
      <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              {/* <Image alt="logo" src="images/dh-logo.png" width={60} height={60} /> */}
              <div className="flex flex-row items-center gap-3">
                <div className="bg-amber-300 rounded-full text-[#003d5d] p-[14px] font-bold w-[50px] h-[50px]">SB</div>
                <div className="text-white font-bold uppercase">Store <span className="text-amber-300">Brand</span></div>

              </div>
            </Link>
             <div className="hidden md:block  flex-grow max-w-lg mx-8">

                <form className="group relative">
                    <input type="text" placeholder="Search for products" className="w-full bg-white/10 border border-white/20 rounded-full 
                    py-2 pl-4 pr-10 text-white placeholder:text-white/60 
                    focus:outline-none focus:ring-2 focus:ring-[#dea649] 
                    focus:border-transparent transition-all" />
                  <button
                      type="submit"
                      className="absolute right-1 top-1/2 -translate-y-1/2 
                                text-white/70 p-1.5 hover:text-white rounded-full 
                                transition-colors"
                    >
                      <i className="bx bx-search text-xl"></i>
                    </button>
                </form>
                

            </div>
            <div className="flex flex-row justify-between gap-2">
                <div className="hidden md:flex items-center space-x-4">
                      <div className="group">
                        <button
                          className="text-white/90 hover:text-[#dea649] transition-colors 
                                    p-2 rounded-full hover:bg-white/10 flex items-center"
                        >
                          <i className="bx bx-store text-2xl mr-1"></i>
                          <span className="hidden md:inline text-base font-medium">
                            Products
                          </span>
                          <i className="bx bx-chevron-down ml-1"></i>
                        </button>
                      </div>
                      <Link href=""></Link>
                    </div>

                <Link
                  href="/cart"
                  className="text-white/90 flex justify-center items-center 
                            hover:text-[#dea649] p-2 rounded-full 
                            hover:bg-white/10 transition-colors"
                >
                  <i className="bx bx-cart text-2xl"></i>
                </Link>

                <Link
                  href="/login"
                  className="text-white/90 flex justify-center items-center 
                            hover:text-[#dea649] p-2 rounded-full 
                            hover:bg-white/10 transition-colors"
                >
                  <i className="bx bx-user text-2xl"></i>
                </Link>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navigation
