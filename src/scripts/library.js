// 将 data.js 中的曲库列表插入到页面之中
var load = function() {
  var libList = e("#id-library-list")
  for (var i = 0; i < libraryList.length; i++) {
    var basePath = "./img/"
    var music = libraryList[i]
    // 获取专辑封面
    var path = basePath + music.imgPath
    // 获取音乐名
    var musicName = music.name
    var html = `<div class="lib-music" data-num=${i}>
            <span class=lib-photo style="background-image:url(${path})"></span>
            <span class=lib-name>${musicName}</span>
        </div>`
    appendHtml(libList, html)
  }
}

// 绑定点击
var bindEventAddLib = function() {
  var libList = e("#id-library-list")
  bindAll(".lib-music", "click", function(e) {
    var index = this.dataset.num
    // log(index)
    AddFromLib(index)
  })
}

// 点击更新列表
var AddFromLib = function(index) {
  var addMusic = libraryList[index]
  // 确认是否存在, 若存在则弹窗提示
  for (var i = 0; i < musicList.length; i++) {
    var music = musicList[i].music
    if (music == addMusic.music) {
      swal("播放列表已有本歌曲")
      return
    }
  }
  // 将所选曲目加入播放列表并切歌
  musicList.push(addMusic)
  UpdateMusicList()
  var n = musicList.length - 1
  CutPlay(addMusic, n)
}

var __main = function() {
  load()
  bindEventAddLib()
}

__main()
