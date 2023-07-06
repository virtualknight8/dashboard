import './page.css'
import Leftcomponent from '@/components/signUpPageComponents/LeftComponet'
import RightComponent from '@/components/signUpPageComponents/RightComponent'

export default function Home() {
  return ( 
    <main className="main">
      <Leftcomponent></Leftcomponent>
      <RightComponent></RightComponent>
      </main>

  )
}
