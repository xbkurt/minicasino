import startburstImage from 'images/game-icon/starburst.jpg';
import deadoraliveImage from 'images/game-icon/deadoralive.jpg';
import jackandbeanstalkImage from 'images/game-icon/jackandbeanstalk.jpg';
import jackhammerImage from 'images/game-icon/jackhammer.jpg';
import twinspinImage from 'images/game-icon/twinspin.jpg';

import eric from 'images/avatar/eric.jpg';
import rebecka from 'images/avatar/stoffe.jpg';
import stoffe from 'images/avatar/rebecka.jpg';

export function getGameImage(index) {
  let images = [
    startburstImage,
    deadoraliveImage,
    jackandbeanstalkImage,
    jackhammerImage,
    twinspinImage,
  ];
  return images[index];
}

export function getUserImage(name) {
  if (name === 'eric') {
    return eric;
  } else if (name === 'rebecka') {
    return rebecka;
  } else if (name === 'stoffe') {
    return stoffe;
  }
}
