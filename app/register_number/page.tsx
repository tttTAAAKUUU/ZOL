import RegNumberForm from "../components/RegNumberForm"

const verify_email = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
        <div className="shadow-xl p-4 bg-white rounded-xl">
            <h1>Phone number verification</h1>
            <RegNumberForm/>
        </div>
    </div>
  )
}

export default verify_email