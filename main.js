document.addEventListener('DOMContentLoaded', function() {
    // 初始化气泡动画
    initBubbles();

    // 初始化模态窗口
    initModal();

    // 初始化导航菜单
    initNavigationMenu();
});

// 初始化气泡动画
function initBubbles() {
    const bubbles = document.querySelectorAll('.bubble img');

    bubbles.forEach(bubble => {
        const offset = Math.random() * 12; // 生成0到12秒之间的随机数
        bubble.style.animationDelay = `-${offset}s`; // 设置负数的动画延迟
    });
}

// 初始化模态窗口
function initModal() {
    // 获取模态窗口元素
    var modal = document.getElementById("myModal");

    // 获取关闭按钮
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "none";

    // 获取视频播放器和视频源元素
    var videoPlayer = document.getElementById('videoPlayer');
    var videoSource = document.getElementById('videoSource');

    // 定义视频源数组
    var videoSources = [
        'video/DAS.mp4', // 海报1的视频
        'video/SD.mp4', // 海报2的视频
        null,               // 海报3没有视频
        null                // 海报4没有视频
    ];


    // 获取所有海报
    var posters = document.querySelectorAll('.works-poster');

    // 为每个海报添加点击事件监听器
    posters.forEach((poster, index) => {
        poster.addEventListener('click', function(e) {
            var index = parseInt(poster.classList[1].split('-')[1]) - 1; // 解析海报编号

            if (videoSources[index] !== null) { // 如果有对应的视频源
                modal.style.display = "block";
                videoSource.src = videoSources[index];
                videoPlayer.load(); // 重新加载视频源
                videoPlayer.play(); // 开始播放视频
            } else {
                alert('即将上线！'); // 显示提示信息
            }
        });
    });

    // 点击×按钮关闭模态窗口
    span.addEventListener('click', function() {
        modal.style.display = "none";
        videoPlayer.pause(); // 停止播放视频
        videoPlayer.currentTime = 0; // 重置视频到开始位置
    });

    // 点击任意空白区域关闭模态窗口
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            videoPlayer.pause(); // 停止播放视频
            videoPlayer.currentTime = 0; // 重置视频到开始位置
        }
    });
}


// 初始化导航菜单
function initNavigationMenu() {
    var toggleMenuButton = document.querySelector('.toggle-menu');
    var dropdownMenu = document.querySelector('.dropdown-menu');
    // 获取关闭按钮 (只选取第一个 close-menu 元素)
    var close_menu = document.querySelector(".close-menu");

    // toggleMenuButton.style.display = "none";
    dropdownMenu.style.display = "none";

    // 切换下拉菜单的显示与隐藏
    toggleMenuButton.addEventListener('click', function(e) {
        e.stopPropagation(); // 阻止冒泡，避免触发关闭事件
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";     
        }
    });

    // 如果 close-menu 存在，给它添加点击事件
    if (close_menu) {
        close_menu.addEventListener('click', function() {
            dropdownMenu.style.display = "none";
        });
    }

    // 点击空白区域关闭下拉菜单
    window.addEventListener('click', function(event) {
        if (!event.target.closest('.toggle-menu') && !event.target.closest('.dropdown-menu')) {
            dropdownMenu.style.display = "none";
        }
    });
}

