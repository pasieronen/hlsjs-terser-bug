import Hls from 'hls.js/dist/hls.light.min';
var hls = new Hls();
hls.loadSource('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8');
hls.attachMedia(player);
