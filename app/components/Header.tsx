// Импортируем компоненты Link (обычная ссылка) и NavLink (ссылка с активным состоянием) из react-router
import { Link, NavLink } from "react-router";

// Экспортируем компонент Header по умолчанию
export default function Header() {
    return (
        // Шапка сайта с розовой цветовой схемой
        <header className="bg-rose-800 text-white shadow-md">
            {/* Контейнер навигации */}
            <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Логотип/название ресторана — ссылка на главную */}
                <Link to="/" className="text-2xl font-bold hover:text-pink-200 transition-colors">
                    Quexty
                </Link>
                {/* Навигационное меню */}
                <div className="flex gap-8 text-lg">
                    {/* Ссылка на главную страницу */}
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "text-pink-300 border-b-2 border-pink-300" : "text-white hover:text-pink-200 transition-colors" }
                    >
                        Главная
                    </NavLink>
                    {/* Ссылка на страницу меню */}
                    <NavLink
                        to="/menu"
                        className={({ isActive }) =>  isActive ? "text-pink-300 border-b-2 border-pink-300" : "text-white hover:text-pink-200 transition-colors" }
                    >
                        Меню
                    </NavLink>
                    {/* Ссылка на корзину */}
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>  isActive ? "text-pink-300 border-b-2 border-pink-300": "text-white hover:text-pink-200 transition-colors"}
                    >
                        Корзина
                    </NavLink>
                    {/* Ссылка на страницу "О нас" */}
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>  isActive  ? "text-pink-300 border-b-2 border-pink-300" : "text-white hover:text-pink-200 transition-colors" }
                    >
                        О нас
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}