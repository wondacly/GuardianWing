/* ========== 中英双语数据字典 ========== */
const i18n = {
    zh: {
        "nav.problem": "痛点",
        "nav.solution": "方案",
        "nav.flywheel": "飞轮",
        "nav.walker": "助行器",
        "nav.phone": "电话助手",
        "nav.sensors": "传感映射",
        "nav.roadmap": "路线图",

        "hero.badge": "集成商业计划 · 2026",
        "hero.titleZh": "智翼守护",
        "hero.titleEn": "GuardianWing",
        "hero.subtitle": "智能助行 × AI 关护平台",
        "hero.tagline": "出门有扶，在家有问，风险先知。",
        "hero.desc": "一个跌倒预测引擎，两个入口，一个闭环 —— 出门有人扶，在家有人问，风险先知道。",
        "hero.btnSolution": "探索方案",
        "hero.btnSensors": "查看传感映射",

        "problem.title": "痛点 · 两个割裂的场景",
        "problem.desc": "移动中的数据留在街头，居家中的服务留在家里 —— 没有人把两者连成闭环。",
        "problem.sceneA.title": "场景 A · 出门",
        "problem.sceneA.desc": "怕跌倒、走不动、走累了没处坐。传统助行器无动力、无智能；电动轮椅笨重 —— 一坐就再也站不起来。",
        "problem.sceneB.title": "场景 B · 在家",
        "problem.sceneB.desc": "忘服药、不会用智能手机、跌倒无人知。子女远程无法掌握状况，意外发现总是太迟。",
        "problem.stat1": "中国 60+ 人口（百万）",
        "problem.stat2": "失能/半失能老人（百万）",
        "problem.stat3": "65+ 每年至少跌倒一次",
        "problem.stat4": "英国 NHS 年跌倒成本（£B）",

        "solution.title": "方案 · 一个引擎，两个入口，三端联动",
        "solution.desc": "云端健康引擎融合步态与体征数据，驱动移动入口与居家入口协同运转。",
        "solution.cloud.title": "云端健康引擎",
        "solution.cloud.desc": "步态 + 体征数据库 → 跌倒风险预测模型 → 干预策略",
        "solution.walker.title": "移动入口 · 智能助行器",
        "solution.walker.f1": "压力感知助力前进",
        "solution.walker.f2": "行走/落座一键切换（专利结构）",
        "solution.walker.f3": "IMU 步态采集（预测模型数据源）",
        "solution.walker.f4": "心率监测 + 跌倒/翻倒即时报警",
        "solution.walker.f5": "北斗定位 + 一键呼叫",
        "solution.phone.title": "居家入口 · AI 电话助手",
        "solution.phone.f1": "每日主动外呼：服药确认、健康问答",
        "solution.phone.f2": "零设备门槛 —— 任意电话线即可",
        "solution.phone.f3": "无应答自动升级：家属 → 紧急联系人",
        "solution.phone.f4": "结构化健康日志回流云端",
        "solution.app.title": "家属端 App",
        "solution.app.desc": "健康日报 · 异常警报 · 定位 · 远程语音",
        "solution.loop": "核心飞轮：助行器感知 → 电话干预 → 引擎学习。当模型发现步态退化时，AI 电话主动介入 —— 提醒、约诊、通知家属 —— 远在跌倒发生之前。",

        "flywheel.title": "数据飞轮 · 为什么它会自我增强",
        "flywheel.desc": "数据越多 → 预测越准 → 服务越值 → 用户越多 → 数据更多。",
        "flywheel.s1.title": "感知 Sense",
        "flywheel.s1.desc": "助行器每次出行采集步态、平衡、心率 —— 真实世界、每日、纵向数据。",
        "flywheel.s2.title": "预测 Predict",
        "flywheel.s2.desc": "引擎提前数周评估跌倒风险，而非跌倒后数秒才响应。",
        "flywheel.s3.title": "干预 Intervene",
        "flywheel.s3.desc": "AI 电话主动外呼：提醒、建议、升级 —— 零设备门槛。",
        "flywheel.s4.title": "学习 Learn",
        "flywheel.s4.desc": "每次干预结果回流模型，准确率持续提升，护城河持续加深。",

        "walker.title": "产品 I · 智能助行器",
        "walker.desc": "感知意图的助力、秒级坐站切换、全天候传感 —— Pro 版增加 SLAM 自主导航。",
        "walker.f1.title": "意图助力",
        "walker.f1.desc": "手柄压力传感器读取行走意图，驱动麦克纳姆轮 —— 走更远，更省力。",
        "walker.f2.title": "秒级坐站切换",
        "walker.f2.desc": "侧抽座椅 + 腿托外旋（专利申报中）—— 随时随地，即刻休息。",
        "walker.f3.title": "IMU 步态采集",
        "walker.f3.desc": "加速度 + 角速度实时捕获步态特征，为预测引擎提供核心数据源。",
        "walker.f4.title": "心率 + 翻倒报警",
        "walker.f4.desc": "运动心率监测，跌倒/翻倒即时告警，保障出行安全。",
        "walker.f5.title": "北斗定位 + 一键呼叫",
        "walker.f5.desc": "实时位置追踪，紧急情况一键联系家属或急救。",
        "walker.f6.title": "SLAM 自主导航（Pro）",
        "walker.f6.desc": "LiDAR + 双目视觉融合 SLAM，自主避障导航；全项体征监测套件。",
        "walker.tech.lidar": "ToF 测距，高精度点云，强环境适应",
        "walker.tech.camera": "超宽视场角，低光环境增强",
        "walker.tech.nearlink": "低功耗、高速、低延迟通信",
        "walker.tech.beidou": "精准定位，实时路径规划",

        "phone.title": "产品 II · AI 电话助手",
        "phone.desc": "不依赖任何智能设备 —— 每个老人已经拥有、已经信任、已经会接听的，只有电话。",
        "phone.callType": "每日外呼",
        "phone.user": "陈奶奶",
        "phone.d1": "早上好，陈奶奶。今天血压药吃了吗？",
        "phone.d2": "吃了，早饭后吃的。",
        "phone.d3": "好的。助行器数据显示您这周步子短了些 —— 膝盖感觉怎么样？",
        "phone.d4": "有点僵，说实话。",
        "phone.d5": "记下了。我会通知您女儿，建议预约检查。今天慢点走，好吗？",
        "phone.b1.title": "零设备门槛",
        "phone.b1.desc": "覆盖 80+ 高危群体 —— App、穿戴设备、陪伴机器人都触达不到的人。",
        "phone.b2.title": "结构化健康日志",
        "phone.b2.desc": "服药、情绪、活动能力 —— 每通电话自动转化为干净数据。",
        "phone.b3.title": "安全级升级",
        "phone.b3.desc": "助行器检测跌倒 → AI 数秒内致电 → 30 秒无应答 → 通知家属 → 紧急联系人。人工监督，绝非遗忘。",

        "sensors.title": "传感器 — 指标 — 风险映射",
        "sensors.desc": "点击任意行，查看该传感器的可计算指标、风险等级与守护建议。",
        "sensors.filterAll": "全部",
        "sensors.filterHigh": "高风险",
        "sensors.filterMedium": "中风险",
        "sensors.filterLow": "低风险",
        "sensors.col.sensor": "传感器",
        "sensors.col.raw": "原始信息",
        "sensors.col.index": "可计算指标",
        "sensors.col.risk": "可能反映的问题",
        "sensors.col.action": "操作",
        "sensors.detail.raw": "原始信息",
        "sensors.detail.index": "可计算指标",
        "sensors.detail.problem": "可能反映的问题",
        "sensors.detail.advice": "守护建议",
        "sensors.btnDetail": "查看详情",
        "sensors.risk.high": "高风险",
        "sensors.risk.medium": "中风险",
        "sensors.risk.low": "低风险",

        "innovation.title": "创新 · 成熟部件，首创闭环",
        "innovation.i1.title": "场景闭环",
        "innovation.i1.desc": "业内首个将动力助行硬件与 AI 主动外呼服务接入同一预测引擎的方案。",
        "innovation.i2.title": "零门槛交互",
        "innovation.i2.desc": "普通电话作为健康主入口 —— 数字照护终于纳入最高龄、最高风险的用户。",
        "innovation.i3.title": "坐站切换结构",
        "innovation.i3.desc": "侧抽座椅 + 腿托外旋 —— 可防御的结构设计（实用新型与外观专利申报中）。",
        "innovation.i4.title": "国产生态",
        "innovation.i4.desc": "星闪 + 北斗定位，嫁接华为生态与适老化补贴政策（星闪联盟 1,200+ 成员）。",

        "market.title": "市场 · 银发科技增长最快的一层",
        "market.s1": "中国康复辅助器具产业 (2024)",
        "market.s2": "个人移动辅助器具年增长率",
        "market.s3": "适老化智能科技产品 (2025)",
        "market.s4": "全球步行辅具市场 CAGR",
        "market.policy.title": "政策利好",
        "market.policy.c1": "中国：辅具购置/租赁补贴、长护险试点、智慧健康养老行动计划",
        "market.policy.c2": "英国：NHS 全国推广 AI 跌倒预测 (2025)；2027 年前约 200 万用户须换代",

        "business.title": "商业模式 · 硬件落地，订阅增长",
        "business.hard.title": "硬件 — 楔子",
        "business.hard.desc": "助行器销售与租赁将传感器中枢送入家庭，启动数据飞轮。",
        "business.hard.price": "补贴后自付 ¥3,000–5,000",
        "business.sub.title": "订阅 — 引擎",
        "business.sub.desc": "AI 电话助手 + 家属端 App，将一次硬件销售转化为多年经常性收入。",
        "business.sub.price": "¥30–60/月 家庭计划",

        "roadmap.title": "路线图 · 三年，三个验证点",
        "roadmap.p0.time": "0–6 个月",
        "roadmap.p0.title": "原型验证",
        "roadmap.p0.f1": "助行器样机：助力 + 坐站切换 + 跌倒报警",
        "roadmap.p0.f2": "AI 电话助手 MVP 上线",
        "roadmap.p0.f3": "2–3 项结构专利申报",
        "roadmap.p0.f4": "户外地形实测，确定轮系方案",
        "roadmap.p1.time": "6–18 个月",
        "roadmap.p1.title": "试点取证",
        "roadmap.p1.f1": "二类医疗器械注册申报",
        "roadmap.p1.f2": "2 家养老院 + 50 户家庭试点",
        "roadmap.p1.f3": "产出预测准确率与住院下降真实数据",
        "roadmap.p1.f4": "进入 1–2 个城市补贴/租赁目录",
        "roadmap.p2.time": "18–36 个月",
        "roadmap.p2.title": "规模复制",
        "roadmap.p2.f1": "基础版量产上市",
        "roadmap.p2.f2": "订阅用户破万",
        "roadmap.p2.f3": "预测模型临床级验证",
        "roadmap.p2.f4": "拓展保险/药企支付方",

        "footer.tagline": "让衰老不再意味着独自前行。",
        "footer.team": "智翼守护项目组",

        "nav.demo": "互动演示",
        "demo.title": "互动演示 · 走通守护闭环",
        "demo.desc": "选择一位老人，模拟从出行到关怀的完整守护流程。",
        "demo.step1": "选择用户",
        "demo.step2": "助行器出行",
        "demo.step3": "AI电话关怀",
        "demo.step4": "风险评估",
        "demo.step5": "家属端",
        "demo.chen.name": "陈奶奶 · 78岁",
        "demo.chen.desc": "轻度膝关节炎，独自居住，每日使用助行器散步。",
        "demo.chen.tag1": "独居",
        "demo.chen.tag2": "膝关节",
        "demo.wang.name": "王爷爷 · 82岁",
        "demo.wang.desc": "高血压史，偶有头晕，子女在外地工作。",
        "demo.wang.tag1": "高血压",
        "demo.wang.tag2": "异地子女",
        "demo.liu.name": "刘奶奶 · 85岁",
        "demo.liu.desc": "轻度偏瘫康复期，使用助行器进行康复训练。",
        "demo.liu.tag1": "康复期",
        "demo.liu.tag2": "偏瘫",
        "demo.gait": "步态稳定性",
        "demo.speed": "行走速度",
        "demo.heartrate": "心率",
        "demo.control": "助行器控制",
        "demo.modeWalk": "行走模式",
        "demo.modeSit": "落座模式",
        "demo.emergency": "一键呼叫",
        "demo.log": "实时事件",
        "demo.walkHint": "点击「开始出行」模拟助行器数据采集…",
        "demo.startWalk": "开始出行",
        "demo.incoming": "来电中…",
        "demo.answer": "接听",
        "demo.next": "下一步",
        "demo.riskScore": "跌倒风险评分",
        "demo.factors": "风险因子分析",
        "demo.intervention": "推荐干预策略",
        "demo.toFamily": "通知家属",
        "demo.familyApp": "家属端 App",
        "demo.voiceCall": "远程语音",
        "demo.viewLocation": "查看位置",
        "demo.location": "社区花园 · 安全区域",
        "demo.restart": "重新开始",
        "demo.complete": "守护闭环已走通！助行器感知 → AI 电话干预 → 引擎学习 → 家属通知。",

        "nav.login": "登录体验",
        "user.roleElder": "长者",
        "user.roleFamily": "家属",
        "user.dashboard": "体验中心",
        "user.logout": "退出登录",

        "auth.login": "登录",
        "auth.register": "注册",
        "auth.phone": "手机号 / 账号",
        "auth.phonePh": "请输入手机号",
        "auth.password": "密码",
        "auth.pwdPh": "请输入密码",
        "auth.loginBtn": "登录",
        "auth.registerBtn": "注册并登录",
        "auth.noAccount": "还没有账号？立即注册",
        "auth.hasAccount": "已有账号？去登录",
        "auth.name": "姓名",
        "auth.namePh": "请输入您的姓名",
        "auth.role": "身份",
        "auth.roleElder": "长者 / 用户",
        "auth.roleFamily": "家属",
        "auth.tip.empty": "请填写完整信息",
        "auth.tip.pwdLen": "密码至少 6 位",
        "auth.tip.phoneLen": "手机号格式不正确",
        "auth.tip.userNotFound": "账号不存在，请先注册",
        "auth.tip.wrongPwd": "密码错误",
        "auth.tip.userExists": "该手机号已注册",
        "auth.tip.regSuccess": "注册成功，正在登录…",
        "auth.tip.loginSuccess": "登录成功",

        "dash.title": "我的体验中心",
        "dash.desc": "登录后即可体验 GuardianWing 为您提供的完整守护服务。",
        "dash.pleaseLogin": "请先登录以体验完整功能",
        "dash.loginDesc": "登录后您可以查看助行器状态、AI 关怀记录、健康数据等。",
        "dash.goodDay": "您好",
        "dash.goodMorning": "早上好",
        "dash.goodAfternoon": "下午好",
        "dash.goodEvening": "晚上好",
        "dash.welcomeDesc": "今天的出行状态良好，AI 守护助手持续为您护航。",
        "dash.todayWalks": "今日出行",
        "dash.steps": "步数",
        "dash.riskLevel": "跌倒风险",
        "dash.feat1": "助行器状态",
        "dash.feat1Desc": "实时查看设备电量、连接状态与传感器数据",
        "dash.feat2": "AI 关怀记录",
        "dash.feat2Desc": "查看每日 AI 电话关怀与健康随访记录",
        "dash.feat3": "健康数据",
        "dash.feat3Desc": "步态、心率、血压趋势分析与周报",
        "dash.feat4": "预警中心",
        "dash.feat4Desc": "跌倒预警、异常提醒与紧急联系人",
        "dash.feat5": "家属端",
        "dash.feat5Desc": "与家人共享位置、健康数据与紧急通知",
        "dash.feat6": "设置",
        "dash.feat6Desc": "设备管理、个人信息、通知偏好",
        "dash.back": "返回",

        "dash.walker.title": "助行器状态",
        "dash.walker.battery": "电池电量",
        "dash.walker.connection": "连接状态",
        "dash.walker.connected": "已连接",
        "dash.walker.signal": "信号强度",
        "dash.walker.firmware": "固件版本",
        "dash.walker.lastSync": "上次同步",

        "dash.ai.title": "AI 关怀记录",
        "dash.ai.today": "今日关怀",
        "dash.ai.todayDesc": "已完成 2 次主动关怀通话",
        "dash.ai.history": "历史记录",

        "dash.health.title": "健康数据",
        "dash.health.gait": "本周平均步态稳定性",
        "dash.health.hr": "静息心率",
        "dash.health.bp": "血压（平均）",
        "dash.health.steps": "本周日均步数",
        "dash.health.report": "健康周报",

        "dash.alert.title": "预警中心",
        "dash.alert.fall": "跌倒预警",
        "dash.alert.fallStatus": "本月 0 次跌倒事件",
        "dash.alert.anomaly": "异常提醒",
        "dash.alert.anomalyStatus": "3 条待关注",
        "dash.alert.contact": "紧急联系人",

        "dash.family.title": "家属端",
        "dash.family.member": "绑定家属",
        "dash.family.share": "数据共享",
        "dash.family.shareOn": "已开启",
        "dash.family.notify": "通知频率",

        "dash.settings.title": "个人设置",
        "dash.settings.name": "姓名",
        "dash.settings.phone": "手机号",
        "dash.settings.role": "用户身份",
        "dash.settings.notify": "消息通知",
        "dash.settings.notifyOn": "已开启",
        "dash.settings.lang": "界面语言",

        "dash.nav.overview": "总览",
        "dash.nav.walker": "助行器状态",
        "dash.nav.ai": "AI 关怀记录",
        "dash.nav.health": "健康数据",
        "dash.nav.alert": "预警中心",
        "dash.nav.family": "家属端",
        "dash.nav.settings": "设置",
        "dash.overview.title": "功能入口"
    },

    en: {
        "nav.problem": "Problem",
        "nav.solution": "Solution",
        "nav.flywheel": "Flywheel",
        "nav.walker": "Walker",
        "nav.phone": "Phone AI",
        "nav.sensors": "Sensors",
        "nav.roadmap": "Roadmap",

        "hero.badge": "INTEGRATED BUSINESS PLAN · 2026",
        "hero.titleZh": "智翼守护",
        "hero.titleEn": "GuardianWing",
        "hero.subtitle": "Smart Walker × AI Care Platform",
        "hero.tagline": "Support on the move. Watchful care at home.",
        "hero.desc": "One fall-prediction engine, two touchpoints, one closed loop — support on the move, watchful care at home, risk known before it strikes.",
        "hero.btnSolution": "Explore Solution",
        "hero.btnSensors": "View Sensor Map",

        "problem.title": "The Problem · Two Separate Scenes",
        "problem.desc": "Mobility data stays on the sidewalk. Health services stay at home. No one closes the loop.",
        "problem.sceneA.title": "Scene A — On the Move",
        "problem.sceneA.desc": "Fear of falling, no strength to walk, nowhere to sit. Traditional walkers have no power and no intelligence; electric wheelchairs are bulky — once you sit, you never stand again.",
        "problem.sceneB.title": "Scene B — At Home",
        "problem.sceneB.desc": "Missed medication, no smartphone skills, falls discovered too late. Children can't watch remotely; accidents are always found too late.",
        "problem.stat1": "China 60+ population (M)",
        "problem.stat2": "Disabled / semi-disabled seniors (M)",
        "problem.stat3": "Adults 65+ fall yearly",
        "problem.stat4": "UK NHS annual fall cost (£B)",

        "solution.title": "Solution · One Engine, Two Touchpoints, Three Terminals",
        "solution.desc": "The cloud health engine fuses gait and vitals data, driving both the mobile and home touchpoints in concert.",
        "solution.cloud.title": "Cloud Health Engine",
        "solution.cloud.desc": "Gait + vitals database → fall-risk prediction model → intervention strategy",
        "solution.walker.title": "Mobile Touchpoint · Smart Walker",
        "solution.walker.f1": "Pressure-sensing power assist",
        "solution.walker.f2": "Walk-to-sit mode switch (patent)",
        "solution.walker.f3": "IMU gait capture (model data source)",
        "solution.walker.f4": "Heart-rate + tip-over instant alarm",
        "solution.walker.f5": "BeiDou positioning · one-touch call",
        "solution.phone.title": "Home Touchpoint · AI Phone Assistant",
        "solution.phone.f1": "Daily outbound calls: medication & health check-ins",
        "solution.phone.f2": "Zero device threshold — any phone line",
        "solution.phone.f3": "No-answer escalation: family → emergency contact",
        "solution.phone.f4": "Structured health logs to the cloud",
        "solution.app.title": "Family App",
        "solution.app.desc": "Daily reports · alerts · location · remote voice",
        "solution.loop": "The closed loop: the walker senses → the phone intervenes → the engine learns. When the model sees gait deteriorating, the AI assistant calls first — reminding, booking a check-up, alerting family — long before a fall becomes an ambulance ride.",

        "flywheel.title": "The Data Flywheel · Why It Compounds",
        "flywheel.desc": "More data → sharper prediction → more valuable service → more users → more data.",
        "flywheel.s1.title": "Sense",
        "flywheel.s1.desc": "The walker captures gait, balance, heart rate on every trip — real-world, daily, longitudinal data.",
        "flywheel.s2.title": "Predict",
        "flywheel.s2.desc": "The engine scores fall risk weeks ahead, not seconds after.",
        "flywheel.s3.title": "Intervene",
        "flywheel.s3.desc": "The AI phone assistant calls first: remind, advise, escalate — zero device threshold.",
        "flywheel.s4.title": "Learn",
        "flywheel.s4.desc": "Every intervention outcome re-trains the model. Accuracy compounds; so does the moat.",

        "walker.title": "Product I · Smart Walker",
        "walker.desc": "Intent-sensing power assist, instant walk-to-sit, always-on sensing — Pro tier adds SLAM autonomous navigation.",
        "walker.f1.title": "Intent Power Assist",
        "walker.f1.desc": "Handle pressure sensors read walking intention and drive Mecanum wheels — walk further with less effort.",
        "walker.f2.title": "Walk-to-Sit in Seconds",
        "walker.f2.desc": "Pull-out seat + swing-out leg rest (patents pending) — rest anywhere, instantly.",
        "walker.f3.title": "IMU Gait Capture",
        "walker.f3.desc": "Accelerometer + gyroscope capture gait features in real time, feeding the prediction engine.",
        "walker.f4.title": "Heart Rate + Tip-over Alarm",
        "walker.f4.desc": "Exercise heart-rate monitoring, instant fall/tip-over alert for outdoor safety.",
        "walker.f5.title": "BeiDou + One-Touch Call",
        "walker.f5.desc": "Real-time location tracking, one-touch emergency contact to family or first responders.",
        "walker.f6.title": "SLAM Autonomous Nav (Pro)",
        "walker.f6.desc": "LiDAR + stereo vision fused SLAM for obstacle avoidance; full vitals monitoring suite.",
        "walker.tech.lidar": "ToF ranging, high-res point cloud, strong adaptability",
        "walker.tech.camera": "Ultra-wide FOV, low-light enhancement",
        "walker.tech.nearlink": "Low power, high speed, low latency",
        "walker.tech.beidou": "Precise positioning, real-time path planning",

        "phone.title": "Product II · AI Phone Assistant",
        "phone.desc": "No smartphone required — the only device every senior already owns, trusts, and knows how to answer.",
        "phone.callType": "Daily Outbound Call",
        "phone.user": "Mrs. Chen",
        "phone.d1": "Good morning, Mrs. Chen. Did you take your blood-pressure pill today?",
        "phone.d2": "Yes, after breakfast.",
        "phone.d3": "Lovely. Your walker data shows shorter steps this week — how do your knees feel?",
        "phone.d4": "A bit stiff, honestly.",
        "phone.d5": "Noted. I'll flag it to your daughter and suggest a check-up slot. Take it slow today, okay?",
        "phone.b1.title": "Zero Device Threshold",
        "phone.b1.desc": "Reaches the 80+ group that apps, wearables and companion robots all miss — the highest fall-risk group.",
        "phone.b2.title": "Structured Health Logs",
        "phone.b2.desc": "Medication, mood, mobility — every call becomes clean data for the prediction engine.",
        "phone.b3.title": "Safety-Grade Escalation",
        "phone.b3.desc": "Walker detects fall → AI calls within seconds → no answer in 30s → family notified → emergency contact. Human-supervised, never a black box.",

        "sensors.title": "Sensor — Index — Risk Mapping",
        "sensors.desc": "Click any row to view the sensor's computable indexes, risk level, and care advice.",
        "sensors.filterAll": "All",
        "sensors.filterHigh": "High Risk",
        "sensors.filterMedium": "Medium Risk",
        "sensors.filterLow": "Low Risk",
        "sensors.col.sensor": "Sensor",
        "sensors.col.raw": "Raw Data",
        "sensors.col.index": "Computable Index",
        "sensors.col.risk": "Possible Problem",
        "sensors.col.action": "Action",
        "sensors.detail.raw": "Raw Data",
        "sensors.detail.index": "Computable Index",
        "sensors.detail.problem": "Possible Problem",
        "sensors.detail.advice": "Care Advice",
        "sensors.btnDetail": "View Details",
        "sensors.risk.high": "High Risk",
        "sensors.risk.medium": "Medium Risk",
        "sensors.risk.low": "Low Risk",

        "innovation.title": "Innovation · Mature Parts, a First-of-Its-Kind Loop",
        "innovation.i1.title": "Closed-Loop Integration",
        "innovation.i1.desc": "First design to wire a powered mobility device and an AI outbound-call service into one prediction engine.",
        "innovation.i2.title": "Zero-Threshold Interaction",
        "innovation.i2.desc": "An ordinary phone call as the primary health interface — digital care that finally includes the oldest, highest-risk users.",
        "innovation.i3.title": "Walk-to-Sit Mechanism",
        "innovation.i3.desc": "Side-pull seat with swing-out leg rest — a defensible structural design (utility-model & design patents pending).",
        "innovation.i4.title": "Domestic Tech Ecosystem",
        "innovation.i4.desc": "NearLink + BeiDou positioning unlock Huawei-ecosystem partnerships and aging-tech policy alignment (1,200+ alliance members).",

        "market.title": "Market · The Fastest-Growing Layer of Silver Tech",
        "market.s1": "China rehab-aids industry (2024)",
        "market.s2": "Personal mobility aids yearly growth",
        "market.s3": "Age-tech smart products in China (2025)",
        "market.s4": "Global walking-aids market CAGR",
        "market.policy.title": "Policy Tailwinds",
        "market.policy.c1": "China: subsidies for assistive-device purchase & rental; LTCI pilots; smart aging-care action plans",
        "market.policy.c2": "UK: NHS nationwide AI fall-prediction rollout (2025); ~2M users must switch devices by Jan 2027",

        "business.title": "Business Model · Hardware Lands, Subscriptions Compound",
        "business.hard.title": "Hardware — The Wedge",
        "business.hard.desc": "Walker sales & rental put a sensor hub into the home — and start the data flywheel.",
        "business.hard.price": "Post-subsidy out-of-pocket ¥3,000–5,000",
        "business.sub.title": "Subscription — The Engine",
        "business.sub.desc": "AI phone assistant + family app turn one device sale into years of recurring revenue.",
        "business.sub.price": "¥30–60/mo Family Plan",

        "roadmap.title": "Roadmap · Three Years, Three Proof Points",
        "roadmap.p0.time": "Months 0–6",
        "roadmap.p0.title": "Prove the Prototype",
        "roadmap.p0.f1": "Walker prototype: power assist, sit switch, fall alarm",
        "roadmap.p0.f2": "AI phone assistant MVP live",
        "roadmap.p0.f3": "2–3 structural patent filings",
        "roadmap.p0.f4": "Outdoor terrain tests inform wheel-system choice",
        "roadmap.p1.time": "Months 6–18",
        "roadmap.p1.title": "Prove It in the Field",
        "roadmap.p1.f1": "Class II medical-device registration filed",
        "roadmap.p1.f2": "Pilots: 2 care homes + 50 households",
        "roadmap.p1.f3": "Real-world evidence: prediction accuracy, admission reduction",
        "roadmap.p1.f4": "Enter 1–2 city subsidy / LTCI rental catalogs",
        "roadmap.p2.time": "Months 18–36",
        "roadmap.p2.title": "Prove It Scales",
        "roadmap.p2.f1": "Base model mass production & launch",
        "roadmap.p2.f2": "10,000+ subscription households",
        "roadmap.p2.f3": "Clinical-grade model validation",
        "roadmap.p2.f4": "Insurer / pharma payer partnerships",

        "footer.tagline": "So aging never means walking alone.",
        "footer.team": "GuardianWing Project Team",

        "nav.demo": "Live Demo",
        "demo.title": "Live Demo · Walk Through the Care Loop",
        "demo.desc": "Pick an elder and simulate the full journey from walking to care.",
        "demo.step1": "Select User",
        "demo.step2": "Walker Outing",
        "demo.step3": "AI Phone Care",
        "demo.step4": "Risk Assessment",
        "demo.step5": "Family App",
        "demo.chen.name": "Grandma Chen · 78",
        "demo.chen.desc": "Mild knee osteoarthritis, lives alone, walks with the walker daily.",
        "demo.chen.tag1": "Lives Alone",
        "demo.chen.tag2": "Knee OA",
        "demo.wang.name": "Grandpa Wang · 82",
        "demo.wang.desc": "Hypertension history, occasional dizziness, children work out of town.",
        "demo.wang.tag1": "Hypertension",
        "demo.wang.tag2": "Remote Family",
        "demo.liu.name": "Grandma Liu · 85",
        "demo.liu.desc": "Recovering from mild hemiplegia, uses walker for rehab training.",
        "demo.liu.tag1": "Rehab",
        "demo.liu.tag2": "Hemiplegia",
        "demo.gait": "Gait Stability",
        "demo.speed": "Walk Speed",
        "demo.heartrate": "Heart Rate",
        "demo.control": "Walker Control",
        "demo.modeWalk": "Walk Mode",
        "demo.modeSit": "Seat Mode",
        "demo.emergency": "SOS Call",
        "demo.log": "Live Events",
        "demo.walkHint": "Tap \"Start Outing\" to simulate walker sensor data…",
        "demo.startWalk": "Start Outing",
        "demo.incoming": "Incoming call…",
        "demo.answer": "Answer",
        "demo.next": "Next Step",
        "demo.riskScore": "Fall Risk Score",
        "demo.factors": "Risk Factor Analysis",
        "demo.intervention": "Recommended Intervention",
        "demo.toFamily": "Notify Family",
        "demo.familyApp": "Family App",
        "demo.voiceCall": "Voice Call",
        "demo.viewLocation": "View Location",
        "demo.location": "Community Garden · Safe Zone",
        "demo.restart": "Restart",
        "demo.complete": "Care loop completed! Walker sensing → AI phone intervention → Engine learning → Family notified.",

        "nav.login": "Sign In",
        "user.roleElder": "Elder",
        "user.roleFamily": "Family",
        "user.dashboard": "My Dashboard",
        "user.logout": "Sign Out",

        "auth.login": "Sign In",
        "auth.register": "Sign Up",
        "auth.phone": "Phone / Account",
        "auth.phonePh": "Enter your phone number",
        "auth.password": "Password",
        "auth.pwdPh": "Enter your password",
        "auth.loginBtn": "Sign In",
        "auth.registerBtn": "Create Account",
        "auth.noAccount": "Don't have an account? Sign up",
        "auth.hasAccount": "Already have an account? Sign in",
        "auth.name": "Name",
        "auth.namePh": "Enter your name",
        "auth.role": "Role",
        "auth.roleElder": "Elder / User",
        "auth.roleFamily": "Family Member",
        "auth.tip.empty": "Please fill in all fields",
        "auth.tip.pwdLen": "Password must be at least 6 characters",
        "auth.tip.phoneLen": "Invalid phone number format",
        "auth.tip.userNotFound": "Account not found, please sign up first",
        "auth.tip.wrongPwd": "Incorrect password",
        "auth.tip.userExists": "This phone number is already registered",
        "auth.tip.regSuccess": "Registration successful, signing in…",
        "auth.tip.loginSuccess": "Signed in successfully",

        "dash.title": "My Dashboard",
        "dash.desc": "Sign in to experience GuardianWing's full care services.",
        "dash.pleaseLogin": "Please sign in to access full features",
        "dash.loginDesc": "After signing in, you can view walker status, AI care records, health data, and more.",
        "dash.goodDay": "Hello",
        "dash.goodMorning": "Good morning",
        "dash.goodAfternoon": "Good afternoon",
        "dash.goodEvening": "Good evening",
        "dash.welcomeDesc": "Today's outing status is good. AI Care Assistant is here for you.",
        "dash.todayWalks": "Today's Outings",
        "dash.steps": "Steps",
        "dash.riskLevel": "Fall Risk",
        "dash.feat1": "Walker Status",
        "dash.feat1Desc": "Real-time battery, connection & sensor data",
        "dash.feat2": "AI Care Records",
        "dash.feat2Desc": "Daily AI phone care & health follow-up records",
        "dash.feat3": "Health Data",
        "dash.feat3Desc": "Gait, HR, BP trends & weekly reports",
        "dash.feat4": "Alert Center",
        "dash.feat4Desc": "Fall alerts, anomaly reminders & emergency contacts",
        "dash.feat5": "Family App",
        "dash.feat5Desc": "Share location, health data & emergency alerts with family",
        "dash.feat6": "Settings",
        "dash.feat6Desc": "Device management, profile & notification preferences",
        "dash.back": "Back",

        "dash.walker.title": "Walker Status",
        "dash.walker.battery": "Battery Level",
        "dash.walker.connection": "Connection",
        "dash.walker.connected": "Connected",
        "dash.walker.signal": "Signal Strength",
        "dash.walker.firmware": "Firmware Version",
        "dash.walker.lastSync": "Last Sync",

        "dash.ai.title": "AI Care Records",
        "dash.ai.today": "Today's Care",
        "dash.ai.todayDesc": "2 proactive care calls completed",
        "dash.ai.history": "History",

        "dash.health.title": "Health Data",
        "dash.health.gait": "Weekly Avg Gait Stability",
        "dash.health.hr": "Resting Heart Rate",
        "dash.health.bp": "Blood Pressure (Avg)",
        "dash.health.steps": "Weekly Daily Avg Steps",
        "dash.health.report": "Health Weekly Report",

        "dash.alert.title": "Alert Center",
        "dash.alert.fall": "Fall Alerts",
        "dash.alert.fallStatus": "0 fall events this month",
        "dash.alert.anomaly": "Anomaly Reminders",
        "dash.alert.anomalyStatus": "3 items to review",
        "dash.alert.contact": "Emergency Contacts",

        "dash.family.title": "Family App",
        "dash.family.member": "Linked Family Members",
        "dash.family.share": "Data Sharing",
        "dash.family.shareOn": "Enabled",
        "dash.family.notify": "Notification Frequency",

        "dash.settings.title": "Settings",
        "dash.settings.name": "Name",
        "dash.settings.phone": "Phone",
        "dash.settings.role": "User Role",
        "dash.settings.notify": "Notifications",
        "dash.settings.notifyOn": "Enabled",
        "dash.settings.lang": "Language",

        "dash.nav.overview": "Overview",
        "dash.nav.walker": "Walker Status",
        "dash.nav.ai": "AI Care Log",
        "dash.nav.health": "Health Data",
        "dash.nav.alert": "Alerts",
        "dash.nav.family": "Family",
        "dash.nav.settings": "Settings",
        "dash.overview.title": "Feature Access"
    }
};

