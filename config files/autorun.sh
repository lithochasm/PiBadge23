#!/bin/bash

while /bin/true ; do
	for i in /home/pi/pi/videos/*.mov; do 
		mplayer -vo fbdev2:/dev/fb1 -x 480 -y 320 -zoom -framedrop -really-quiet $i; done
done
