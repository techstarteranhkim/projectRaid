import { useCallback } from "react";
import styles from "./Register.module.css";

const Register = () => {
  const onIconEditPencilClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.register}>
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
            <div className={styles.login}>Login</div>
            <div className={styles.register1}>Register</div>
          </div>
          <div className={styles.emailAndPw}>
            <div className={styles.externalLogin}>
              <div className={styles.externalLogin1}>
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
              <div className={styles.registerThrough}>Register through</div>
            </div>
            <div className={styles.emailAndPwChild} />
            <div className={styles.emailAndPwItem} />
            <div className={styles.email}>Email</div>
            <div className={styles.repeatPassword}>Repeat Password</div>
            <div className={styles.emailAndPwInner} />
            <div className={styles.password}>Password</div>
            <img
              className={styles.basileyeClosedSolidIcon}
              alt=""
              src="basil:eye-closed-solid.svg"
            />
            <img
              className={styles.basileyeClosedSolidIcon1}
              alt=""
              src="basil:eye-closed-solid.svg"
            />
          </div>
          <div className={styles.header}>
            <div className={styles.headerChild} />
            <div className={styles.register2}>Register</div>
          </div>
        </div>
      </div>
      <div className={styles.header1}>
        <div className={styles.headerItem} />
        <img
          className={styles.iconLogIn}
          alt=""
          src={`🦆 icon "log in".png`}
          onClick={onIconEditPencilClick}
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

export default Register;