/* ========== 传感器数据（双语） ========== */
const sensorData = [
    {
        id: "imu",
        icon: "🧭",
        name: { zh: "IMU", en: "IMU" },
        raw: { zh: "加速度、角速度", en: "Acceleration, angular velocity" },
        indexes: {
            zh: ["身体晃动", "突然冲击", "转弯稳定性"],
            en: ["Body sway", "Sudden impact", "Turn stability"]
        },
        problem: { zh: "失衡、跌倒或近跌倒", en: "Imbalance, fall or near-fall" },
        risk: "high",
        advice: {
            zh: "检测到身体晃动或冲击异常时，建议立即减速并寻求照护人员协助，必要时启动跌倒告警。",
            en: "When abnormal sway or impact is detected, slow down immediately and seek caregiver assistance. Trigger fall alert if necessary."
        }
    },
    {
        id: "encoder",
        icon: "🛞",
        name: { zh: "轮速编码器", en: "Wheel Encoder" },
        raw: { zh: "轮子速度和距离", en: "Wheel speed and distance" },
        indexes: {
            zh: ["行走速度", "停顿次数", "速度变化"],
            en: ["Walking speed", "Pause count", "Speed variation"]
        },
        problem: { zh: "活动能力下降、疲劳", en: "Declining mobility, fatigue" },
        risk: "medium",
        advice: {
            zh: "当行走速度持续下降或停顿增多时，建议安排休息并记录当日活动量变化趋势。",
            en: "When walking speed persistently drops or pauses increase, schedule rest and track daily activity trends."
        }
    },
    {
        id: "handle",
        icon: "✋",
        name: { zh: "手柄压力传感器", en: "Handle Pressure Sensor" },
        raw: { zh: "左右手支撑力", en: "Left/right support force" },
        indexes: {
            zh: ["左右不对称", "突然加大支撑"],
            en: ["L/R asymmetry", "Sudden grip increase"]
        },
        problem: { zh: "疼痛、偏瘫、平衡变差", en: "Pain, hemiplegia, worsening balance" },
        risk: "high",
        advice: {
            zh: "左右支撑力明显不对称时，建议检查上肢关节或神经系统状况，并调整助行器握把高度。",
            en: "When left/right support is markedly asymmetric, check upper-limb joints or neurological status, and adjust handle height."
        }
    },
    {
        id: "load",
        icon: "⚖️",
        name: { zh: "助行器负载传感器", en: "Load Sensor" },
        raw: { zh: "身体施加的重量", en: "Weight applied to walker" },
        indexes: {
            zh: ["依赖程度", "负重变化"],
            en: ["Dependency level", "Weight-bearing change"]
        },
        problem: { zh: "下肢无力或功能恶化", en: "Lower-limb weakness or functional decline" },
        risk: "medium",
        advice: {
            zh: "身体对助行器依赖程度上升时，建议结合康复训练评估下肢肌力恢复情况。",
            en: "When dependency on the walker increases, assess lower-limb muscle recovery alongside rehab training."
        }
    },
    {
        id: "hr",
        icon: "❤️",
        name: { zh: "心率传感器", en: "Heart Rate Sensor" },
        raw: { zh: "心率", en: "Heart rate" },
        indexes: {
            zh: ["运动时心率变化", "恢复速度"],
            en: ["Exercise HR change", "Recovery rate"]
        },
        problem: { zh: "疲劳或心血管负荷异常", en: "Fatigue or abnormal cardiovascular load" },
        risk: "medium",
        advice: {
            zh: "运动后心率恢复过慢或异常升高时，建议降低运动强度并关注心血管健康指标。",
            en: "When post-exercise HR recovery is slow or abnormally elevated, reduce intensity and monitor cardiovascular indicators."
        }
    },
    {
        id: "spo2",
        icon: "🫁",
        name: { zh: "SpO₂", en: "SpO₂" },
        raw: { zh: "血氧饱和度", en: "Blood oxygen saturation" },
        indexes: {
            zh: ["活动前后变化", "持续下降"],
            en: ["Pre/post-activity change", "Sustained decline"]
        },
        problem: { zh: "呼吸或循环异常风险", en: "Respiratory or circulatory risk" },
        risk: "high",
        advice: {
            zh: "活动后血氧持续下降时，建议立即停止活动并联系医护人员进行进一步检查。",
            en: "If SpO₂ persistently drops after activity, stop immediately and contact a healthcare professional for further evaluation."
        }
    },
    {
        id: "lidar",
        icon: "📷",
        name: { zh: "LiDAR/摄像头", en: "LiDAR / Camera" },
        raw: { zh: "环境与人体位置", en: "Environment & body position" },
        indexes: {
            zh: ["障碍物", "步行路径", "身体姿态"],
            en: ["Obstacles", "Walking path", "Body posture"]
        },
        problem: { zh: "环境性跌倒风险", en: "Environmental fall risk" },
        risk: "high",
        advice: {
            zh: "检测到前方障碍物或异常身体姿态时，建议发出避障提示并规划更安全的步行路径。",
            en: "When obstacles or abnormal posture are detected, issue obstacle-avoidance cues and plan a safer walking route."
        }
    },
    {
        id: "voice",
        icon: "🎙️",
        name: { zh: "麦克风/电话AI", en: "Mic / Phone AI" },
        raw: { zh: "语音和回答", en: "Voice and responses" },
        indexes: {
            zh: ["语速", "回答内容", "是否接听"],
            en: ["Speech rate", "Response content", "Answer / no-answer"]
        },
        problem: { zh: "不适、意识变化或求助需求", en: "Discomfort, cognitive change, or distress" },
        risk: "low",
        advice: {
            zh: "当语音识别到异常语速或求救关键词时，建议主动发起语音确认并通知紧急联系人。",
            en: "When abnormal speech rate or distress keywords are detected, proactively initiate voice confirmation and notify emergency contacts."
        }
    }
];

