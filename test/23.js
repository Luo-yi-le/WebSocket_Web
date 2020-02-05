// window.onload = function(){
//     //存放音乐列表，根据音乐文件路径，进行填写
//     var musicList = ["../music/Doctor Vox - Frontier.mp3","../music/杨小壮 - 孤芳自赏.mp3"]
//     playMusic(musicList);
// }
//  
// function playMusic(musicList){
//     var myAudio = new Audio();
//     //是否进行预加载
//     myAudio.preload = false;
//     //是否显示隐藏按钮
//     myAudio.controls = true;
//     myAudio.hidden = true;
//     //从音乐列表中，获取最后一个音乐（并删除）
//     var src = musicList.pop();
//     myAudio.src =src;
//     //将最后一个音乐添加到数组的开头，这样实现循环
//     musicList.unshift(src);
//     //绑定音乐结束事件，当音乐播放完成后，将会触发playEndedHandler方法
//     myAudio.addEventListener("ended",playEndedHandler,false);
//     //播放当前音乐
//     myAudio.play();
//     document.getElementById("music").appendChild(myAudio);
//     //将循环播放关闭，如果开启，将不能触发playEndedHandler方法，只能进行单曲循环
//     myAudio.loop = false;
//  
//     function playEndedHandler(){
//         src = musicList.pop();
//         myAudio.src = src;
//         musicList.unshift(src);
//         myAudio.play();
//     }
// }
var sound1 = "../music/Doctor Vox - Frontier.mp3"
var sound2 = "../music/杨小壮 - 孤芳自赏.mp3"
var x = Math.round(Math.random() * 10)
if (x == 0) x = sound1
else if (x == 1) x = sound2
else if (x == 2) x = sound3
else if (x == 3) x = sound4
else if (x == 4) x = sound5
else if (x == 5) x = sound6
else if (x == 6) x = sound7
else if (x == 7) x = sound8
else if (x == 8) x = sound9
else x = sound10
if (navigator.appName == "Microsoft Internet Explorer") {
	document.write('<embed src=' + '"' + x + '"' + ' loop="infinite">')
} else {
	document.write('<embed src=' + '"' + x + '"' + 'hidden="true" autostart="true" loop="true">')
}
