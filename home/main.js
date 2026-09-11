let music = new Audio('./audio/1.mp3');

const songs = [
 {
    id: '1',
    songName: `稻香 <br>
    <div class="subtitle"> 周杰伦 </div>`,
    poster: 'img/1.jpg'
  },
  {
    id: '2',
    songName: `泡沫 <br>
    <div class="subtitle"> 邓紫棋 </div>`,
    poster: 'img/2.jpg'
  },
  {
    id: '3',
    songName: `租购 <br>
    <div class="subtitle"> 薛之谦 </div>`,
    poster: 'img/3.jpg'
  },
  {
    id: '4',
    songName: `我成为我的同时 <br>
    <div class="subtitle"> 十个勤天 </div>`,
    poster: 'img/4.jpg'
  },
  {
    id: '5',
    songName: ` 称为 <br>
    <div class="subtitle"> 黄子弘凡 </div>`,
    poster: 'img/5.jpg'
  },
  {
    id: '6',
    songName: `只与我有关联 <br>
    <div class="subtitle"> 周深 </div>`,
    poster: 'img/6.jpg'
  },
  {
    id: '7',
    songName: `Let Me Go <br>
    <div class="subtitle"> 单依纯 </div>`,
    poster: 'img/7.jpg'
  },
  {
    id: '8',
    songName: `你写下了我的名字 <br>
    <div class="subtitle"> 刘宇 </div>`,
    poster: 'img/8.jpg'
  },
  {
    id: '9',
    songName: `我好想现在就把你忘了 <br>
    <div class="subtitle"> 张靓颖 </div>`,
    poster: 'img/9.jpg'
  },
  {
    id: '10',
    songName: `幻听 <br>
    <div class="subtitle"> 许嵩 </div>`,
    poster: 'img/10.jpg'
  },
  {
    id: '11',
    songName: `我的快乐时代 <br>
    <div class="subtitle"> 陈奕迅 </div>`,
    poster: 'img/11.jpg'
  },
  {
    id: '12',
    songName: ` dehors <br>
    <div class="subtitle"> 曾舜晞 </div>`,
    poster: 'img/12.jpg'
  },
  {
    id: '13',
    songName: ` 无名的人 <br>
    <div class="subtitle"> 毛不易 </div>`,
    poster: 'img/13.jpg'
  },
  {
    id: '14',
    songName: ` 取舍 <br>
    <div class="subtitle"> 鹭卓 </div>`,
    poster: 'img/14.jpg'
  },
  {
    id: '15',
    songName: ` 嘉宾 <br>
    <div class="subtitle"> 张远 </div>`,
    poster: 'img/15.jpg'
  },
  {
    id: '16',
    songName: ` 如果爱忘了 <br>
    <div class="subtitle"> 汪苏泷/单依纯 </div>`,
    poster: 'img/16.jpg'
  },
  {
    id: '17',
    songName: `  这就是爱 <br>
    <div class="subtitle">张杰 </div>`,
    poster: 'img/17.jpg'
  },
  {
    id: '18',
    songName: `  山河图 <br>
    <div class="subtitle">凤凰传奇 </div>`,
    poster: 'img/18.jpg'
  },
  {
    id: '19',
    songName: `  打上花火 <br>
    <div class="subtitle">米津玄师 </div>`,
    poster: 'img/19.jpg'
  },
];

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
  } else {
    music.pause();
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
  }
})

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.classList.add('bi-play-circle-fill');
    element.classList.remove('bi-pause-circle-fill');
  })
}

