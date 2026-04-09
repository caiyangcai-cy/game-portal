# 🗺️ CY 全部项目速查手册

> 最后更新：2026-04-07

---

## 📌 账号总览

| 平台 | 账号 | 用途 |
|------|------|------|
| **GitHub** | `caiyangcai-cy` | 所有代码仓库 |
| **Vercel** | `boris5352-3469`（Hobby 免费版） | 个人网站部署 |
| **Netlify** | （你的 Netlify 账号） | 游戏站 + 游戏本体托管 |
| **Git 身份** | `cy` / `caiyang.cycy@163.com` | 提交代码用 |

---

## 🌐 所有线上网址

### 个人作品集网站（portfolio2）
| 名称 | 网址 | 说明 |
|------|------|------|
| 主站首页 | `https://cy-portfolio-kappa.vercel.app` | 个人介绍 + 作品展示入口 |
| 小樱（Vercel） | `https://cy-portfolio-kappa.vercel.app/sakura/magic-sakura-tarot.html` | 从个人网站进入的小樱 |
| 塔罗牌（Vercel） | `https://cy-portfolio-kappa.vercel.app/tarot/index.html` | 从个人网站进入的塔罗牌 |

### 游戏独立访问（Netlify）
| 名称 | 网址 | 说明 |
|------|------|------|
| 小樱魔法卡 | `https://cycy-portfolio.netlify.app/sakura/index.html` | 游戏站引用的小樱入口 |
| 塔罗牌占卜 | `https://cycy-portfolio.netlify.app/tarot/index.html` | 游戏站引用的塔罗牌入口 |

### 游戏门户站（game-portal）✅ 已上线
| 名称 | 网址 | 说明 |
|------|------|------|
| CYou Games 游戏站 | `https://cyougames.netlify.app` | 弱化个人信息，纯游戏体验 |

---

## 📂 本地项目对照表

| 本地路径 | 是什么 | GitHub 仓库 | 部署到哪 |
|----------|--------|-------------|----------|
| `/Users/cy/WorkBuddy/portfolio2/` | 个人作品集网站 | `caiyangcai-cy/cy-portfolio` | **Vercel** → `cy-portfolio-kappa.vercel.app` |
| `/Users/cy/WorkBuddy/game-portal/` | 游戏门户站 | `caiyangcai-cy/game-portal` | **Netlify** → `cyougames.netlify.app` |

---

## 🎮 两款游戏的关系

```
portfolio2/sakura/   ─── 小樱魔法卡源代码
portfolio2/tarot/    ─── 塔罗牌占卜源代码
        │
        ├── Vercel 部署 → cy-portfolio-kappa.vercel.app/sakura/...
        │                  cy-portfolio-kappa.vercel.app/tarot/...
        │
        └── Netlify 部署 → cycy-portfolio.netlify.app/sakura/...
                           cycy-portfolio.netlify.app/tarot/...
                                    ↑
                           game-portal 的游戏链接指向这里
```

**简单说：**
- 游戏源代码都在 `portfolio2` 里
- 游戏通过 Vercel 和 Netlify **双重部署**了（同一份代码）
- `game-portal`（游戏站）是一个独立的展示门户，里面的"开始游戏"按钮链接到 Netlify 上的游戏地址

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
# → Netlify 自动部署（关联完成后）
```

### 改了小樱或塔罗牌的游戏内容
游戏代码在 `portfolio2/sakura/` 和 `portfolio2/tarot/` 下，推送 portfolio2 即可同时更新 Vercel 和 Netlify 上的游戏。

---

## ⚠️ 注意事项

1. **Vercel 的 `.vercel.app` 域名**在国内可能需要翻墙。个人网站如果要国内访问，建议绑自定义域名或迁移到 Netlify。
2. **Netlify 的 `.netlify.app` 域名**国内大部分地区可直接访问。
3. **推送时的认证**：macOS Keychain 已缓存 GitHub 凭据（PAT），正常 `git push` 即可，无需每次输密码。
4. **游戏需要摄像头权限**：必须通过 HTTPS 访问才能调用摄像头（localhost 除外）。
