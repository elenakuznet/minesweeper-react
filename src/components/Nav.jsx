const Nav = () => {
    return (
        <div>
        <h1 className="nav__title">Уровень сложности</h1>
            <nav className="nav__list">
                <a className="nav__item" href="/board">Простой</a>
                <a className="nav__item" href="/board2">Средний</a>
                <a className="nav__item" href="/board3">Сложный</a>
            </nav>
        </div>
        
    )
}

export default Nav;