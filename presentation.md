# Презентація сайту

## Вступ

Доброго дня, сьогодні я хотіла б показати вам наш сайт, зроблений для конкурсу як сайт розкладу для Європейського Університету.
Його робили 2 людини: я Валерія Савич та Міша.  
Моєю основною задачою було розроблення дизайну та налаштування всіх стилів та адаптивності, щоб цей сайт можна було переглядати з всіх пристроїв та це було гарно. Міша в свою чергу робив "бєк єнд" складову: налаштування сервісів, паттернів та загалом зробити так щоб мої стилі вам показували справжний розклад.

## Використання сайту

### Home page

А тепер перейдімо до самого сайту. Коли користувач попадає на наш сайт, він бачить HomePage, на якій може бути інформація університата, та ось є ми з Мішею.

### Toolbar

Ліворуч, у тул барі, користувач може навігуватися нашим сайтом, зараз він на хоум пейджі, але давайте зараз підемо далі.

### Contacts

Наступна сторінка яку ми хотіли б показати - контакти. Тут зібрані контакти викладачів, адміністрації, чати студентів і мої, якщо будуть виникати запитання з сайту.

### Schedule

А тепер підемо до найважливішої частити цього сайтику - до розкладу.  
Щоб отримати розклад користувач повинен піти на Select Schedule.  

#### Choose faculty and group

Перед ним буде віконце, де можна обрати факультет на якому він навчається. Потрібно тільки почати писати ім'я факультету, а система сама буде підсказувати доступні факультети. Наразі їх тільки два: мій факультет ФІСТ, та факультет Міші ФІОТ.  
Далі в залежності який факультет обрав користувач йому потрібно буде обрати свою групу на цьому факультеті.  

#### Schedule for user

Після цього, користувач буде бачити весь існуючий розклад для його групи. Це можливо буде дуже багато інформації, тому користувач може відфільтрувати, обравши потрібні йому дні у верхній панелі. Після цього він буде бачити розклад на дні які він обрав, чи може на день, який він обрав. Кожен день має свій колір веселки на фоні, щоб легше було розуміти розклад. Також, в нашій системі розкладу мені не подобались дати та час, оскільки в розкладі записан тільки час початку заняння в Києві, а в умовах війни, студенти можуть бути де завгодно, та в них може бути інший час. На нашому сайті час початку занять відображається такий як в користувача. Тобто в Києві ви будете бачити 9:00 а в Нідерландах, Польші або Германії 8:00. Ще один плюс нашого сайту - в нас записані посилання на пари одразу на сайті! Тобто більше не потрібно шукати посилання, або чекати на старосту, щоб його отримати. Достатньо просто клацнути на кнопочку, яка одразу переносить на пару. І наш розклад не обмежений парами та фіксованими початками. В нас може бути записана кураторська година, яка починається о 10:01 наприклад. Також можна записати дату екзамену.

#### Adding new schedule

Ще одна дуже гарна частина нашого сайту - для його роботи не потрібен сервіс! Тобто потрібно тільки хостити сайт та все буде працювати. Ви можете спитати а звідки ж сайт бере данні про розклад якщо бази даних нема? Відповідь проста - з гугл таблиць! Весь розклад береться з онлайн гугл таблиць які доступні для читання. Це звісно значить, що їх можна дуже легко змінювати. Достатньо просто зайти на потрібну таблицю та вписати новий рядок, щоб він відобразився на сайті.  
Ось дивіться, я заходжу на таблицю своєї групи, 221.2 та тут дописую новий рядок. Дату поставимо сьогоднішню, занесемо всі поля та ось в нас є в розкладі посилання на цю ось здачу проектів!
Якщо потрібно створити новий факультет та групи до нього, то ось простий алгоритм:

1. Створити таблиць факультету та зробити її доступну за посиланням
2. Додати назву факультету та посилання на таблицю до таблиці з факультетами
3. Створити таблицю для групи факультету та зробити її доступну за посиланням
4. Додати таблицю группи до таблиці з кроку 1
5. Перенести перший рядок з якоїсь іншої таблиці та додавати розклад.

Все справді настільки просто

## Закінчення

На цьому в нас все, я звісно можу попросити Мішу розповісти як все це працює зсередини, але сумніваюсь що це хтось зрозуміє та що це комусь потрібно, але там справді все так само красиво як назовні, тільки там своя краса.  
Я думаю наш сайтик з одного боку доволі простий, а з іншого виконує все та навіть більше для студентів яким потрібен розклад, тому я вважаю що його можна використовувати для потреб університету.  
Сподіваюсь вам сподобалась моя маленька презентація та наш сайтик.
