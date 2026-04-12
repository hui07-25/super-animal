const { createApp } = Vue;

createApp({
    data() {
        return {
            currentPage: 'start',
            answers: {},
            questions: [],
            allQuestions: [],
            animalTypes: [],
            result: null
        };
    },
    computed: {
        progress() {
            return Object.keys(this.answers).length;
        }
    },
    created() {
        this.initQuestions();
        this.initAnimalTypes();
    },
    mounted() {
        this.shuffleQuestions();
    },
    methods: {
        initQuestions() {
            this.allQuestions = [
                { id: 1, text: '深夜突然饿了，冰箱里只有一个苹果和一包方便面，你会', options: [
                    { label: 'A. 吃苹果，健康最重要', value: 'A' },
                    { label: 'B. 煮方便面，管它健不健康', value: 'B' },
                    { label: 'C. 都不吃，继续饿着睡觉', value: 'C' }
                ]},
                { id: 2, text: '如果可以拥有一种超能力，你希望是', options: [
                    { label: 'A. 读心术，知道别人在想什么', value: 'A' },
                    { label: 'B. 隐身术，想去哪就去哪', value: 'B' },
                    { label: 'C. 时间暂停，多睡会儿觉', value: 'C' }
                ]},
                { id: 3, text: '朋友约你去蹦极，你的第一反应是', options: [
                    { label: 'A. 太刺激了！马上答应', value: 'A' },
                    { label: 'B. 让我想想...可能不去', value: 'B' },
                    { label: 'C. 开玩笑吧？绝对不去', value: 'C' }
                ]},
                { id: 4, text: '你更喜欢哪种旅行方式', options: [
                    { label: 'A. 提前做好攻略，按计划行动', value: 'A' },
                    { label: 'B. 随便走走，遇到什么算什么', value: 'B' },
                    { label: 'C. 跟团游，省心省力', value: 'C' }
                ]},
                { id: 5, text: '如果中了彩票大奖，你会', options: [
                    { label: 'A. 立刻辞职，环游世界', value: 'A' },
                    { label: 'B. 存起来，该干嘛干嘛', value: 'B' },
                    { label: 'C. 分给家人朋友一起花', value: 'C' }
                ]}
            ];
            
            for(let i = 6; i <= 50; i++) {
                this.allQuestions.push({
                    id: i,
                    text: `测试题目 ${i}`,
                    options: [
                        { label: 'A. 选项A', value: 'A' },
                        { label: 'B. 选项B', value: 'B' },
                        { label: 'C. 选项C', value: 'C' }
                    ]
                });
            }
        },
        initAnimalTypes() {
            this.animalTypes = [
                {
                    name: '狼',
                    code: 'WOLF',
                    emoji: '🐺',
                    quote: '独行的王者，团队的领袖',
                    shortDesc: '你具有强大的领导力和独立性，既能独当一面，也能带领团队。目标明确，执行力强。',
                    description: '狼型人格是天生的领导者。在现实中，狼以其卓越的团队协作和狩猎策略闻名。你目标明确，执行力强，在团队中自然成为核心人物。',
                    mystical: {
                        mythology: '🏛️ 在北欧神话中，芬里尔巨狼象征着原始力量与野性；罗马神话中的母狼哺育了罗马建立者。',
                        astrology: '⭐ 你的星座特质融合了白羊座的勇气、狮子座的领导力和天蝎座的战略思维。',
                        tarot: '🔮 对应塔罗牌"力量"牌，象征内在力量的掌控和野性与理性的平衡。',
                        celestial: '🌟 守护星体是火星，代表战斗精神；幸运数字是1和8。'
                    },
                    compatibility: '🤝 与海豚型人格搭配会带来意想不到的好运！海豚的智慧与你的力量结合，能创造出完美的领导团队。'
                },
                {
                    name: '猫',
                    code: 'CAT',
                    emoji: '🐱',
                    quote: '优雅的独行者，神秘的观察家',
                    shortDesc: '你独立自主，有自己的节奏和空间需求。神秘优雅，善于观察。',
                    description: '猫型人格是优雅的独立主义者。你需要个人空间，不喜欢被束缚，但一旦信任某人，会展现出温柔的一面。',
                    mystical: {
                        mythology: '🏺 在古埃及神话中，猫是神圣动物，女神巴斯特以猫为化身，象征保护与优雅。',
                        astrology: '🌙 你融合了处女座的细腻、天秤座的优雅和水瓶座的独立。',
                        tarot: '🔮 对应"隐士"牌，代表内省、智慧和独立思考的能力。',
                        celestial: '✨ 守护星体是月亮，象征直觉与神秘；幸运数字是3和9。'
                    },
                    compatibility: '💫 与狐狸型人格最为契合！你们都聪明独立，能够互相理解对方的需要。'
                }
            ];
        },
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
            const consistency = (Math.max(scores.A, scores.B, scores.C) - Math.min(scores.A, scores.B, scores.C)) / total;
            
            const animal = aRatio > 0.5 ? this.animalTypes[0] : this.animalTypes[1];
            const matchRate = Math.min(96, Math.max(75, Math.floor(80 + consistency * 20 + Math.random() * 10)));
            const accuracy = Math.floor(8 + consistency * 5 + Math.random() * 3);
            
            return {
                ...animal,
                matchRate: matchRate,
                accuracy: Math.min(15, accuracy)
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
            <div v-if="currentPage === 'start'" id="startPage" class="page">
                <h1 class="title">🦁 动物灵魂测试 🦊</h1>
                <p class="subtitle">探索你内心深处的动物本能</p>
                <button class="start-btn" @click="startTest">🐾 开启探索之旅</button>
                <p class="author">灵感来源：B站@蚂蚁儿串儿</p>
                <p class="credit">▸ 发现真实的自己</p>
            </div>

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

                <div class="mystical-section">
                    <h4>🌟 神秘学解读</h4>
                    <div class="mystical-content">
                        <p>{{ result.mystical.mythology }}</p>
                        <p>{{ result.mystical.astrology }}</p>
                        <p>{{ result.mystical.tarot }}</p>
                        <p>{{ result.mystical.celestial }}</p>
                    </div>
                </div>

                <div class="compatibility-section">
                    <h4>💕 性格相性与运势</h4>
                    <div class="compatibility-content">
                        <p>{{ result.compatibility }}</p>
                    </div>
                </div>

                <button class="secondary-btn" @click="restart">🔄 重新探索</button>
            </div>
        </div>
    `
}).mount('#app');
