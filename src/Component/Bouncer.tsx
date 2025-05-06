const Bouncer = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-[100px] h-[300px] relative '>
            <div className='w-[50px] h-[50px] rounded-[50px] absolute left-[50px] top-[50px] shadow-md animate-bounce bg-gradient-to-t bg-[#56a256]'></div>
        </div>
    </div>
  )
}

export default Bouncer