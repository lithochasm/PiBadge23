# PiBadge
Code for our Defcon23 Raspberry Pi badge


PiBadge Official Screen: Adafruit 3.5" Touchscreen TFT: https://www.adafruit.com/products/2097

Image for Adafriuit 3.5 Touchscreen: https://learn.adafruit.com/adafruit-pitft-3-dot-5-touch-screen-for-raspberry-pi/easy-install

Primary Software for playing videos: mplayer 
Alternative software: omxplayer + rpi-fbcp

Install steps:

Burn image to SD card. Boot, configure networking if needed. Install mplayer. Copy over our /etc/profile & /etc/initab scripts.
Copy the videos and autorun.sh script to /home/pi

Future goals:

3D Printed case with integrated LiPo battery:
https://learn.adafruit.com/touch-pi-portable-raspberry-pi/cad

Overclock / Speedup Adafruit TFT:
https://learn.adafruit.com/adafruit-pitft-3-dot-5-touch-screen-for-raspberry-pi/faq
tl;dr == options fbtft_device name=adafruitrt35 rotate=90 frequency=64000000 fps=30


Reboot!
