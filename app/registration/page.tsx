import RegistrationForm from "../components/RegistrationForm"

const registration = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
        <div className="shadow-xl p-4 bg-white rounded-xl">
            <h1>Personal information</h1>
            <RegistrationForm/>
        </div>
    </div>
  )
}

export default registration