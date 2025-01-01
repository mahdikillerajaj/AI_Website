
function showContent(contentId) {
    const content = {
        intro: {
            title: "هوش مصنوعی چیست؟",
            text: "هوش مصنوعی فناوری‌ای است که به ماشین‌ها امکان می‌دهد مانند انسان‌ها فکر کنند."
        },
        types: {
            title: "انواع هوش مصنوعی",
            text: "هوش مصنوعی شامل هوش محدود (ANI)، عمومی (AGI) و فوق‌العاده (ASI) است."
        },
        tools: {
            title: "ابزارهای رایگان",
            text: "ابزارهای رایگان مانند ChatGPT، DALL-E و Hugging Face وجود دارند."
        },
        "paid-tools": {
            title: "ابزارهای پولی",
            text: "ابزارهای پولی مانند Jasper و Copilot ویژگی‌های پیشرفته‌تری دارند."
        }
    };

    const selectedContent = content[contentId];
    const contentTitle = document.querySelector("#content h2");
    const contentText = document.querySelector("#content p");

    if (selectedContent) {
        contentTitle.textContent = selectedContent.title;
        contentText.textContent = selectedContent.text;
    }
}

// ثبت‌نام
function registerUser(event) {
    event.preventDefault();
    alert("ثبت‌نام موفقیت‌آمیز بود!");
}

// ورود
function loginUser(event) {
    event.preventDefault();
    alert("ورود موفقیت‌آمیز بود!");
}