const riskMap = {
    high: { zh: "高风险", en: "High Risk", class: "high" },
    medium: { zh: "中风险", en: "Medium Risk", class: "medium" },
    low: { zh: "低风险", en: "Low Risk", class: "low" }
};

/* ========== 状态管理 ========== */
let currentLang = "en";

/* ========== 语言切换 ========== */
function applyLanguage(lang) {
    currentLang = lang;
    window.__currentLang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (i18n[lang][key] !== undefined) {
            el.textContent = i18n[lang][key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (i18n[lang][key] !== undefined) {
            el.placeholder = i18n[lang][key];
        }
    });

    const langCurrent = document.getElementById("langCurrent");
    langCurrent.textContent = lang === "zh" ? "EN" : "中文";

    renderSensorTable(currentFilter);
    updateUserUI();
}

/* ========== 传感器表格 ========== */
let currentFilter = "all";
const tableBody = document.getElementById("sensorTableBody");

function renderSensorTable(filterRisk = "all") {
    currentFilter = filterRisk;
    if (!tableBody) return;
    tableBody.innerHTML = "";

    const filtered = filterRisk === "all"
        ? sensorData
        : sensorData.filter(item => item.risk === filterRisk);

    filtered.forEach(item => {
        const risk = riskMap[item.risk];
        const tr = document.createElement("tr");
        tr.dataset.id = item.id;
        tr.dataset.risk = item.risk;

        const indexesText = item.indexes[currentLang].join(currentLang === "zh" ? "、" : ", ");

        tr.innerHTML = `
            <td>
                <div class="sensor-name">
                    <span class="sensor-icon-box">${item.icon}</span>
                    <span>${item.name[currentLang]}</span>
                </div>
            </td>
            <td>${item.raw[currentLang]}</td>
            <td>${indexesText}</td>
            <td>
                <span class="risk-tag ${risk.class}">${risk[currentLang]}</span>
                <div style="margin-top:6px;font-size:13px;color:var(--text-dim);">${item.problem[currentLang]}</div>
            </td>
            <td>
                <button class="sensor-action-btn" data-id="${item.id}">${i18n[currentLang]["sensors.btnDetail"]}</button>
            </td>
        `;

        tr.addEventListener("click", (e) => {
            if (e.target.classList.contains("sensor-action-btn")) {
                e.stopPropagation();
            }
            openDetail(item.id);
        });

        tableBody.appendChild(tr);
    });
}

