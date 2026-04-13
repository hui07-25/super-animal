import { questions } from './data/questions.js';
import { animalTypes } from './data/animals.js';

const { createApp } = Vue;

createApp({
    data() {
        return {
            currentPage: 'start',
            answers: {},
            questions: [],
            allQuestions: questions,
            animalTypes: animalTypes,
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
            
            const maxScore = Math.max(scores.A, scores.B, scores.C);
            const minScore = Math.min(scores.A, scores.B, scores.C);
            const consistency = (maxScore - minScore) / total;
            
            // 计算每种动物的匹配分数
            const animalScores = this.animalTypes.map((animal, index) => {
                let score = 0;
                
                // 根据不同的答题模式匹配不同的动物
                if (index === 0) score = aRatio * 100 + (scores.A > 20 ? 25 : 0); // 狼
                else if (index === 1) score = cRatio * 90 + (scores.C > 15 ? 20 : 0); // 猫
                else score = Math.random() * 50 + 30; // 其他动物
                
                return { animal, score };
            });
            
            // 找出得分最高的动物
            animalScores.sort((a, b) => b.score - a.score);
            const topAnimal = animalScores[0];
            
            const matchRate = Math.min(96, Math.max(75, Math.floor(80 + consistency * 20 + Math.random() * 10)));
            const accuracy = Math.floor(8 + consistency * 5 + Math.random() * 3);
            
            return {
                ...topAnimal.animal,
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
            <!-- 开始页面 -->
            <div v-if="currentPage === 'start'" id="startPage" class="page">
                <h1 class="title">🦁 动物灵魂测试 🦊</h1>
                <p class="subtitle">探索你内心深处的动物本能</p>
                <button class="start-btn" @click="startTest">🐾 开启探索之旅</button>
                <p class="author">来自：B站@阿辉泰酷辣</p>
                <p class="credit">感谢灵感提供者：玲玲</p>
                <p class="disclaimer">▸ 娱乐为主，如有雷同纯属巧合</p>
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

                <div class="mystical-section" v-if="result.mystical">
                    <h4>🌟 神秘学解读</h4>
                    <div class="mystical-content">
                        <p>{{ result.mystical.mythology }}</p>
                        <p>{{ result.mystical.astrology }}</p>
                        <p>{{ result.mystical.tarot }}</p>
                        <p>{{ result.mystical.celestial }}</p>
                    </div>
                </div>

                <div class="compatibility-section" v-if="result.compatibility">
                    <h4>💕 性格相性与运势</h4>
                    <div class="compatibility-content">
                        <p>{{ result.compatibility }}</p>
                    </div>
                </div>

                <button class="secondary-btn" @click="restart">🔄 重新探索</button>
                
                <div class="miniprogram-section">
                    <h4>🎮 更多亲子游戏</h4>
                    <p class="miniprogram-desc">扫码体验更多有趣的亲子互动游戏</p>
                    <div class="qrcode-container">
                        <img src="src/assets/one.png" alt="小程序二维码" class="qrcode-image">
                        <p class="qrcode-tip">长按识别小程序码</p>
                    </div>
                </div>
            </div>
        </div>
    `
}).mount('#app');
