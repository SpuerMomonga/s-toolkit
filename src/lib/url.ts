export function isInternalBrowserUrl(url: string): boolean {
  // 定义浏览器内部 URL 的正则表达式
  const internalUrlRegex = /^(chrome|edge|about|view-source|data|blob):/;
  // 使用正则表达式测试 URL
  return internalUrlRegex.test(url);
}