/* ========== 详情弹窗 ========== */
const detailOverlay = document.getElementById("detailOverlay");
const detailClose = document.getElementById("detailClose");

function openDetail(id) {
    const item = sensorData.find(s => s.id === id);
    if (!item) return;

    const risk = riskMap[item.risk];

    const iconEl = document.getElementById("detailModalIcon");
    if (iconEl) iconEl.textContent = item.icon;
    const titleEl = document.getElementById("detailModalTitle");
    if (titleEl) titleEl.textContent = item.name[currentLang];

    const riskEl = document.getElementById("detailModalRisk");
    if (riskEl) {
        riskEl.textContent = risk[currentLang];
        riskEl.className = "detail-risk-badge " + risk.class;
    }

    const rawEl = document.getElementById("detailModalRaw");
    if (rawEl) rawEl.textContent = item.raw[currentLang];

    const indexesEl = document.getElementById("detailModalIndexes");
    if (indexesEl) {
        indexesEl.innerHTML = item.indexes[currentLang]
            .map(idx => `<span class="detail-tag">${idx}</span>`).join("");
    }

    const probEl = document.getElementById("detailModalProblem");
    if (probEl) probEl.textContent = item.problem[currentLang];
    const adviceEl = document.getElementById("detailModalAdvice");
    if (adviceEl) adviceEl.textContent = item.advice[currentLang];

    const alertBox = document.getElementById("detailModalAlertBox");
    if (alertBox) alertBox.className = "detail-modal-item detail-alert " + risk.class;

    if (detailOverlay) detailOverlay.classList.add("open");
}

