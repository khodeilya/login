import "./login.css";
const Login = () => {
  return (
    <div className="fullpage">
      <div className="loginbox">
        <h1>شبیه ساز بورس</h1>
        <h2>ورود</h2>
        <div className="loginform">
          <form>
            <p>شماره موبایل</p>
            <input type="text" placeholder="شماره خود را وارد کنید" />
            <p>رمز عبور</p>
            <input type="password" placeholder="رمز خود را وارد کنید" />
            <input type="submit" value="ورود به سیستم" />
            <div className="link">
              <a href="#" id="md">
                حساب ندارید؟ هم اکنون ثبت نام کنید
              </a>
              <br />
              <a href="#" id="sm">
                رمز عبور خود را فراموش کرده اید؟
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
