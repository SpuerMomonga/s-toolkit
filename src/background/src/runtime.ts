// 插件初始化或更新时注册上下文菜单
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'collect',
    title: '收藏到 S-Toolkit',
    contexts: ['page'],
  });
});
