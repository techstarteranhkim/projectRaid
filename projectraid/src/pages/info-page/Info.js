import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Info.module.css";

const Info = () => {
  const navigate = useNavigate();

  const onIconEditPencilClick = useCallback(() => {
    // Add your code here
  }, []);

  const onIconBellClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.info}>
      <div className={styles.bg} />
      <div className={styles.bg1} />
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <img className={styles.iconBell} alt="" src={`🦆 icon "bell".svg`} />
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
            className={styles.iconBell1}
            alt=""
            src={`🦆 icon "bell".svg`}
            onClick={onIconBellClick}
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
        <div className={styles.suggestionWidget}>
          <div className={styles.background}>
            <div className={styles.backgroundChild} />
            <img
              className={styles.logoNobg1Icon}
              alt=""
              src="Logo_noBG 1.png"
            />
          </div>
          <div className={styles.gameInfo}>
            <div className={styles.gameInfoChild} />
            <div className={styles.gameFinalFantasyXivContainer}>
              <span className={styles.gameFinalFantasyXivContainer1}>
                <p className={styles.game}>Game:</p>
                <p className={styles.game}>{`Final Fantasy XIV `}</p>
              </span>
            </div>
            <img className={styles.image1Icon} alt="" src="image 1.png" />
          </div>
          <div className={styles.timeInfo}>
            <div className={styles.timeInfoChild} />
            <div className={styles.timeMonday19002100Container}>
              <span className={styles.gameFinalFantasyXivContainer1}>
                <p className={styles.game}>Time:</p>
                <p className={styles.game}>Monday</p>
                <p className={styles.game}>19:00 - 21:00</p>
              </span>
            </div>
          </div>
          <div className={styles.users}>
            <div className={styles.user1}>
              <div className={styles.user1Child} />
              <div className={styles.cat}>Cat</div>
              <img className={styles.image8Icon} alt="" src="image 8.png" />
            </div>
            <div className={styles.user3}>
              <div className={styles.user3Child} />
              <div className={styles.cat}>Bear</div>
              <img className={styles.image8Icon} alt="" src="image 7.png" />
            </div>
            <div className={styles.user5}>
              <div className={styles.user5Child} />
              <div className={styles.cat}>Monkey</div>
              <img className={styles.image6Icon} alt="" src="image 6.png" />
            </div>
            <div className={styles.user7}>
              <div className={styles.user1Child} />
              <div className={styles.cat}>Dog</div>
              <img className={styles.image5Icon} alt="" src="image 5.png" />
            </div>
            <div className={styles.user2}>
              <div className={styles.user3Child} />
              <div className={styles.you}>You</div>
              <img className={styles.image9Icon} alt="" src="image 9.png" />
            </div>
            <div className={styles.user4}>
              <div className={styles.user1Child} />
              <div className={styles.you}>Duck</div>
              <img className={styles.image8Icon} alt="" src="image 10.png" />
            </div>
            <div className={styles.user6}>
              <div className={styles.user1Child} />
              <div className={styles.you}>Rat</div>
              <img className={styles.image6Icon} alt="" src="image 3.png" />
            </div>
            <div className={styles.user8}>
              <div className={styles.user1Child} />
              <div className={styles.you}>Owl</div>
              <img className={styles.image6Icon} alt="" src="image 4.png" />
            </div>
            <div className={styles.raidMember}>Raid Member</div>
          </div>
          <div className={styles.answer} onClick={onIconEditPencilClick}>
            <div className={styles.not}>
              <div className={styles.notChild} />
              <img
                className={styles.mdicancelOutlineIcon}
                alt=""
                src="mdi:cancel-outline.svg"
              />
              <div className={styles.iWillSkip}>I will skip</div>
            </div>
            <div className={styles.yes}>
              <div className={styles.yesChild} />
              <img
                className={styles.mdicancelOutlineIcon}
                alt=""
                src="mdi:tick-outline.svg"
              />
              <div className={styles.iWillParticipate}>I will participate</div>
            </div>
          </div>
          <div className={styles.header}>
            <div className={styles.headerChild} />
            <div className={styles.fromOwl}>from Owl</div>
            <div className={styles.pendingSuggestion}>Pending Suggestion</div>
          </div>
        </div>
      </div>
      <div className={styles.header1}>
        <div className={styles.headerItem} />
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

export default Info;
