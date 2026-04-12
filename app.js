const { createApp } = Vue;

createApp({
    data() {
        return {
            currentPage: 'start',
            answers: {},
            allQuestions: [
                {
                    id: 1,
                    text: '深夜突然饿了，冰箱里只有一个苹果和一包方便面，你会',
                    options: [
                        { label: 'A. 吃苹果，健康最重要', value: 'A' },
                        { label: 'B. 煮方便面，管它健不健康', value: 'B' },
                        { label: 'C. 都不吃，继续饿着睡觉', value: 'C' }
                    ]
                },
                {
                    id: 2,
                    text: '如果可以拥有一种超能力，你希望是',
                    options: [
                        { label: 'A. 读心术，知道别人在想什么', value: 'A' },
                        { label: 'B. 隐身术，想去哪就去哪', value: 'B' },
                        { label: 'C. 时间暂停，多睡会儿觉', value: 'C' }
                    ]
                },
                {
                    id: 3,
                    text: '朋友约你去蹦极，你的第一反应是',
                    options: [
                        { label: 'A. 太刺激了！马上答应', value: 'A' },
                        { label: 'B. 让我想想...可能不去', value: 'B' },
                        { label: 'C. 开玩笑吧？绝对不去', value: 'C' }
                    ]
                },
                {
                    id: 4,
                    text: '你更喜欢哪种旅行方式',
                    options: [
                        { label: 'A. 提前做好攻略，按计划行动', value: 'A' },
                        { label: 'B. 随便走走，遇到什么算什么', value: 'B' },
                        { label: 'C. 跟团游，省心省力', value: 'C' }
                    ]
                },
                {
                    id: 5,
                    text: '如果中了彩票大奖，你会',
                    options: [
                        { label: 'A. 立刻辞职，环游世界', value: 'A' },
                        { label: 'B. 存起来，该干嘛干嘛', value: 'B' },
                        { label: 'C. 分给家人朋友一起花', value: 'C' }
                    ]
                },
                {
                    id: 6,
                    text: '看到路边有人摔倒，你会',
                    options: [
                        { label: 'A. 立刻上前扶起来', value: 'A' },
                        { label: 'B. 观察一下再决定', value: 'B' },
                        { label: 'C. 打120让专业人士来', value: 'C' }
                    ]
                },
                {
                    id: 7,
                    text: '你的手机屏幕碎了，你会',
                    options: [
                        { label: 'A. 马上去修或换新的', value: 'A' },
                        { label: 'B. 贴个膜继续用', value: 'B' },
                        { label: 'C. 用到彻底不能用再说', value: 'C' }
                    ]
                },
                {
                    id: 8,
                    text: '如果可以变成一种动物一天，你想变成',
                    options: [
                        { label: 'A. 老鹰，在天空自由翱翔', value: 'A' },
                        { label: 'B. 猫，躺着晒太阳', value: 'B' },
                        { label: 'C. 海豚，在海里游泳', value: 'C' }
                    ]
                },
                {
                    id: 9,
                    text: '别人送你一件不喜欢的礼物，你会',
                    options: [
                        { label: 'A. 直接说不喜欢，建议换一个', value: 'A' },
                        { label: 'B. 笑着收下，转手送人', value: 'B' },
                        { label: 'C. 感谢并收下，放在家里', value: 'C' }
                    ]
                },
                {
                    id: 10,
                    text: '你更喜欢什么样的天气',
                    options: [
                        { label: 'A. 晴天，阳光明媚', value: 'A' },
                        { label: 'B. 阴天，凉爽舒适', value: 'B' },
                        { label: 'C. 雨天，适合宅在家', value: 'C' }
                    ]
                },
                {
                    id: 11,
                    text: '如果时光倒流，你最想回到',
                    options: [
                        { label: 'A. 童年时期，无忧无虑', value: 'A' },
                        { label: 'B. 学生时代，重新选择', value: 'B' },
                        { label: 'C. 不想回去，活在当下', value: 'C' }
                    ]
                },
                {
                    id: 12,
                    text: '你的理想周末是',
                    options: [
                        { label: 'A. 户外运动，爬山徒步', value: 'A' },
                        { label: 'B. 在家躺平，追剧打游戏', value: 'B' },
                        { label: 'C. 约朋友聚会，吃喝玩乐', value: 'C' }
                    ]
                },
                {
                    id: 13,
                    text: '面对一个陌生的挑战，你会',
                    options: [
                        { label: 'A. 兴奋地接受，想试试看', value: 'A' },
                        { label: 'B. 谨慎评估，再做决定', value: 'B' },
                        { label: 'C. 倾向拒绝，不想冒险', value: 'C' }
                    ]
                },
                {
                    id: 14,
                    text: '你更喜欢哪种宠物',
                    options: [
                        { label: 'A. 狗，忠诚热情', value: 'A' },
                        { label: 'B. 猫，独立优雅', value: 'B' },
                        { label: 'C. 仓鼠，小巧可爱', value: 'C' }
                    ]
                },
                {
                    id: 15,
                    text: '如果必须选择一个，你更害怕',
                    options: [
                        { label: 'A. 孤独终老', value: 'A' },
                        { label: 'B. 一事无成', value: 'B' },
                        { label: 'C. 失去自由', value: 'C' }
                    ]
                },
                {
                    id: 16,
                    text: '你的购物车里通常是',
                    options: [
                        { label: 'A. 实用的生活必需品', value: 'A' },
                        { label: 'B. 各种想买的东西', value: 'B' },
                        { label: 'C. 空的，想买就直接买', value: 'C' }
                    ]
                },
                {
                    id: 17,
                    text: '如果可以学一门新技能，你想学',
                    options: [
                        { label: 'A. 乐器，陶冶情操', value: 'A' },
                        { label: 'B. 编程，实用技能', value: 'B' },
                        { label: 'C. 厨艺，享受美食', value: 'C' }
                    ]
                },
                {
                    id: 18,
                    text: '你更喜欢什么颜色的衣服',
                    options: [
                        { label: 'A. 黑白灰，百搭经典', value: 'A' },
                        { label: 'B. 彩色系，鲜艳亮眼', value: 'B' },
                        { label: 'C. 莫兰迪色，温柔高级', value: 'C' }
                    ]
                },
                {
                    id: 19,
                    text: '遇到不公平的事情，你会',
                    options: [
                        { label: 'A. 据理力争，维护权益', value: 'A' },
                        { label: 'B. 看情况，不值得就算了', value: 'B' },
                        { label: 'C. 忍气吞声，息事宁人', value: 'C' }
                    ]
                },
                {
                    id: 20,
                    text: '你的手机里APP最多的是',
                    options: [
                        { label: 'A. 社交软件', value: 'A' },
                        { label: 'B. 游戏娱乐', value: 'B' },
                        { label: 'C. 学习工具', value: 'C' }
                    ]
                },
                {
                    id: 21,
                    text: '如果可以穿越到任何时代，你想去',
                    options: [
                        { label: 'A. 古代，体验历史', value: 'A' },
                        { label: 'B. 未来，看看科技', value: 'B' },
                        { label: 'C. 就现在，挺好的', value: 'C' }
                    ]
                },
                {
                    id: 22,
                    text: '你更喜欢什么样的音乐',
                    options: [
                        { label: 'A. 流行音乐，朗朗上口', value: 'A' },
                        { label: 'B. 古典音乐，优雅动听', value: 'B' },
                        { label: 'C. 摇滚说唱，节奏强烈', value: 'C' }
                    ]
                },
                {
                    id: 23,
                    text: '面对deadline，你通常',
                    options: [
                        { label: 'A. 提前完成，留有余地', value: 'A' },
                        { label: 'B. 按时完成，不早不晚', value: 'B' },
                        { label: 'C. 最后一刻，惊险完成', value: 'C' }
                    ]
                },
                {
                    id: 24,
                    text: '你更喜欢什么样的电影',
                    options: [
                        { label: 'A. 喜剧片，开心就好', value: 'A' },
                        { label: 'B. 悬疑片，烧脑刺激', value: 'B' },
                        { label: 'C. 文艺片，细腻感人', value: 'C' }
                    ]
                },
                {
                    id: 25,
                    text: '如果可以隐身一天，你会',
                    options: [
                        { label: 'A. 去看看别人的秘密', value: 'A' },
                        { label: 'B. 免费看电影吃大餐', value: 'B' },
                        { label: 'C. 什么都不做，享受自由', value: 'C' }
                    ]
                },
                {
                    id: 26,
                    text: '你的社交媒体通常',
                    options: [
                        { label: 'A. 经常发动态，分享生活', value: 'A' },
                        { label: 'B. 偶尔发一下，看心情', value: 'B' },
                        { label: 'C. 基本不发，只看别人', value: 'C' }
                    ]
                },
                {
                    id: 27,
                    text: '如果必须选一个，你更想要',
                    options: [
                        { label: 'A. 财富自由', value: 'A' },
                        { label: 'B. 身体健康', value: 'B' },
                        { label: 'C. 真爱陪伴', value: 'C' }
                    ]
                },
                {
                    id: 28,
                    text: '你更喜欢什么样的居住环境',
                    options: [
                        { label: 'A. 繁华市中心，方便热闹', value: 'A' },
                        { label: 'B. 安静郊区，清净舒适', value: 'B' },
                        { label: 'C. 海边山里，亲近自然', value: 'C' }
                    ]
                },
                {
                    id: 29,
                    text: '面对别人的求助，你会',
                    options: [
                        { label: 'A. 尽力帮忙，能帮就帮', value: 'A' },
                        { label: 'B. 看情况，量力而行', value: 'B' },
                        { label: 'C. 先保护自己，再考虑别人', value: 'C' }
                    ]
                },
                {
                    id: 30,
                    text: '你的理想工作是',
                    options: [
                        { label: 'A. 高薪稳定，朝九晚五', value: 'A' },
                        { label: 'B. 自由职业，时间灵活', value: 'B' },
                        { label: 'C. 有挑战性，能学到东西', value: 'C' }
                    ]
                },
                {
                    id: 31,
                    text: '如果可以拥有一项天赋，你想要',
                    options: [
                        { label: 'A. 艺术天赋，创作美好', value: 'A' },
                        { label: 'B. 运动天赋，身体强健', value: 'B' },
                        { label: 'C. 学习天赋，过目不忘', value: 'C' }
                    ]
                },
                {
                    id: 32,
                    text: '你更喜欢什么样的聚会',
                    options: [
                        { label: 'A. 大型派对，认识新朋友', value: 'A' },
                        { label: 'B. 小型聚会，三五好友', value: 'B' },
                        { label: 'C. 不喜欢聚会，宁愿独处', value: 'C' }
                    ]
                },
                {
                    id: 33,
                    text: '如果可以和一个名人共进晚餐，你选',
                    options: [
                        { label: 'A. 科学家，探讨宇宙奥秘', value: 'A' },
                        { label: 'B. 明星，聊聊八卦趣事', value: 'B' },
                        { label: 'C. 企业家，学习成功经验', value: 'C' }
                    ]
                },
                {
                    id: 34,
                    text: '你的冰箱里通常是',
                    options: [
                        { label: 'A. 满满当当，食材丰富', value: 'A' },
                        { label: 'B. 基本够用，不多不少', value: 'B' },
                        { label: 'C. 空空如也，外卖为主', value: 'C' }
                    ]
                },
                {
                    id: 35,
                    text: '如果可以改变一个过去的决定，你会',
                    options: [
                        { label: 'A. 改变学业选择', value: 'A' },
                        { label: 'B. 改变感情选择', value: 'B' },
                        { label: 'C. 不改变，接受现在', value: 'C' }
                    ]
                },
                {
                    id: 36,
                    text: '你更喜欢什么样的假期',
                    options: [
                        { label: 'A. 冒险旅行，探索未知', value: 'A' },
                        { label: 'B. 度假休闲，放松身心', value: 'B' },
                        { label: 'C. 在家充电，学习提升', value: 'C' }
                    ]
                },
                {
                    id: 37,
                    text: '面对批评，你的反应是',
                    options: [
                        { label: 'A. 虚心接受，努力改进', value: 'A' },
                        { label: 'B. 先辩解，再考虑', value: 'B' },
                        { label: 'C. 内心受伤，需要时间消化', value: 'C' }
                    ]
                },
                {
                    id: 38,
                    text: '你更喜欢什么样的书',
                    options: [
                        { label: 'A. 小说，沉浸故事', value: 'A' },
                        { label: 'B. 传记，了解人生', value: 'B' },
                        { label: 'C. 工具书，实用技能', value: 'C' }
                    ]
                },
                {
                    id: 39,
                    text: '如果可以永远停留在某个年龄，你选',
                    options: [
                        { label: 'A. 18岁，青春活力', value: 'A' },
                        { label: 'B. 25岁，成熟稳重', value: 'B' },
                        { label: 'C. 35岁，事业有成', value: 'C' }
                    ]
                },
                {
                    id: 40,
                    text: '你的手机壁纸通常是',
                    options: [
                        { label: 'A. 风景照，赏心悦目', value: 'A' },
                        { label: 'B. 人物照，纪念意义', value: 'B' },
                        { label: 'C. 纯色或默认，简洁大方', value: 'C' }
                    ]
                },
                {
                    id: 41,
                    text: '如果可以拥有一栋房子，你希望在',
                    options: [
                        { label: 'A. 海边，听海浪声', value: 'A' },
                        { label: 'B. 山里，呼吸新鲜空气', value: 'B' },
                        { label: 'C. 城市，享受便利', value: 'C' }
                    ]
                },
                {
                    id: 42,
                    text: '你更喜欢什么样的运动',
                    options: [
                        { label: 'A. 团队运动，篮球足球', value: 'A' },
                        { label: 'B. 个人运动，跑步游泳', value: 'B' },
                        { label: 'C. 不爱运动，能躺不坐', value: 'C' }
                    ]
                },
                {
                    id: 43,
                    text: '如果可以和动物对话，你想和谁聊',
                    options: [
                        { label: 'A. 自己的宠物', value: 'A' },
                        { label: 'B. 野生动物', value: 'B' },
                        { label: 'C. 海洋生物', value: 'C' }
                    ]
                },
                {
                    id: 44,
                    text: '你的理想早餐是',
                    options: [
                        { label: 'A. 中式早餐，豆浆油条', value: 'A' },
                        { label: 'B. 西式早餐，面包牛奶', value: 'B' },
                        { label: 'C. 不吃早餐，多睡会儿', value: 'C' }
                    ]
                },
                {
                    id: 45,
                    text: '面对选择困难，你会',
                    options: [
                        { label: 'A. 列出利弊，理性分析', value: 'A' },
                        { label: 'B. 跟着感觉走', value: 'B' },
                        { label: 'C. 问朋友意见', value: 'C' }
                    ]
                },
                {
                    id: 46,
                    text: '你更喜欢什么样的季节',
                    options: [
                        { label: 'A. 春天，万物复苏', value: 'A' },
                        { label: 'B. 夏天，热情奔放', value: 'B' },
                        { label: 'C. 秋冬，凉爽舒适', value: 'C' }
                    ]
                },
                {
                    id: 47,
                    text: '如果可以学会一门外语，你选',
                    options: [
                        { label: 'A. 英语，世界通用', value: 'A' },
                        { label: 'B. 日语韩语，喜欢文化', value: 'B' },
                        { label: 'C. 小语种，独特有趣', value: 'C' }
                    ]
                },
                {
                    id: 48,
                    text: '你的理想退休生活是',
                    options: [
                        { label: 'A. 环游世界，到处旅行', value: 'A' },
                        { label: 'B. 乡村生活，种花养草', value: 'B' },
                        { label: 'C. 城市生活，享受便利', value: 'C' }
                    ]
                },
                {
                    id: 49,
                    text: '你更喜欢什么样的交通工具',
                    options: [
                        { label: 'A. 开车，自由方便', value: 'A' },
                        { label: 'B. 公共交通，环保省心', value: 'B' },
                        { label: 'C. 骑车走路，锻炼身体', value: 'C' }
                    ]
                },
                {
                    id: 50,
                    text: '如果可以拥有一个机器人助手，你希望它',
                    options: [
                        { label: 'A. 做家务，打扫卫生', value: 'A' },
                        { label: 'B. 陪聊天，解闷开心', value: 'B' },
                        { label: 'C. 帮工作，提高效率', value: 'C' }
                    ]
                }
            ],
            questions: [],
            animalTypes: [
                {
                    name: '狼',
                    code: 'WOLF',
                    emoji: '🐺',
                    quote: '独行的王者，团队的领袖',
                    shortDesc: '你具有强大的领导力和独立性，既能独当一面，也能带领团队。目标明确，执行力强。',
                    description: '狼型人格是天生的领导者。在现实中，狼以其卓越的团队协作和狩猎策略闻名，它们既能独自生存，也能带领狼群征服困难。在神话中，北欧神话里的芬里尔巨狼象征着力量与野性，罗马神话中的母狼哺育了罗马的建立者。星座角度来看，你具有白羊座的勇气、狮子座的领导力和天蝎座的战略思维。你目标明确，执行力强，在团队中自然成为核心人物。你重视忠诚，对认定的人和事会全力以赴。'
                },
                {
                    name: '猫',
                    code: 'CAT',
                    emoji: '🐱',
                    quote: '优雅的独行者，神秘的观察家',
                    shortDesc: '你独立自主，有自己的节奏和空间需求。神秘优雅，善于观察，不轻易展露真实想法。',
                    description: '猫型人格是优雅的独立主义者。现实中的猫以其独立性和神秘感著称，它们按照自己的节奏生活，不被他人左右。在古埃及神话中，猫被视为神圣的动物，女神巴斯特就是猫的化身，象征着保护和优雅。日本的招财猫传说代表着好运和财富。从星座角度看，你融合了处女座的细腻、天秤座的优雅和水瓶座的独立。你需要个人空间，不喜欢被束缚，但一旦信任某人，会展现出温柔的一面。你善于观察，洞察力强，总能发现别人注意不到的细节。'
                },
                {
                    name: '狐狸',
                    code: 'FOX',
                    emoji: '🦊',
                    quote: '机智的策略家，灵活的适应者',
                    shortDesc: '你聪明机智，善于变通，能够快速适应各种环境。思维敏捷，富有创造力。',
                    description: '狐狸型人格是智慧的化身。在现实中，狐狸以其聪明和适应能力闻名，能在各种环境中生存。在东方神话中，九尾狐象征着智慧和神秘力量，日本的稻荷神使者就是狐狸。西方童话中，狐狸常常是机智的角色。从星座角度看，你具有双子座的机智、射手座的灵活和双鱼座的直觉。你思维敏捷，善于找到问题的巧妙解决方案。你适应力强，能在不同的社交场合游刃有余。你富有创造力，总能想出新颖的点子。'
                },
                {
                    name: '熊',
                    code: 'BEAR',
                    emoji: '🐻',
                    quote: '温柔的守护者，强大的保护者',
                    shortDesc: '你外表强大但内心温柔，是可靠的守护者。稳重踏实，给人安全感。',
                    description: '熊型人格是温柔的巨人。现实中的熊虽然强大，但对幼崽极其温柔，是自然界的守护者。在北美原住民文化中，熊象征着力量、勇气和保护。北欧神话中，战士们崇拜熊的力量。俄罗斯文化中，熊是国家的象征。从星座角度看，你融合了金牛座的稳重、巨蟹座的保护欲和摩羯座的可靠。你看似强硬，实则内心柔软，对在乎的人会全力保护。你踏实可靠，是朋友们的依靠。你需要安全感，喜欢稳定的生活。'
                },
                {
                    name: '鹰',
                    code: 'EAGLE',
                    emoji: '🦅',
                    quote: '高瞻远瞩的观察者，自由的追求者',
                    shortDesc: '你视野开阔，目光长远，追求自由和高度。洞察力强，不拘小节。',
                    description: '鹰型人格是天空的王者。现实中的鹰翱翔于高空，视野开阔，能看到别人看不到的远方。在美洲原住民文化中，鹰是神圣的信使，连接天地。希腊神话中，鹰是宙斯的使者，象征着权威和远见。从星座角度看，你具有射手座的自由、水瓶座的远见和白羊座的勇气。你不喜欢被束缚，追求精神和身体的自由。你目光长远，能看到事物的本质和未来趋势。你独立自主，有自己的原则和追求。'
                },
                {
                    name: '海豚',
                    code: 'DOLPHIN',
                    emoji: '🐬',
                    quote: '快乐的使者，智慧的交际家',
                    shortDesc: '你聪明友善，善于社交，总能带给周围人快乐。情商高，善解人意。',
                    description: '海豚型人格是海洋中的精灵。现实中的海豚智商极高，善于沟通，经常帮助其他生物。在希腊神话中，海豚是海神波塞冬的使者，象征着友善和救助。凯尔特神话中，海豚引导灵魂前往来世。从星座角度看，你融合了双子座的社交能力、天秤座的和谐和双鱼座的同理心。你情商高，善于理解他人的情绪。你乐观开朗，总能为周围带来欢乐。你重视友谊，是朋友圈中的开心果。'
                },
                {
                    name: '猫头鹰',
                    code: 'OWL',
                    emoji: '🦉',
                    quote: '智慧的守夜者，深邃的思考者',
                    shortDesc: '你智慧深邃，善于思考和分析。喜欢在安静中探索知识，洞察事物本质。',
                    description: '猫头鹰型人格是智慧的象征。现实中的猫头鹰在夜间活动，视觉和听觉极其敏锐，是夜的守护者。在希腊神话中，猫头鹰是智慧女神雅典娜的圣鸟，代表着智慧和学识。凯尔特文化中，猫头鹰象征着洞察力和预知能力。从星座角度看，你具有处女座的分析力、天蝎座的洞察力和摩羯座的深度。你喜欢独处思考，在安静中获得灵感。你善于分析，能看透事物的本质。你知识渊博，是朋友们的智囊。'
                },
                {
                    name: '兔子',
                    code: 'RABBIT',
                    emoji: '🐰',
                    quote: '敏感的艺术家，温柔的梦想家',
                    shortDesc: '你敏感细腻，富有艺术气质。温柔善良，但也有自己的坚持和底线。',
                    description: '兔子型人格是温柔的梦想家。现实中的兔子敏感警觉，温柔可爱，但在危险时也会奋力反抗。在中国神话中，玉兔在月宫捣药，象征着纯洁和奉献。凯尔特神话中，兔子与春天和重生相关。从星座角度看，你融合了巨蟹座的敏感、双鱼座的梦幻和金牛座的温柔。你内心细腻，容易被美好的事物打动。你富有同情心，不忍看到他人受苦。你有艺术天赋，善于表达情感。虽然看似柔弱，但在重要时刻会展现出惊人的勇气。'
                },
                {
                    name: '哈士奇',
                    code: 'HUSKY',
                    emoji: '🐕',
                    quote: '快乐的拆家专家，天真的乐天派',
                    shortDesc: '你精力充沛，天真烂漫，总是充满好奇心。虽然偶尔犯二，但真诚可爱，是气氛担当。',
                    description: '哈士奇型人格是快乐的化身。现实中的哈士奇以其搞笑的表情和拆家能力闻名，它们精力旺盛，永远保持着孩童般的天真。在网络文化中，二哈成为了快乐和沙雕的代名词。从星座角度看，你具有射手座的乐观、双子座的好奇和白羊座的冲动。你总是充满活力，对世界保持着好奇心。你不拘小节，活在当下，虽然有时会做出让人哭笑不得的事，但你的真诚和快乐总能感染周围的人。你是朋友圈的开心果，永远不会让气氛冷场。'
                },
                {
                    name: '熊猫',
                    code: 'PANDA',
                    emoji: '🐼',
                    quote: '慵懒的国宝，可爱的佛系青年',
                    shortDesc: '你随遇而安，佛系淡定，不争不抢。外表呆萌可爱，内心淡然从容。',
                    description: '熊猫型人格是佛系的代表。现实中的熊猫以其慵懒和呆萌著称，它们不慌不忙，按照自己的节奏生活。作为中国的国宝，熊猫象征着和平与友善。从星座角度看，你融合了金牛座的慢节奏、天秤座的随和和双鱼座的佛系。你不喜欢竞争，更愿意享受生活的美好。你外表看起来软萌可爱，实则内心强大淡定。你懂得取舍，知道什么对自己最重要。你的存在本身就是一种治愈，让周围的人感到放松和舒适。'
                },
                {
                    name: '树懒',
                    code: 'SLOTH',
                    emoji: '🦥',
                    quote: '慢生活的哲学家，淡定的观察者',
                    shortDesc: '你崇尚慢节奏，不急不躁，用自己的方式生活。看似懒散，实则智慧从容。',
                    description: '树懒型人格是慢生活的践行者。现实中的树懒以其极慢的速度闻名，但它们活得很长寿，证明了慢即是快的哲学。在现代快节奏社会中，树懒代表着一种反主流的生活态度。从星座角度看，你具有金牛座的稳重、摩羯座的耐心和水瓶座的独特。你不被世俗的快节奏裹挟，坚持自己的生活方式。你懂得享受当下，不为未来焦虑。你的慢不是懒，而是一种智慧的选择。你用自己的节奏活着，活得从容而自在。'
                },
                {
                    name: '孔雀',
                    code: 'PEACOCK',
                    emoji: '🦚',
                    quote: '自信的表演者，华丽的艺术家',
                    shortDesc: '你自信张扬，喜欢展现自己，追求美和关注。有艺术天赋，懂得欣赏美好事物。',
                    description: '孔雀型人格是自信的展示者。现实中的孔雀以其华丽的羽毛和开屏的姿态闻名，它们不吝于展示自己的美丽。在印度神话中，孔雀是神鸟，象征着荣耀和美丽。从星座角度看，你融合了狮子座的自信、天秤座的审美和双子座的表现欲。你喜欢成为焦点，享受被关注的感觉。你有独特的审美品味，懂得如何展现自己的优势。你追求精致的生活，对美有着天生的敏感。你的自信不是自负，而是对自己价值的认可。'
                },
                {
                    name: '浣熊',
                    code: 'RACCOON',
                    emoji: '🦝',
                    quote: '好奇的探险家，机灵的小偷',
                    shortDesc: '你好奇心强，喜欢探索新事物，机灵聪明。有时会做些调皮的事，但总能化险为夷。',
                    description: '浣熊型人格是好奇的冒险家。现实中的浣熊以其灵巧的双手和好奇心闻名，它们喜欢翻找东西，探索一切新鲜事物。在北美文化中，浣熊象征着机智和适应力。从星座角度看，你具有双子座的好奇、射手座的冒险和水瓶座的创新。你对世界充满好奇，喜欢尝试新事物。你机灵聪明，总能找到解决问题的办法。你有时会做些出格的事，但你的机智总能让你化险为夷。你是生活的探险家，永远保持着探索的热情。'
                },
                {
                    name: '披着羊皮的狼',
                    code: 'WOLF_IN_SHEEP',
                    emoji: '🐑🐺',
                    quote: '温柔的伪装者，深藏不露的智者',
                    shortDesc: '你外表温和无害，实则内心强大有主见。善于隐藏锋芒，在关键时刻展现实力。',
                    description: '披着羊皮的狼型人格是低调的强者。你懂得韬光养晦，不轻易展露自己的实力。在西方谚语中，这个形象代表着伪装和策略。从星座角度看，你融合了天蝎座的深沉、处女座的谨慎和摩羯座的战略。你外表看起来温和好说话，但内心有着清晰的目标和强大的执行力。你不喜欢张扬，更愿意默默积累实力。你善于观察和等待，在最合适的时机出手。你的温和不是软弱，而是一种智慧的选择。你是真正的智者，懂得什么时候该隐藏，什么时候该展现。'
                },
                {
                    name: '鸵鸟',
                    code: 'OSTRICH',
                    emoji: '🦤',
                    quote: '逃避现实的梦想家，选择性失明的乐观派',
                    shortDesc: '你倾向于回避问题，用自己的方式处理压力。虽然有时逃避，但也是一种自我保护。',
                    description: '鸵鸟型人格是选择性逃避者。现实中的鸵鸟遇到危险时会把头埋进沙子，这成为了逃避现实的象征。但鸵鸟其实是奔跑速度极快的鸟类，它们只是选择了不同的应对方式。从星座角度看，你具有双鱼座的逃避、巨蟹座的自我保护和天秤座的回避冲突。你不喜欢面对压力和冲突，更愿意用自己的方式消化问题。你的逃避不是懦弱，而是一种自我保护机制。你需要时间和空间来处理情绪，当你准备好了，你也能勇敢面对。你是温柔的梦想家，用自己的方式守护内心的平静。'
                }
            ],
            result: null
        };
    },
    computed: {
        progress() {
            return Object.keys(this.answers).length;
        }
    },
    mounted() {
        this.shuffleQuestions();
    },
    methods: {
        shuffleQuestions() {
            const shuffled = [...this.allQuestions].sort(() => Math.random() - 0.5);
            this.questions = shuffled.slice(0, 31).map((q, index) => ({
                ...q,
                id: index + 1
            }));
        },
        startTest() {
            this.currentPage = 'question';
        },
        selectOption(questionId, value) {
            this.answers[questionId] = value;
        },
        isSelected(questionId, value) {
            return this.answers[questionId] === value;
        },
        goBack() {
            if (confirm('🐾 确定要返回首页吗？你的探索进度将会丢失哦~')) {
                this.restart();
            }
        },
        showResult() {
            if (this.progress < 31) {
                alert('🦊 还有问题没回答完呢！完成所有题目才能发现你的动物灵魂~');
                return;
            }
            
            this.result = this.calculateResult();
            this.currentPage = 'result';
            window.scrollTo(0, 0);
        },
        calculateResult() {
            const scores = { A: 0, B: 0, C: 0 };
            
            Object.values(this.answers).forEach(answer => {
                scores[answer]++;
            });
            
            const total = scores.A + scores.B + scores.C;
            const aRatio = scores.A / total;
            const bRatio = scores.B / total;
            const cRatio = scores.C / total;
            
            // 计算答题的一致性（是否集中在某个选项）
            const maxScore = Math.max(scores.A, scores.B, scores.C);
            const minScore = Math.min(scores.A, scores.B, scores.C);
            const consistency = (maxScore - minScore) / total;
            
            // 计算每种动物的匹配分数
            const animalScores = [
                { animal: this.animalTypes[0], score: aRatio * 100 + (scores.A > 20 ? 25 : 0) + consistency * 10 }, // 狼 - 强势A型
                { animal: this.animalTypes[1], score: cRatio * 90 + (scores.C > 15 ? 20 : 0) + (consistency > 0.3 ? 15 : 0) }, // 猫 - 独立C型
                { animal: this.animalTypes[2], score: cRatio * 70 + aRatio * 30 + (scores.C > 10 && scores.A > 10 ? 25 : 0) }, // 狐狸 - 灵活混合
                { animal: this.animalTypes[3], score: (aRatio + bRatio) * 50 + (Math.abs(scores.A - scores.B) < 5 ? 30 : 0) }, // 熊 - 平衡型
                { animal: this.animalTypes[4], score: aRatio * 85 + (scores.A > 16 && scores.A < 22 ? 25 : 0) }, // 鹰 - 中等A型
                { animal: this.animalTypes[5], score: bRatio * 100 + (scores.B > 18 ? 25 : 0) + consistency * 10 }, // 海豚 - 强势B型
                { animal: this.animalTypes[6], score: bRatio * 75 + cRatio * 25 + (scores.B > 12 && scores.C > 8 ? 20 : 0) }, // 猫头鹰 - B+C混合
                { animal: this.animalTypes[7], score: bRatio * 80 + (scores.B > 12 && scores.B < 18 ? 25 : 0) }, // 兔子 - 中等B型
                { animal: this.animalTypes[8], score: aRatio * 60 + bRatio * 40 + (consistency < 0.2 ? 30 : 0) + (scores.A > 12 && scores.B > 10 ? 15 : 0) }, // 哈士奇 - 活跃混合
                { animal: this.animalTypes[9], score: bRatio * 70 + cRatio * 30 + (consistency < 0.15 ? 25 : 0) + (Math.abs(scores.B - scores.C) < 4 ? 20 : 0) }, // 熊猫 - 佛系平衡
                { animal: this.animalTypes[10], score: cRatio * 85 + (scores.C > 18 ? 25 : 0) + (scores.B < 8 ? 15 : 0) }, // 树懒 - 极致C型
                { animal: this.animalTypes[11], score: aRatio * 75 + bRatio * 25 + (scores.A > 14 && scores.A < 20 ? 25 : 0) + (consistency > 0.25 ? 15 : 0) }, // 孔雀 - 自信A型
                { animal: this.animalTypes[12], score: (aRatio + bRatio + cRatio) * 33 + (consistency < 0.1 ? 35 : 0) + (Math.abs(scores.A - scores.B) < 3 && Math.abs(scores.B - scores.C) < 3 ? 25 : 0) }, // 浣熊 - 极致平衡
                { animal: this.animalTypes[13], score: cRatio * 60 + aRatio * 40 + (scores.C > 12 && scores.A > 10 ? 30 : 0) + (scores.B < 8 ? 20 : 0) }, // 披着羊皮的狼 - C外A内
                { animal: this.animalTypes[14], score: bRatio * 65 + cRatio * 35 + (scores.B > 14 && scores.C > 10 ? 25 : 0) + (scores.A < 7 ? 20 : 0) } // 鸵鸟 - 逃避型
            ];
            
            // 找出得分最高的动物
            animalScores.sort((a, b) => b.score - a.score);
            const topAnimal = animalScores[0];
            const secondAnimal = animalScores[1];
            
            // 计算匹配度：基于最高分与第二高分的差距
            const scoreDiff = topAnimal.score - secondAnimal.score;
            let matchRate = Math.min(96, Math.max(72, Math.floor(topAnimal.score * 0.7 + scoreDiff * 0.5)));
            
            // 计算特质命中数：基于答题的一致性和得分
            const accuracy = Math.floor(9 + consistency * 6 + (topAnimal.score / 100) * 3);
            
            return {
                ...topAnimal.animal,
                matchRate: matchRate,
                accuracy: Math.min(15, Math.max(9, accuracy))
            };
        },
        restart() {
            this.answers = {};
            this.result = null;
            this.currentPage = 'start';
            this.shuffleQuestions();
            window.scrollTo(0, 0);
        }
    },
    template: `
        <div class="container">
            <!-- 开始页面 -->
            <div v-if="currentPage === 'start'" id="startPage" class="page">
                <h1 class="title">🦁 动物灵魂测试 🦊</h1>
                <p class="subtitle">探索你内心深处的动物本能</p>
                <button class="start-btn" @click="startTest">🐾 开启探索之旅</button>
                <p class="author">灵感来源：B站@蚂蚁儿串儿</p>
                <p class="credit">▸ 发现真实的自己</p>
            </div>

            <!-- 问题页面 -->
            <div v-if="currentPage === 'question'" class="page">
                <div class="progress-bar">
                    <span class="progress-text">🐾 探索进度：{{ progress }} / 31</span>
                </div>
                
                <div class="question-card" v-for="q in questions" :key="q.id">
                    <div class="question-header">
                        <span class="question-number">第 {{ q.id }} 题</span>
                        <span class="question-status">性格维度已隐藏</span>
                    </div>
                    <div class="question-text">{{ q.text }}</div>
                    <div class="options">
                        <div 
                            v-for="opt in q.options" 
                            :key="opt.value"
                            class="option"
                            :class="{ selected: isSelected(q.id, opt.value) }"
                            @click="selectOption(q.id, opt.value)">
                            <span class="option-label">{{ opt.label }}</span>
                        </div>
                    </div>
                </div>

                <div class="bottom-section">
                    <p class="quote">🌟 完成所有问题，才能揭晓你的动物灵魂</p>
                    <div class="button-group">
                        <button class="secondary-btn" @click="goBack">🏠 返回首页</button>
                        <button class="primary-btn" @click="showResult">✨ 揭晓我的动物灵魂</button>
                    </div>
                </div>
            </div>

            <!-- 结果页面 -->
            <div v-if="currentPage === 'result' && result" class="page">
                <div class="result-container">
                    <div class="result-left">
                        <h2>你的动物灵魂是：</h2>
                        <h1 class="animal-name">{{ result.name }}</h1>
                        <h1 class="animal-code">{{ result.code }}</h1>
                        <div class="animal-image">{{ result.emoji }}</div>
                        <p class="animal-quote">{{ result.quote }}</p>
                    </div>
                    
                    <div class="result-right">
                        <h3>你的灵魂类型</h3>
                        <h1>{{ result.code }}（{{ result.name }}）</h1>
                        <div class="match-info">
                            <span>🎯 灵魂契合度 {{ result.matchRate }}%</span>
                            <span>⭐ 特质命中 {{ result.accuracy }}/15 项</span>
                        </div>
                        <p class="short-desc">{{ result.shortDesc }}</p>
                    </div>
                </div>

                <div class="description-section">
                    <h3>🔮 你的动物灵魂解读</h3>
                    <p class="full-description">{{ result.description }}</p>
                </div>

                <button class="secondary-btn" @click="restart">🔄 重新探索</button>
            </div>
        </div>
    `
}).mount('#app');
