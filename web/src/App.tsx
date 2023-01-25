import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';
import './styles/global.css';

// import { Habit } from "./components/Habit"


 
export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
    <div className="w-full max-w-5xl px-6 flex-col gap-16"></div>
    <Header />

    <SummaryTable />
    </div>
   
  )
}



//Componente: Reaproveitar / isolar
// Propiedade: Uma informação enviada pra modificar um componente visual ou comportalemntamente 
