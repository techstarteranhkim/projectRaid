import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Planning.module.css";

const Planning = () => {
  const navigate = useNavigate();

  const onIconEditPencilClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconCalendarClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.planning}>
      <div className={styles.bg} />
      <div className={styles.bg1} />
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <img
          className={styles.iconEditPencil}
          alt=""
          src={`${process.env.PUBLIC_URL}/icon_edit_pencil.svg`}
        />
        <div className={styles.iconEditPencilParent}>
          <img
            className={styles.iconSettings}
            alt=""
            src={`${process.env.PUBLIC_URL}/icon_edit_pencil.svg`}
            onClick={onIconEditPencilClick}
          />
          <img
            className={styles.iconCalendar}
            alt=""
            src={`${process.env.PUBLIC_URL}/icon_calendar.svg`}
            onClick={onIconCalendarClick}
          />
          <img
            className={styles.iconBell}
            alt=""
            src={`${process.env.PUBLIC_URL}/icon_bell.svg`}
            onClick={onIconCalendarClick}
          />
          <img
            className={styles.iconSettings}
            alt=""
            src={`${process.env.PUBLIC_URL}/icon_settings.svg`}
            onClick={onIconCalendarClick}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.availableTimeWidget}>
          <div className={styles.bg2}>
            <div className={styles.bgChild} />
            <img
              className={styles.logoNobg1Icon}
              alt=""
              src={`${process.env.PUBLIC_URL}/Logo_noBG_1.png`}
            />
          </div>
          <div className={styles.answer}>
            <div className={styles.setTimeButton}>
              <div className={styles.setTimeButtonChild} />
              <div className={styles.setTime}>Set Time</div>
            </div>
          </div>
          <div className={styles.content1}>
            <div className={styles.dayAndSliders}>
              <div className={styles.mondayParent}>
                <div className={styles.monday}>MONDAY</div>
                <div className={styles.slider}>
                  <div className={styles.bg3} />
                  <div className={styles.fill}>
                    <img
                      className={styles.knobMaxIcon}
                      alt=""
                      src={`${process.env.PUBLIC_URL}/Knob_max.svg`}
                    />
                    <img
                      className={styles.knobMinIcon}
                      alt=""
                      src={`${process.env.PUBLIC_URL}/Knob_min.svg`}
                    />
                  </div>
                  <div className={styles.stepsScaled}>
                    <div className={styles.div}>
                      <div className={styles.div1}>14</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div4}>16</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div4}>18</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div10}>20</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div10}>22</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div16}>24</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tuesday}>TUESDAY</div>
                <div className={styles.slider1}>
                  <div className={styles.bg3} />
                  <div className={styles.fill}>
                    <img
                      className={styles.knobMaxIcon}
                      alt=""
                      src={`${process.env.PUBLIC_URL}/Knob_max.svg`}
                    />
                    <img
                      className={styles.knobMinIcon}
                      alt=""
                      src={`${process.env.PUBLIC_URL}/Knob_min.svg`}
                    />
                  </div>
                  <div className={styles.stepsScaled}>
                    <div className={styles.div}>
                      <div className={styles.div1}>14</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div4}>16</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div4}>18</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div10}>20</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div10}>22</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div16}>24</div>
                    </div>
                  </div>
                </div>
                <div className={styles.wednesday}>WEDNESDAY</div>
                <div className={styles.slider2}>
                  <div className={styles.bg3} />
                  <div className={styles.fill}>
                    <img
                      className={styles.knobMaxIcon}
                      alt=""
                      src={`${process.env.PUBLIC_URL}/Knob_max.svg`}
                    />
                    <img
                      className={styles.knobMinIcon}
                      alt=""
                      src={`${process.env.PUBLIC_URL}/Knob_min.svg`}
                    />
                  </div>
                  <div className={styles.stepsScaled}>
                    <div className={styles.div}>
                      <div className={styles.div1}>14</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div4}>16</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div4}>18</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div10}>20</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div10}>22</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div16}>24</div>
                    </div>
                  </div>
                </div>
                <div className={styles.thursday}>THURSDAY</div>
                <div className={styles.slider3}>
                  <div className={styles.bg3} />
                  <div className={styles.fill}>
                    <img
                      className={styles.knobMaxIcon}
                      alt=""
                      src={`${process.env.PUBLIC_URL}/Knob_max.svg`}
                    />
                    <img
                      className={styles.knobMinIcon}
                      alt=""
                      src={`${process.env.PUBLIC_URL}/Knob_min.svg`}
                    />
                  </div>
                  <div className={styles.stepsScaled}>
                    <div className={styles.div}>
                      <div className={styles.div1}>14</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div4}>16</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div4}>18</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div10}>20</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div10}>22</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div16}>24</div>
                    </div>
                  </div>
                </div>
                <div className={styles.friday}>FRIDAY</div>
                <div className={styles.slider4}>
                  <div className={styles.bg3} />
                  <div className={styles.fill}>
                    <img
                      className={styles.knobMaxIcon}
                      alt=""
                      src={`${process.env.PUBLIC_URL}/Knob_max.svg`}
                    />
                    <img
                      className={styles.knobMinIcon}
                      alt=""
                      src={`${process.env.PUBLIC_URL}/Knob_min.svg`}
                    />
                  </div>
                  <div className={styles.stepsScaled}>
                    <div className={styles.div}>
                      <div className={styles.div1}>14</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div4}>16</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div4}>18</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div10}>20</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div10}>22</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div16}>24</div>
                    </div>
                  </div>
                </div>
                <div className={styles.saturday}>SATURDAY</div>
                <div className={styles.slider5}>
                  <div className={styles.bg3} />
                  <div className={styles.fill}>
                    <img
                      className={styles.knobMaxIcon}
                      alt=""
                      src={`${process.env.PUBLIC_URL}/Knob_max.svg`}
                    />
                    <img
                      className={styles.knobMinIcon}
                      alt=""
                      src={`${process.env.PUBLIC_URL}/Knob_min.svg`}
                    />
                  </div>
                  <div className={styles.stepsScaled}>
                    <div className={styles.div}>
                      <div className={styles.div1}>14</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div4}>16</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div4}>18</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div10}>20</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div10}>22</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div16}>24</div>
                    </div>
                  </div>
                </div>
                <div className={styles.thursday}>SUNDAY</div>
                <div className={styles.slider6}>
                  <div className={styles.bg3} />
                  <div className={styles.fill}>
                    <img
                      className={styles.knobMaxIcon}
                      alt=""
                      src={`${process.env.PUBLIC_URL}/Knob_max.svg`}
                    />
                    <img
                      className={styles.knobMinIcon}
                      alt=""
                      src={`${process.env.PUBLIC_URL}/Knob_min.svg`}
                    />
                  </div>
                  <div className={styles.stepsScaled}>
                    <div className={styles.div}>
                      <div className={styles.div1}>14</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div4}>16</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div4}>18</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div10}>20</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div10}>22</div>
                    </div>
                    <div className={styles.div2} />
                    <div className={styles.div2}>
                      <div className={styles.div16}>24</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightControl}>
              <div className={styles.phplusFillParent}>
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_plus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_plus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_plus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_plus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_plus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_plus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_plus_fill.svg`}
                />
              </div>
              <div className={styles.phminusFillParent}>
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_minus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_minus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_minus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_minus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_minus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_minus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_minus_fill.svg`}
                />
              </div>
            </div>
            <div className={styles.leftControl}>
              <div className={styles.phplusFillGroup}>
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_plus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_plus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_plus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_plus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_plus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_plus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_plus_fill.svg`}
                />
              </div>
              <div className={styles.phminusFillGroup}>
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_minus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_minus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_minus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_minus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_minus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_minus_fill.svg`}
                />
                <img
                  className={styles.phplusFillIcon}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ph_minus_fill.svg`}
                />
              </div>
            </div>
          </div>
          <div className={styles.setTimeButton}>
            <div className={styles.headerChild} />
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                alt=""
                src={`${process.env.PUBLIC_URL}/Arrow2.svg`}
              />
              <div className={styles.div119}>06.05.2024 - 12.05.2024</div>
              <img
                className={styles.frameChild}
                alt=""
                src={`${process.env.PUBLIC_URL}/Arrow1.svg`}
              />
            </div>
            <div className={styles.setAvailableTime}>Set Available Time</div>
          </div>
        </div>
      </div>
      <div className={styles.header1}>
        <div className={styles.headerItem} />
        <div className={styles.logoNobg2Parent}>
          <img
            className={styles.logoNobg2Icon}
            alt=""
            src={`${process.env.PUBLIC_URL}/Logo_noBG.png`}
          />
          <img
            className={styles.iconLogIn}
            alt=""
            src={`${process.env.PUBLIC_URL}/icon_log_in.svg`}
            onClick={onIconCalendarClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Planning;
