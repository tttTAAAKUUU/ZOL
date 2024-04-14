import VerifyEmailForm from "../components/VerifyEmailForm"

const verify_email = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
        <div className="shadow-xl p-4 bg-white rounded-xl">
            <h1>Email verification</h1>
            <VerifyEmailForm/>
        </div>
    </div>
  )
}

export default verify_email