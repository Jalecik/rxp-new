import React from "react";

export interface IVideoPlayer {
  img?: ReactElement;
  className?: string;
  url: string;
  playIcon?: ReactElement;
  handlePlay: () => void;
  handlePause: () => void;
}