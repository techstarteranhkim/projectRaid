import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Availability.module.css";

const Availability = () => {
  const navigate = useNavigate();

  const onIconEditPencilClick = useCallback(() => {
    // Add your code here
  }, []);

  const onIconCalendarClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.availability}>
      <div className={styles.bg} />
      <div className={styles.bg1} />
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <img className={styles.iconCalendar} alt="" src={`icon_calendar.svg`} />
        <div className={styles.iconEditPencilParent}>
          <img
            className={styles.iconEditPencil}
            alt=""
            src={`icon_edit_pencil.svg`}
            onClick={onIconEditPencilClick}
          />
          <img
            className={styles.iconCalendar1}
            alt=""
            src={`icon_calendar.svg`}
            onClick={onIconCalendarClick}
          />
          <img
            className={styles.iconBell}
            alt=""
            src={`icon_bell.svg`}
            onClick={onIconEditPencilClick}
          />
          <img
            className={styles.iconEditPencil}
            alt=""
            src={`icon_settings.svg`}
            onClick={onIconEditPencilClick}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.availableTimeWidget}>
          <div className={styles.bg2}>
            <div className={styles.bgChild} />
            <img className={styles.logoNobg1Icon} alt="" src="Logo_noBG.png" />
          </div>
          <div className={styles.redgreenIndicatesUnavailabContainer}>
            <span className={styles.redgreenIndicatesUnavailabContainer1}>
              <p className={styles.redgreenIndicatesUnavailab}>
                Red/Green indicates un/available time
              </p>
              <p className={styles.redgreenIndicatesUnavailab}>
                Dashed Cyan indicates matching Timewindow
              </p>
            </span>
          </div>
          <div className={styles.buttons}>
            <div
              className={styles.suggestRaidButton}
              onClick={onIconEditPencilClick}
            >
              <div className={styles.suggestRaidButtonChild} />
              <div className={styles.suggestRaid}>Suggest Raid</div>
            </div>
            <div
              className={styles.setAvailabilityButton}
              onClick={onIconEditPencilClick}
            >
              <div className={styles.setAvailabilityButtonChild} />
              <div className={styles.setAvailability}>
                <span className={styles.setAvailabilityTxtContainer}>
                  <p className={styles.redgreenIndicatesUnavailab}>Set</p>
                  <p className={styles.redgreenIndicatesUnavailab}>
                    Availability
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.widgetContent}>
            <div className={styles.cells}>
              <div className={styles.time}>
                <div className={styles.div}>23</div>
                <div className={styles.div1}>22</div>
                <div className={styles.div2}>21</div>
                <div className={styles.div3}>20</div>
                <div className={styles.div4}>19</div>
                <div className={styles.div5}>18</div>
                <div className={styles.div6}>17</div>
                <div className={styles.div7}>16</div>
                <div className={styles.div8}>15</div>
                <div className={styles.div9}>14</div>
              </div>
              <div className={styles.timewindowParent}>
                <div className={styles.timewindow}>
                  <div className={styles.timewindowChild} />
                  <div className={styles.timewindowItem} />
                  <div className={styles.timewindowInner} />
                  <div className={styles.rectangleDiv} />
                  <div className={styles.timewindowChild1} />
                  <div className={styles.timewindowChild2} />
                  <div className={styles.timewindowChild3} />
                  <div className={styles.timewindowChild4} />
                  <div className={styles.timewindowChild5} />
                  <div className={styles.timewindowChild6} />
                </div>
                <div className={styles.timewindow1}>
                  <div className={styles.timewindowChild} />
                  <div className={styles.timewindowItem} />
                  <div className={styles.timewindowChild9} />
                  <div className={styles.timewindowChild10} />
                  <div className={styles.timewindowChild11} />
                  <div className={styles.timewindowChild2} />
                  <div className={styles.timewindowChild3} />
                  <div className={styles.timewindowChild4} />
                  <div className={styles.timewindowChild15} />
                  <div className={styles.timewindowChild6} />
                </div>
                <div className={styles.timewindow2}>
                  <div className={styles.timewindowChild} />
                  <div className={styles.timewindowItem} />
                  <div className={styles.timewindowInner} />
                  <div className={styles.rectangleDiv} />
                  <div className={styles.timewindowChild1} />
                  <div className={styles.timewindowChild2} />
                  <div className={styles.timewindowChild3} />
                  <div className={styles.timewindowChild4} />
                  <div className={styles.timewindowChild15} />
                  <div className={styles.timewindowChild6} />
                </div>
                <div className={styles.timewindow3}>
                  <div className={styles.timewindowChild} />
                  <div className={styles.timewindowItem} />
                  <div className={styles.timewindowInner} />
                  <div className={styles.rectangleDiv} />
                  <div className={styles.timewindowChild1} />
                  <div className={styles.timewindowChild2} />
                  <div className={styles.timewindowChild3} />
                  <div className={styles.timewindowChild4} />
                  <div className={styles.timewindowChild15} />
                  <div className={styles.timewindowChild36} />
                </div>
                <div className={styles.timewindow4}>
                  <div className={styles.timewindowChild} />
                  <div className={styles.timewindowItem} />
                  <div className={styles.timewindowInner} />
                  <div className={styles.rectangleDiv} />
                  <div className={styles.timewindowChild11} />
                  <div className={styles.timewindowChild2} />
                  <div className={styles.timewindowChild3} />
                  <div className={styles.timewindowChild4} />
                  <div className={styles.timewindowChild5} />
                  <div className={styles.timewindowChild6} />
                </div>
                <div className={styles.timewindow5}>
                  <div className={styles.timewindowChild} />
                  <div className={styles.timewindowItem} />
                  <div className={styles.timewindowInner} />
                  <div className={styles.rectangleDiv} />
                  <div className={styles.timewindowChild1} />
                  <div className={styles.timewindowChild2} />
                  <div className={styles.timewindowChild3} />
                  <div className={styles.timewindowChild4} />
                  <div className={styles.timewindowChild15} />
                  <div className={styles.timewindowChild6} />
                </div>
                <div className={styles.timewindow6}>
                  <div className={styles.timewindowChild57} />
                  <div className={styles.timewindowChild58} />
                  <div className={styles.timewindowChild9} />
                  <div className={styles.timewindowChild10} />
                  <div className={styles.timewindowChild11} />
                  <div className={styles.timewindowChild2} />
                  <div className={styles.timewindowChild3} />
                  <div className={styles.timewindowChild4} />
                  <div className={styles.timewindowChild15} />
                  <div className={styles.timewindowChild36} />
                </div>
                <div className={styles.timewindow7}>
                  <div className={styles.timewindowChild} />
                  <div className={styles.timewindowItem} />
                  <div className={styles.timewindowInner} />
                  <div className={styles.rectangleDiv} />
                  <div className={styles.timewindowChild1} />
                  <div className={styles.timewindowChild2} />
                  <div className={styles.timewindowChild3} />
                  <div className={styles.timewindowChild4} />
                  <div className={styles.timewindowChild15} />
                  <div className={styles.timewindowChild6} />
                </div>
              </div>
            </div>
            <div className={styles.youParent}>
              <div className={styles.you}>
                <div className={styles.youChild} />
                <div className={styles.you1}>You</div>
                <img className={styles.image9Icon} alt="" src="9.png" />
              </div>
              <div className={styles.you}>
                <div className={styles.duckChild} />
                <div className={styles.duck1}>Duck</div>
                <img className={styles.image10Icon} alt="" src="10.png" />
              </div>
              <div className={styles.you}>
                <div className={styles.duckChild} />
                <div className={styles.you1}>Rat</div>
                <img className={styles.image3Icon} alt="" src="3.png" />
              </div>
              <div className={styles.you}>
                <div className={styles.duckChild} />
                <div className={styles.duck1}>Owl</div>
                <img className={styles.image3Icon} alt="" src="4.png" />
              </div>
              <div className={styles.you}>
                <div className={styles.duckChild} />
                <div className={styles.cat1}>Cat</div>
                <img className={styles.image10Icon} alt="" src="8.png" />
              </div>
              <div className={styles.you}>
                <div className={styles.youChild} />
                <div className={styles.bear1}>Bear</div>
                <img className={styles.image10Icon} alt="" src="7.png" />
              </div>
              <div className={styles.you}>
                <div className={styles.monkeyChild} />
                <div className={styles.cat1}>Monkey</div>
                <img className={styles.image3Icon} alt="" src="6.png" />
              </div>
              <div className={styles.you}>
                <div className={styles.duckChild} />
                <div className={styles.bear1}>Dog</div>
                <img className={styles.image5Icon} alt="" src="5.png" />
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.infoChild} />
            <div className={styles.users}>
              <div className={styles.startingTimeParent}>
                <div className={styles.startingTime}>
                  <span className={styles.setAvailabilityTxtContainer}>
                    <p className={styles.redgreenIndicatesUnavailab}>
                      Starting
                    </p>
                    <p className={styles.redgreenIndicatesUnavailab}>Time</p>
                  </span>
                </div>
                <div className={styles.availableRaidhours}>
                  Available Raidhours
                </div>
                <div className={styles.startingTime}>
                  <span className={styles.setAvailabilityTxtContainer}>
                    <p className={styles.redgreenIndicatesUnavailab}>End</p>
                    <p className={styles.redgreenIndicatesUnavailab}>Time</p>
                  </span>
                </div>
                <div className={styles.div10}>25</div>
                <div className={styles.div10}>0</div>
                <div className={styles.div10}>25</div>
              </div>
            </div>
            <div className={styles.highlightWindows} />
          </div>
          <div className={styles.header}>
            <div className={styles.headerChild} />
            <div className={styles.vectorParent}>
              <img className={styles.frameChild} alt="" src="Arrow2.svg" />
              <div className={styles.monday06052024}>Monday, 06.05.2024</div>
              <img className={styles.frameChild} alt="" src="Arrow1.svg" />
            </div>
            <div className={styles.availableTimewindow}>
              Available Timewindow
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header1}>
        <div className={styles.headerItem} />
        <div className={styles.logoNobg2Parent}>
          <img className={styles.logoNobg2Icon} alt="" src="Logo_noBG.png" />
          <img
            className={styles.iconLogIn}
            alt=""
            src={"icon_log_in.svg"}
            onClick={onIconEditPencilClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Availability;