function closeDetail() {
    if (detailOverlay) detailOverlay.classList.remove("open");
}

if (detailClose) detailClose.addEventListener("click", closeDetail);
if (detailOverlay) detailOverlay.addEventListener("click", (e) => {
    if (e.target === detailOverlay) {
        closeDetail();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && detailOverlay && detailOverlay.classList.contains("open")) {
        closeDetail();
    }
});

/* ========== 筛选按钮 ========== */
const filterBtns = document.querySelectorAll(".sensor-filter-btn");
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderSensorTable(btn.dataset.risk);
    });
});

/* ========== 语言切换按钮 ========== */
const langToggle = document.getElementById("langToggle");
if (langToggle) langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "zh" ? "en" : "zh");
});

/* ========== 移动端菜单 ========== */
const navMenuBtn = document.getElementById("navMenuBtn");
const navLinks = document.getElementById("navLinks");
if (navMenuBtn && navLinks) {
    navMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("mobile-open");
        });
    });
}

/* ========== 导航栏滚动高亮 ========== */
const sections = document.querySelectorAll("section[id]");
const navLinkItems = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        if (scrollPos >= top && scrollPos < top + height) {
            navLinkItems.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + id) {
                    link.classList.add("active");
                }
            });
        }
    });
}

window.addEventListener("scroll", updateActiveNav);

/* ========== 数字动画 ========== */
function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || "";
    const decimal = parseInt(el.dataset.decimal || "0");
    const divide = parseFloat(el.dataset.divide || "1");
    const duration = 1600;
    const startTime = performance.now();

    function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = (target * eased) / divide;
        const formatted = decimal > 0 ? value.toFixed(decimal) : Math.round(value);
        el.textContent = formatted + suffix;
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            const finalVal = (target / divide);
            el.textContent = (decimal > 0 ? finalVal.toFixed(decimal) : Math.round(finalVal)) + suffix;
        }
    }

    requestAnimationFrame(update);
}

const statNums = document.querySelectorAll(".stat-num");
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            statNums.forEach(el => animateCounter(el));
        }
    });
}, { threshold: 0.3 });

const statsRow = document.querySelector(".stats-row");
if (statsRow) {
    statsObserver.observe(statsRow);
}

/* ========== 滚动渐入动画 ========== */
const fadeElements = document.querySelectorAll(
    ".problem-card, .stat-item, .cloud-card, .touchpoint-card, .app-card, " +
    ".flywheel-step, .feature-card, .tech-item, .benefit-item, .inno-card, " +
    ".market-card, .market-policy, .biz-card, .phase-card"
);

fadeElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => fadeObserver.observe(el));

/* ========== 互动演示：状态与数据 ========== */
const demoState = {
    step: 1,
    persona: null,
    walk: { gait: 0, speed: 0, hr: 0, events: [] },
    riskScore: 0,
    callEnded: false
};

// 三位老人的画像与基线数据（用于风险计算与文案差异化）
const personaData = {
    chen: {
        name: { zh: "陈奶奶", en: "Grandma Chen" },
        baseline: { gait: 78, speed: 0.62, hr: 82 },
        factors: [
            { key: "gait", zh: "步态晃动幅度 +12%", en: "Gait sway +12%", level: "medium" },
            { key: "knee", zh: "膝关节承重侧偏移", en: "Knee load lateral shift", level: "medium" },
            { key: "alone", zh: "独居 · 无现场照护", en: "Lives alone · no on-site caregiver", level: "high" }
        ],
        advice: [
            { zh: "调整助行器高度，开启「膝关节保护模式」", en: "Adjust walker height, enable Knee-Protection mode" },
            { zh: "建议每日 2 次主动 AI 电话回访", en: "Schedule 2 proactive AI callbacks per day" },
            { zh: "推送社区康复师上门评估", en: "Dispatch community rehab therapist for home assessment" }
        ]
    },
    wang: {
        name: { zh: "王爷爷", en: "Grandpa Wang" },
        baseline: { gait: 70, speed: 0.55, hr: 88 },
        factors: [
            { key: "dizzy", zh: "起身瞬间血压波动", en: "Orthostatic BP swing on standing", level: "high" },
            { key: "hr", zh: "心率变异性降低", en: "Reduced HRV", level: "medium" },
            { key: "remote", zh: "子女异地 · 响应延迟", en: "Remote family · delayed response", level: "high" }
        ],
        advice: [
            { zh: "启用「起身缓冲提醒」与防跌倒慢起模式", en: "Enable Slow-Stand reminder & anti-fall slow-rise mode" },
            { zh: "推送血压用药提醒至家属端", en: "Push BP medication reminder to family app" },
            { zh: "建议子女绑定 AI 紧急通知", en: "Recommend children bind AI emergency alerts" }
        ]
    },
    liu: {
        name: { zh: "刘奶奶", en: "Grandma Liu" },
        baseline: { gait: 62, speed: 0.42, hr: 90 },
        factors: [
            { key: "hemiplegia", zh: "患侧承重不对称（左/右 38:62）", en: "Asymmetric load (L/R 38:62)", level: "high" },
            { key: "gait", zh: "步频不稳 · 拖步增多", en: "Irregular cadence · increased shuffling", level: "high" },
            { key: "fatigue", zh: "康复期疲劳累积", en: "Rehab fatigue accumulation", level: "medium" }
        ],
        advice: [
            { zh: "切换至「康复训练模式」并降低行走速度上限", en: "Switch to Rehab mode, lower speed cap" },
            { zh: "建议每日 3 次短时训练替代单次长程", en: "Replace one long session with 3 short daily sessions" },
            { zh: "同步数据至康复医生工作台", en: "Sync data to rehab physician dashboard" }
        ]
    }
};

