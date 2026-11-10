// ===== 團購設定：要改價格、截止日、連結，改這個檔案就好 =====
window.SHOP = {
  // 截止時間（台灣時間）
  deadline: '2026-11-13T23:59:59+08:00',

  // Google 試算表的 Apps Script 網址（照 README 步驟取得後貼在引號裡）
  sheetUrl: 'https://script.google.com/macros/s/AKfycbw2Np82bx_4unZX_LPx7P7O2MP6mCb3LywD-YT89DOdH60I4-2UjuHLJkX7TN1onNVLhw/exec',

  // 三個團購的入口頁網址（做好後貼在引號裡；留空就不顯示按鈕）
  hubUrl: '',

  // 賣場 IG 帳號（不含 @）
  ig: 'smooch_home',

  // 運費
  shipping: 100,

  // 商品與價格
  products: {
    A3: { name: 'A3 兩入組', size: '約 30 × 42 cm', orig: 1980, price: 1480 },
    A2: { name: 'A2 兩入組', size: '約 42 × 59 cm', orig: 2700, price: 2380 }
  },

  // 匯款資訊
  bank: { name: '彰化銀行（009）', account: '22005113364100', memo: '團購' },

  // 抽獎說明
  lottery: '雙 11 三個團購頁，任選兩個下單就能參加抽獎。獎項近期公布。'
};
