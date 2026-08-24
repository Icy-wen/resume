# 可爱涂鸦风 · PPT 动画简历 ✦

参考「手绘涂鸦 + 粉彩可爱」风格的 **PPT 动画式个人简历网站**。每一页简历区块是一张全屏幻灯片，翻页带滑入/淡入与错落入场动画，支持键盘与进度点导航。

## 技术栈
- Vite 5 + React 18 + TypeScript 5
- Tailwind CSS 3.4（粉彩设计 token）
- framer-motion（页间切换与子元素 stagger 动画）
- lucide-react（图标）

## 启动
```bash
npm install
npm run dev      # 本地预览，默认 http://localhost:5173
npm run build    # 生产构建
npm run preview  # 预览构建产物
```

## 操作方式
- 键盘 `←` / `→` / 空格：上一页 / 下一页
- `Home` / `End`：跳到首页 / 末页
- 底部圆点点选：直接跳到对应页
- 底部 `‹` `›` 按钮：翻页

## 如何替换成你自己的简历
所有文案集中在 `src/data/resume.ts`：
- `name` / `title` / `slogan` / `tagline`：Hero 区姓名与标语
- `about`：个人简介
- `skills`：技能标签（`level` 为 0–100 的熟练度，`tone` 为粉彩配色）
- `experiences`：工作经历时间线
- `educations`：教育背景
- `projects`：项目卡片（含 `tags` 与 `link`）
- `contacts` / `email`：联系方式与社交链接

> 直接编辑该文件即可，无需改动任何组件。

## 目录结构
```
src/
├── App.tsx                # 幻灯片组装：顶栏 + 视口 + 底栏
├── index.css             # 全局样式与设计 token 基础
├── data/resume.ts        # 简历数据（改这里）
├── hooks/useSlideDeck.ts # 幻灯片状态机 + 键盘导航
├── components/
│   ├── TopBar.tsx        # 固定顶栏：姓名 + 进度条
│   ├── SlideNav.tsx      # 固定底栏：翻页 + 圆点
│   ├── SlideShell.tsx    # 单页容器 + 错落入场动画
│   └── doodles/          # 手绘 SVG 涂鸦（星星/圆点/圆圈/波浪/爱心）
└── sections/             # 七页幻灯片内容
```

## 设计风格
浅米白底、粉彩四色（粉 / 蓝 / 绿 / 黄）、手写体标题（ZCOOL KuaiLe）、散落手绘涂鸦、柔和圆角与轻阴影；装饰 `pointer-events:none` 不挡交互，文字保持 AA 对比度。
