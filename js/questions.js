export const questions = () => {
    // __________ Accordion for "Questions Section" __________ //
    const buttonOfAccordion = document.querySelectorAll('.item-acc__question')
    const contentOfAccordion = document.querySelectorAll('.item-acc__content')
    const itemOfAccordion = document.querySelectorAll('.item-acc')

    const accordionActiveClass = (accButton, accContent, accItem) => {
        const activeBtn = document.querySelector('.acc-btn-active')
        if (activeBtn) {
            activeBtn.classList.remove('acc-btn-active')
        }
        const activeContent = document.querySelector('.acc-content-active')
        if (activeContent) {
            activeContent.classList.remove('acc-content-active')
        }
        const activeItem = document.querySelector('.acc-item-active')
        if (activeItem) {
            activeItem.classList.remove('acc-item-active')
        }

        accButton.classList.add('acc-btn-active')
        accContent.classList.add('acc-content-active')
        accItem.classList.add('acc-item-active')
    }

    buttonOfAccordion.forEach((button, index) => {
        button.addEventListener('click', () => {
            const contentAcc = contentOfAccordion[index]
            const itemAcc = itemOfAccordion[index]
            if (
                button.classList.contains('acc-btn-active') &&
                contentAcc.classList.contains('acc-content-active') &&
                itemAcc.classList.contains('acc-item-active')
            ) {
                button.classList.toggle('acc-btn-active')
                contentAcc.classList.toggle('acc-content-active')
                itemAcc.classList.toggle('acc-item-active')
            } else {
                accordionActiveClass(button, contentAcc, itemAcc)
            }
        })
    })
}
