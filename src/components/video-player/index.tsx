import { useCallback, useRef, useState } from "react";
import ReactPlayer from "react-player";
import styles from "./styles.module.scss";
import {
  Pause,
  Play,
  RotateCcw,
  VolumeX,
  Volume2,
  Maximize,
  RotateCw,
} from "lucide-react";

type Props = {
  handleVideoEnded?: () => Promise<void>;
  url: string;
};

const VideoPlayer = ({ handleVideoEnded, url }: Props) => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [prevVolume, setPrevVolume] = useState(1);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [playedDuringSeek, setPlayedDuringSeek] = useState(0);

  const [, setLoading] = useState(true);

  const handlePlayPause = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const seekForward = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
    }
  };

  const seekBackward = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
    }
  };

  const toggleMute = () => {
    if (muted) {
      setVolume(prevVolume);
      setMuted(false);
    } else {
      setPrevVolume(volume);
      setVolume(0);
      setMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (newVolume === 0) {
      setMuted(true);
    } else {
      setMuted(false);
      setPrevVolume(newVolume);
    }
  };

  const toggleFullscreen = () => {
    const elem = videoRef.current;

    if (!isFullscreen && elem) {
      if ("requestFullscreen" in elem) {
        elem.requestFullscreen();
      } else if ("webkitRequestFullscreen" in elem) {
        (
          elem as HTMLElement & {
            webkitRequestFullscreen?: () => void;
          }
        ).webkitRequestFullscreen?.();
      } else if ("msRequestFullscreen" in elem) {
        (
          elem as HTMLElement & {
            msRequestFullscreen?: () => void;
          }
        ).msRequestFullscreen?.();
      }
    } else {
      if ("exitFullscreen" in document) {
        document.exitFullscreen();
      } else if ("webkitExitFullscreen" in document) {
        (
          document as Document & {
            webkitExitFullscreen?: () => void;
          }
        ).webkitExitFullscreen?.();
      } else if ("msExitFullscreen" in document) {
        (
          document as Document & {
            msExitFullscreen?: () => void;
          }
        ).msExitFullscreen?.();
      }
    }

    setIsFullscreen((prev) => !prev);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setPlayedDuringSeek(newValue);
  };

  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const newValue = parseFloat(target.value);
    setSeeking(false);
    setPlayed(newValue);
    if (playerRef.current) {
      playerRef.current.seekTo(newValue);
    }
  };

  const handleSeekTouchEnd = (e: React.TouchEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const newValue = parseFloat(target.value);
    setSeeking(false);
    setPlayed(newValue);
    if (playerRef.current) {
      playerRef.current.seekTo(newValue);
    }
  };

  return (
    <div className={styles.videoSection} ref={videoRef}>
      <div className={styles.videoPlaceholder}>
        <ReactPlayer
          ref={playerRef}
          url={url}
          width="100%"
          height="100%"
          controls={false}
          playing={playing}
          playsinline={true}
          volume={volume}
          muted={muted}
          onProgress={({ played }) => {
            if (!seeking) {
              setPlayed(played);
            }
          }}
          onReady={() => setLoading(false)}
          onBuffer={() => setLoading(true)}
          onBufferEnd={() => setLoading(false)}
          onEnded={handleVideoEnded}
          style={{ pointerEvents: "none" }}
          config={{
            file: {
              attributes: {
                preload: "auto",
              },
            },
          }}
        />
        <div className={styles.overlay} onClick={handlePlayPause} />
        <div className={styles.videoControls}>
          <div className={styles.leftControl}>
            <RotateCcw onClick={seekBackward} />
            <div onClick={handlePlayPause}>
              {playing ? <Pause /> : <Play />}
            </div>
            <RotateCw onClick={seekForward} />
          </div>

          <div className={styles.progress}>
            <label htmlFor="progress"></label>
            <input
              id="progress"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={seeking ? playedDuringSeek : played}
              onMouseDown={() => setSeeking(true)}
              onChange={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
              onTouchStart={() => setSeeking(true)}
              onTouchEnd={handleSeekTouchEnd}
              className="slider"
            />
          </div>

          <div className={styles.rightControl}>
            <label htmlFor="volume">
              {muted ? (
                <VolumeX onClick={toggleMute} />
              ) : (
                <Volume2 onClick={toggleMute} />
              )}
            </label>
            <input
              id="volume"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
            <Maximize onClick={toggleFullscreen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
