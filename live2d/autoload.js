// 加载 CSS
$("<link>").attr({
    href: "//cdn.jsdelivr.net/gh/juezho/cdn/live2d/waifu.css",
    rel: "stylesheet",
    type: "text/css"
}).appendTo('head');

// 插入 DIV
$('body').append('<div class="prpr"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas></div><div class="live2d-tool hide-live2d no-select"><div class="keys">Hide</div></div><div class="live2d-tool switch-live2d no-select"><div class="keys">Switch</div></div><div class="live2d-tool save-live2d no-select"><div class="keys">Save</div></div>');

// 加载 JS
$.ajax({
    url: '//cdn.jsdelivr.net/gh/juezho/cdn/live2d/live2d.min.js',
    dataType: "script",
    cache: true,
    async: false
});
$.ajax({
    url: '//cdn.jsdelivr.net/gh/juezho/cdn/live2d/waifu-tips.min.js',
    dataType: "script",
    cache: true,
    async: false,
    success: function(){
        live2d_try();
    }
    
});


function live2d_try() {
    // 初始化看板娘，加载 waifu-tips.json
    try {
        live2d_settings && loadlive2d;
        /* 可直接修改部分参数 */
        live2d_settings['modelId'] = 1; // 默认模型 ID
        live2d_settings['modelTexturesId'] = 87; // 默认材质 ID
        live2d_settings['modelStorage'] = true; // 储存模型 ID
        live2d_settings['modelAPI'] = '//live2d.fghrsh.net/api/'; // 自建 API 修改这里
        live2d_settings['hitokotoAPI'] = '\fghrsh.net'; // 一言 API，可选 'lwl12.com', 'hitokoto.cn', 'jinrishici.com'(古诗词)
        live2d_settings['waifuEdgeSide'] = 'left:30'; // 看板娘贴边方向，例如 'left:0'(靠左 0px), 'right:30'(靠右 30px)
        live2d_settings['waifuDraggable'] = 'disable'; // 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽), 'unlimited'(自由拖拽)
        live2d_settings['homePageUrl'] = '/'; // 主页地址，可选 'auto'(自动), '{URL 网址}'
        live2d_settings['showToolMenu'] = false; // 显示 工具栏          ，可选 true(真), false(假)
        live2d_settings['canTakeScreenshot'] = false; // 显示 看板娘截图  按钮，可选 true(真), false(假)
        live2d_settings['canTurnToAboutPage'] = false; // 显示 跳转关于页  按钮，可选 true(真), false(假)
        live2d_settings['canSwitchModel'] = false; // 显示 模型切换    按钮，可选 true(真), false(假)
        /* 在 initModel 前添加 */
        initModel('//cdn.jsdelivr.net/gh/juezho/cdn/live2d/waifu-tips.json');
    } catch {
        setTimeout(function () {
            live2d_try()
        }, 5000)
    }
}