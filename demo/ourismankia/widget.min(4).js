"use strict";!function(){window.yt=window.yt||{},window.yt.state=window.yt.state||{},window.yt._onStateChange=function(t){1===t.data?DDC.pushToGtmDataLayer({event:"ddc.video.play",eventData:{element:t.target.getIframe(),eventType:"video-play",videoSource:t.target.getVideoUrl(),videoDuration:t.target.getDuration(),fileType:"youtube"}}):0===t.data&&window.yt._reportProgress(t,"complete")},window.yt._onTimeChange=function(t){var e=t.target.getVideoData().video_id,o={25:!1,50:!1,75:!1,95:!1};1===t.target.getPlayerState()&&setTimeout(function(){window.yt.state[e]=window.yt.state[e]||o;var a=t.target.getCurrentTime()/t.target.getDuration();a>=.25&&!window.yt.state[e][25]?(window.yt.state[e][25]=!0,window.yt._reportProgress(t,"25")):a>=.5&&!window.yt.state[e][50]?(window.yt.state[e][50]=!0,window.yt._reportProgress(t,"50")):a>=.75&&!window.yt.state[e][75]?(window.yt.state[e][75]=!0,window.yt._reportProgress(t,"75")):a>=.95&&!window.yt.state[e][95]&&(window.yt.state[e][95]=!0,window.yt._reportProgress(t,"95")),.95>a&&window.yt._onTimeChange(t)},250)},window.yt._reportProgress=function(t,e){DDC.pushToGtmDataLayer({event:"ddc.video.milestone",eventData:{element:t.target.getIframe(),eventType:"video-play-milestone",videoSource:t.target.getVideoUrl(),videoDuration:t.target.getDuration(),videoMilestone:e,fileType:"youtube"}})},window.yt._onReady=function(t){DDC.pushToGtmDataLayer({event:"ddc.video.ready",eventData:{element:t.target.getIframe(),eventType:"video-ready",videoSource:t.target.getVideoUrl(),videoDuration:t.target.getDuration(),fileType:"youtube"}})}}();