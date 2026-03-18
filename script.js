// =========================================
// DOM読み込み後
// =========================================

document.addEventListener("DOMContentLoaded", () => {


// =========================================
// ハンバーガーメニュー
// =========================================

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if (hamburger && nav) {

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");
nav.classList.toggle("active");

/* メニュー開いた時スクロール停止 */
document.body.classList.toggle("nav-open");

});

}


// =========================================
// ナビリンククリックでメニュー閉じる
// =========================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

link.addEventListener("click", () => {

if (hamburger) hamburger.classList.remove("active");
if (nav) nav.classList.remove("active");

/* スクロール解除 */
document.body.classList.remove("nav-open");

});

});


// =========================================
// 外クリックでメニュー閉じる
// =========================================

document.addEventListener("click", (e) => {

if (!nav || !hamburger) return;

if (
nav.classList.contains("active") &&
!nav.contains(e.target) &&
!hamburger.contains(e.target)
) {

nav.classList.remove("active");
hamburger.classList.remove("active");
document.body.classList.remove("nav-open");

}

});


// =========================================
// ESCキーでメニュー閉じる
// =========================================

document.addEventListener("keydown", (e) => {

if (e.key === "Escape") {

nav.classList.remove("active");
hamburger.classList.remove("active");
document.body.classList.remove("nav-open");

}

});


// =========================================
// FAQ アコーディオン
// =========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const question = item.querySelector(".faq-q");

if (question) {

question.addEventListener("click", () => {

item.classList.toggle("active");

});

}

});


// =========================================
// ヘッダースクロール演出
// =========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if (!header) return;

if (window.scrollY > 100) {

header.classList.add("scrolled");

} else {

header.classList.remove("scrolled");

}

}, { passive: true });


// =========================================
// スムーススクロール
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e) {

const targetId = this.getAttribute("href");

if (!targetId || targetId === "#") return;

const target = document.querySelector(targetId);

if (!target) return;

e.preventDefault();

const offset = header ? header.offsetHeight : 80;

const position = target.offsetTop - offset;

window.scrollTo({
top: position,
behavior: "smooth"
});

});

});


// =========================================
// スクロールアニメーション
// =========================================

const targets = document.querySelectorAll(".fade-up");

if (targets.length > 0) {

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("active");

/* 一度表示したら監視解除 */
observer.unobserve(entry.target);

}

});

},{
threshold:0.15
});

targets.forEach(target => {

observer.observe(target);

});

}

});