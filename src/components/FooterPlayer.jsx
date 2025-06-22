import React, { useRef, useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaVolumeUp,
  FaRandom,
  FaRedo,
  FaEllipsisH,
} from "react-icons/fa";
import "./FooterPlayer.css";

const FooterPlayer = ({ previewUrl, title, artist, image }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(30);
  const [volume, setVolume] = useState(1);

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        if (audioRef.current) {
          setProgress(audioRef.current.currentTime);
          setDuration(audioRef.current.duration || 30);
        }
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setProgress(0);
      setIsPlaying(false);
    }
  }, [previewUrl]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  const handleVolume = (e) => {
    const vol = e.target.value;
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  return (
    <div className="footer-player">
      <input
        type="range"
        min="0"
        max="100"
        value={(progress / duration) * 100 || 0}
        onChange={handleSeek}
        className="top-progress-bar"
      />

      <div className="footer-content">
        {/* Info */}
        <div className="info">
          <img src={image} alt="Album Art" />
          <div>
            <h4>{title || "Not Playing"}</h4>
            <p>{artist}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="controls">
          <button className="control-button"><FaRandom /></button>
          <button className="control-button"><FaStepBackward /></button>
          <button className="play-button" onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="control-button"><FaStepForward /></button>
          <button className="control-button"><FaRedo /></button>
        </div>

        {/* Volume, Time & More */}
        <div className="right-controls">
          <span className="time">
            {formatTime(progress)} / {formatTime(duration)}
          </span>
          <FaVolumeUp />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolume}
            className="volume-slider"
          />
          <button className="control-button"><FaEllipsisH /></button>
        </div>
      </div>

      <audio ref={audioRef} src={previewUrl} />
    </div>
  );
};

export default FooterPlayer;
