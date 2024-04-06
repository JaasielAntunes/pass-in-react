import { AttendeeList } from './components/attendee-list'
import { Header } from './components/header'

export function App() {
  return (
    <div className="max-w-[1261px] mx-auto flex flex-col py-5 gap-5">
      <Header />
      <AttendeeList />
    </div>
  )
}
