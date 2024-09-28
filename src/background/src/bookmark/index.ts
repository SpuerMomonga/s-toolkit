import { isInternalBrowserUrl } from '@/lib/url';

chrome.contextMenus.onClicked.addListener(createBookmark);

function createBookmark(info: chrome.contextMenus.OnClickData, tab?: chrome.tabs.Tab) {
  if (tab?.url && !isInternalBrowserUrl(tab.url)) {
    getBookmarkItem(tab.id!);
  }
}

function getBookmarkItem(tabId: number) {
  // const item: BookmarkItem;
  chrome.scripting.executeScript(
    {
      target: { tabId },
      func: () => {
        const metaNames = ['keywords', 'description', 'og:description', 'twitter:description'];
        const extractedMeta: any = {};
        metaNames.forEach((name) => {
          const meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`) as HTMLMetaElement;
          if (meta) {
            extractedMeta[name] = meta.content;
          }
        });
        return extractedMeta;
      },
    },
    (res) => {
      if (res && res[0]) {
        console.log('当前标签页的 HTML 内容：', res[0].result);
      }
    },
  );
}

/**
 * 创建添加书签上下文菜单
 */
function createBookmarkContextMenu() {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: 'create-bookmark',
      title: '添加书签到 S-Toolkit',
    });
  });
}

/**
 * 创建取消书签上下文菜单
 */
function createUnbookmarkContextMenu() {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: 'create-unbookmark',
      title: '从 S-Toolkit 取消书签',
    });
  });
}

/**
 * 移除书签上下文菜单
 */
function removeBookmarkContextMenu() {
  chrome.contextMenus.removeAll();
}

// 插件初始化或更新时注册上下文菜单
chrome.runtime.onInstalled.addListener(createBookmarkContextMenu);

function updateBookmarkIconAndMenu(tab: chrome.tabs.Tab) {
  if (!tab.url) return;
  //浏览器内部url
  if (isInternalBrowserUrl(tab.url)) {
    removeBookmarkContextMenu();
    return;
  }

  // TODO : 获取当前页是否收藏
  const url = 'https://ui.shadcn.com/docs/components/button'; // 伪代码

  if (tab.url.trim() === url) {
    createUnbookmarkContextMenu();
    chrome.action.setIcon({
      path: {
        16: 'icon/icon-16-star.png',
        48: 'icon/icon-48-star.png',
      },
      tabId: tab.id,
    });
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    updateBookmarkIconAndMenu(tab);
  }
});

chrome.tabs.onActivated.addListener(({ tabId }) => {
  chrome.tabs.get(tabId, (tab) => {
    updateBookmarkIconAndMenu(tab);
  });
});
