import { useEffect, useRef, useState } from "react";
import "./Meditation.scss";
import YouTube from "react-youtube";
import playIcon from "../../assets/play.svg";
import pauseIcon from "../../assets/pause.svg";
import hideIcon from "../../assets/hide.svg";
import showIcon from "../../assets/show.svg";
import lefrArrowIcon from "../../assets/left-arrow.svg";

import PropTypes from "prop-types";

const Meditation = ({ data }) => {
  const iframeRef = useRef(null);
  const audioRef = useRef(null);

  const [currentInstance, setCurrentInstance] = useState(data[0]);
  const [radio, setRadio] = useState("");
  const [radioVolume, setRadioVolume] = useState(1); // Громкость от 0 до 1
  const [isPlayingRadio, setIsPlayingRadio] = useState(false);

  const [openPanel, setOpenPanel] = useState(true);

  const [isMuted, setIsMuted] = useState(true);

  const opts = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      playsinline: 1,
      showinfo: 0,
      enablejsapi: 1,
      widgetid: 1,
      iv_load_policy: 3,
      fs: 0,
      loop: 1,
      modestbranding: 1,
      start: currentInstance.videoStart,
      subtitles: 0,
    },
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);

    if (isMuted) {
      iframeRef?.current?.internalPlayer?.unMute();
    } else {
      iframeRef?.current?.internalPlayer?.mute();
    }
  };

  const togglePlayRadio = () => {
    if (isPlayingRadio) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlayingRadio(!isPlayingRadio);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setRadioVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleSongClick = (audio) => () => {
    setRadio(audio);
    togglePlayRadio();
  };

  useEffect(() => {
    if (radio && !isPlayingRadio) {
      togglePlayRadio();
    }
  }, [radio]);

  return (
    <div className="meditation-wrapper">
      <div className="video-wrapper">
        <YouTube ref={iframeRef} videoId={currentInstance.videoUrl} opts={opts} className="youtube-player" />

        <div className="video-bloker"></div>

        <div className="visible-icon" onClick={() => setOpenPanel((prev) => !prev)}>
          <img src={openPanel ? hideIcon : showIcon} width={25} height={25} />
        </div>

        <a href="/">
          <div className="back-button">
            <img src={lefrArrowIcon} width={20} />
            <div className="back-button-text">Back to Main</div>
          </div>
        </a>

        <div className="panel" style={openPanel ? {} : {display: "none"}}>
          <h3>Choose location</h3>
          <div className="places-list">
            {data.map((el, i) => (
              <span
                key={i}
                onClick={() => {
                  setCurrentInstance(el);
                  audioRef?.current?.pause();
                  setRadio("");
                  setIsMuted(true);
                }}
                style={currentInstance.city === el.city ? { backgroundColor: "rgb(255, 255, 255, 0.3)" } : {}}
              >
                {el.city}
              </span>
            ))}
          </div>

          <div className="ambient">
            <button onClick={toggleMute}>{`Ambient noise ${isMuted ? "OFF" : "ON"}`}</button>
          </div>

          {currentInstance.radio.length > 0 && (
            <section>
              <h3>Choose radio station</h3>
              <div className="audio-list">
                {currentInstance &&
                  currentInstance.radio.map((el, i) => (
                    <span key={i} onClick={handleSongClick(el)} style={radio.title === el.title ? { backgroundColor: "rgb(255, 255, 255, 0.3)" } : {}}>
                      {el.title}
                    </span>
                  ))}
              </div>
            </section>
          )}

          {radio && (
            <div className="radio-player">
              <div className="radio-title">{radio.title}</div>
              <hr />
              <div className="player-controls">
                <span onClick={togglePlayRadio}>
                  <img src={isPlayingRadio ? pauseIcon : playIcon} width={40} />
                </span>
                <input type="range" min="0" max="1" step="0.01" value={radioVolume} onChange={handleVolumeChange} />
              </div>
              <audio ref={audioRef} src={radio.url} controls style={{ display: "none" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Meditation;

Meditation.propTypes = {
  data: PropTypes.array,
};
