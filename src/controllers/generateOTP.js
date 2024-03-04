const generateOTP = ()=>{
  const otpLength = 6
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let _OTP='';
  for (let i=1; i<= otpLength/2; i++) {
      const randomNumber = Math.floor(Math.random() * i);
      const randomLetter = characters.charAt(Math.floor(Math.random()* characters.length));
      _OTP += randomNumber + randomLetter;
    }
    return _OTP;
}

export default generateOTP;
