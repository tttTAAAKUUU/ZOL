import VerifyNumForm from "../components/VerifyNumForm"

const verify_number = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
        <div className="shadow-xl p-4 bg-white rounded-xl">
            <h1>Phone verification</h1>
            <VerifyNumForm/>
        </div>
    </div>
  )
}

export default verify_number