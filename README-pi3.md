# PiBadge
Code for our Defcon23 Raspberry Pi badge


PiBadge Official Screen: Adafruit 3.5" Touchscreen TFT: https://www.adafruit.com/products/2097 - this install is for 2.8"

Image for Adafriuit 2.8 Touchscreen: https://learn.adafruit.com/adafruit-pitft-28-inch-resistive-touchscreen-display-raspberry-pi/easy-install

Primary Software for playing videos: mplayer 
Alternative software: omxplayer + raspi2fb

Install steps:

Burn image to SD card. Boot, configure networking if needed. Install mplayer. Copy over our /etc/profile 
Autologin: sudo ln -fs /etc/systemd/system/autologin@.service /etc/systemd/system/getty.target.wants/getty@tty1.service`
Copy the videos and autorun.sh script to /home/pi

Alternate:
sudo apt-get install omxplayer
build/install https://github.com/AndrewFromMelbourne/raspi2fb
modify autorun.sh to use omxplayer instead...

Future goals:

3D Printed case with integrated LiPo battery:
https://learn.adafruit.com/touch-pi-portable-raspberry-pi/cad

Overclock / Speedup Adafruit TFT:
https://learn.adafruit.com/adafruit-pitft-3-dot-5-touch-screen-for-raspberry-pi/faq
tl;dr = edit /boot/config.txt change last line to: dtoverlay=pitft35r,rotate=90,speed=62000000,fps=30


Reboot!