// AI 电话对话脚本（分支式）
const callScript = {
    start: {
        ai: { zh: "您好，我是 GuardianWing 守护助手。检测到您的步态出现轻微波动，想确认一下您现在感觉怎么样？", en: "Hello, this is GuardianWing AI. We noticed a slight gait fluctuation. How are you feeling right now?" },
        options: [
            { text: { zh: "我有点累，腿有点软", en: "A bit tired, legs feel weak" }, next: "tired" },
            { text: { zh: "还好，就是走得慢了些", en: "Okay, just walking slower" }, next: "slow" },
            { text: "我没事，继续走", en: "I'm fine, keep going", next: "fine" }
        ]
    },
    tired: {
        ai: { zh: "理解，腿部乏力是跌倒的重要前兆。您现在能找到地方坐下休息吗？", en: "Understood. Leg weakness is a key fall precursor. Can you find a place to sit and rest?" },
        options: [
            { text: { zh: "旁边有长椅，我坐下", en: "There's a bench nearby, I'll sit" }, next: "sit" },
            { text: { zh: "没有座位，我站着歇一下", en: "No seat, I'll stand and rest" }, next: "stand" }
        ]
    },
    slow: {
        ai: { zh: "好的，放慢节奏是对的。建议您开启助行器「慢行模式」，我会持续监测。要不要我通知家属您今天状态偏低？", en: "Good, slowing down is right. I suggest enabling Slow mode. Shall I notify your family?" },
        options: [
            { text: { zh: "通知一下吧，让他们放心", en: "Yes, notify them for peace of mind" }, next: "notify" },
            { text: { zh: "先不用，我自己注意", en: "Not yet, I'll be careful" }, next: "fine" }
        ]
    },
    fine: {
        ai: { zh: "好的，我会继续监测您的步态与心率。如果接下来 5 分钟内再次出现波动，我会主动回拨。祝您出行平安。", en: "Alright, I'll keep monitoring your gait and HR. If another fluctuation occurs in 5 min, I'll call back. Safe walks." },
        options: [
            { text: { zh: "好的，谢谢", en: "Okay, thank you" }, next: "end" }
        ]
    },
    sit: {
        ai: { zh: "太好了，坐下能显著降低跌倒风险。我已记录本次事件，建议您休息 5 分钟再起身。是否需要我通知家属？", en: "Great, sitting greatly reduces fall risk. Event logged. Please rest 5 min before standing. Notify family?" },
        options: [
            { text: { zh: "通知家属", en: "Notify family" }, next: "notify" },
            { text: { zh: "不用了，我休息一下就好", en: "No need, just resting" }, next: "end" }
        ]
    },
    stand: {
        ai: { zh: "站立休息效果有限，我检测到您附近 30 米有社区休息点，建议您慢慢走过去坐下。我同时通知家属关注。", en: "Standing rest is limited. There's a rest spot 30m away, please walk over slowly. I'll alert your family." },
        options: [
            { text: { zh: "好的，我慢慢走过去", en: "Okay, walking over slowly" }, next: "notify" }
        ]
    },
    notify: {
        ai: { zh: "已通知家属，他们会在家属端 App 收到本次事件摘要。您继续休息，我 5 分钟后回访确认状态。", en: "Family notified via app with event summary. Please keep resting, I'll check back in 5 min." },
        options: [
            { text: { zh: "好的，辛苦了", en: "Okay, thanks" }, next: "end" }
        ]
    },
    end: {
        ai: { zh: "本次关怀通话结束，您的数据已同步至健康引擎用于个性化建模。再见。", en: "Care call ended. Your data is synced to the health engine for personalized modeling. Goodbye." },
        options: []
    }
};

/* ========== 演示：步骤切换 ========== */
function demoGoStep(step) {
    demoState.step = step;
    document.querySelectorAll(".demo-panel").forEach(p => p.classList.remove("active"));
    const panel = document.getElementById("demoPanel" + step);
    if (panel) panel.classList.add("active");

    document.querySelectorAll("#demoStepper .step-ind").forEach(ind => {
        const s = parseInt(ind.dataset.step, 10);
        ind.classList.toggle("active", s === step);
        ind.classList.toggle("done", s < step);
    });

    const demoSection = document.getElementById("demo");
    if (demoSection) {
        const top = demoSection.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
    }
}

/* ========== 演示：Step 1 选用户 ========== */
document.querySelectorAll(".persona-card").forEach(card => {
    card.addEventListener("click", () => {
        document.querySelectorAll(".persona-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        demoState.persona = card.dataset.persona;
        setTimeout(() => demoGoStep(2), 350);
    });
});

/* ========== 演示：Step 2 助行器出行模拟 ========== */
function setGauge(ringId, valId, value, max, unit) {
    const ring = document.getElementById(ringId);
    const val = document.getElementById(valId);
    if (!ring || !val) return;
    const pct = Math.min(100, (value / max) * 100);
    const deg = (pct / 100) * 360;
    ring.style.background = `conic-gradient(var(--accent) 0deg, var(--accent) ${deg}deg, rgba(47, 187, 186, 0.1) ${deg}deg)`;
    val.textContent = unit === "bpm" || unit === "m/s" ? value.toFixed(unit === "bpm" ? 0 : 2) : Math.round(value);
}

function appendLog(text) {
    const stream = document.getElementById("logStream");
    if (!stream) return;
    const entry = document.createElement("div");
    entry.className = "log-entry";
    const t = new Date();
    const ts = String(t.getHours()).padStart(2, "0") + ":" + String(t.getMinutes()).padStart(2, "0") + ":" + String(t.getSeconds()).padStart(2, "0");
    entry.innerHTML = `<span class="log-time">${ts}</span><span class="log-text">${text}</span>`;
    stream.appendChild(entry);
    stream.scrollTop = stream.scrollHeight;
}

function appendLogWarn(text) {
    const stream = document.getElementById("logStream");
    if (!stream) return;
    const entry = document.createElement("div");
    entry.className = "log-entry warn";
    const t = new Date();
    const ts = String(t.getHours()).padStart(2, "0") + ":" + String(t.getMinutes()).padStart(2, "0") + ":" + String(t.getSeconds()).padStart(2, "0");
    entry.innerHTML = `<span class="log-time">${ts}</span><span class="log-text">⚠ ${text}</span>`;
    stream.appendChild(entry);
    stream.scrollTop = stream.scrollHeight;
}

const startWalkBtn = document.getElementById("startWalkBtn");
if (startWalkBtn) startWalkBtn.addEventListener("click", function () {
    if (!demoState.persona) return;
    const p = personaData[demoState.persona];
    const lang = window.__currentLang || "zh";
    this.disabled = true;
    this.textContent = lang === "zh" ? "采集中…" : "Collecting…";
    const logStream = document.getElementById("logStream");
    if (logStream) logStream.innerHTML = "";
    demoState.walk = { gait: 0, speed: 0, hr: 0, events: [] };

    appendLog(lang === "zh" ? "助行器已解锁，IMU/压力/PPG 传感器上线" : "Walker unlocked, IMU/pressure/PPG sensors online");
    appendLog(lang === "zh" ? `${p.name[lang]} 开始出行` : `${p.name[lang]} started outing`);

    // 模拟 6 个采样点，逐步逼近基线并制造一次波动事件
    const ticks = [
        { gait: p.baseline.gait * 0.6, speed: p.baseline.speed * 0.5, hr: p.baseline.hr - 5 },
        { gait: p.baseline.gait * 0.8, speed: p.baseline.speed * 0.75, hr: p.baseline.hr },
        { gait: p.baseline.gait * 0.95, speed: p.baseline.speed * 0.95, hr: p.baseline.hr + 4 },
        { gait: p.baseline.gait * 0.82, speed: p.baseline.speed * 0.7, hr: p.baseline.hr + 9, event: true },
        { gait: p.baseline.gait * 0.9, speed: p.baseline.speed * 0.85, hr: p.baseline.hr + 6 },
        { gait: p.baseline.gait, speed: p.baseline.speed, hr: p.baseline.hr + 2, done: true }
    ];

    let i = 0;
    const timer = setInterval(() => {
        const t = ticks[i];
        setGauge("gaugeGait", "valGait", t.gait, 100, "%");
        setGauge("gaugeSpeed", "valSpeed", t.speed, 1.2, "m/s");
        setGauge("gaugeHR", "valHR", t.hr, 140, "bpm");
        demoState.walk.gait = t.gait;
        demoState.walk.speed = t.speed;
        demoState.walk.hr = t.hr;

        if (t.event) {
            const warnText = lang === "zh"
                ? `检测到步态晃动 +18%，触发 AI 主动关怀`
                : `Gait sway +18% detected, triggering proactive AI care`;
            appendLogWarn(warnText);
            demoState.walk.events.push("gait_sway");
        }
        if (t.done) {
            appendLog(lang === "zh" ? "本次出行数据已同步至健康引擎" : "Outing data synced to health engine");
            clearInterval(timer);
            setTimeout(() => {
                this.disabled = false;
                this.textContent = lang === "zh" ? "重新采集" : "Re-collect";
                demoGoStep(3);
                demoStartCall();
            }, 900);
        }
        i++;
    }, 700);
});

// SOS 按钮：模拟紧急呼叫
const sosBtn = document.getElementById("sosBtn");
if (sosBtn) sosBtn.addEventListener("click", () => {
    const lang = window.__currentLang || "zh";
    appendLogWarn(lang === "zh" ? "SOS 已触发，正在接通家属与急救…" : "SOS triggered, connecting family & EMS…");
});

/* ========== 演示：Step 3 AI 电话对话引擎 ========== */
let callTimerId = null;
let callSeconds = 0;
let currentNode = "start";

function demoStartCall() {
    const body = document.getElementById("callBody");
    const opts = document.getElementById("callOptions");
    const cta = document.getElementById("callCta");
    body.innerHTML = "";
    opts.innerHTML = "";
    cta.innerHTML = "";
    callSeconds = 0;
    currentNode = "start";
    demoState.callEnded = false;
    document.getElementById("callTimer").textContent = "00:00";
    if (callTimerId) clearInterval(callTimerId);
    callTimerId = setInterval(() => {
        callSeconds++;
        const m = String(Math.floor(callSeconds / 60)).padStart(2, "0");
        const s = String(callSeconds % 60).padStart(2, "0");
        document.getElementById("callTimer").textContent = `${m}:${s}`;
    }, 1000);

    renderCallNode("start");
}

function renderCallNode(nodeKey) {
    const lang = window.__currentLang || "zh";
    const node = callScript[nodeKey];
    if (!node) return;
    currentNode = nodeKey;
    const body = document.getElementById("callBody");

    // AI 气泡
    const aiMsg = document.createElement("div");
    aiMsg.className = "call-msg ai";
    aiMsg.innerHTML = `<div class="msg-avatar">🤖</div><div class="msg-bubble">${node.ai[lang]}</div>`;
    body.appendChild(aiMsg);
    body.scrollTop = body.scrollHeight;

    const opts = document.getElementById("callOptions");
    const cta = document.getElementById("callCta");
    opts.innerHTML = "";
    cta.innerHTML = "";

    if (node.options.length === 0) {
        // 对话结束
        demoState.callEnded = true;
        if (callTimerId) clearInterval(callTimerId);
        const nextBtn = document.createElement("button");
        nextBtn.className = "btn btn-primary";
        nextBtn.textContent = lang === "zh" ? "查看风险评估" : "View Risk Assessment";
        nextBtn.onclick = () => {
            demoComputeRisk();
            demoGoStep(4);
        };
        cta.appendChild(nextBtn);
        return;
    }

    node.options.forEach(opt => {
        const b = document.createElement("button");
        b.className = "call-opt";
        b.textContent = opt.text[lang];
        b.onclick = () => {
            // 用户气泡
            const userMsg = document.createElement("div");
            userMsg.className = "call-msg user";
            userMsg.innerHTML = `<div class="msg-bubble">${opt.text[lang]}</div><div class="msg-avatar">🧓</div>`;
            body.appendChild(userMsg);
            body.scrollTop = body.scrollHeight;
            opts.innerHTML = "";
            if (opt.next === "notify") demoState.walk.events.push("family_notified");
            setTimeout(() => renderCallNode(opt.next), 600);
        };
        opts.appendChild(b);
    });
}

/* ========== 演示：Step 4 风险评估 ========== */
function demoComputeRisk() {
    const p = personaData[demoState.persona];
    const lang = window.__currentLang || "zh";
    // 基线分 + 步态波动惩罚 + 事件惩罚
    let score = 40;
    if (p.baseline.gait < 70) score += 15;
    else if (p.baseline.gait < 80) score += 8;
    if (demoState.walk.gait < p.baseline.gait * 0.9) score += 12;
    if (demoState.walk.events.includes("gait_sway")) score += 10;
    if (demoState.walk.hr > p.baseline.hr + 5) score += 5;
    score = Math.min(95, Math.max(20, Math.round(score)));
    demoState.riskScore = score;

    // 渲染环形分数
    const ring = document.getElementById("riskRingBig");
    const val = document.getElementById("riskScoreVal");
    const deg = (score / 100) * 360;
    const color = score >= 70 ? "#ff6b6b" : score >= 50 ? "#ffa94d" : "var(--accent)";
    ring.style.background = `conic-gradient(${color} 0deg, ${color} ${deg}deg, rgba(47, 187, 186, 0.1) ${deg}deg)`;
    // 数字递增动画
    let cur = 0;
    const step = Math.ceil(score / 30);
    const anim = setInterval(() => {
        cur += step;
        if (cur >= score) { cur = score; clearInterval(anim); }
        val.textContent = cur;
    }, 40);

    // 渲染风险因子
    const fs = document.getElementById("factorStream");
    fs.innerHTML = "";
    p.factors.forEach(f => {
        const bar = document.createElement("div");
        bar.className = "factor-bar";
        const pct = f.level === "high" ? 85 : f.level === "medium" ? 55 : 25;
        bar.innerHTML = `
            <div class="factor-head"><span>${f[lang]}</span><span class="factor-level ${f.level}">${f.level === "high" ? (lang === "zh" ? "高" : "High") : f.level === "medium" ? (lang === "zh" ? "中" : "Med") : (lang === "zh" ? "低" : "Low")}</span></div>
            <div class="factor-track"><div class="factor-fill ${f.level}" style="width:0%"></div></div>
        `;
        fs.appendChild(bar);
        setTimeout(() => { bar.querySelector(".factor-fill").style.width = pct + "%"; }, 100);
    });

    // 渲染干预建议
    const as = document.getElementById("adviceStream");
    as.innerHTML = "";
    p.advice.forEach((a, idx) => {
        const item = document.createElement("div");
        item.className = "advice-item";
        item.innerHTML = `<span class="advice-num">${idx + 1}</span><span class="advice-text">${a[lang]}</span>`;
        as.appendChild(item);
    });
}

const toFamilyBtn = document.getElementById("toFamilyBtn");
if (toFamilyBtn) toFamilyBtn.addEventListener("click", () => {
    demoRenderFamily();
    demoGoStep(5);
});

/* ========== 演示：Step 5 家属端 ========== */
function demoRenderFamily() {
    const p = personaData[demoState.persona];
    const lang = window.__currentLang || "zh";
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    document.getElementById("fpDate").textContent = dateStr;
    document.getElementById("fpStatus").textContent = lang === "zh" ? "已接通 · 状态平稳" : "Connected · Stable";
    document.getElementById("fpStatus").style.color = "var(--accent)";

    const metrics = document.getElementById("fpMetrics");
    metrics.innerHTML = `
        <div class="fp-metric"><span class="fp-m-label">${lang === "zh" ? "步态" : "Gait"}</span><span class="fp-m-value">${Math.round(demoState.walk.gait)}%</span></div>
        <div class="fp-metric"><span class="fp-m-label">${lang === "zh" ? "速度" : "Speed"}</span><span class="fp-m-value">${demoState.walk.speed.toFixed(2)} m/s</span></div>
        <div class="fp-metric"><span class="fp-m-label">${lang === "zh" ? "心率" : "HR"}</span><span class="fp-m-value">${Math.round(demoState.walk.hr)} bpm</span></div>
        <div class="fp-metric"><span class="fp-m-label">${lang === "zh" ? "风险" : "Risk"}</span><span class="fp-m-value">${demoState.riskScore}/100</span></div>
    `;

    const alertTitle = document.getElementById("fpAlertTitle");
    const alertDesc = document.getElementById("fpAlertDesc");
    if (demoState.walk.events.includes("family_notified")) {
        alertTitle.textContent = lang === "zh" ? "AI 已主动关怀并通知" : "AI proactively cared & notified";
        alertDesc.textContent = lang === "zh"
            ? `${p.name[lang]} 在出行中出现步态波动，AI 电话已接通并建议休息，请关注今日状态。`
            : `${p.name[lang]} had gait fluctuation during outing. AI call connected, rest suggested. Please follow up today.`;
    } else {
        alertTitle.textContent = lang === "zh" ? "出行数据已同步" : "Outing data synced";
        alertDesc.textContent = lang === "zh"
            ? `${p.name[lang]} 本次出行存在轻微波动，建议查看完整报告。`
            : `${p.name[lang]} had minor fluctuation this outing. Please review the full report.`;
    }

    // 显示完成提示
    const done = document.getElementById("demoDone");
    if (done) done.classList.add("show");
}

const fpVoiceBtn = document.getElementById("fpVoiceBtn");
if (fpVoiceBtn) fpVoiceBtn.addEventListener("click", function () {
    const lang = window.__currentLang || "zh";
    this.textContent = lang === "zh" ? "正在接通…" : "Connecting…";
    setTimeout(() => { this.textContent = lang === "zh" ? "远程语音" : "Voice Call"; }, 1500);
});

const fpLocBtn = document.getElementById("fpLocBtn");
if (fpLocBtn) fpLocBtn.addEventListener("click", function () {
    const map = document.getElementById("fpMap");
    if (map) {
        map.style.transform = "scale(1.02)";
        setTimeout(() => { map.style.transform = ""; }, 300);
    }
});

/* ========== 演示：重新开始 ========== */
const restartBtn = document.getElementById("restartBtn");
if (restartBtn) restartBtn.addEventListener("click", () => {
    demoState.step = 1;
    demoState.persona = null;
    demoState.walk = { gait: 0, speed: 0, hr: 0, events: [] };
    demoState.riskScore = 0;
    demoState.callEnded = false;
    document.querySelectorAll(".persona-card").forEach(c => c.classList.remove("selected"));
    ["gaugeGait", "gaugeSpeed", "gaugeHR"].forEach(id => {
        const r = document.getElementById(id);
        if (r) r.style.background = "conic-gradient(var(--accent) 0deg, rgba(47, 187, 186, 0.1) 0deg)";
    });
    ["valGait", "valSpeed", "valHR"].forEach(id => {
        const v = document.getElementById(id);
        if (v) v.textContent = "--";
    });
    const ls = document.getElementById("logStream");
    if (ls) ls.innerHTML = "";
    const rr = document.getElementById("riskRingBig");
    if (rr) rr.style.background = "conic-gradient(var(--accent) 0deg, rgba(47, 187, 186, 0.1) 0deg)";
    const rsv = document.getElementById("riskScoreVal");
    if (rsv) rsv.textContent = "--";
    const done = document.getElementById("demoDone");
    if (done) done.classList.remove("show");
    const sw = document.getElementById("startWalkBtn");
    if (sw) { sw.disabled = false; }
    demoGoStep(1);
});

/* ========== 登录 / 注册：用户管理 ========== */
const AUTH_KEY = "guardianwing_users";
const SESSION_KEY = "guardianwing_session";

function getUsers() {
    try {
        return JSON.parse(localStorage.getItem(AUTH_KEY)) || [];
    } catch (e) { return []; }
}

function saveUsers(users) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    } catch (e) { return null; }
}