const makeAllBackgrounds = () => {
  Array.from(document.getElementsByClassName('songItem')).forEach((elemenet) => {
    elemenet.style.background = 'rgb(105, 105, 170, 0)';
  })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');


Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    index = e.target.id;
    makeAllPlays();
    e.target.classList.remove('bi-play-circle-fill');
    e.target.classList.add('bi-pause-circle-fill');
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
      return ele.id == index;
    })

    song_title.forEach(ele => {
      let { songName } = ele;
      title.innerHTML = songName;
    })
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    music.addEventListener('ended', () => {
      masterPlay.classList.add('bi-play-fill');
      masterPlay.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = 'rgb(105, 105, 170, .1)';
    /*模板字符串（`${index - 1}`）来获取当前歌曲在数组中的索引，
    然后使用这个索引来访问DOM元素数组。 */
  })
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
  this.music_curr = music.currentTime;
  this.music_dur = music.duration;

  let min = Math.floor(music_dur / 60);
  let sec = Math.floor(music_dur % 60);
  if (sec < 10) {
    sec = `0${sec}`
  }
  currentEnd.innerText = `${min}:${sec}`

  let min1 = Math.floor(music_curr / 60);
  let sec1 = Math.floor(music_curr % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`
  }
  currentStart.innerText = `${min1}:${sec1}`

  let progressBar = parseInt((music.currentTime / music.duration) * 100);
  seek.value = progressBar;/*计算当前播放时间占总时长的百分比（progressBar），并将其设置为进度条（seek）的值。
  然后，使用这个值来更新进度条的宽度（bar2.style.width）和进度点的位置（dot.style.left）。 */
  let seekBar = seek.value;
  bar2.style.width = `${seekBar}%`;
  dot.style.left = `${seekBar}%`;
})

seek.addEventListener('change', () => {
  music.currentTime = seek.value * music.duration / 100;
})

seek.addEventListener('ended', () => {
  masterPlay.classList.add('bi-play-fill');
  masterPlay.classList.remove('bi-pause-fill');
  wave.classList.remove('active2');
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () => {
  if (vol.value == 0) {
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.add('bi-volume-mute-fill');
    vol_icon.classList.remove('bi-volume-up-fill');
  }
  if (vol.value > 0) {
    vol_icon.classList.add('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-mute-fill');
    vol_icon.classList.remove('bi-volume-up-fill');
  }
  if (vol.value > 50) {
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-mute-fill');
    vol_icon.classList.add('bi-volume-up-fill');
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName('songItem')).length;
  }

  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  let song_title = songs.filter((ele) => {
    return ele.id == index;
  })

  song_title.forEach(ele => {
    let { songName } = ele;
    title.innerHTML = songName;
  })

  makeAllPlays();

  document.getElementById(`${index}`).classList.remove('bi-play-fill');
  document.getElementById(`${index}`).classList.add('bi-pause-fill');

  makeAllBackgrounds();
  Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = 'rgb(105, 105, 170, .1)';
})

next.addEventListener('click', () => {
  index -= 0;
  index += 1;
  if (index > Array.from(document.getElementsByClassName('songItem')).length) {
    index = 1;
  }

  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  let song_title = songs.filter((ele) => {
    return ele.id == index;
  })

  song_title.forEach(ele => {
    let { songName } = ele;
    title.innerHTML = songName;
  })

  makeAllPlays();

  document.getElementById(`${index}`).classList.remove('bi-play-fill');
  document.getElementById(`${index}`).classList.add('bi-pause-fill');

  makeAllBackgrounds();
  Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = 'rgb(105, 105, 170, .1)';
})

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', () => {
  pop_song.scrollLeft -= 330;
})

right_scroll.addEventListener('click', () => {
  pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', () => {
  item.scrollLeft -= 330;
})

right_scrolls.addEventListener('click', () => {
  item.scrollLeft += 330;
})

window.onload = () => {
  var img = document.querySelectorAll(".img");
  var left = document.querySelector(".left");
  var right = document.querySelector(".right");
  var buttons = document.querySelectorAll("p");

  //设置一个数组，用来存id
  idArr = ["first", "second", "right", "left", "left", "left", "last"];

  //设置一个变量用来当图片的索引
  var index = 0;

  initialize();

  //设置一个定时器，让图片轮播
  var timer = setInterval(next, 3000);

  //给箭头绑定点击事件
  left.addEventListener("click", prev);
  
  left.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });
  
  left.addEventListener("mouseout", () => {
    timer = setInterval(next, 3000);
  });

  right.addEventListener("click", next);
  right.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });
  right.addEventListener("mouseout", () => {
    timer = setInterval(next, 3000);
  });

  

  //创建切换图片的函数
  function prev() {
    //切换上一张也就是让数组的最后一个元素变成第一个元素
    idArr.push(idArr.shift());
    initialize();
    if (index === 0) {
      index = buttons.length - 1;
    } else {
      index--;
    }
    clearColor();
  }
  function next() {
    //跟上面反过来
    idArr.unshift(idArr.pop());
    initialize();
    if (index === buttons.length - 1) {
      index = 0;
    } else {
      index++;
    }
    clearColor();
  }

  //创建一个函数用来让小方块跟随图片运动
  function clearColor() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "silver";
    }
    //让当前的索引变色
    buttons[index].style.backgroundColor = "rgb(20, 134, 187)";
  }

  //创建一个函数用来初始化图片
  function initialize() {
    for (let i = 0; i < img.length; i++) {
      img[i].id = idArr[i];
    }
  }
};

function recommended() {
  window.location.href = '../favorites/index.html';
}

document.getElementById('20').addEventListener('click', function() {
  window.location.href = 'https://baike.sogou.com/v4853409.htm?ch=frombaikevr&fromTitle=%E5%91%A8%E6%9D%B0%E4%BC%A6';
});
document.getElementById('21').addEventListener('click', function() {
  window.location.href = 'https://baike.sogou.com/v100128714.htm?fromTitle=%E9%99%88%E7%B2%92&ch=frombaikevr';
});
document.getElementById('22').addEventListener('click', function() {
  window.location.href = 'https://baike.sogou.com/v94995.htm?fromTitle=%E8%96%9B%E4%B9%8B%E8%B0%A6&ch=frombaikevr';
});
document.getElementById('23').addEventListener('click', function() {
  window.location.href = 'https://baike.sogou.com/v492594.htm?fromTitle=%E8%83%A1%E5%A4%8F&ch=frombaikevr';
});
document.getElementById('24').addEventListener('click', function() {
  window.location.href = 'https://baike.sogou.com/v177413746.htm?fromTitle=%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1&ch=frombaikevr';
});
document.getElementById('25').addEventListener('click', function() {
  window.location.href = 'https://baike.sogou.com/v75491909.htm?fromTitle=%E5%91%A8%E6%B7%B1&ch=frombaikevr';
});
document.getElementById('26').addEventListener('click', function() {
  window.location.href = 'https://baike.sogou.com/v53271.htm?fromTitle=%E5%BC%A0%E9%9D%93%E9%A2%96&ch=frombaikevr';
});
document.getElementById('27').addEventListener('click', function() {
  window.location.href = 'https://baike.sogou.com/v49496.htm?fromTitle=%E5%BC%A0%E6%9D%B0&ch=frombaikevr';
});
document.getElementById('28').addEventListener('click', function() {
  window.location.href = 'https://baike.sogou.com/v71576.htm?fromTitle=%E5%BC%A0%E8%BF%9C&ch=frombaikevr';
});
document.getElementById('29').addEventListener('click', function() {
  window.location.href = 'https://baike.sogou.com/v47993.htm?fromTitle=%E8%AE%B8%E5%B5%A9&ch=frombaikevr';
});
document.getElementById('30').addEventListener('click', function() {
  window.location.href = 'https://baike.sogou.com/v124277.htm?fromTitle=%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87&ch=frombaikevr';
});
document.getElementById('31').addEventListener('click', function() {
  window.location.href = 'https://baike.sogou.com/v72219662.htm?fromTitle=%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%88&ch=frombaikevr';
});
document.getElementById('32').addEventListener('click', function() {
  window.location.href = 'https://baike.sogou.com/v165376968.htm?fromTitle=%E6%AF%9B%E4%B8%8D%E6%98%93&ch=frombaikevr';
});

document.getElementById('33').addEventListener('click', function() {
  window.location.href = '../lyrics/1/index.html';
});
document.getElementById('34').addEventListener('click', function() {
  window.location.href = '../lyrics/2/index.html';
});
document.getElementById('35').addEventListener('click', function() {
  window.location.href = '../lyrics/3/index.html';
});
document.getElementById('36').addEventListener('click', function() {
  window.location.href = '../lyrics/4/index.html';
});
document.getElementById('37').addEventListener('click', function() {
  window.location.href = '../lyrics/5/index.html';
});
document.getElementById('38').addEventListener('click', function() {
  window.location.href = '../lyrics/6/index.html';
});
document.getElementById('39').addEventListener('click', function() {
  window.location.href = '../lyrics/7/index.html';
});

Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
  console.log('111', element.getElementsByTagName('img')[0].src)
  element.getElementsByTagName('img')[0].src = songs[i].poster;
  element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})