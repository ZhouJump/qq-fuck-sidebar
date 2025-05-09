// 运行在 Electron 渲染进程 下的页面脚本
let config = await fuck_sidebar.getConfig()
function observeElement(selector, callback, callbackEnable = true, interval = 100) {
    const timer = setInterval(function () {
        const element = document.querySelector(selector);
        if (element) {
            if (callbackEnable) {
                callback();
            }
            clearInterval(timer);
        }
    }, interval);
}

function startFuck(){
    if(config.fuckQQ空间){
        observeElement('.sidebar__nav .nav-item[aria-label="空间"]', function () {
            document.querySelector('.sidebar__nav .nav-item[aria-label="空间"]').setAttribute('style','display:none')
        });
        observeElement('.sidebar__nav .nav-item:nth-child(3)', function () {
            document.querySelector('.sidebar__nav .nav-item:nth-child(3)').setAttribute('style','display:none')
        });
    }
    if(config.fuckQQ频道){
        observeElement('.sidebar__nav .nav-item[aria-label="频道"]', function () {
            document.querySelector('.sidebar__nav .nav-item[aria-label="频道"]').setAttribute('style','display:none')
        });
    }
    if(config.fuck游戏中心){
        observeElement('.sidebar__nav .nav-item[aria-label="游戏"]', function () {
            document.querySelector('.sidebar__nav .nav-item[aria-label="游戏"]').setAttribute('style','display:none')
        });
    }
    if(config.fuck更多){
        observeElement('.sidebar__nav .nav-item[aria-label="更多"]', function () {
            document.querySelector('.sidebar__nav .nav-item[aria-label="更多"]').setAttribute('style','display:none')
        });
    }
    if(config.fuckQQ邮箱){
        observeElement('.sidebar__menu .func-menu__item_wrap:has(.icon-item[aria-label="邮箱"])', function () {
            document.querySelector('.sidebar__menu .func-menu__item_wrap:has(.icon-item[aria-label="邮箱"])').setAttribute('style','display:none')
        });
    }
    if(config.fuck文件管理){
        observeElement('.sidebar__menu .func-menu__item_wrap:has(.icon-item[aria-label="文件管理器"])', function () {
            document.querySelector('.sidebar__menu .func-menu__item_wrap:has(.icon-item[aria-label="文件管理器"])').setAttribute('style','display:none')
        });
    }
    if(config.fuck收藏){
        observeElement('.sidebar__menu .func-menu__item_wrap:has(.icon-item[aria-label="收藏"])', function () {
            document.querySelector('.sidebar__menu .func-menu__item_wrap:has(.icon-item[aria-label="收藏"])').setAttribute('style','display:none')
        });
    }
}

startFuck()

// 打开设置界面时触发
export const onSettingWindowCreated = async view => {
    // view 为 Element 对象，修改将同步到插件设置界面
    view.innerHTML = await fuck_sidebar.getSettingsView()

    if(config.fuck收藏){
        view.querySelector("#fuck收藏").setAttribute('is-active','')
    }
    if(config.fuck文件管理){
        view.querySelector("#fuck文件管理").setAttribute('is-active','')
    }
    if(config.fuckQQ邮箱){
        view.querySelector("#fuckQQ邮箱").setAttribute('is-active','')
    }
    if(config.fuck游戏中心){
        view.querySelector("#fuck游戏中心").setAttribute('is-active','')
    }
    if(config.fuckQQ频道){
        view.querySelector("#fuckQQ频道").setAttribute('is-active','')
    }
    if(config.fuckQQ空间){
        view.querySelector("#fuckQQ空间").setAttribute('is-active','')
    }
    if(config.fuck更多){
        view.querySelector("#fuck更多").setAttribute('is-active','')
    }

    view.querySelector("#fuck收藏").onclick = () =>{
        config.fuck收藏 = !config.fuck收藏
        if(config.fuck收藏)
            view.querySelector("#fuck收藏").setAttribute('is-active','')
        else
            view.querySelector("#fuck收藏").removeAttribute('is-active')
    }

    view.querySelector("#fuck文件管理").onclick = () =>{
        config.fuck文件管理 = !config.fuck文件管理
        if(config.fuck文件管理)
            view.querySelector("#fuck文件管理").setAttribute('is-active','')
        else
            view.querySelector("#fuck文件管理").removeAttribute('is-active')
    }

    view.querySelector("#fuckQQ邮箱").onclick = () =>{
        config.fuckQQ邮箱 = !config.fuckQQ邮箱
        if(config.fuckQQ邮箱)
            view.querySelector("#fuckQQ邮箱").setAttribute('is-active','')
        else
            view.querySelector("#fuckQQ邮箱").removeAttribute('is-active')
    }

    view.querySelector("#fuck游戏中心").onclick = () =>{
        config.fuck游戏中心 = !config.fuck游戏中心
        if(config.fuck游戏中心)
            view.querySelector("#fuck游戏中心").setAttribute('is-active','')
        else
            view.querySelector("#fuck游戏中心").removeAttribute('is-active')
    }

    view.querySelector("#fuckQQ频道").onclick = () =>{
        config.fuckQQ频道 = !config.fuckQQ频道
        if(config.fuckQQ频道)
            view.querySelector("#fuckQQ频道").setAttribute('is-active','')
        else
            view.querySelector("#fuckQQ频道").removeAttribute('is-active')
    }

    view.querySelector("#fuckQQ空间").onclick = () =>{
        config.fuckQQ空间 = !config.fuckQQ空间
        if(config.fuckQQ空间)
            view.querySelector("#fuckQQ空间").setAttribute('is-active','')
        else
            view.querySelector("#fuckQQ空间").removeAttribute('is-active')
    }

    view.querySelector("#fuck更多").onclick = () =>{
        config.fuck更多 = !config.fuck更多
        if(config.fuck更多)
            view.querySelector("#fuck更多").setAttribute('is-active','')
        else
            view.querySelector("#fuck更多").removeAttribute('is-active')
    }

    view.querySelector("#fuckSave").onclick = async () =>{
        view.querySelector("#fuckSave").setAttribute('is-disabled','')
        await fuck_sidebar.saveConfig(JSON.stringify(config))
        startFuck()
        view.querySelector("#fuckSave").removeAttribute('is-disabled')
    }

}
