var video =
{
    videoname : "intro to 35",
    fileformat : "mp4",
    duration : "2:48",
    owner : "Qaifi",
    getvideoname: function() {
        return this.videoname
    },
    getfileformat: function() {
        return this.fileformat
    },
    getduration : function() {
        return this.duration
    },
    getowner : function() {
        return this.owner
    }
}

console.log(video.getvideoname());
