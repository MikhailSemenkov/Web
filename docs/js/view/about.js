export default class AboutView {
	static display(body) {
		body.innerHTML = `<div class="h-100 d-flex align-items-center justify-content-center">
            <div class="container py-4 px-4" style="background-color: white; border-radius: 0.75rem;">
                <h3 class="text-center"> About </h3>
                <br>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" fill="currentColor" class="bi bi-square-fill" viewBox="0 0 16 16" style="float:left; margin: 1rem 2rem;">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
                        <text x=50% y=50% fill="white" style="font-size: 1.5" dx=-0.25rem> Site logo </text>
                    </svg>

                    <br>
                    <p style="text-align: justify; font-size: 20px">
                        Створений додаток реалізує можливості менеджера задач. Відповідно, його назва – Task Manager. Так, дуже проста і очевидна назва. Майже така ж проста і очевидна, як інтерфейс застосунку.
                    </p>
                    <p style="text-align: justify; font-size: 20px">
                        Додаток дозволяє переглядати, створювати, редагувати, відмічати як виконані і видаляти задачі, які користувач хоче виконати до якогось певного часу (дедлайну). Окрім осносновних функцій, в додатку є сторінки з інформацією про додаток (about), з інформацією про користувача (profile), а також створення нового профілю (register), використання існуючого для входу в профіль (log in) і редагування створеного профілю (edit_profile).
                    </p>
                    <p style="text-align: justify; font-size: 20px">
                        Даний застосунок може допомогти організувати процес роботи для ефективного розподілу часу і сил. Всі ваші задачі на одному екрані з дуже мінімалістичним дизайном. Тепер буде дуже складно пропустити дедлайни. 
                </div>
            </div>
        </div>`;
	}
}