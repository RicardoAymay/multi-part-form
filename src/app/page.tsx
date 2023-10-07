
import bgSidebarDesktop from '../assets/images/bg-sidebar-mobile.svg'
import Steps from '@/components/Steps'


export default function Home() {
  return (
    <main className='max-w-[1440px] min-w-[375px] h-screen mr-auto ml-auto mt-0 border-red-800 border-4'>
      <div style={{ backgroundImage: `url(${bgSidebarDesktop.src})`}} className='w-full h-1/4 bg-cover'>
        <Steps/> 
      </div>
    </main>
  )
}