function setCurrentUser(user) {
    if (user) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    } else {
        localStorage.removeItem(SESSION_KEY);
    }
    updateUserUI();
}

/* ========== 登录弹窗控制 ========== */
function openAuth(defaultTab) {
    const overlay = document.getElementById("authOverlay");
    if (!overlay) return;
    overlay.classList.add("show");
    switchAuthTab(defaultTab || "login");
    document.body.style.overflow = "hidden";
}

function closeAuth() {
    const overlay = document.getElementById("authOverlay");
    if (!overlay) return;
    overlay.classList.remove("show");
    document.body.style.overflow = "";
    document.getElementById("loginTip").textContent = "";
    document.getElementById("regTip").textContent = "";
}

function switchAuthTab(tab) {
    document.querySelectorAll(".auth-tab").forEach(t => {
        t.classList.toggle("active", t.dataset.tab === tab);
    });
    document.getElementById("loginForm").classList.toggle("active", tab === "login");
    document.getElementById("registerForm").classList.toggle("active", tab === "register");
    document.getElementById("loginTip").textContent = "";
    document.getElementById("regTip").textContent = "";
}

/* ========== 用户 UI 状态更新 ========== */
function updateUserUI() {
    const user = getCurrentUser();
    const btnLogin = document.getElementById("btnLogin");
    const userMenu = document.getElementById("userMenu");
    const dashHint = document.getElementById("dashLoginHint");
    const dashContent = document.getElementById("dashContent");
    const lang = window.__currentLang || "zh";

    if (user) {
        if (btnLogin) btnLogin.style.display = "none";
        if (userMenu) userMenu.style.display = "block";
        const initials = user.name ? user.name.charAt(0).toUpperCase() : "U";
        const userInitials = document.getElementById("userInitials");
        if (userInitials) userInitials.textContent = initials;
        const udName = document.getElementById("udName");
        if (udName) udName.textContent = user.name || "User";
        const roleKey = user.role === "family" ? "user.roleFamily" : "user.roleElder";
        const udRole = document.getElementById("udRole");
        if (udRole) {
            udRole.setAttribute("data-i18n", roleKey);
            udRole.textContent = i18n[lang][roleKey];
        }
        if (dashHint) dashHint.style.display = "none";
        if (dashContent) {
            dashContent.style.display = "block";
            renderDashboard(user);
        }
    } else {
        if (btnLogin) btnLogin.style.display = "inline-block";
        if (userMenu) userMenu.style.display = "none";
        if (dashHint) dashHint.style.display = "block";
        if (dashContent) dashContent.style.display = "none";
    }
}

