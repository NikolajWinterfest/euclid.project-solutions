export const header = () => {
    // __________ Input of Search for "HEADER" __________ //
    const headerLogoblock = document.getElementById('nav-logoblock')
    const headerMenuList = document.getElementById('menu-list')
    const formSearch = document.getElementById('form-search')
    const searchOpenBtn = document.querySelector('.nav__openbtn')
    const searchActiveBlock = document.querySelector('.search__activeblock')
    const searchCloseBtn = document.querySelector('.activeblock__closebtn')

    function openSearch() {
        // Add Search classes
        if (document.documentElement.clientWidth <= 1366) {
            headerLogoblock.classList.add('is-disable')
        }
        headerMenuList.classList.add('is-disable')
        searchOpenBtn.classList.add('is-disable')
        formSearch.classList.add('is-active')
        searchActiveBlock.classList.add('is-active')

        // Delete Burger classes
        burgerLine.classList.remove('is-active')
        burgerOverlay.classList.remove('is-active')
        headerMenuList.classList.remove('is-active')
    }

    function closeSearch() {
        // Delete Search classes
        headerLogoblock.classList.remove('is-disable')
        formSearch.classList.remove('is-active')
        searchActiveBlock.classList.remove('is-active')
        searchOpenBtn.classList.remove('is-disable')
        headerMenuList.classList.remove('is-disable')
    }

    searchOpenBtn.addEventListener('click', (e) => {
        e.preventDefault()
        if (!searchOpenBtn.classList.contains('is-disable')) {
            openSearch()
        }
        if (document.documentElement.clientWidth <= 768) {
            burgerMenu.classList.add('is-disable')
        } else {
            burgerMenu.classList.remove('is-disable')
        }
    })

    searchCloseBtn.addEventListener('click', (e) => {
        e.preventDefault()
        closeSearch()
        if (document.documentElement.clientWidth) {
            burgerMenu.classList.remove('is-disable')
        }
    })
    // __________ Burger menu for "HEADER" __________ //
    const burgerMenu = document.getElementById('burger')
    const burgerLine = document.querySelector('.burger__btn-bar')
    const burgerOverlay = document.getElementById('menu-overlay')

    function openBurger() {
        burgerLine.classList.toggle('is-active')
        if (!headerMenuList.classList.contains('is-active')) {
            headerLogoblock.classList.remove('is-disable')
            searchOpenBtn.classList.remove('is-disable')
            formSearch.classList.remove('is-active')
            searchActiveBlock.classList.remove('is-active')
            searchActiveBlock.classList.remove('is-active')
            headerMenuList.classList.remove('is-disable')
            headerMenuList.classList.add('is-active')
            burgerOverlay.classList.add('is-active')
        } else {
            headerMenuList.classList.remove('is-disable')
            headerMenuList.classList.remove('is-active')
            burgerOverlay.classList.remove('is-active')
        }
    }

    burgerMenu.addEventListener('click', openBurger)

    // Resize for Burger
    window.addEventListener('resize', () => {
        if (formSearch.classList.contains('is-active') && document.documentElement.clientWidth <= 768) {
            burgerMenu.classList.add('is-disable')
        } else {
            burgerMenu.classList.remove('is-disable')
        }
    })

    // Resize for Search
    window.addEventListener('resize', () => {
        if (formSearch.classList.contains('is-active') && document.documentElement.clientWidth <= 1366) {
            headerLogoblock.classList.add('is-disable')
        } else {
            headerLogoblock.classList.remove('is-disable')
        }
    })

    // __________ Smooth Scroll for "Items of Menu List" (Header and Footer) __________ //
    function targetLinkFn(elem, burger = false) {
        elem.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault()
                const targetId = link.getAttribute('href')
                if (targetId && targetId.length > 1) {
                    document.querySelector(targetId).scrollIntoView({
                        behavior: 'smooth',
                    })
                    if (burger) {
                        openBurger()
                    }
                }
            })
        })
    }
    const targetLinksHeader = document.querySelectorAll('.menu__item-link')
    const targetLinksFooter = document.querySelectorAll('.footerinfo__item-link')
    targetLinkFn(targetLinksHeader, true)
    targetLinkFn(targetLinksFooter)

    // __________ Smooth TopScroll for "Logo (Header and Footer)" __________ //
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    document.getElementById('nav-logoblock').addEventListener('click', (e) => {
        e.preventDefault()
        scrollToTop()
    })
    document.querySelector('.footerinfo__logoblock').addEventListener('click', (e) => {
        e.preventDefault()
        scrollToTop()
    })
    // Block Links for Social Networks
    document.querySelectorAll('.socialnetworks a').forEach((link) => link.addEventListener('click', (e) => e.preventDefault()))
}
