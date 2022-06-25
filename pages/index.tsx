import Seo from './components/Seo'
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {

  function test(){
    return<>
    
    </>
  }
  return (
    <div>
      <Header />
      <img className="object-cover object-center w-full h-56 mx-auto rounded-lg" src="/main_grap.png" alt="Main Image" width={1920} height={800}/>
      <Seo
        pageTitle={'Aptos Crown Masks'}
        pageDescription={'Aptos Crown Masks'}
        pageImg={'https://aptos-crown-masks.vercel.app/main_grap.png'}
        pageImgWidth={1920}
        pageImgHeight={1005}
      />

      <section className="bg-white dark:bg-gray-800">
        <div className="container px-6 py-8 mx-auto">
            <div className="items-center lg:flex">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Who I am</h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                        Hi I am jane , software engineer <a className="font-bold text-blue-600 dark:text-blue-400" href="#">@BakaTeam</a> , Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in sed non alias, fugiat, commodi nemo ut fugit corrupti dolorem sequi ex veniam consequuntur id, maiores beatae ipsa omnis aliquam?
                    </p>
                </div>

                <div className="mt-8 lg:mt-0 lg:w-1/3">
                    <div className="flex lg:justify-end">
                        <div className="max-w-lg">
                          <img className="object-cover object-center w-full h-56 mx-auto rounded-lg" src="/AptosCrownMAask.png" alt="Main Image" width={1920} height={800}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white dark:bg-gray-800">
        <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
            Where to buy this collection
            </h2>
            
            <div className="mt-8 lg:mt-0">
                <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                    
                    <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Comming soon ...
                    </button>
                </div>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">We will let you know when we will be able to MINT on Aptos first.</p>
            </div>
        </div>
    </section>
    <section>
      <div className="dark:bg-gray-800">
        <div className="container px-6 py-16 mx-auto dark:bg-gray-800">
            <div className="items-center lg:flex">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Road map</h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">-aptos is being developed by Facebook (formerly Libra) developers in the new Layer 1.</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">-First NFT on Aptos for you.</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">-100,000 collections to be released.</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">-NFT is currently in production.</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">-We will use a new programming language called MOVE, so we will investigate what makes it different from Solidity.</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">-NFT will be available at new market prices such as Martin Wallet and Pontem.</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">-GitHub Link: https://github.com/tabeaki/AptosCrownMasks</p>
                    </div>
                </div>
          
                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                  <img className="object-cover object-center w-full h-56 mx-auto rounded-lg" src="/AptosCrownMAask1.png" alt="Main Image" width={1920} height={800}/>
                </div>
            </div>
        </div>
      </div>  
    </section>
    
    <section className="dark:bg-gray-800">
      <div className="container p-6 mx-auto">

        <h2 className="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl">Our Team</h2>
        <div className="flex items-center justify-center">
            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://pbs.twimg.com/profile_images/1356553383142846467/sNTinbZD_400x400.jpg" alt="avatar"/>

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Satowan</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder</span>
                    </div>
                </div>

                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://pbs.twimg.com/profile_images/1531152979658543105/OYLrcqNk_400x400.jpg" alt="avatar"/>

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Dice</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Cartoonist Co-founder</span>
                    </div>
                </div>

                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://pbs.twimg.com/profile_images/1532043124180385792/VtfFxu-q_400x400.jpg" alt="avatar"/>

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">S4ITO</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Blender Artist Co-founder</span>
                    </div>
                </div>

                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://pbs.twimg.com/profile_images/1531136600788566016/jubUhHoa_400x400.jpg" alt="avatar"/>

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">TABE</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">CTO Co-founder</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
      <Footer />
    </div>
  )
}