/* ========== Dashboard 渲染 ========== */
function renderDashboard(user) {
    const lang = window.__currentLang || "zh";
    const dwName = document.getElementById("dwName");
    if (dwName) dwName.textContent = user.name || "User";

    const hour = new Date().getHours();
    let greetKey = "dash.goodDay";
    if (hour < 11) greetKey = "dash.goodMorning";
    else if (hour < 18) greetKey = "dash.goodAfternoon";
    else greetKey = "dash.goodEvening";
    const dwGreeting = document.getElementById("dwGreeting");
    if (dwGreeting) {
        dwGreeting.setAttribute("data-i18n", greetKey);
        dwGreeting.textContent = i18n[lang][greetKey];
    }

    const avatar = user.role === "family" ? "👨‍👩‍👧" : (user.name && user.name.includes("奶") ? "👵" : "👴");
    const dwAvatar = document.getElementById("dwAvatar");
    if (dwAvatar) dwAvatar.textContent = avatar;

    const riskText = user.role === "family"
        ? (lang === "zh" ? "中" : "Med")
        : (lang === "zh" ? "低" : "Low");
    const dwRisk = document.getElementById("dwRisk");
    if (dwRisk) dwRisk.textContent = riskText;
}

/* ========== Dashboard 功能详情 ========== */
const dashFeatData = {
    walker: {
        titleKey: "dash.walker.title",
        items: [
            { labelKey: "dash.walker.battery", value: "87%", cls: "good" },
            { labelKey: "dash.walker.connection", valueKey: "dash.walker.connected", cls: "good" },
            { labelKey: "dash.walker.signal", value: "强 / -58dBm", cls: "good" },
            { labelKey: "dash.walker.firmware", value: "v2.3.1", cls: "" },
            { labelKey: "dash.walker.lastSync", value: "2 分钟前", cls: "" }
        ]
    },
    ai: {
        titleKey: "dash.ai.title",
        items: [
            { labelKey: "dash.ai.today", valueKey: "dash.ai.todayDesc", cls: "good" },
            { labelKey: "dash.ai.history", value: "本月 42 次", cls: "" },
            { label: "上午 08:30", value: "晨间问候 + 血压提醒", cls: "" },
            { label: "下午 15:00", value: "步态波动关怀 · 已建议休息", cls: "warn" },
            { label: "晚间 20:00", value: "夜间安全确认（计划中）", cls: "" }
        ]
    },
    health: {
        titleKey: "dash.health.title",
        items: [
            { labelKey: "dash.health.gait", value: "76.5%", cls: "warn" },
            { labelKey: "dash.health.hr", value: "72 bpm", cls: "good" },
            { labelKey: "dash.health.bp", value: "128 / 82 mmHg", cls: "warn" },
            { labelKey: "dash.health.steps", value: "2,860", cls: "" },
            { labelKey: "dash.health.report", value: "查看上周周报 →", cls: "" }
        ]
    },
    alert: {
        titleKey: "dash.alert.title",
        items: [
            { labelKey: "dash.alert.fall", valueKey: "dash.alert.fallStatus", cls: "good" },
            { labelKey: "dash.alert.anomaly", valueKey: "dash.alert.anomalyStatus", cls: "warn" },
            { label: "步态波动", value: "今天 15:12 · 已处理", cls: "warn" },
            { label: "久坐提醒", value: "今天 10:30 · 已忽略", cls: "" },
            { labelKey: "dash.alert.contact", value: "2 位紧急联系人", cls: "" }
        ]
    },
    family: {
        titleKey: "dash.family.title",
        items: [
            { labelKey: "dash.family.member", value: "1 位（女儿）", cls: "" },
            { labelKey: "dash.family.share", valueKey: "dash.family.shareOn", cls: "good" },
            { labelKey: "dash.family.notify", value: "实时推送", cls: "" },
            { label: "最近通知", value: "今天 15:15 · 步态波动提醒", cls: "warn" },
            { label: "共享位置", value: "已开启", cls: "good" }
        ]
    },
    settings: {
        titleKey: "dash.settings.title",
        items: [
            { labelKey: "dash.settings.name", value: "", cls: "" },
            { labelKey: "dash.settings.phone", value: "", cls: "" },
            { labelKey: "dash.settings.role", valueKey: "", cls: "" },
            { labelKey: "dash.settings.notify", valueKey: "dash.settings.notifyOn", cls: "good" },
            { labelKey: "dash.settings.lang", value: "", cls: "" }
        ]
    }
};
window.dashFeatData = dashFeatData;

function showDashDetail(feat) {
    const lang = window.__currentLang || "zh";
    const data = dashFeatData[feat];
    if (!data) return;
    const user = getCurrentUser();

    const detail = document.getElementById("dashDetail");
    const grid = document.querySelector(".dash-grid");
    const welcome = document.querySelector(".dash-welcome");
    const content = document.getElementById("ddContent");

    if (grid) grid.style.display = "none";
    if (welcome) welcome.style.display = "none";
    if (detail) detail.style.display = "block";

    let html = `<h3>${i18n[lang][data.titleKey]}</h3>`;
    html += `<ul class="dd-list">`;
    data.items.forEach(item => {
        let label = item.labelKey ? (i18n[lang][item.labelKey] || item.labelKey) : item.label;
        let value = "";
        if (item.valueKey) {
            value = i18n[lang][item.valueKey] || item.valueKey;
        } else if (item.value) {
            value = item.value;
        }
        if (feat === "settings" && user) {
            if (item.labelKey === "dash.settings.name") value = user.name || "";
            if (item.labelKey === "dash.settings.phone") value = user.phone || "";
            if (item.labelKey === "dash.settings.role") {
                value = user.role === "family"
                    ? (lang === "zh" ? "家属" : "Family")
                    : (lang === "zh" ? "长者" : "Elder");
            }
            if (item.labelKey === "dash.settings.lang") {
                value = lang === "zh" ? "中文" : "English";
            }
        }
        html += `<li><span class="dd-item-label">${label}</span><span class="dd-item-value ${item.cls || ""}">${value}</span></li>`;
    });
    html += `</ul>`;
    if (content) content.innerHTML = html;
}

function hideDashDetail() {
    const detail = document.getElementById("dashDetail");
    const grid = document.querySelector(".dash-grid");
    const welcome = document.querySelector(".dash-welcome");
    if (grid) grid.style.display = "";
    if (welcome) welcome.style.display = "";
    if (detail) detail.style.display = "none";
}

/* ========== 事件绑定：登录弹窗 ========== */
document.addEventListener("DOMContentLoaded", function () {
    const btnLogin = document.getElementById("btnLogin");
    if (btnLogin) btnLogin.addEventListener("click", () => openAuth("login"));

    const dashLoginBtn = document.getElementById("dashLoginBtn");
    if (dashLoginBtn) dashLoginBtn.addEventListener("click", () => openAuth("login"));

    const authClose = document.getElementById("authClose");
    if (authClose) authClose.addEventListener("click", closeAuth);

    const authOverlay = document.getElementById("authOverlay");
    if (authOverlay) {
        authOverlay.addEventListener("click", (e) => {
            if (e.target === authOverlay) closeAuth();
        });
    }

    document.querySelectorAll(".auth-tab").forEach(tab => {
        tab.addEventListener("click", () => switchAuthTab(tab.dataset.tab));
    });

    const toRegister = document.getElementById("toRegister");
    if (toRegister) toRegister.addEventListener("click", (e) => { e.preventDefault(); switchAuthTab("register"); });

    const toLogin = document.getElementById("toLogin");
    if (toLogin) toLogin.addEventListener("click", (e) => { e.preventDefault(); switchAuthTab("login"); });

    /* 登录表单 */
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const lang = window.__currentLang || "zh";
            const phone = document.getElementById("loginPhone").value.trim();
            const pwd = document.getElementById("loginPwd").value;
            const tip = document.getElementById("loginTip");
            tip.className = "auth-tip";

            if (!phone || !pwd) {
                tip.textContent = i18n[lang]["auth.tip.empty"];
                return;
            }
            const users = getUsers();
            const user = users.find(u => u.phone === phone);
            if (!user) {
                tip.textContent = i18n[lang]["auth.tip.userNotFound"];
                return;
            }
            if (user.password !== pwd) {
                tip.textContent = i18n[lang]["auth.tip.wrongPwd"];
                return;
            }
            tip.className = "auth-tip success";
            tip.textContent = i18n[lang]["auth.tip.loginSuccess"];
            setTimeout(() => {
                localStorage.setItem(SESSION_KEY, JSON.stringify({ name: user.name, phone: user.phone, role: user.role }));
                if (window.location.pathname.includes("dashboard.html")) {
                    window.location.reload();
                } else {
                    window.location.href = "dashboard.html";
                }
            }, 600);
        });
    }

    /* 注册表单 */
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const lang = window.__currentLang || "zh";
            const name = document.getElementById("regName").value.trim();
            const phone = document.getElementById("regPhone").value.trim();
            const pwd = document.getElementById("regPwd").value;
            const role = document.querySelector('input[name="regRole"]:checked')?.value || "elder";
            const tip = document.getElementById("regTip");
            tip.className = "auth-tip";

            if (!name || !phone || !pwd) {
                tip.textContent = i18n[lang]["auth.tip.empty"];
                return;
            }
            if (pwd.length < 6) {
                tip.textContent = i18n[lang]["auth.tip.pwdLen"];
                return;
            }
            const users = getUsers();
            if (users.find(u => u.phone === phone)) {
                tip.textContent = i18n[lang]["auth.tip.userExists"];
                return;
            }
            const newUser = { name, phone, password: pwd, role, createdAt: Date.now() };
            users.push(newUser);
            saveUsers(users);
            tip.className = "auth-tip success";
            tip.textContent = i18n[lang]["auth.tip.regSuccess"];
            setTimeout(() => {
                localStorage.setItem(SESSION_KEY, JSON.stringify({ name, phone, role }));
                if (window.location.pathname.includes("dashboard.html")) {
                    window.location.reload();
                } else {
                    window.location.href = "dashboard.html";
                }
            }, 800);
        });
    }

    /* 退出登录 */
    const udLogout = document.getElementById("udLogout");
    if (udLogout) {
        udLogout.addEventListener("click", (e) => {
            e.preventDefault();
            setCurrentUser(null);
        });
    }

    /* Dashboard 功能卡片点击 */
    document.querySelectorAll(".dash-card").forEach(card => {
        card.addEventListener("click", () => {
            const feat = card.dataset.feat;
            if (feat) showDashDetail(feat);
        });
    });

    /* 返回按钮 */
    const ddBack = document.getElementById("ddBack");
    if (ddBack) ddBack.addEventListener("click", hideDashDetail);

    /* 初始化用户状态 */
    updateUserUI();
});

/* ========== 初始化 ========== */
applyLanguage("zh");
