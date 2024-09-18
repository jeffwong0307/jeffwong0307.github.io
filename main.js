document.addEventListener('DOMContentLoaded', function() {
    const bubbles = document.querySelectorAll('.bubble img');

    bubbles.forEach(bubble => {
        const offset = Math.random() * 12; // 生成0到12秒之间的随机数
        bubble.style.animationDelay = `-${offset}s`; // 设置负数的动画延迟
    });
});



// document.addEventListener('DOMContentLoaded', function() {
//     var bentoUpCardItem = document.querySelector('.bento-up-card-item');
//     var dynamicTextElements = document.querySelectorAll('.bento-up-card-item p');

//     // 动态计算字体大小
//     function setFontSize() {
//         var parentHeight = bentoUpCardItem.offsetHeight;
//         var fontSize = parentHeight * 0.24;
//         var lineHeight =  parentHeight * 0.4;
//         // 遍历所有需要动态调整字体大小的元素
//         dynamicTextElements.forEach(function(element) {
//             element.style.fontSize = fontSize + 'px';
//         });
        
//         dynamicTextElements.forEach(function(element) {
//             element.style.lineHeight = lineHeight + 'px';
//         });
//     }

//     setFontSize(); // 初始化字体大小
//     window.addEventListener('resize', function() {
//         requestAnimationFrame(setFontSize); // 使用 requestAnimationFrame 进行平滑过渡
//     });
// });