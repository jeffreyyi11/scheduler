const formDivStyles = 'w-[25rem] flex justify-between'
const formInputStyles = 'w-[15rem] text-black pl-2 rounded-md';


const LoginForm = () => {
  return (
    <div className='mx-auto mt-[20rem]'>
      <form className='space-y-4'>
        <div className={formDivStyles}>
          Email: <input type='email' className={formInputStyles} />
        </div>
        <div className={formDivStyles}>
          Password: <input type='email' className={formInputStyles} />
        </div>
        <button type='submit' className='border-black border-2'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;