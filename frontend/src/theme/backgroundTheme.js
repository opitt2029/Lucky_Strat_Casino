export const BACKGROUND_ASSET_FOLDER = '/backgrounds/'

const asset = (fileName) => {
  if (!fileName) {
    return 'none'
  }

  return `url("${BACKGROUND_ASSET_FOLDER}${fileName}")`
}

export const gameCatalog = [
  {
    id: 'slot',
    to: '/game/slot',
    title: '老虎機',
    caption: '3x3 轉輪 / 100 起注',
    meta: '快速局',
    assetKey: 'slotGame',
  },
  {
    id: 'baccarat',
    to: '/game/baccarat',
    title: '百家樂',
    caption: '莊 / 閒 / 和 三區下注',
    meta: '牌桌局',
    assetKey: 'baccaratGame',
  },
]

export const shopCatalog = [
  {
    id: 'vip-ticket',
    title: 'VIP 入場券',
    caption: '預留給活動、抽獎或限時桌台資格',
    cost: 12000,
    assetKey: 'shopPrizeA',
  },
  {
    id: 'avatar-frame',
    title: '會員頭像框',
    caption: '可接會員中心外觀裝飾',
    cost: 8000,
    assetKey: 'shopPrizeB',
  },
  {
    id: 'bonus-box',
    title: '幸運禮盒',
    caption: '預留給兌換碼、道具或實體禮品',
    cost: 20000,
    assetKey: 'shopPrizeC',
  },
]

export const decorativeAssets = {
  homeHero: {
    image: '',
    label: '首頁主視覺',
    caption: '可放品牌 KV、角色或場景圖',
    overlay:
      'linear-gradient(90deg, rgba(66, 3, 8, 0.92) 0%, rgba(128, 8, 15, 0.64) 48%, rgba(24, 1, 4, 0.95) 100%), radial-gradient(circle at 82% 18%, rgba(255, 230, 148, 0.2), transparent 34%)',
  },
  homeGames: {
    image: '',
    label: '遊戲入口素材',
    caption: '可放遊戲集合、轉輪或牌桌情境',
    overlay:
      'linear-gradient(135deg, rgba(130, 7, 14, 0.74) 0%, rgba(17, 1, 3, 0.94) 100%), radial-gradient(circle at 18% 20%, rgba(248, 213, 106, 0.18), transparent 32%)',
  },
  memberHero: {
    image: '',
    label: '會員頁素材',
    caption: '可放會員徽章、登入背景或品牌角色',
    overlay:
      'linear-gradient(180deg, rgba(95, 5, 11, 0.62) 0%, rgba(18, 1, 4, 0.94) 100%), radial-gradient(circle at 70% 16%, rgba(255, 234, 160, 0.18), transparent 30%)',
  },
  gamesGallery: {
    image: '',
    label: '遊戲大全素材',
    caption: '可放收編遊戲牆或分類視覺',
    overlay:
      'linear-gradient(135deg, rgba(93, 3, 9, 0.68) 0%, rgba(12, 1, 3, 0.94) 100%), radial-gradient(circle at 78% 24%, rgba(248, 213, 106, 0.16), transparent 32%)',
  },
  slotGame: {
    image: '',
    label: '老虎機素材',
    caption: '可放遊戲封面、角色或機台圖',
    overlay:
      'linear-gradient(135deg, rgba(188, 11, 21, 0.28) 0%, rgba(15, 1, 3, 0.92) 100%), radial-gradient(circle at 22% 18%, rgba(255, 234, 160, 0.18), transparent 28%)',
  },
  baccaratGame: {
    image: '',
    label: '百家樂素材',
    caption: '可放牌桌、荷官或籌碼圖',
    overlay:
      'linear-gradient(135deg, rgba(132, 7, 14, 0.36) 0%, rgba(14, 1, 3, 0.92) 100%), radial-gradient(circle at 76% 18%, rgba(248, 213, 106, 0.16), transparent 30%)',
  },
  shopHero: {
    image: '',
    label: '商城主視覺',
    caption: '可放禮品、寶箱或兌換活動圖',
    overlay:
      'linear-gradient(90deg, rgba(65, 3, 8, 0.9) 0%, rgba(153, 9, 17, 0.58) 58%, rgba(18, 1, 4, 0.96) 100%), radial-gradient(circle at 72% 24%, rgba(255, 234, 160, 0.22), transparent 34%)',
  },
  shopPrizeA: {
    image: '',
    label: '禮品素材 A',
    caption: 'VIP 票券圖',
    overlay:
      'linear-gradient(135deg, rgba(255, 214, 86, 0.24) 0%, rgba(77, 3, 8, 0.88) 100%)',
  },
  shopPrizeB: {
    image: '',
    label: '禮品素材 B',
    caption: '頭像框圖',
    overlay:
      'linear-gradient(135deg, rgba(248, 213, 106, 0.18) 0%, rgba(107, 5, 12, 0.9) 100%)',
  },
  shopPrizeC: {
    image: '',
    label: '禮品素材 C',
    caption: '禮盒圖',
    overlay:
      'linear-gradient(135deg, rgba(201, 13, 24, 0.34) 0%, rgba(18, 1, 4, 0.88) 100%), radial-gradient(circle at 76% 22%, rgba(255, 234, 160, 0.18), transparent 28%)',
  },
}

