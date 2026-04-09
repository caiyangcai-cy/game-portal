# 🗺️ CY 全部项目速查手册

> 最后更新：2026-04-09

---

## 📌 账号总览

| 平台 | 账号 | 用途 |
|------|------|------|
| **GitHub** | `caiyangcai-cy` | 所有代码仓库 |
| **Vercel** | `boris5352-3469`（Hobby 免费版） | 个人网站部署 |
| **腾讯 EdgeOne Pages** | 腾讯云控制台 | 游戏门户站部署 |
| **Git 身份** | `cy` / `caiyang.cycy@163.com` | 提交代码用 |

---

## 🌐 所有线上网址

### 个人作品集网站（portfolio2）
| 名称 | 网址 | 说明 |
|------|------|------|
| 主站首页 | `https://cy-portfolio-kappa.vercel.app` | 个人介绍 + 作品展示入口 |
| 小樱（Vercel） | `https://cy-portfolio-kappa.vercel.app/sakura/magic-sakura-tarot.html` | 从个人网站进入的小樱 |
| 塔罗牌（Vercel） | `https://cy-portfolio-kappa.vercel.app/tarot/index.html` | 从个人网站进入的塔罗牌 |

### 游戏门户站（game-portal）✅ 已上线
| 名称 | 网址 | 说明 |
|------|------|------|
| CYou Games 游戏站 | `https://cyougames.site` | 纯游戏体验门户 |
| 小樱魔法卡 | `https://cyougames.site/games/sakura/index.html` | 游戏内嵌在 game-portal 仓库 |
| 塔罗牌占卜 | `https://cyougames.site/games/tarot/index.html` | 游戏内嵌在 game-portal 仓库 |

> ⚠️ 旧的 Netlify 地址（`cycy-portfolio.netlify.app`、`cyougames.netlify.app`）已弃用，不再维护。

---

## 📂 本地项目对照表

| 本地路径 | 是什么 | GitHub 仓库 | 部署到哪 |
|----------|--------|-------------|----------|
| `/Users/cy/WorkBuddy/portfolio2/` | 个人作品集网站 | `caiyangcai-cy/cy-portfolio` | **Vercel** → `cy-portfolio-kappa.vercel.app` |
| `/Users/cy/WorkBuddy/game-portal/` | 游戏门户站 | `caiyangcai-cy/game-portal` | **EdgeOne Pages** → `cyougames.site` |

---

## 🎮 两款游戏的关系

```
game-portal/games/sakura/   ─── 小樱魔法卡（完整源码，内嵌）
game-portal/games/tarot/    ─── 塔罗牌占卜（完整源码，内嵌）
        │
        └── EdgeOne Pages 部署 → cyougames.site/games/sakura/...
                                  cyougames.site/games/tarot/...
                                           ↑
                           game-portal 的 play.html iframe 加载本地路径
```

**简单说：**
- 游戏源代码**已内嵌到 game-portal 的 games/ 子目录**
- game-portal 完全自包含，不依赖任何外部站点
- `games-data.js` 的 entry 指向本地相对路径：`games/sakura/index.html`、`games/tarot/index.html`
- portfolio2 里也有一份游戏代码（Vercel 部署），但 game-portal 不引用它

---

## 🚀 日常更新操作

### 改了个人网站（portfolio2）
```bash
cd /Users/cy/WorkBuddy/portfolio2
git add -A
git commit -m "修改说明"
git push origin main
# → Vercel 自动部署，几秒后生效
```

### 改了游戏门户站（game-portal）
```bash
cd /Users/cy/WorkBuddy/game-portal
git add -A
git commit -m "修改说明"
git push origin main
# → EdgeOne Pages 自动部署（已关联 GitHub）
# → 如未自动触发，去 EdgeOne 控制台手动点"新建部署"
```

### 改了游戏内容
游戏代码就在 `game-portal/games/sakura/` 和 `game-portal/games/tarot/` 下，改完推送 game-portal 即可。

---

## ⚠️ 注意事项

1. **EdgeOne Pages** 已关联 GitHub `game-portal` 仓库，push main 分支会自动触发部署。如果部署没更新，去控制台手动触发。
2. **Vercel 的 `.vercel.app` 域名**在国内可能需要翻墙。个人网站如果要国内访问，建议绑自定义域名。
3. **推送时的认证**：macOS Keychain 已缓存 GitHub 凭据（PAT），正常 `git push` 即可，无需每次输密码。
4. **游戏需要摄像头权限**：必须通过 HTTPS 访问才能调用摄像头（localhost 除外）。
5. **旧 Netlify 站点已弃用**：`cycy-portfolio.netlify.app` 和 `cyougames.netlify.app` 不再使用，如果看到 "Site not available" 说明访问了旧地址或浏览器缓存了旧内容。
