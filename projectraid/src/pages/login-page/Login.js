import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const onIconEditPencilClick = useCallback(() => {
    // Add your code here
  }, []);

  const onIconLogInClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.bg} />
      <div className={styles.bg1} />
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.iconEditPencilParent}>
          <img
            className={styles.iconEditPencil}
            alt=""
            src={`🦆 icon "edit pencil".svg`}
            onClick={onIconEditPencilClick}
          />
          <img
            className={styles.iconCalendar}
            alt=""
            src={`🦆 icon "calendar".svg`}
            onClick={onIconEditPencilClick}
          />
          <img
            className={styles.iconBell}
            alt=""
            src={`🦆 icon "bell".svg`}
            onClick={onIconEditPencilClick}
          />
          <img
            className={styles.iconEditPencil}
            alt=""
            src={`🦆 icon "settings".svg`}
            onClick={onIconEditPencilClick}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.loginContent}>
          <div className={styles.bg2}>
            <div className={styles.bgChild} />
            <img
              className={styles.logoNobg1Icon}
              alt=""
              src="Logo_noBG 1.png"
            />
          </div>
          <div className={styles.answer}>
            <div
              className={styles.answerChild}
              onClick={onIconEditPencilClick}
            />
            <div
              className={styles.answerItem}
              onClick={onIconEditPencilClick}
            />
            <div className={styles.login1}>Login</div>
            <div className={styles.register}>Register</div>
          </div>
          <div className={styles.emailAndPw}>
            <div className={styles.emailAndPwChild} />
            <div className={styles.email}>Email</div>
            <div className={styles.emailAndPwItem} />
            <img
              className={styles.basileyeClosedSolidIcon}
              alt=""
              src="basil:eye-closed-solid.svg"
            />
            <div className={styles.password}>Password</div>
            <div className={styles.forgotPassword}>Forgot password?</div>
          </div>
          <div className={styles.header}>
            <div className={styles.headerChild} />
            <div className={styles.login2}>Login</div>
          </div>
          <div className={styles.loginThrough}>Login through</div>
          <div className={styles.externalLogin}>
            <div className={styles.icons}>
              <img
                className={styles.iconGoogleCircled}
                alt=""
                src={`🦆 icon "google circled".svg`}
              />
              <img
                className={styles.iconGoogleCircled}
                alt=""
                src={`🦆 icon "facebook squared".svg`}
              />
              <img
                className={styles.iconGoogleCircled}
                alt=""
                src={`🦆 icon "instagram".svg`}
              />
              <img
                className={styles.iconDiscord}
                alt=""
                src={`🦆 icon "discord".svg`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header1}>
        <div className={styles.headerItem} />
        <img
          className={styles.iconLogIn}
          alt=""
          src={`🦆 icon "log in".png`}
          onClick={onIconLogInClick}
        />
        <div className={styles.logoNobg2Parent}>
          <img className={styles.logoNobg2Icon} alt="" src="Logo_noBG 2.png" />
          <img
            className={styles.iconLogIn1}
            alt=""
            src={`🦆 icon "log in".png`}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
