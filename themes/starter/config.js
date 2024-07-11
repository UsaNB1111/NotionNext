/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '欢迎来到我的网站！', // 英雄区文字
  STARTER_HERO_TITLE_2: '此主题如想探索更多，请点击"继续探索"', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '继续探索', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://www.msgzs.cloudns.org/', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: 'B站主页', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://space.bilibili.com/168058198', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: '/public/web.ico', // 产品预览图 ，默认读取public目录下图片
  
  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
 
  // 404页面的提示语
  STARTER_404_TITLE: 'Oh,No!您想找的东西不存在！',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在',
  STARTER_404_BACK: '回到主页',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://www.msgzs.cloudns.org', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
