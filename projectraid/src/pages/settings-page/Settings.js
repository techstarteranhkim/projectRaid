import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Settings.module.css";

const Settings = () => {
  const navigate = useNavigate();

  const onIconEditPencilClick = useCallback(() => {
    // Add your code here
  }, []);

  const onIconSettingsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.settings}>
      <div className={styles.bg} />
      <div className={styles.bg1} />
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <img
          className={styles.iconSettings}
          alt=""
          src={`🦆 icon "settings".svg`}
        />
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
            onClick={onIconSettingsClick}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.suggestionWidget}>
          <div className={styles.bg2}>
            <div className={styles.bgChild} />
            <img
              className={styles.logoNobg1Icon}
              alt=""
              src="Logo_noBG 1.png"
            />
          </div>
          <div className={styles.header}>
            <div className={styles.headerChild} />
            <div className={styles.help}>Help</div>
          </div>
          <div className={styles.header1}>
            <div className={styles.headerChild} />
            <div className={styles.help}>About</div>
          </div>
          <div className={styles.header2}>
            <div className={styles.headerChild} />
            <div className={styles.help}>Notifications</div>
          </div>
          <div className={styles.header3}>
            <div className={styles.headerChild} />
            <div className={styles.help}>Data and storage</div>
          </div>
          <div className={styles.header4}>
            <div className={styles.headerChild} />
            <div className={styles.help}>Appearance</div>
          </div>
        </div>
      </div>
      <div className={styles.header5}>
        <div className={styles.headerChild2} />
        <div className={styles.logoNobg2Parent}>
          <img className={styles.logoNobg2Icon} alt="" src="Logo_noBG 2.png" />
          <img
            className={styles.iconLogIn}
            alt=""
            src={`🦆 icon "log in".png`}
            onClick={onIconEditPencilClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