export const backgroundTheme = {
  app: {
    color: '#160103',
    image: '',
    overlay:
      'linear-gradient(180deg, rgba(52, 2, 6, 0.9) 0%, rgba(104, 5, 12, 0.72) 42%, rgba(14, 1, 3, 0.96) 100%)',
    accent:
      'radial-gradient(circle at 18% 12%, rgba(255, 234, 160, 0.22), transparent 30%), radial-gradient(circle at 82% 0%, rgba(201, 13, 24, 0.32), transparent 28%)',
    position: 'center',
    size: 'cover',
  },
  auth: {
    color: '#170103',
    image: '',
    overlay:
      'linear-gradient(135deg, rgba(51, 2, 6, 0.94) 0%, rgba(114, 6, 13, 0.72) 48%, rgba(14, 1, 3, 0.96) 100%)',
    accent:
      'radial-gradient(circle at 14% 18%, rgba(255, 234, 160, 0.24), transparent 28%), radial-gradient(circle at 78% 86%, rgba(201, 13, 24, 0.28), transparent 32%)',
    position: 'center',
    size: 'cover',
  },
  authHero: {
    color: '#180103',
    image: '',
    overlay:
      'linear-gradient(180deg, rgba(108, 6, 13, 0.54) 0%, rgba(18, 1, 4, 0.9) 100%)',
    accent:
      'radial-gradient(circle at 24% 20%, rgba(255, 234, 160, 0.28), transparent 30%), radial-gradient(circle at 78% 66%, rgba(201, 13, 24, 0.28), transparent 34%)',
    position: 'center',
    size: 'cover',
  },
  lobbyHero: {
    color: '#170103',
    image: '',
    overlay:
      'linear-gradient(90deg, rgba(55, 2, 7, 0.9) 0%, rgba(133, 7, 15, 0.58) 58%, rgba(12, 1, 3, 0.92) 100%)',
    accent:
      'radial-gradient(circle at 72% 22%, rgba(255, 234, 160, 0.22), transparent 28%), radial-gradient(circle at 92% 82%, rgba(248, 213, 106, 0.1), transparent 24%)',
    position: 'center',
    size: 'cover',
  },
  home: {
    color: '#170103',
    image: '',
    overlay:
      'linear-gradient(180deg, rgba(61, 2, 7, 0.92) 0%, rgba(118, 6, 13, 0.72) 48%, rgba(13, 1, 3, 0.96) 100%)',
    accent:
      'radial-gradient(circle at 16% 12%, rgba(255, 234, 160, 0.25), transparent 28%), radial-gradient(circle at 82% 20%, rgba(201, 13, 24, 0.34), transparent 30%)',
    position: 'center',
    size: 'cover',
  },
  shop: {
    color: '#170103',
    image: '',
    overlay:
      'linear-gradient(180deg, rgba(54, 2, 7, 0.9) 0%, rgba(116, 6, 13, 0.74) 46%, rgba(13, 1, 3, 0.96) 100%)',
    accent:
      'radial-gradient(circle at 18% 18%, rgba(255, 234, 160, 0.22), transparent 30%), radial-gradient(circle at 78% 78%, rgba(201, 13, 24, 0.3), transparent 32%)',
    position: 'center',
    size: 'cover',
  },
}

export function getBackgroundStyle(name = 'app') {
  const preset = backgroundTheme[name] || backgroundTheme.app

  return {
    '--theme-bg-color': preset.color,
    '--theme-bg-image': asset(preset.image),
    '--theme-bg-overlay': preset.overlay || 'none',
    '--theme-bg-accent': preset.accent || 'none',
    '--theme-bg-position': preset.position || 'center',
    '--theme-bg-size': preset.size || 'cover',
  }
}

export function getDecorativeAssetStyle(name) {
  const preset = decorativeAssets[name] || decorativeAssets.homeHero

  return {
    '--decorative-image': asset(preset.image),
    '--decorative-overlay': preset.overlay || 'linear-gradient(135deg, rgba(24, 24, 27, 0.72), rgba(9, 9, 11, 0.92))',
  }
}
